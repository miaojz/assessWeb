<template>
  <div class="contain height">
   <el-container class="height">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <Menu></Menu>
        <div class="main">
          <div class="mainHeader">
            <div class="el-b" v-if="show" :to="{ path: '/index' }">首页</div>
            <el-breadcrumb separator="/" v-else>
              <el-breadcrumb-item v-for="(item,idx) in realList" v-if='item.name' :key='item.name+idx' :to="item.path">{{item.name}}</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/empty' }" v-if="page">{{page}}</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="mainRight">
              <div>
                <span>项目：</span>
                <el-cascader :options="options" size="mini" @change="change" clearable></el-cascader>
              </div>
              <div>
                <span>时间：</span>
                <el-select
                  v-model="value"
                  size="mini"
                  clearable
                  placeholder="请选择"
                  @change="selectchange"
                >
                  <el-option
                    v-for="item in selectData"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
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
import Header from '../components/head'
import Menu from '../components/menu'
import county from '@/config/countyData'
// import { api1 } from '@/core/net/http'// 导入我们的api接口
export default {
  name: 'app',
  data() {
    return {
      page: '',
      show: true,
      options: county,
      xm: '',
      second: '',
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
      path:'',
      realList:[]      

    }
  },
  components: {
    Header: Header,
    Menu: Menu
  },
  methods: {
    change(data) {
      var len = data.length - 1;
      //var arr = ['无线网概览', '室分', '宏站', '专线', '校园', 'CICT', '政企概览', '接入网概览', '家庭宽带']
      this.to('/index' + data[len])
    },
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
    selectchange(value) {
      this.$store.dispatch('changeDate', value)
    },
  },
  watch: {
    //监听路由变化，自动缩减左边菜单栏目
    $route(to, form) {
      var realList=this.$route.matched
      console.log(this.$route)
      var arr=[];
      this.realList.map(item=>{
          var obj={
            name:item.name,
            path:item.path
          }
          arr.push(obj)
      })
      this.$store.commit('changeBreadcrumb',arr)
      if(this.$route.params.id){
        this.realList=this.$store.state.breadcrumbData;
        this.page=this.$route.params.id
      }else{
        this.realList=this.$route.matched
        this.page=''
      }
      if (this.$route.path == '/index') {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  },
  mounted() {
    var realList
    if(this.$store.state.breadcrumbData){
          realList=this.$route.matched
    }else{
        realList=JSON.parse(localStorage.getItem('breadcrumbData'))
    }
    this.realList=realList;
    this.page=''
    if(this.$route.params.id){
        this.show = false;
      }
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
.el-header {
  padding: 0;
}
.el-container {
  height: 100%;
}
.main {
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
.mainHeader {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  line-height: 40px;
  margin-bottom: 10px;
  display: flex;
  // justify-content: space-between;
  box-sizing: border-box;
  padding: 0 10px;
}
.el-page-header,
.el-cascader--mini,
.el-breadcrumb {
  line-height: 40px;
}
.mainRight {
  flex: 1;
  margin-left: 60px;
  display: flex;
  justify-content: space-between;
  > span {
    font-size: 14px;
    font-weight: 500;
  }
}
.el-b {
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  -webkit-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  color: #303133;
}
</style>

