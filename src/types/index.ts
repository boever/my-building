export type IdKey = BigInt

export type IReactKey = string | number | IdKey

export const getEmptyIdKey = (v: string | number = 0): IdKey => BigInt(v)

/*分页数据*/
export interface IListData<T = any> {
    pageNum: number,
    pageSize: number,
    totalPage: number,

    total: number,

    list: T[]
}

export interface IListSate<T = any> {
    listData: IListData<T>,
    loading: boolean,
    selectedRowKeys?: any[]
}


export interface ISelectOption {
    value: any,
    label: string
}


export enum EPlaceHolder {
    Input = '请输入',
    Select = '请选择'
}


export enum ELogisticUnit {
    kg = 'Kg',
    m3 = 'm³',
    count = '件',
}

/*image/gif, image/png, image/jpeg, image/bmp, image/webp, image/x-icon, image/vnd.microsoft.icon*/
export enum EImageMIME {
    gif = 'image/gif',
    png = 'image/png',
    xpng = 'image/x-png',
    jpeg = 'image/jpeg',
    pjpeg = 'image/pjpeg',
    bmp = 'image/bmp',
    webp = 'image/webp',
    xIcon = 'image/x-icon',
    msIcon = 'image/vnd.microsoft.icon',
}

/*
* .objectFitCover {
    object-fit: cover;
}

.objectFitFill {
    object-fit: fill;
}

.objectFitContain {
    object-fit: contain;
}
* */
export enum EImageFitClass {
    cover = 'objectFitCover',
    fill = 'objectFitFill',
    contain = 'objectFitContain'
}


export enum EStatusName {
    disable = '停用',
    enable = '激活'
}
