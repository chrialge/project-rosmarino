import { createRouter, createWebHistory } from "vue-router";




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "group-foo" */  "./view/AppHome.vue"),
        },
        {
            path: '/reservation-confirm',
            name: 'confirm',
            component: () => import(/* webpackChunkName: "confirm" */ "./view/ReservationConfirm.vue"),
        },
        {
            path: '/menu',
            name: 'menu',
            component: () => import(/* webpackChunkName: "menu" */ "./view/AppMenu.vue"),
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: () => import(/* webpackChunkName: "about-us" */ "./view/AppAbout.vue"),
        },
        {
            path: '/reservation',
            name: 'reservation',
            component: () => import(/* webpackChunkName: "reservation" */"./view/AppReservation.vue"),

        },
    ]
})

export { router };