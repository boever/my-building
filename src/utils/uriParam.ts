import smartJson from './smartJson'

export const uriSet = (name: string, vaule: string | number, url: string = (window ? window.location.href : '')) => {
    let cVal = uriGet(name, url), arr: any = uriFormat(url, 1);

    if (cVal === undefined) {
        arr[1] += (arr[1] ? '&' : '') + name + '=' + vaule;
    } else {
        let reg = new RegExp('&' + name + '=' + cVal + '&', 'i');
        arr[1] = ('&' + arr[1] + '&').replace(reg, '&' + name + '=' + vaule + '&');
        arr[1] = arr[1].substr(1, arr[1].length - 2);
    }
    return arr[0] + '?' + arr[1] + (arr[2] ? '#' : '') + arr[2];
}
export const uriGet = (name: string, url: string = (window ? window.location.href : '')): any => {
    let _url: any = uriFormat(url || '');
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = _url.match(reg);
    if (r != null) {
        return isNaN(r[2]) ? smartJson(decodeURIComponent(r[2])) : r[2].length >= 19 ? BigInt(r[2]) : r[2].indexOf('.') >= 0 ? parseFloat(r[2]) : Math.floor(r[2]);
    }
    return undefined;
}
export const uriGetAll = (url: string) => {
    let _url: any = uriFormat(url);
    let arr = _url.split('&'), obj: { [key: string]: unknown } = {};
    for (let i in arr) {
        let _arr = arr[i].split('=');
        if (_arr[0]) {
            obj[_arr[0]] = isNaN(_arr[1]) ? decodeURIComponent(_arr[1]) : _arr[1].indexOf('.') >= 0 ? parseFloat(_arr[1]) : Math.floor(_arr[1]);
        }
    }
    return obj;
}
export const uriFormat = (url: string, getAll?: boolean | number) => {
    let _url;
    url = url || (window ? window.location.href : '');
    _url = url.indexOf('?') >= 0 ? url.substr(url.indexOf('?') + 1) : '';
    _url = _url ? (_url.indexOf('#') >= 0 ? _url.substr(0, _url.indexOf('#')) : _url) : _url;
    return getAll ? [url.split('?').shift(), _url, url.indexOf('#') >= 0 ? url.substr(url.indexOf('#') + 1) : ''] : _url;
}
