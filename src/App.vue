<template>
  <div id="app" class='height'>
    <el-container class='height'>
      <el-header><Header></Header></el-header>
      <el-container>
        <Menu></Menu>
        <div class='main'>
          <div class='mainHeader'>
            <div class='el-b' v-if='show' :to="{ path: '/' }">首页</div>
            <el-breadcrumb separator="/" v-else>
              <el-breadcrumb-item :to="{ path: '/' }" >首页</el-breadcrumb-item>
              <el-breadcrumb-item v-if='second' :to="{path:'/index/'+page}">{{second}}</el-breadcrumb-item>
              <el-breadcrumb-item v-else :to="{path:'/empty'}">{{second}}</el-breadcrumb-item>
              <el-breadcrumb-item v-if="xm" :to="{path:'/empty'}">{{xm}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class='mainRight'>
              <div>
                <span> 项目：</span><el-cascader :options="options" size='mini' @change='change' clearable></el-cascader>
              </div>
               <div>
                 <span>时间：</span>
                 <el-select v-model="value" size='mini' clearable placeholder="请选择" @change='selectchange'>
                    <el-option
                      v-for="item in selectData"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
               </div>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Vue from 'vue'
import Header from './components/head'
import Menu from './components/menu'
import county from '@/config/countyData'
// import { api1 } from '@/core/net/http'// 导入我们的api接口
export default {
  name: 'app',
  data() {
    return {
      page:this.$route.params.id,
      show:false,
      options: county,
      xm:'',
      second:'',
       selectData: [{
          value: '2015',
          label: '2015'
        }, {
          value: '2016',
          label: '2016'
        }, {
          value: '2017',
          label: '2017'
        }, {
          value: '2018',
          label: '2018'
        }, {
          value: '2019',
          label: '2019'
        }],
        value: '',
    }
  },
  components: {
    Header: Header,
    Menu:Menu
  },
  methods:{
     change(data){
       var len=data.length-1
      //  if(data[len].indexOf('school')!=-1){//含有school
      //      this.to('/xm/school')
      //    }else if(data[len].indexOf('sf')!=-1){//含有室分物业点项目
      //      this.to('/'+data[len])
      //    }
       var arr=['无线网概览','室分','宏站','专线','校园','CICT','政企概览','接入网概览','家庭宽带']
       if(this.$route.path=='/'){
          if(data[len].indexOf('school')!=-1){//含有school
           this.to('/xm/school')
         }else if(data[len].indexOf('sf')!=-1){//含有室分物业点项目
           this.to('/'+data[len])
         }
       }else{
         if(data[len].indexOf('school')!=-1){//含有school
           //this.to('/xm/'+this.page)
           if(arr.indexOf(this.page)==-1){//不含
                  this.to('/xm/school')
              }else{
                  this.to('/xm/'+this.page+'/school/校园项目')
              }
         }else if(data[len].indexOf('sf')!=-1){//含有室分物业点项目
              if(arr.indexOf(this.page)==-1){//不含
                  this.to('/'+data[len])
              }else{
                  this.to('/xm/'+this.page+'/'+data[len])
              }
         }
         
       }
     },
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
    selectchange(value){
      this.$store.dispatch('changeDate',value)
    },
  },
   watch:{
      //监听路由变化，自动缩减左边菜单栏目
      $route(to,form){
        this.page=this.$route.params.id;
        this.xm='';
        this.second=this.page
        console.log(this.$route)
        if(this.$route.params.xm)this.xm=this.$route.params.xm
         if(this.$route.path=='/'){
          this.page='首页';
          this.show=true;
        }else{
           this.show=false;
           if(this.$route.name=='index'){
             this.xm='';
           }
        }
      }
    },
    mounted(){
      // this.$post('/api/index/line',{}).then(res=>{
      //   console.log(res)
      // })
      // api1({}).then(res => {
      //   // success
      //   console.log(res)
      // }).catch((error) => {
      //   // error
      //   console.log(error)
      // })
    }
}
</script>
<style scoped lang="less">
  // @import "../../static/css/base.scss";
.el-header{
  padding:0
}
.el-container{
  height:100%
}
.main{
  display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    -webkit-flex-basis: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.mainHeader{
  border: 1px solid #EBEEF5;
    background-color: #FFF;
    color: #303133;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
    line-height: 40px;
    margin-bottom: 10px;
    display: flex;
    // justify-content: space-between;
    box-sizing: border-box;
    padding:0 10px;
}
.el-page-header,.el-cascader--mini,.el-breadcrumb{
  line-height: 40px;
}
.mainRight{
  flex:1;
  margin-left:60px;
      display: flex;
     justify-content: space-between;
  >span{
    font-size: 14px;
    font-weight: 500;
  }
}
.el-b{
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    -webkit-transition: color .2s cubic-bezier(.645,.045,.355,1);
    -o-transition: color .2s cubic-bezier(.645,.045,.355,1);
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #303133;
}
  </style>

