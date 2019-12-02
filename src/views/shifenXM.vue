<template>
  <div class="contain school">
    <el-row class="xmTop">
      <el-col :span="24" class="flexbox xmcon">
        <div class="flex mar flexbox topd" v-for="(item,index) in topData" :key="item.label">
          <div class="topimg">
            <img :src="picANDcolor[index]" alt />
          </div>
          <div class="topcon">
            <div>{{item.label}}</div>
            <div id="wuyedianrenshu">
              {{item.data}}
              <span class="danwei">{{item.dawnei}}</span>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row style="height:40%">
      <el-col :span="24">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="box-card height">
              <div id="user" class="height"></div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card height">
              <div id="phoneNum" class="height"></div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row style="height:40%;margin-top:20px;">
      <el-col :span="24">
        <el-col :span="24">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-card class="box-card height">
                <div id="rate" class="height"></div>
              </el-card>
            </el-col>
            <el-col :span="12">
              <el-card class="box-card height">
                <div id="pie" class="height"></div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { EleResize } from '@/config/esresize'
export default {
  name: 'school',
  components: {

  },
  data() {
    return {
      newsList: '',
      picANDcolor: [require('../assets/image/hightxiao.png'),
      require('../assets/image/yonghu.png'),
      require('../assets/image/shentou.png'),
      require('../assets/image/tousu.png'),
      require('../assets/image/gaojiazhiyonghu.png')],
      topData: [],
      schoolData:{}
    }
  },
  created() { },
  methods: {
    to(e) {
      console.log(e)
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
    drawuser() {
      var obj = {
        xdata: ['电信用户', '投诉用户'],
        data0: this.schoolData.bar.dianXinUsers,
        data1: this.schoolData.bar.touSuShuLiang,
      }
      var option = this.$commonJS.sfChartLine(obj);
      var myChart = this.$echarts.init(document.getElementById('user'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'user')
    },
    drawPhone() {
      var data = this.schoolData.phone.data
      var xdata = this.schoolData.phone.xdata;
      var option = this.$commonJS.sfChartPhone(xdata, data);
      var myChart = this.$echarts.init(document.getElementById('phoneNum'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'phoneNum')
    },
    onsize(myChart, id) {
      let lestener = function () {
        myChart.resize()
      }
      var dom = document.getElementById(id)
      EleResize.on(dom, lestener)
    },
    drawRate() {
      var data=this.schoolData.bar.touSuShuLiang
      var option = this.$commonJS.sfChartRate(data);
      var myChart = this.$echarts.init(document.getElementById('rate'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'rate')
    },
    drawPie() {
      var yeWu = this.schoolData.yeWu.list
      var option = this.$commonJS.sfChartPie(yeWu);
      var myChart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'pie')
    },
    init(){
      var schooldata;
    if(this.$store.state.schoolData!=null){
      schooldata=JSON.parse(this.$store.state.schoolData)
    }else{
      schooldata=JSON.parse(localStorage.getItem('school')||[])
    }
    this.schoolData=schooldata;
    this.topData=[{ label: '物业点人数', data: schooldata.general.wuyedianrenshu, danwei: '人' },
        { label: '电信用户', data: schooldata.general.dianxinyonghu, danwei: '人' },
        { label: '渗透率', data: schooldata.general.shentoulv, danwei: '%' },
        { label: '万投比', data: schooldata.general.tousubi, danwei: '%' },
        { label: '高值用户比', data: schooldata.general.gaojiazhiyonghubi, danwei: '%' },]
    this.$nextTick(() => {
      this.drawuser()
      this.drawPhone()
      this.drawRate()
      this.drawPie()
    })
    }
  },
  mounted() {
    this.init()

  },
  watch: {
    //监听路由变化，自动缩减左边菜单栏目
    $route(to, form) {
      console.log('///////')
      this.init()
    }
    }
}
</script>

<style lang="less" scoped>
.contain {
  width: 99%;
  height: 91%;
  margin: 0 10px;
  box-sizing: border-box;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
  .xmTop {
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    margin: 0 0 20px 0;
    .xmcon > div {
      font-size: 14px;
      color: white;
      padding: 5px;
      text-align: center;
      line-height: 38px;
      position: relative;
      height: 70px;
    }
    .topimg {
      width: 36%;
      text-align: center;
      height: 100%;
      line-height: 72px;
      img {
        width: 27px;
        vertical-align: middle;
      }
    }
    .topcon {
      flex: 1;
      text-align: left;
    }
    .topcon > div:nth-child(2) {
      font-family: Hooge0555;
      font-size: 20px;
      color: white;
    }
  }
}
.topd:nth-child(1) {
  background-color: #5fbdff;
}
.topd:nth-child(2) {
  background-color: #0765c7;
}
.topd:nth-child(3) {
  background-color: #6a89cc;
}
.topd:nth-child(4) {
  background-color: #6f43bf;
}
.topd:nth-child(5) {
  background-color: #41c4be;
}
</style>