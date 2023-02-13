import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../pages/HomeView.vue'
// import CarIndex from '../pages/car-index.vue'
import contactIndex from '../pages/contact-index.vue'
import ContactDetails from '../pages/contact-details.vue'
import ContactEdit from '../pages/contact-edit.vue'

const routerOptions = {
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: HomeView,
        },
        {
            path: '/contacts',
            component: contactIndex,
        },
        {
            path: '/contact/:_id',
            component: ContactDetails,
        },
        {
            path: '/contact/edit/:_id?',
            component: ContactEdit,
        },
        {
            path: '/stats',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../pages/stats.vue'),
        },
    ],
}
const router = createRouter(routerOptions)

export default router
