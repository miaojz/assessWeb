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
    routes: [
        {
        path: '/',
        redirect: '/index',
        name:''
    },
    {
        path: '/index',
        component: () => import('../views/home.vue'),
        redirect: '/index',
        name:'首页',
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
        children: [
            {
                path: '',
                component: () => import('../views/other.vue'),
                name:''
            },
            {
                path: '无线网概览',
                name: '无线网概览',
                component: () => import('../views/index.vue'),
            },
            {
                path: 'shifen',
                name: '室分',
                component: () => import('../views/shifen.vue'),
            },
            {
                path: '宏站',
                name: '宏站',
                component: () => import('../views/other.vue'),
            },
            {
                path: '政企概览',
                name: '政企概览',
                component: () => import('../views/other.vue'),
            },
            {
                path: '专线',
                name: '专线',
                component: () => import('../views/other.vue'),
            },
            {
                path: 'governmentSchool',
                name: '校园',
                component: () => import('../views/governmentSchool.vue'),
            },
            {
                path: 'DICT',
                name: 'DICT',
                component: () => import('../views/other.vue'),
            },
            {
                path: '接入网概览',
                name: '接入网概览',
                component: () => import('../views/other.vue'),
            },
            {
                path: '家庭宽带',
                name: '家庭宽带',
                component: () => import('../views/other.vue'),
            },
            {
                path: 'school/:id',
                name: '',
                component: () => import('../views/school.vue'),
            },
            {
                path: 'jm/:id',
                name: '',
                component: () => import('../views/resident.vue'),
            },
            {
                path: 'sf/:id',
                name: '',
                component: () => import('../views/shifenXM.vue'),
            },
        ],
    },
    {
        path: '/shifen/:id',
        name: 'shifen',
        component: () => import('../views/shifen.vue'),
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
        path: '/school',
        name: '校园项目',
        component: () => import('../views/school.vue'),
        meta: {
            title: '中国电信河南公司投资收益评估系统',
            isKeepAlive: false,
        },
    },
    // {
    //     path: '/xm/:id/sf/:xm',
    //     name: 'shifenxm',
    //     component: () => import('../views/shifenXM.vue'),
    //     meta: {
    //         title: '中国电信河南公司投资收益评估系统',
    //         isKeepAlive: false,
    //     },
    // },
    // {
    //     path: '/sf/:id',
    //     name: 'shifenXM',
    //     component: () => import('../views/shifenXM.vue'),
    //     meta: {
    //         title: '中国电信河南公司投资收益评估系统',
    //         isKeepAlive: false,
    //     },
    // },{
    //     path: '/jm/:id',
    //     name: 'jm',
    //     component: () => import('../views/resident.vue'),
    //     meta: {
    //         title: '中国电信河南公司投资收益评估系统',
    //         isKeepAlive: false,
    //     },
    // },
    // {
    //     path: '/xm/:id/jm/:xm',
    //     name: 'shifenxm',
    //     component: () => import('../views/resident.vue'),
    //     meta: {
    //         title: '中国电信河南公司投资收益评估系统',
    //         isKeepAlive: false,
    //     },
    // },
        // {
    //     path: '/xm/:id/school/:xm',
    //     name: 'schoolxm',
    //     component: () => import('../views/school.vue'),
    //     meta: {
    //         title: '中国电信河南公司投资收益评估系统',
    //         isKeepAlive: false,
    //     },
    // },
    {path: '*',redirect: '/'}
], 
});
