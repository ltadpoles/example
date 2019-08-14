import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', component: () => import(/* webpackChunkName: 'index' */'@/views/index.vue')},
        {path: '/person', component: () => import(/* webpackChunkName: 'person' */'@/views/person.vue')},
        {path: '/member', component: () => import(/* webpackChunkName: 'member' */'@/views/member.vue')},
        {path: '/cart', component: () => import(/* webpackChunkName: 'cart' */'@/views/cart.vue')}
    ]
})