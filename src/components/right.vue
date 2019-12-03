<template>
  <div class="height">
    <el-row style="height:48%">
      <el-col :span="24">
        <el-card class="height">
          <div slot="header" class="clearfix">
            <span class="cardHead">
              <i class="el-icon-s-management"></i>
              {{city}}投入产出比
            </span>
            <el-button
              type="primary"
              style="float: right;margin-top: -6px;"
              size="small"
              icon="el-icon-edit"
              @click="open"
            >调配预测</el-button>
          </div>
          <div id="bar" class="height"></div>
        </el-card>
      </el-col>
    </el-row>
    <div class="rightBottom marT">
      <el-row :gutter="20" style="margin:0">
        <el-col :span="12" style="padding-left:0">
          <el-card class="height pieT">
            <div slot="header" class="clearfix">
              <span class="cardHead cardTitle">
                <i class="el-icon-s-management"></i>
                <span @click="back" class="back">投入</span>
                <span>{{pieheader}}</span>
              </span>
            </div>
            <div id="pie" class="height"></div>
          </el-card>
        </el-col>
        <el-col :span="12" style="padding-right:0">
          <el-card class="height">
            <div slot="header" class="clearfix">
              <span class="cardHead">
                <i class="el-icon-s-management"></i>
                <span @click="backLine" class="back">产出</span>
                <span>{{Lineheader}}</span>
              </span>
            </div>
            <div class="height" id="div1" v-show="secondLine">
              <div
                class="oimg"
                @mouseover="stop"
                @mouseout="start()"
                @click="secondClick('year','年')"
              >
                <p>{{chans.year}}</p>
                <p>回本周期(年)</p>
              </div>
              <div
                class="oimg"
                @mouseover="stop"
                @mouseout="start()"
                @click="secondClick('arpu','元')"
              >
                <p>{{chans.arpu}}</p>
                <p>arpu(元)</p>
              </div>
              <div
                class="oimg"
                @mouseover="stop"
                @mouseout="start()"
                @click="secondClick('yhs','万')"
              >
                <p>{{chans.yhs}}</p>
                <p>用户数(万)</p>
              </div>
            </div>
            <div class="height" id="pie1" v-show="!secondLine"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 弹出框 -->
    <!--  -->
    <component :is="com_name" :show.sync="show" :title="title" @close="close"></component>
    <!-- <eDialog :show.sync="show" :title="title" @close="close"></eDialog> -->
  </div>
</template>

<script>
import Vue from 'vue'
import eDialog from '../components/eDialog'
import eDialogschool from '../components/eDialogSchool'
import { EleResize } from '@/config/esresize'
import pieData from '@/config/pieData'
import $ from 'jquery'
export default {
  name: 'Right',
  components: {
    eDialog: eDialog,
    eDialogschool: eDialogschool
  },
  data() {
    return {
      page: this.$route.params.id,
      com_name: 'eDialog',
      show: false,
      title: '无线网',
      piedata: pieData.sumdata,
      pietitle: '总投入',
      pieheader: '',
      years: [],
      tzdata: [],
      srdata: [],
      trccdata: [],
      tourus: [],
      dats: [],//日期
      binchan: [{ "check": true, "name": "投资合计", "secondName": "niandu", "value": 12.39 },
      { "check": true, "name": "付现合计", "secondName": "weihu", "value": 0 }],
      weihu: [{ "check": false, "name": "维护费", "secondName": "", "value": 0 },
      { "check": false, "name": "铁塔租赁费", "secondName": "", "value": 0 },
      { "check": false, "name": "油机发电费", "secondName": "", "value": 0 },
      { "check": false, "name": "电费", "secondName": "", "value": 0 }],
      niandu: [{ "check": false, "name": "4G相关平台", "secondName": "", "value": 0.14 },
      { "check": false, "name": "4G基站", "secondName": "", "value": 8.84 },
      { "check": false, "name": "4G核心网", "secondName": "", "value": 0.76 },
      { "check": false, "name": "IPRan", "secondName": "", "value": 2.23 },
      { "check": false, "name": "CN2", "secondName": "", "value": 0.29 },
      { "check": false, "name": "传输", "secondName": "", "value": 0.12 }],
      touruNum: [],
      newNum: [],
      chanchu: [],
      sumNum: 100,
      myPie: null,
      pieActive: 0,
      secondLine: true,
      da: 120, //图片间隔角度
      a0: 0, //已旋转角度,
      Lineheader: '',
      chans: { "arpu":0, "year": 0, "yhs": 0 },
      chansLists: { arpu: [],yhs: [],xdata: [],year: []},
      suur: [],//产出换算媒介
      city: this.$store.state.city,
    }
  },
  created() { },

  mounted() {
    this.linne()//折线图
    this.chanchus()//产出
    this.bingtutr()//投入
    this.initFun()//弹框初始化
    //旋转运动
    this.$nextTick(() => {
      this.chart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
      this.clickPie()
      this.title = this.page
      this.binchan.sort((a, b) => { return b.value - a.value })//升序
      this.weihu.sort((a, b) => { return b.value - a.value })//升序
      this.niandu.sort((a, b) => { return b.value - a.value })//升序
      this.drawPie(this.binchan)
      this.start()
    })
  },
  watch: {
    $route(to, from) {
      this.initFun()
    },
    date(val) {
      this.chanchus()
      this.bingtutr()
    }
  },
  computed: {
    date: function () {
      return this.$store.state.date
    }
  },
  methods: {
    initFun() {
      if (this.$route.path == '/index') {
        this.com_name = 'eDialog'
      } else if (this.$route.path == '/index/无线网概览') {
        this.com_name = 'eDialogschool'
      } else {
        this.com_name = 'eDialogschool'
      }
    },
    // 河南省投入产生比
    linne() {
      var that = this
      var param = {
        pageType: "wireless",
        city:'全省'
      }
      this.$post('/api/index/line', param).then(function (res) {
        that.touruNum = [], that.years = [], that.tzdata = [], that.srdata = [], that.trccdata = []
        res.msg.forEach(item => {
          that.touruNum.push((item.fx / 10000).toFixed(2))  //付现
          that.years.push(item.year)//日期
          that.tzdata.push(item.tz)//投资
          that.srdata.push(item.sr)//收入
          that.trccdata.push(item.trccb)//比例
        })
        that.years=Array.from(new Set(that.years));
        that.drawLine()
      })
    },
    // 投入请求
    bingtutr() {
      var that = this
      that.$post('/api/index/pieIn', {
        pageType: "wireless",
        city: "全省",
        year: that.date,
      }).then(function (res) {
        that.binchan.forEach((item,idx)=>{
          if(item.name='投资合计'){
            that.binchan[idx].value = res.msg.tr_ndzbkz_tzhj/10000;
          }else{
            that.binchan[idx].value = res.msg.tr_bnfxcb_ttzlf_hj/10000;
          }
        })
      })
    },
    // 产出
    chanchus() {
      var that = this
      that.$post('/api/index/pieOut', {
        pageType: "wireless",
        city: "全省",
        year: that.date,
      }).then(function (res) {
        var yhss = (res.msg.yhs / 10000).toFixed(2);
        var yhs = []
        for (var i = 0; i < res.msg.yhsList.length; i++) {//用户数
          yhs.push((res.msg.yhsList[i] / 10000).toFixed(2))
        }
        that.$set(that.chans,'arpu', res.msg.arpu)
        that.$set(that.chans,'year', res.msg.tzhsq)
        that.$set(that.chans,'yhs', yhss)
        that.chansLists=[]
        var obj = {
          arpu: res.msg.arpuList,
          yhs: yhs,
          xdata: res.msg.yearList,
          year: res.msg.tzhsqList
        }
        that.chansLists = obj
      })
    },
    back() {
      this.pietitle = '总投入';
      this.drawPie(this.binchan)
    },
    open() {
      this.show = true;
    },
    close(e) {
      this.show = false;
      this.sumNum = e
      var len = this.piedata;
      //0 建安
      this.$set(this.piedata[0], 'value', Number(e * this.randomFrom(20, 30) / 100).toFixed(2))
      //1 设备
      this.$set(this.piedata[1], 'value', Number(e * this.randomFrom(50, 55) / 100).toFixed(2))
      var val = e - Number(this.piedata[0].value) - Number(this.piedata[1].value);
      this.$set(this.piedata[2], 'value', (e * val / 100).toFixed(2))
      console.log(this.touruNum)
      this.$set(this.touruNum[4], 'value', e * 10000)
      this.$set(this.chanchu[4], 'value', this.randomFrom(this.chanchu[3] * 0.8, this.chanchu[3] * 1.5))
      this.drawLine()
    },
    drawPie(piedata) {
      var that = this;
      // console.log(piedata)
      var colorList = ['#6990D5', '#FF7F50', '#3feed4', '#00d488', '#afa3f5', '#f1bb4c', "#6A9DFF", '#ffc257', 'rgba(5, 65, 110, 1)', '#3bafff', '#ffedcc', '#fd6f97', '#fed4e0', '#a181fc', '#115dab', '#e3d9fe'];
      var option = {
        title: {
          subtext: that.pietitle,
          x: 'center',
          y: '40%',
          textStyle: {
            fontSize: 30,
            fontWeight: 'normal',
            color: ['#333']
          },
          subtextStyle: {
            color: '#666',
            fontSize: 16
          },
        },
        tooltip: {
          trigger: 'item',

        },
        grid: {
          bottom: 150,
          left: 0,
          right: '10%'
        },
        legend: {
          show: false,
          orient: 'vertical',
          top: "middle",
          right: "5%",
          textStyle: {
            color: '#f2f2f2',
            fontSize: 25,

          },
          icon: 'roundRect'

        },
        series: [
          // 主要展示层的
          {
            radius: ['30%', '56%'],
            center: ['50%', '50%'],
            type: 'pie',
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 14,
                length2: 90,
                lineStyle: {
                  color: '#d3d3d3'
                },
                align: 'left'
              },
              color: "#000",
              emphasis: {
                show: true
              }
            },
            label: {
              normal: {
                formatter: function (params) {
                  var str = '';
                  var rate = (Number(params.value) / Number(that.sumNum)) * 100//\n
                  str = '{nameStyle|' + params.name + ' }' + '{rate|' + params.value + '亿}';
                  return str
                },
                padding: [0, -96],
                height: 30,
                rich: {
                  nameStyle: {
                    fontSize: 11,
                    color: "#555",
                    align: 'left'
                  },
                  rate: {
                    fontSize: 12,
                    color: "#1ab4b8",
                    align: 'left'
                  }
                }
              },

            },
            data: piedata
            //data:this.binchan

          },
          // 边框的设置
          {
            radius: ['52%', '56%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: false
            },
            itemStyle: {
              normal: {
                color: 'rgba(250,250,250,0.5)'
              }
            },
            data: [{
              value: 1,
            }],
          }
        ]
      };
      that.chart.setOption(option);
      var dom = document.getElementById('pie');
      let lestener = function () {
        that.chart.resize()
      };
      EleResize.on(dom, lestener)
    },
    clickPie() {
      var that = this;
      // 处理点击事件并且跳转到相应的百度搜索页面
      this.chart.on('click', function (param) {
        // console.log(param)
        var name = param.name;
        if (param.data.check) {
          that.pietitle = name;
          that.pieheader = ' > ' + name
          var second = param.data.secondName
          //that.piedata = that[second]
          that.drawPie(that[second])
        } else {
          //that.$message.error('已经到最底层了');
        }
        // if (name === '待摊投资') {
        //   that.piedata = that.daitan
        // } else if (name === '设备投资') {
        //   that.piedata = that.shebei
        // } else if (name === '建安投资') {
        //   that.piedata = that.jianan
        // }
      });
    },
    drawLine() {
      var category = this.years
      var lineData = this.tzdata;//投入
      var barData = this.srdata;//产出
      var newData = this.tzdata//付现
      var rateData = this.trccdata;
      var dot = this.trccdata
      var len = rateData.length - 1
      var option = {
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(0,0,0,0.8)',
          axisPointer: {
            type: 'shadow',
            label: {
              show: true,
              backgroundColor: '#7B7DDC',
            },
          },
          textStyle: {
            color: '#fff'
          },
          formatter(param) {
            var str = param[0].name + '<br/>'
            for (var i = 1; i < param.length; i++) {
              if (param[i].seriesName == '投入产出比') {
                str += param[i].seriesName + ' : ' + param[i].value + '%' + '<br/>'
              } else {
                str += param[i].seriesName + ' : ' + param[i].value + '<br/>'
              }
            }
            return str
          }
        },
        legend: {
          data: ['资本开支', '付现成本', '收入', '投入产出比'],
          textStyle: {
            color: '#333'
          },
          top: '1%',
        },
        grid: {
          x: '10%',
          width: '82%',
          y: '12%',
          bottom: '12%'
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: '#666'
            }
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: [{
          name: '单位:万元',
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#666',
            }
          },
          axisLabel: {
            formatter: '{value}',
          }
        },
        {
          name: '单位:%',
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#666',
            }
          },
          axisLabel: {
            formatter: '{value}',
          }
        }],
        series: [
          {
            stack: '温度1',
            name: '投入产出比',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#3feed4',
                lineStyle: {   //系列级个性化折线样式
                  width: 2,
                  type: 'solid'
                }
              }
            },
            data: rateData
          },
          {
            stack: '温度2',
            name: '投入产出比',
            type: 'line',
            smooth: false,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: '#3feed4',
                lineStyle: {   //系列级个性化折线样式
                  width: 2,
                  type: 'dashed'
                }
              }
            },
            data: dot
          },
          {
            name: '资本开支',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: 'rgb(215,215,215)'
              }
            },
            data: lineData
          },
          {
            name: '付现成本',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#B49CDB' },
                    { offset: 1, color: '#B9B5EE' }
                  ]
                )
              }
            },
            data: newData
          },
          {
            name: '收入',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#6990D5' },
                    { offset: 1, color: '#3ab8f2' }
                  ]
                )
              }
            },
            data: barData
          }]
      };
      var myChart = this.$echarts.init(document.getElementById('bar'));//获取容器元素
      var dom = document.getElementById('bar')
      myChart.setOption(option);
      let lestener = function () {
        myChart.resize()
      }
      EleResize.on(dom, lestener)
    },
    drawPie1(data, dw,name) {
      var option = {
        grid: {
          top: "15%",
          bottom: "15%",
          left: "10%",
          right: "6%",
        },
        tooltip: {          trigger: 'axis',
        },
        legend: {
          show: true,
          data: [name]
        },
        xAxis: {
          data: this.chansLists.xdata,
          axisLine: {
            show: false, //隐藏X轴轴线
          },
          type: "category",
          axisTick: {
            show: false, //隐藏X轴刻度
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#666", //X轴文字颜色
              fontSize: "12",
            },
          },
          boundaryGap: 0
        },
        yAxis: [
          {
            name: dw,
            show: true,
            type: "value",
            axisLine: {
              show: false, //隐藏轴线
            },
            splitLine: {
              show: false, //隐藏轴线
            },
            axisTick: {
              show: false, //隐藏轴刻度
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#666", //文字颜色
                fontSize: "12",
              },
            },
          },
        ],
        series: [
          {
            // default: false,
            name: name,
            type: "line",
            smooth: true, //平滑曲线显示
            showAllSymbol: false, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8, //标记的大小
            itemStyle: {
              //折线拐点标志的样式
              color: "#4c8bfd",
            },
            lineStyle: {
              color: "#4c8bfd",
              width: 2,
              shadowColor: 'rgba(76,139,253, 0.3)',
              shadowBlur: 10,
              shadowOffsetY: 10
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#DDE9FF",
                },
                {
                  offset: 1,
                  color: "rgba(76,139,253,0)",
                },
              ]),
            },
            data: data
          },
        ],
      }
      this.myPie = this.$echarts.init(document.getElementById('pie1'));//获取容器元素
      this.myPie.setOption(option, true);
      var dom = document.getElementById('pie1')
      var that = this;
      let lestener = function () {
        that.myPie.resize()
      }
      EleResize.on(dom, lestener)
    },
    randomFrom(lowerValue, upperValue) {
      return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    },
    posimgs1() {
      var da = this.da, a0 = this.a0;
      var centerx = 100, centery = 68, r = 68;
      for (var i = 0; i < $('.oimg').length; i++) {
        $('.oimg')[i].style.left = centerx + r * Math.cos((da * i + a0) / 180 * Math.PI) + "px";
        $('.oimg')[i].style.top = centery + r * Math.sin((da * i + a0) / 180 * Math.PI) + "px";
      }
    },
    start() {
      var that = this;
      const timer = window.setInterval(function () {
        that.posimgs1();
        that.a0++
      }, 200);
      that.timer = timer
      that.$once('hook:beforeDestroy', () => {
        clearInterval(timer);
      })
    },
    stop() {
      window.clearInterval(this.timer);
    },
    secondClick(type, danwei) {
      var header = ''
      if (type == 'yhs') header = '用户数'
      if (type == 'arpu') header = 'ARPU'
      if (type == 'year') header = '回本周期'
      this.secondLine = !this.secondLine;
      this.$nextTick(() => {
        this.Lineheader = ' > ' + header;
        var obj = this.chansLists;
        this.drawPie1(obj[type], danwei,header)
        this.stop()
      })

    },
    backLine() {
      this.secondLine = true;
      this.$nextTick(() => {
        this.start()
        this.Lineheader = ''
      })
    }
  }
}
</script>

<style lang="less" scoped>
.contain {
  width: 99%;
  height: 100%;
  box-sizing: border-box;
  .el-row {
    width: 100%;
    height: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      height: 100%;
    }
    .box-card {
      height: 100%;
    }
  }
}
.rightBottom {
  width: 100%;
  height: 48%;
}
.elSelect {
  float: right;
  vertical-align: middle;
  width: 45%;
  margin-top: -6px;
}
.back:hover {
  text-decoration: underline;
}
.cont {
  width: 100%;
  height: 20%;
  line-height: 32px;
  text-align: center;
  > div {
    cursor: pointer;
  }
  > div > p {
    color: #7c89a0;
  }
  > div > p:nth-child(1) {
    font-family: SourceHanSansSC-Regular;
    font-size: 13px;
  }
  > div > p:nth-child(2) {
    font-size: 16px;
    font-weight: bold;
  }
  > div.active > p {
    color: #559ae7;
    font-weight: bold;
  }
  .contLine {
    width: 2px;
    height: 80%;
    margin-top: 5%;
    background-color: #ddd;
  }
}

.pieT .el-card__body {
  padding: 0;
}
#div1 {
  position: relative;
  background: url("../assets/image/bg1.png") no-repeat center center;
  background-size: 80% 100%;
  > div {
    position: absolute;
    width: 100px;
    height: 100px;
    text-align: center;
    background: url("../assets/image/circle.png") no-repeat;
    background-size: 100% 100%;
    > p:nth-child(1) {
      color: #fff;
      // 文字太大2em
      font-size: 1.5em;
      line-height: 60px;
    }
  }
  > div:nth-child(1) {
    background: url("../assets/image/circle1.png") no-repeat;
    background-size: 100% 100%;
  }
  > div:nth-child(2) {
    background: url("../assets/image/circle2.png") no-repeat;
    background-size: 100% 100%;
  }
}
.cardHead span {
  cursor: pointer;
}
</style>