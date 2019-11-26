<template>
  <div class="height">
    <el-row style="height:48%">
      <el-col :span="24">
        <el-card class="height">
          <div slot="header" class="clearfix">
            <span class="cardHead">
              <i class="el-icon-s-management"></i>
              河南省{{page}}投入产出比
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
                <i class="el-icon-s-management"></i>产出
              </span>
            </div>
            <div class="cont flexbox">
              <div :class='["flex",pieActive==0 ? "active" : ""]' @click="pieActive=0">
                <p>回报周期(月)</p>
                <p>36</p>
              </div>
              <div class="contLine"></div>
              <div :class='["flex",pieActive==1 ? "active" : ""]' @click="pieActive=1">
                <p>ARPU(万元)</p>
                <p>36</p>
              </div>
              <div class="contLine"></div>
              <div :class='["flex",pieActive==2 ? "active" : ""]' @click="pieActive=2">
                <p>用户数(万)</p>
                <p>36</p>
              </div>
            </div>
            <div id="pie1"></div>
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
      chooseData: [],
      oldChooseData: [],
      show: false,
      title: '无线网',
      piedata: pieData.sumdata,
      pietitle: '总投入',
      pieheader: '',
      touruNum: [177133, 169043, 156670, 123908, 61954],
      newNum: [177133, 169043, 156670, 123908, { value: 321779.48,
        itemStyle: {
          borderType: 'dotted',
          barBorderColor: '#ffdcc3',
          color: '#B49CDB'
        }
      }],
      chanchu: [96083, 246140, 318999, 408068, {value: 521779.48,
        itemStyle: {
          borderType: 'dotted',
          barBorderColor: '#ffdcc3',
          color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0.4,
            color: "#fd6f97"
          },
          {
            offset: 1,
            color: "#ffdcc3"
          }
          ])
        }
      }],
      sumNum: 100,
      myPie: null,
      timer:null,
      centerx : 120, //圆心X
      centery :60, //圆心Y
       r : 60, //半径
      cnt : 3, //图片数
      da : 120, //图片间隔角度
      a0 : 0, //已旋转角度,
      pieActive:0
    }
  },
  created() { },
  mounted() {
    if (this.$route.path == '/' || this.$route.path == '/index/投资收益评估概览') {
      this.com_name = 'eDialog'
    } else if (this.$route.path == '/index/无线网概览') {
      this.com_name = 'eDialogschool'
      this.piedata = pieData.network
    } else {
      this.com_name = 'eDialogschool'
    }
    //旋转运动
    this.$nextTick(()=>{
      this.chart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
      this.drawLine()
      this.drawPie(this.piedata)
      this.clickPie()
      this.title = this.page
      this.drawPie1()
    })
    
  },
  watch: {
    $route(to, from) {
      this.piedata = pieData.sumdata
      if (this.$route.path == '/' || this.$route.path == '/index/投资收益评估概览') {
        this.com_name = 'eDialog';
        this.page = '';
      } else if (this.$route.path == '/index/无线网概览') {
        this.piedata = pieData.network
        this.com_name = 'eDialogschool'
        this.page = to.params.id.replace('概览', '');
      } else {
        this.com_name = 'eDialogschool'
        this.page = to.params.id.replace('概览', '');
      }
      this.title = this.page
      this.drawPie(this.piedata)
      this.clickPie()
    },
    piedata: {
      deep: true,
      handler: function (newval, oldval) {
        if (newval) {
          this.drawPie(newval)
        } else {
          this.drawPie(oldval)
        }
      }
    }
  },
  methods: {
    back() {
      if (this.$route.path == '/index/无线网概览') {
        this.piedata = pieData.network
      } else {
        this.piedata = pieData.sumdata
      }
      this.pietitle = '总投入',
        this.pieheader = ''
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
    change(val) {
      const allValues = this.options.map(item => {
        return item.value;
      });
      // 用来储存上一次选择的值，可进行对比
      const oldVal = this.oldChooseData.length > 0 ? this.oldChooseData : [];

      // 若选择全部
      if (val.includes('ALL_SELECT')) {
        this.chooseData = allValues;
      }

      // 取消全部选中， 上次有， 当前没有， 表示取消全选
      if (oldVal.includes('ALL_SELECT') && !val.includes('ALL_SELECT')) {
        this.chooseData = [];
      }

      // 新老数据都有全部选中,那就说明除了全选以外的被选择，所以去掉全选
      if (oldVal.includes('ALL_SELECT') && val.includes('ALL_SELECT')) {
        const index = val.indexOf('ALL_SELECT');
        val.splice(index, 1); // 排除全选选项
        this.chooseData = val;
      }

      // 全选未选，但是其他选项都全部选上了，则全选选上
      if (!oldVal.includes('ALL_SELECT') && !val.includes('ALL_SELECT')) {
        if (val.length === allValues.length - 1) {
          this.chooseData = ['ALL_SELECT'].concat(val);
        }
      }

      // 储存当前选择的最后结果 作为下次的老数据
      this.oldChooseData = this.chooseData;

    },
    drawPie(piedata) {
      var that = this;
      var colorList = ['#6990D5', '#FF7F50', '#3feed4', '#00d488', '#afa3f5', '#f1bb4c', "#6A9DFF", '#ffc257', 'rgba(5, 65, 110, 1)', '#3bafff', '#ffedcc', '#fd6f97', '#fed4e0', '#a181fc', '#115dab', '#e3d9fe'];
      var option = {
        title: {
          subtext: that.pietitle,
          x: '42%',
          y: '42%',
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
              }
            },
            data: piedata
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
      console.log(1)
      var that = this;
      // 处理点击事件并且跳转到相应的百度搜索页面
      this.chart.on('click', function (param) {
        console.log(param)
        var name = param.name;
        if (param.data.check) {
          that.pietitle = name;
          that.pieheader = ' > ' + name
          var second = param.data.secondName
          that.piedata = pieData[second]
        } else {
          that.$message.error('已经到最底层了');
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
      var category = ['2015', '2016', '2017', '2018', '2019'];
      var dottedBase = [];
      var lineData = this.touruNum;
      var barData = this.chanchu;
      var newData = this.newNum
      var rateData = []; var dot = []
      for (var i = 0; i < 5; i++) {
        var bar = barData[i];
        if (barData[i].value) {
          bar = barData[i].value
        }
        var line = lineData[i]
        if (lineData[i].value) line = lineData[i].value;
        var rate = bar / line;
        if (i == 4) {
          rateData[i] = '-'
        } else {
          rateData[i] = rate.toFixed(2);
        }
        dot[i] = rate.toFixed(2)
      }
      // option
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
                str += param[i].seriesName + ' : ' + param[i].value * 100 + '%' + '<br/>'
              } else {
                str += param[i].seriesName + ' : ' + param[i].value + '<br/>'
              }
            }
            return str
          }
        },
        legend: {
          data: ['产出', '投入', '付现', '投入产出比',],
          textStyle: {
            color: '#333'
          },
          top: '1%',
        },
        grid: {
          x: '10%',
          width: '82%',
          y: '10%',
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
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#666',
            }
          },
          axisLabel: {
            formatter: '{value} ',
          }
        },
        {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: '#666',
            }
          },
          axisLabel: {
            formatter: '{value} ',
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
            name: '付现',
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
            name: '产出',
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
          },
          {
            name: '投入',
            type: 'bar',
            barWidth: 12,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: 'rgb(215,215,215)'
                // color: new this.$echarts.graphic.LinearGradient(
                //   0, 0, 0, 1,
                //   [
                //     { offset: 0, color: '#F4C309' },
                //     { offset: 1, color: '#F9E184' }
                //   ]
                // )
              }
            },
            data: lineData
          },


        ]
      };
      var myChart = this.$echarts.init(document.getElementById('bar'));//获取容器元素
      var dom = document.getElementById('bar')
      myChart.setOption(option);
      let lestener = function () {
        myChart.resize()
      }
      EleResize.on(dom, lestener)
    },
    randomFrom(lowerValue, upperValue) {
      return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
    },
    posimgs1() {
      var da=this.da,a0=this.a0;
      var centerx=120,centery=80,r=80;
      for(var i=0;i<3;i++){
          $('.oimg')[i].style.left = centerx + r * Math.cos((da * i + a0) / 180 * Math.PI) + "px";
          $('.oimg')[i].style.top = centery + r * Math.sin((da * i + a0) / 180 * Math.PI) + "px";
        }
    },
    posimgs() {
      var dotLeft = ($("#div1").width())/2;
      //中心点纵坐标
      var dotTop = ($("#div1").height())/2;
      //椭圆长边
      var a = 140;
      //椭圆短边
      var b = 60;
      //起始角度
      var stard = 0;
      //每一个BOX对应的角度;
      var avd = 360/$(".oimg").length;
      //每一个BOX对应的弧度;
      var ahd = avd*Math.PI/180;
      //运动的速度
      var speed = this.a0;
      //图片的宽高
      var wid = 110;
      var hei = 110;
      //总的TOP值
      var totTop = dotTop+100;
      //设置圆的中心点的位置
      $(".dot").css({"left":dotLeft,"top":dotTop});
      speed = speed<360?speed:2;
        //运运的速度
        //speed+=2;
			//运动距离，即运动的弧度数;
      var ainhd = speed*Math.PI/180;
      for(var index=0;index<3;index++){
         var allpers = (Math.cos((ahd*index+ainhd))*b+dotTop)/totTop;
         var wpers = Math.max(0.1,allpers);
         var hpers = Math.max(0.1,allpers);
         $('.oimg')[index].style.left = Math.sin((ahd*index+ainhd))*a+dotLeft-20 + "px";
         $('.oimg')[index].style.top = Math.cos((ahd*index+ainhd))*b+dotTop-60 + "px";
          $('.oimg')[index].style.zIndex=Math.ceil(allpers*10);
          $('.oimg')[index].style.width=wpers*wid+'px';
          $('.oimg')[index].style.height=hpers*hei+'px';
          $('.oimg')[index].style.opacity=allpers+0.2;
          $('.oimg')[index].style.fontSize=18*allpers+'px';
          $('.oimg')[index].style.lineHeight=hpers*hei/2.5+'px';
        }
    },
    start() {
      var that=this
        const timer = window.setInterval(function(){
          that.posimgs();
          that.a0++
        },100);
         that.timer=timer
        that.$once('hook:beforeDestroy', () => {            
          clearInterval(that.timer);                                    
      })
    },
    stop() {
        window.clearInterval(this.timer);
    },
    drawPie1() {
      var option = {
        grid: {
          top: "15%",
          bottom: "15%",
          left: "1%",
          right: "1%",
        },
        tooltip:{ trigger: 'axis',},
        xAxis: {
          data: [
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
          ],
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
        },
        yAxis: [
          {
            show: false,
            type: "value",
            
          },
        ],
        series: [
          {
            name: "回报周期",
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
            data: [4, 4.3, 4.2, 4.5, 4.9, 4.8, 4, 3.8],
          },

        ],
      }
      this.myPie = this.$echarts.init(document.getElementById('pie1'));//获取容器元素
      this.myPie.setOption(option);
      var dom = document.getElementById('pie1')
      var that = this;
      let lestener = function () {
        that.myPie.resize()
      }
      EleResize.on(dom, lestener)

    },
  },
  
// destroyed() {
//   window.clearInterval(this.timer);
// }
}
</script>

<style lang="less" scoped>
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
  >div >p{
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
  >div.active >p {
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
#pie1 {
  width: 100%;
  height: 80%;
  position: relative;
}
.pieT .el-card__body {
  padding: 0;
}
#div1{
  position: relative;
   background: url('../assets/image/bg.png') no-repeat center center;
    background-size: 80% 80%;
  >div{
    position: absolute;
    width: 120px;
    height:120px;
    text-align: center;
     background: url('../assets/image/circle.png') no-repeat;
     background-size: 100% 100%;
    >p:nth-child(1){
      color:#fff;
      font-size: 2em;
      margin-top:10px
    }
    >p:nth-child(2){
      // margin-top:5px
    }
  }
  >div:nth-child(1){
     background: url('../assets/image/circle1.png') no-repeat;
     background-size: 100% 100%;
  }
   >div:nth-child(2){
     background: url('../assets/image/circle2.png') no-repeat;
     background-size: 100% 100%;
  }
}
/* 圆环样式  */
.wrap{
	background-color:#F2F7FF;
	position: relative; 
  width: 100%; 
  height: 100%; 
	border-radius: 50%;
	.circle{
		box-sizing: border-box; 
		border: 1px solid #F2F7FF; 
		clip:rect(0, 94px, 94px, 47px);
		position: absolute; 
		width: 100%; 
		height: 100%; 
		border-radius: 50%;
		.percent{
			box-sizing: border-box;  
			top:-1px; left:-1px;
			position: absolute; 
			width: 100%; 
			height: 100%; 
			border-radius: 50%;
		}
		.left{
			border: 20px solid #3C8CFF; 
			clip: rect(0, 47px,94px,0);
		} 
		.right{
			border: 20px solid #3C8CFF; 
			clip: rect(0, 47px, 94px, 47px);
		}
		.wth0{width:0;}
	}
	.clip-auto{
		clip:rect(auto, auto, auto, auto);
	}
	.inside-round {
		position: absolute;
		width: 80%;
		height: 80%;
		background: #fff;
		border-radius: 50%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		text-align: center;
    line-height: 35px;
    >p:nth-child(1){
      font-size:12px;
    }
    >p:nth-child(2){
      font-size:16px;
    }
	}
}

</style>