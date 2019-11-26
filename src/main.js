import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/app.less';
import api from './core/net/api';
import VueCookies from 'vue-cookies';
import echarts from 'echarts';
import common from './core/common';
//导入store
import stores from './store/store'
Vue.use(ElementUI)
Vue.config.productionTip = false;
// 全局变量定义
Vue.prototype.$cookies = VueCookies;

Vue.prototype.$get = api.get;
Vue.prototype.$post = api.post;
Vue.prototype.$echarts = echarts 
Vue.prototype.$commonJS = common 
// 授权
router.beforeEach((to, from, next) => {
    // 配置标题
    document.title = to.meta.title ? to.meta.title : '中国电信河南公司投资收益评估系统';
    next();
});


new Vue({
    router,
     store: stores,//引入store(Vuex框架进行传值)
    render: h => h(App),
}).$mount('#app');