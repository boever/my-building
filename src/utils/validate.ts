import {isEmpty} from "./index";

export const AccountRegCheck = (value: string) => {
    if (isEmpty(value)) {
        return Promise.reject(new Error('请填写账号'))
    } else if (value.length < 4 || value.length > 20) {
        return Promise.reject(new Error('账号为4-20位'))
    }
    /*else if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
        //账号格式错误
        return Promise.reject(new Error('必须包含英文和数字，不区分大小写'))
    }*/
    return Promise.resolve()
}


export const EmailRegCheck = (value: string) => {
    if (!isEmpty(value) && !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
        return Promise.reject(new Error('邮箱格式错误'))
    }
    return Promise.resolve()
}

export const PhoneRegCheck = (value: string) => {
    if (!isEmpty(value) && !/^1[0-9]{10}$/.test(value)) {
        return Promise.reject(new Error('手机号格式错误'))
    }
    return Promise.resolve()
}
