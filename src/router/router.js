import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// title:标题
// isKeepAlive: 记住路由返回上一页不会刷新数据
// requireAuth: 路由是否需要登录权限
//解决路由跳转两次push的path相同
// const originalPush=Router.prototype.push;
// Router.prototype.push=function push(location){
//     return originalPush.call(this.location).catch(err=>err)
// }

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'first',
        component: () => import('../views/index.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },{
        path: '/index/:id/:type',
        name: 'index',
        component: () => import('../views/index.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },{
        path: '/shifen/:id',
        name: 'shifen',
        component: () => import('../views/shifen.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },
    {
        path: '/xm/:id',
        name: 'school',
        component: () => import('../views/school.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('../views/empty.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },
    {
        path: '/index1',
        name: 'index1',
        component: () => import('../views/home.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },
    {
        path: '/xm/:id/school/:xm',
        name: 'school',
        component: () => import('../views/school.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },
    {
        path: '/xm/:id/sf/:xm',
        name: 'shifenXM',
        component: () => import('../views/shifenXM.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },
    {
        path: '/sf/:id',
        name: 'shifenXM',
        component: () => import('../views/shifenXM.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    }
], 
});
// , {
//     path: '/page1',
//     name: 'page1',
//     component: () => import('../views/page1.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/page2',
//     name: 'page2',
//     component: () => import('../views/page2.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/page3',
//     name: 'page3',
//     component: () => import('../views/page3.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/page4',
//     name: 'page4',
//     component: () => import('../views/page4.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/empty',
//     name: 'empty',
//     component: () => import('../views/empty.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/product',
//     name: 'product',
//     component: () => import('../views/product.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/detail',
//     name: 'detail',
//     component: () => import('../views/product_detail.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/login.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '/sign',
//     name: 'sign',
//     component: () => import('../views/signup.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }, {
//     path: '**',
//     name: '404',
//     component: () => import('../views/home.vue'),
//     meta: {
//         title: 'support',
//         isKeepAlive: false,
//     },
// }