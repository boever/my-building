import {IdKey, IListData, ISelectOption} from "@/types";
import {Notify} from 'vant'

export const DefaultOption: ISelectOption = {value: '', label: '全部'}

export const getDecimal = (num: number, fixedNum = 2) => {
    const _num = num.toFixed(fixedNum)
    return _num.split('.')[1]
}

export const getInteger = (num: number) => Math.floor(num)

export const getFixed = (num = 0, fixedNum = 2) => num.toFixed(fixedNum)

export const getAnimationFrame = () => (window && (window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame)) || function (callback: any) {
    setTimeout(callback, 1000 / 60)
}

export const anchorBlank = (href: string, download?: string) => {
    const a = document.createElement('a')
    //a.target= '_blank'
    a.href = href
    download && (a.download = download)

    document.body.appendChild(a)
    a.click()
    a.remove()
}

export const hackNumber = (num: number) => Math.round(num * 100) / 100

export const getShopName = (): string => {
    let shopName = window ? window.location.href.split('/').find(str => /^sn-[\w\d]+$/i.test(str)) : ''
    if (shopName) {
        shopName = shopName.replace(/^sn-/i, '')
    } else {
        shopName = window ? window.location.host.split('.')[0] : ''
    }
    return shopName
}

export const isThisDomain = (url: string): boolean => {
    const domain = window ? window.location.host : ''
    if (/^http/i.test(url)) {
        return url.indexOf(domain) >= 0
    }
    return true
}

export const isUndefined = (data: any): data is undefined => typeof data === 'undefined'
export const isObject = <T = { [name: string]: any }>(data: any): data is T => typeof data === 'object' && typeof data !== "bigint" && data !== null
export const isEmpty = (data: any): boolean => isUndefined(data) || data === null || (isStr(data) ? data.trim() === '' : false)

export const isStr = (data: any): data is string => typeof data === 'string'

export const isNumber = (data: any): data is number => typeof data === 'number'
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (data: any): data is Function => typeof data === 'function'


const filterClassName = (data: any): string => {
    if (isEmpty(data)) {
        return ''
    } else if (isObject(data)) {
        return Object.keys(data).filter(key => !!data[key]).map(key => {
            if (isEmpty(data[key]) || typeof data[key] === "boolean" || typeof data[key] === "number") {
                return data[key] ? key : ''
            }
            return filterClassName(data[key])
        }).filter(v => !!v).join(' ')
    } else if (isFunction(data)) {
        return filterClassName(data())
    } else {
        return `${data}`
    }
}

export const generateClassName = (...attr: Array<any>): string | undefined => {
    const classNameList: string[] = attr.reduce((list: string[], item) => {
        list.push(filterClassName(item))
        return list
    }, []).filter((v: string) => !!v)
    return classNameList && classNameList.length ? classNameList.join(' ') : undefined
}

/*
export const trackPageview = (pageURL:string = window.location.href) => {
    window._hmt && window._hmt.push(['_trackPageview', pageURL]);
}*/

export function windowWidth() {
    return window ? (window.screen.width > 0) ? (window.innerWidth >= window.screen.width || window.innerWidth === 0) ? window.screen.width :
        window.innerWidth : window.innerWidth : 0
}

export function windowHeight() {
    return window ? (window.screen.height > 0) ? (window.innerHeight >= window.screen.height || window.innerHeight === 0) ?
        window.screen.height : window.innerHeight : window.innerHeight : 0
}

export const joinStr = (list: Array<string | number>) => list.join('★');

export const splitStr = (str: string) => str.split('★');

export const apiResponseCheck = <T = any>(data: { code: number, data: T, message: string }, checkNull = false, showErr = true): Promise<T> =>
    new Promise((resolve, reject) => {
        //console.log(data, data.code === 10000)
        if (data.code === 0) {
            if (checkNull && data.data === null) {
                reject()
            } else {
                resolve(data.data)
            }
            return true
        }
        showErr && Notify({type: "warning", message: data.message})
        reject()
        return false
    })

export const getEmptyListData = (): IListData => ({
    pageNum: 0,
    totalPage: 0,
    pageSize: 10,
    total: 0,
    list: []
})

export const filterObjNull = <T = any>(data: T, instead?: any): T => {
    const obj: any = {}
    Object.keys(data).forEach((k) => {
        if (isEmpty(data[k as keyof T])) {
            isUndefined(instead) || (obj[k] = instead)
        } else {
            obj[k] = data[k as keyof T]
        }
    })
    return obj
}


export const generateLabelCol = (index = 0) => ({
    xs: 6 + index,
    sm: 6 + index,
    md: 4 + index,
    lg: 3 + index,
    xl: 2 + index,
    xxl: 2 + index
})

/*跨分页选取用*/
export const generateSupplementaryKeys = (allSelected: IdKey[], listKey: IdKey[], select: IdKey[] = []) => {
    return [...allSelected.filter(k => !listKey.some(v => v === k)), ...select]
}
