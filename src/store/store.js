import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import createPersiste from 'vue-savedata'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        date:'2019',
        breadcrumbData:[],
        city:'河南'
    },
    modules: {
        mutations,
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
        }
    },
    plugins: [createPersiste()],
});
//  //this.$store.commit()触发--->mutaions
  //this.$store.dispatch()触发--->actions
