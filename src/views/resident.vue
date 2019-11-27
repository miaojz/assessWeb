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
              <el-card class="box-card height" style="position:relative">
                <el-button type="primary" class="import" size="mini">导出</el-button>
                <el-table
                  ref="singleTable"
                  :data="tableData"
                  height="100%"
                  highlight-current-row
                  @current-change="handleCurrentChange"
                  style="width: 100%"
                >
                  <el-table-column property="id" width="120" label="id"></el-table-column>
                  <el-table-column property="phone" label="移动网用户" width="120"></el-table-column>
                  <el-table-column property="if" label="是否有固网" width="120"></el-table-column>
                  <el-table-column property="address" label="地址"></el-table-column>
                </el-table>
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
  name: 'jm',
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
      topData: [
        { label: '移动网用户', data: 5000, danwei: '人' },
        { label: '固网用户', data: 1000, danwei: '人' },
        { label: '固网占比', data: 20, danwei: '%' },
        { label: '投诉比', data: 10, danwei: '%' },
        { label: '高值用户比', data: 34, danwei: '%' },
      ],
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        phone: '1503604968',
        if: '是'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        phone: '1503604968',
        if: '是'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        phone: '1503604968',
        if: '是'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        phone: '1503604968',
        if: '是'
      }],
      currentRow: null
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
        xdata: ['移动网用户', '固网用户', '高价值用户', '投诉用户'],
        data0: [300, 500, 909, 600, 1030, 800, 550, 1020, 1050],
        data1: [100, 200, 309, 400, 430, 100, 250, 320, 450],
        data2: [50, 105, 200, 132, 220, 80, 120, 220, 190],
        data3: [100, 200, 409, 300, 430, 200, 350, 420, 450]
      }
      var option = this.$commonJS.sfChartLine(obj);
      var myChart = this.$echarts.init(document.getElementById('user'));//获取容器元素
      myChart.setOption(option, true);
      this.onsize(myChart, 'user')
    },
    drawPhone() {
      var obj = {
        xdata: ['苹果', '华为', 'OPPO', 'VIVO', '小米', '中兴', '魅族', '锤子'],
        month1: [400, 400, 300, 300, 300, 400, 400, 400, 300],
        month2: [400, 400, 300, 300, 300, 400, 400, 400, 300],
        month3: [400, 400, 300, 300, 300, 400, 400, 400, 300]
      }
      var option = this.$commonJS.jmchartBar(obj);
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
    handleCurrentChange(val) {
      this.currentRow = val;
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
    this.$nextTick(() => {
      this.drawuser()
      this.drawPhone()
      // this.drawRate()
      this.drawPie()
    })

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
.import {
  position: absolute;
  top: 5px;
  right: 27px;
  z-index:9
}
</style>