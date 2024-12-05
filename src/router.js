import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./view/AppHome.vue";
import AppMenu from "./view/AppMenu.vue";
import AppAbout from "./view/AppAbout.vue";



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/menu',
            name: 'menu',
            component: AppMenu,
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AppAbout,
        },
    ]
})

export { router };