export const setToken = (token: string) => {
    localStorage.setItem('token', JSON.stringify({token, timestamp: new Date().getTime()}))
}

export const getToken = () => {
    const tokenStr = localStorage.getItem("token")
    let res = ''
    if (tokenStr) {
        try {
            res = JSON.parse(tokenStr).token
            // eslint-disable-next-line no-empty
        } catch {

        }
    }
    return res;
}

export const removeToken = () => {
    localStorage.removeItem("menu")
    localStorage.removeItem("token")
}
