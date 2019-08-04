import Vue from 'vue'
import App from './APP.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import './style/base.css'
import './font/iconfont.css'

Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount(app)