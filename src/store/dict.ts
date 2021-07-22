import {inject, ref} from "vue";
import {requestGet} from '@/utils/request'
const dictStore = () => {
    //这里可以使用vue3 的响应式
    const dicts = ref<any>([])
    const getDicts = () => {
        dicts.value = requestGet("dict/getDictsByCode","message");
    }
    return {
        getDicts,
        dicts
    }
}

//需要给provide一个唯一的名称以免后面调用的时候冲突。
const dict = Symbol('dict') //这里使用Symbol 新的一个数据类型，保证变量名唯一
const useDict = () => inject(dict) //这里使用inject调用 provide注入的userStore的方法。
//把方法都export出去
export {
    dict,
    dictStore
}
export default useDict

