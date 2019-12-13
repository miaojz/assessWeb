import axios from "axios";
import VueCookies from 'vue-cookies';
import { showLoading, hideLoading } from './loading';
//var base='http://192.168.0.6:8182'
// let baseUrl = "";   //这里是一个默认的url，可以没有
// switch (process.env.NODE_ENV) {
//     case 'test':
//         baseUrl = ""  //测试服务器的请求url
//         break
//     case 'production':
//         baseUrl = "http://192.168.0.6:8182/"   //生产环境url
//         break
//     default:
//         baseUrl = '/api'   //'/api'为vue.config.js配置
// }
// console.log(baseUrl)
axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
        // 'Authorization': 'JWT ' + localStorage.token
    },
});


/* 请求拦截器（请求之前的操作） */
axios.interceptors.request.use((req) => {
  //showLoading();
  return req;
}, err => Promise.reject(err));

console.log(process.env)
// 在实例已创建后修改默认值
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then((response) => {
                // 未登录拦截
                resolve(response.data);
                hideLoading();
            }, (err) => {
                reject(err);
                hideLoading();
            })
            .catch((error) => {
                reject(error);
                hideLoading();
            });
    });
};

const get = (url) => {
    //axios.defaults.withCredentials = true;//跨域带上cookies
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                resolve(response.data);
                hideLoading();
            }, (err) => {
                reject(err);
                hideLoading();
            })
            .catch((error) => {
                reject(error);
                hideLoading();
            });
    });
};

export default {
    post,
    get,
};