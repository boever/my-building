import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Client/Home.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Client/Login.vue')
    },
    {
        path: '/comming',
        name: 'Comming',
        component: () => import('../views/Client/comming.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
