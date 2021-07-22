import {dict, dictStore} from "./dict"
import {App} from "vue";
const store = {
    install: (app: App) => {
        app.provide(dict, dictStore());
    }
};
export default store;