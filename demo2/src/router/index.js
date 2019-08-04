import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: () => import('@/views/index.vue')},
        {path: '/person', component: () => import('@/views/person.vue')},
        {path: '/member', component: () => import('@/views/member.vue')},
        {path: '/cart', component: () => import('@/views/cart.vue')}
    ]
})