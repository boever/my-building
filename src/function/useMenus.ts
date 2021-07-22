import { ref } from 'vue'

interface Menu {
    icon : string,
    text: string,
    url: string
}

export default function (){
    const myMenus : Array<Menu> = [
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"巡检服务","url":"Comming"},
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"物业服务","url":"Comming"},
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"园区咨询","url":"Comming"},
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"业主天地","url":"Comming"},
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"场所预定","url":"Comming"},
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"招商租赁","url":"Comming"},
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"咨询服务","url":"Comming"},
        {"icon":"https://img.yzcdn.cn/vant/cat.jpeg","text":"意见反馈","url":"Comming"}
    ]
    const menus = ref<Array<Menu>>(myMenus);
    return {menus}
}