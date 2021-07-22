import Axios from 'axios'
import {getToken, setToken} from "./token";
import {Notify} from "vant";
// import {clearLoading} from "@/components/Loading";
import {isEmpty, isObject} from "./index";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import JSONBig from 'json-bigint'
import {IdKey} from "@/types";
// const JSONBig = require('json-bigint')
//const API_TYPE: 'DEV' | "MOCK" = 'DEV'

/*
const formArrayCheck = (form: FormData | URLSearchParams, key: string, list: any[]) => {
    list.forEach((item, index) => {
        if (Array.isArray(item)) {
            formArrayCheck(form, `${key}[${index}]`, item)
        } else {
            form.append(`${key}[${index}]`, item)
        }
    })
}
*/

const generateFrom = (options: any, useForm = false) => {
    return isObject(options) ? Object.keys(options).reduce((form: FormData, key) => {
        if (!isEmpty(options[key])) {
            form.append(key, options[key])
        }
        return form
    }, useForm ? new FormData() : new URLSearchParams()) : options
}

type IContentType =
    'text/html'
    | 'text/plain'
    | 'text/xml'
    | 'image/gif'
    | 'image/jpeg'
    | 'image/png'
    | 'application/xhtml+xml'
    | 'application/xml'
    | 'application/atom+xml'
    | 'application/json'
    | 'application/pdf'
    | 'application/msword'
    | 'application/octet-stream' | 'application/x-www-form-urlencoded' | 'multipart/form-data'

export interface IAjaxPage {
    pageNum: number;
    pageSize: number;
}

export interface IAjaxDownUrl {
    downurl: string
}

export interface IAjaxResponse<T> {
    code: number,
    data: T,
    message: string
}

//export const apiUrl = 'http://cptbapi.test.chepeilong.cn/01/';
//'http://192.168.2.137:8080/01/'


// export const apiUrl = ID_DEV ? 'http://192.168.2.137:8081/01/':
//   window.location.href.indexOf('store.chepeilong.com') >= 0 ||
//   window.location.href.indexOf('store.chepeitong.com') >= 0?
//     'http://storeapi.chepeilong.com/01/':
//     'http://cptbapi2.test.chepeilong.cn/01/'


/*'http://192.168.2.137:8080/01/'*/

export const ApiHost = process.env.NODE_ENV === 'development' ? '//127.0.0.1:8080/community' : process.env.BUILD_TARGET === 'production' ? 'http://47.116.74.220:8088' : 'http://47.116.71.211:8088'

export const ImageHost = process.env.BUILD_TARGET === 'production' ? 'http://47.116.74.220:8088' : 'http://47.116.71.211:8088'

export const apiUrl = `${ApiHost}`

export const UploadUrl = `${apiUrl}enterprise/uploadAttach`

//
// export const apiUrl = ID_DEV ? 'http://192.168.2.137:8080/01/':
//   window.location.href.indexOf('store.chepeilong.com') >= 0 ||
//   window.location.href.indexOf('store.chepeitong.com') >= 0?
//     'http://storeapi.chepeilong.com/01/':
//     'http://cptbapi.test.chepeilong.cn/01/'

/*function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}*/

export const generateHead = (): { [key: string]: unknown } => {
    return {}
}


export const generateHeaderData = (options: any) => {
    const head = generateHead();
    const time = Date.now();
    head.timestamp = time

    return head
}

export const generateGetUrl = (url: string, params?: { [key: string]: unknown }) => {
    const head = generateHead();

    let urlParams: string[] = [`header=${JSONBig.stringify(head)}`]
    if (typeof params === 'object') {
        urlParams = [...urlParams, ...Object.keys(params).map(key => {
            return `${key}=${params[key]}`
        })]
    }
    return apiUrl + url + '?' + urlParams.join('&')
}
export const getFileStream = (url: string) => {
    // request('common/getstreamforpath.ashx',{downurl: url}).then(data=>{
    //     return data
    // })
    return generateGetUrl('common/getstreamforpath.ashx', {downurl: url})
}


export function requestPost<T>(url: string, options?: any): Promise<IAjaxResponse<T>> {
    return request<T>(url, options, 'post')
}

export function requestGet<T>(url: string, options?: any): Promise<IAjaxResponse<T>> {
    return request<T>(url, options, 'get')
}

export function requestDelete<T>(url: string, options?: any): Promise<IAjaxResponse<T>> {
    return request<T>(url, options, 'delete')
}

export function requestPath<T>(url: string, path: string | number | IdKey, options?: any): Promise<IAjaxResponse<T>> {


    return request<T>(`${url}/${path}`, generateFrom(options, true), 'post', "normal", 'application/x-www-form-urlencoded')
}

export function requestFomUrlencoded<T>(url: string, options?: any): Promise<IAjaxResponse<T>> {
    return request<T>(url, generateFrom(options), 'post', "normal", 'application/x-www-form-urlencoded')
}

type IFunc<T> = (...attr: any[]) => Promise<IAjaxResponse<T>>

export const requestThrottle = <T = any>(f: IFunc<T>, times = 50000): IFunc<T> => {
    let _time = 0
    let data: any = null

    return (...attr) => new Promise<IAjaxResponse<T>>((resolve, reject) => {
        if (!data || new Date().getTime() - _time > times) {
            f(...attr).then(res => {
                _time = new Date().getTime()
                data = res
                resolve(data)
            }).catch(reject)
        } else {
            resolve(data)
        }
    })
}

export default function request<T>(url: string, options: any, method: 'post' | 'get' | 'delete' = 'post', type: 'normal' | 'download' = "normal", ContentType: IContentType = 'application/json'): Promise<IAjaxResponse<T>> {
    const token = getToken()
    const headers: { 'Content-Type': IContentType, token?: string } = {'Content-Type': ContentType}
    let paramData: any


    if (!isEmpty(options) && !isObject(options)) {
        url = `${url}/${options}`
        options = null
        ContentType = 'application/x-www-form-urlencoded'
    }

    if (!isEmpty(options)) {
        paramData = options
        /*console.log(ContentType, ContentType !== 'application/x-www-form-urlencoded')
        if (isFormData(options) && ContentType !== 'application/x-www-form-urlencoded') {
            ContentType = 'multipart/form-data'
        }*/
    }

    if (token) {
        headers.token = getToken()
    }

    headers['Content-Type'] = ContentType

    const requestUrl: string = apiUrl + url;
    console.log(requestUrl)

    return new Promise((resolve1, reject1) => Axios({
        url: requestUrl,
        [method === "get" ? 'params' : 'data']: paramData,
        headers,
        method,
        responseType: type === "download" ? "blob" : 'text',
        transformRequest: (data) => {
            if (ContentType === 'application/json') {
                try {
                    return JSONBig({useNativeBigInt: true}).stringify(data)
                } catch (err) {
                    return data
                }
            }
            return data
        },
        transformResponse: (data) => {
            try {
                // 如果转换成功则返回转换的数据结果
                return JSONBig({useNativeBigInt: true}).parse(data)
            } catch (err) {
                //console.error(err)
                //console.error(data, 'err')
                // 如果转换失败，则包装为统一数据格式并返回
                return data
            }
        }
    }).then(function (response) {
        //console.log(response)
        if (!response.data && response.request && response.request.responseText) {
            response.data = JSONBig({useNativeBigInt: true}).parse(response.request.responseText)
        }

        if (response.data.code === 1001) {
            // clearLoading()
            Notify({type: "warning", message: response.data.data || response.data.message})
            setToken('')
            window.location.href = '#/login'
            reject1 && reject1(response.data.message)
            //throw new Error(response.data.message)
        } else {
            resolve1 && resolve1(response.data)
        }


        return response.data;
    }).catch(function (error) {
        reject1 && reject1(error)
        return error
    }))
}

/*
const isFormData = (v: any) => {
    return Object.prototype.toString.call(v) === '[object FormData]';
}
*/
