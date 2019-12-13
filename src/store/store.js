import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import createPersiste from 'vue-savedata'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        date:'2018',
        breadcrumbData:[],
        city:'河南',
        schoolData: JSON.stringify({
            "bar": {
                "dianXinUsers": [
                    0,
                    3788,
                    2888,
                    1966,
                    0,
                    2,
                    0,
                    4173,
                    4689
                ],
                "gaoJiaZhi": [
                    100,
                    200,
                    409,
                    300,
                    430,
                    200,
                    350,
                    420,
                    450
                ],
                "touSuShuLiang": [
                    0,0,0,0,0,0,0,0,2
                ]
            },
            "general": {
                "dianxinyonghu": 4689,
                "gaojiazhiyonghubi": "21%",
                "shentoulv": "13.70%",
                "tousubi": "12%",
                "wuyedianrenshu": 34216
            },
            "yeWu": {
                "list": [
                    {
                        "name": "腾讯网",
                        "value": "34.60"
                    },
                    {
                        "name": "普通网页浏览",
                        "value": "18.59"
                    },
                    {
                        "name": "高德导航",
                        "value": "6.04"
                    },
                    {
                        "name": "搜狗搜索",
                        "value": "3.59"
                    },
                    {
                        "name": "网易云音乐",
                        "value": "3.40"
                    },
                    {
                        "name": "淘宝商城",
                        "value": "3.15"
                    },
                    {
                        "name": "其他浏览下载",
                        "value": "2.17"
                    },
                    {
                        "name": "小米生活",
                        "value": "2.02"
                    },
                    {
                        "name": "支付宝",
                        "value": "2.01"
                    },
                    {
                        "name": "其它",
                        "value": "24.44"
                    }
                ]
            },
            "phone": {
                xdata:["苹果","华为","Oppo","步步高", "小米","VIVO","OPPO","Vivo","三星","其它",],
                data:[688,667,409,280,264,135,116,100,95,293]
                
            }
        })
    },
    modules: {
        mutations,
    },
    getters:{
        date: state => state.date,
    },
    actions: actions,
    mutations: {
        changeDate (state,date) {
            console.log(date)
            state.date = date
        },
        changeBreadcrumb(state,item){
            state.breadcrumbData=item;
            localStorage.setItem('breadcrumbData',JSON.stringify(item))
        },
        changeCity(state,city){
            state.city=city;
            localStorage.setItem('city',city)
        },
        changeSchool(state,item){
            state.schoolData=item;
            localStorage.setItem('school',item)
        }
    },
    plugins: [createPersiste()],
});
//  //this.$store.commit()触发--->mutaions
  //this.$store.dispatch()触发--->actions
