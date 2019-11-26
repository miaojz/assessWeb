<template>
  <div class="contain school">
    <el-row class="xmTop">
      <el-col :span="24" class="flexbox xmcon">
        <div class="flex mar flexbox" style="background-color: #5FBDFF">
          <div class="topimg">
            <img src="../assets/image/hightxiao.png" alt />
          </div>
          <div class="topcon">
            <div>物业点人数</div>
            <div id="wuyedianrenshu">
              5000
              <span class="danwei">人</span>
            </div>
          </div>
        </div>
        <div class="flex mar flexbox" style="background-color: #0765C7">
          <div class="topimg">
            <img src="../assets/image/yonghu.png" alt />
          </div>
          <div class="topcon">
            <div>电信用户</div>
            <div id="dianxinyonghu">
              1000
              <span class="danwei">人</span>
            </div>
          </div>
        </div>
        <div class="flex mar flexbox" style="background-color: #6A89CC">
          <div class="topimg">
            <img src="../assets/image/shentou.png" alt />
          </div>
          <div class="topcon">
            <div>渗透率</div>
            <div id="shentoulv">20%</div>
          </div>
        </div>
        <div class="flex mar flexbox" style="background-color: #6F43BF">
          <div class="topimg">
            <img src="../assets/image/tousu.png" alt />
          </div>
          <div class="topcon">
            <div>投诉比</div>
            <div id="tousubi">10%</div>
          </div>
        </div>
        <div class="flex mar flexbox" style="background-color: #41C4BE">
          <div class="topimg">
            <img src="../assets/image/gaojiazhiyonghu.png" alt />
          </div>
          <div class="topcon">
            <div>高值用户比</div>
            <div id="gaojiazhiyonghubi">34%</div>
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
      newsList: ''
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
      var option = this.$commonJS.sfChartLine();
      var myChart = this.$echarts.init(document.getElementById('user'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'user')
    },
    drawPhone() {
      var data = [400, 500, 500, 500, 500, 400, 400, 500, 500];
      var xdata = ['华为', 'OPPO', '苹果', '小米', '步步高', 'Vivo', 'VIVO', '魅族', '其它']
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
      var option = this.$commonJS.sfChartRate();
      var myChart = this.$echarts.init(document.getElementById('rate'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'rate')
    },
    drawPie() {
      var yeWu = [{
        name: '腾讯网',
        value: 36
      },
      {
        name: '普通网页浏览',
        value: 16
      },
      {
        name: '高德导航',
        value: 15
      },
      {
        name: '搜狗搜索',
        value: 3
      },
      {
        name: '淘宝商城',
        value: 3
      },
      {
        name: '小米生活',
        value: 7.9
      },
      {
        name: '网易云音乐',
        value: 6.7
      },
      {
        name: '其他浏览下载',
        value: 6
      },
      {
        name: '支付宝',
        value: 4.5
      },
      {
        name: '其它',
        value: 3
      }];
      var option = this.$commonJS.sfChartPie(yeWu);
      var myChart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'pie')
    }
  },
  mounted() {
    this.drawuser()
    this.drawPhone()
    this.drawRate()
    this.drawPie()
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
</style>