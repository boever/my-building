import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from "@/store/index";

const app = createApp(App)
app.use(router)
app.use(store).mount('#app')

const win: any = window //
if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
        win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    }
}
