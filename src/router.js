import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./view/AppHome.vue";
import AppMenu from "./view/AppMenu.vue";
import AppAbout from "./view/AppAbout.vue";
import AppReservation from "./view/AppReservation.vue";
import ReservationConfirm from "./view/ReservationConfirm.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome,
        },
        {
            path: '/reservation-confirm',
            name: 'confirm',
            component: ReservationConfirm, 
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
        {
            path: '/reservation',
            name: 'reservation',
            component: AppReservation,
        },
    ]
})

export { router };