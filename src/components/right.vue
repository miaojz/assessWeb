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
                <i class="el-icon-s-management"></i>
                <span @click="backLine" class="back">产出</span>
                <span>{{Lineheader}}</span>
              </span>
            </div>
             <div class="height" id="div1" v-show='secondLine' v-for="item in chans" :key="item.id">
              <div class="oimg" @mouseover="stop" @mouseout="start()" @click="secondClick('回本周期')">
                <p>{{item.tzhsq}}</p>
                <p>回本周期</p>
              </div>
              <div class="oimg" @mouseover="stop" @mouseout="start()" @click="secondClick('arpu')">
                <p>{{item.arpu}}</p>
                <p>arpu(元)</p>
              </div>
              <div class="oimg" @mouseover="stop" @mouseout="start()" @click="secondClick('用户数')">
                <p>{{item.yhs}}</p>
                <p>用户数(万)</p>
              </div>
            </div>
            <div class='height' id='pie1' v-show='!secondLine'></div>
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
      pietitle: '投资付现',
      pieheader: '',
      touruNum:[],
      years:[],
      tzdata:[],
      srdata:[],
      trccdata:[],
      tourus:[],
      // datas: [4, 4.3, 4.2, 4.5, 4.9, 4.8, 4, 3.8],
      dats: [],//日期
      binchan:[],
      weihu:[],
      niandu:[],
      // touruNum: [177133, 169043, 156670, 123908, 61954],
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
      pieActive:0,
      secondLine:true,
      da: 120, //图片间隔角度
      a0: 0, //已旋转角度,
      Lineheader:'',
      chans:[],
      arpuLists:[],
      tzhsqLists:[],
      yearLists:[],
      suur:[],//产出换算媒介
      commType:null //产出类型

    }
  },
  created() { },
  mounted() {
     this.linne()
     this.chanchus()
     this.bingtutr()
    //  this.bingtutr()
    if (this.$route.path == '/' || this.$route.path == '/index/投资收益评估概览') {
      this.com_name = 'eDialog'
    } else if (this.$route.path == '/index/无线网概览') {
      this.com_name = 'eDialogschool'
      this.piedata = pieData.network
      // this.binchan = pieData.network
    } else {
      this.com_name = 'eDialogschool'
    }
     //旋转运动
    this.$nextTick(() => {
      this.chart = this.$echarts.init(document.getElementById('pie'));//获取容器元素
      this.drawLine()
      // this.drawPie(this.binchan)
      this.clickPie()
      this.title = this.page
      this.start()
    })
  },
  watch: {
    $route(to, from) {
      this.piedata = pieData.sumdata
      if (this.$route.path == '/' || this.$route.path == '/index/投资收益评估概览') {
        this.com_name = 'eDialog';
        this.page = '';
      } else if (this.$route.path == '/index/无线网概览/network') {
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
          this.drawPie(this.niandu)
        } else {
          this.drawPie(this.weihu)
        }
      }
    }
  },
  methods: {
  // 河南省投入产生比
       linne(){
        var that =this
         this.$post('/api/index/line',{
          pageType: "wireless",
          city:"全省",
          year:"year",
          dataType: 'json'
           }).then(function(res){
             console.log(res)
              for (var i= 0; i < res.msg.length; i++) {     
              that.touruNum.push((res.msg[i].fx/10000).toFixed(2))  //付现
              that.years.push(res.msg[i].year)//日期
              that.tzdata.push(res.msg[i].tz)//投入
               that.srdata.push(res.msg[i].sr)//产出
             that.trccdata.push(res.msg[i].trccb)
             }
            //  console.log(that.touruNum)
            //  console.log(that.years)
            //  console.log(that.tzdata)
            //  console.log(that.srdata)
           that.drawLine()
         })
    },
    // 投入请求
       bingtutr(){
         var that= this
        this.$post('/api/index/pieIn',{
          pageType: "wireless",
          city:"全省",
          year:"2018",
          dataType: 'json'
           }).then(function(res){
            //  console.log(res)   
         
                  var tr_ndzbkz_tzhj=0,tr_bnfxcb_whf=0;
                  if(res.msg.tr_ndzbkz_tzhj)tr_ndzbkz_tzhj=(res.msg.tr_ndzbkz_tzhj/1000).toFixed(2);
                  if(res.msg.tr_bnfxcb_whf)tr_ndzbkz_tzhj=res.msg.tr_bnfxcb_whf;
                  // console.log(tr_ndzbkz_tzhj)
                 that.binchan.push({"check":true,"name":"投资合计","secondName":"year","value":tr_ndzbkz_tzhj},
                 {"check":true,"name":"付现合计","secondName":"ben","value":tr_bnfxcb_whf})
                // console.log(that.binchan)
                 that.drawPie(that.binchan)
                  var tr_ndzbkz_tzhj=0,tr_bnfxcb_whf=0;
                if(res.msg.tr_ndzbkz_tzhj)tr_ndzbkz_tzhj=res.msg.tr_ndzbkz_tzhj;
                if(res.msg.tr_bnfxcb_whf)tr_ndzbkz_tzhj=res.msg.tr_bnfxcb_whf;
                that.weihu.push({"check":false,"name":"维护费","secondName":"","value":tr_bnfxcb_whf},
                {"check":false,"name":"铁塔租赁费","secondName":"","value":tr_bnfxcb_whf},
                {"check":false,"name":"油机发电费","secondName":"","value":tr_bnfxcb_whf},
                {"check":false,"name":"电费","secondName":"","value":tr_bnfxcb_whf})
                // console.log(that.weihu)
                var tr_ndzbkz_qzxgpt =(res.msg.tr_ndzbkz_qzxgpt/10000).toFixed(2)
                var tr_ndzbkz_qzjz =(res.msg.tr_ndzbkz_qzjz/10000).toFixed(2)
                var  tr_ndzbkz_qzhxw= (res.msg.tr_ndzbkz_qzhxw/10000).toFixed(2)
                var  tr_ndzbkz_qz_ipran= (res.msg.tr_ndzbkz_qz_ipran/10000).toFixed(2)
                var  tr_ndzbkz_qz_cn= (res.msg.tr_ndzbkz_qz_cn/10000).toFixed(2)
                var tr_ndzbkz_qzcs= (res.msg.tr_ndzbkz_qzcs/10000).toFixed(2)
                 that.niandu.push({"check":false,"name":"4G相关平台","secondName":"","value":tr_ndzbkz_qzxgpt},
                {"check":false,"name":"4G基站","secondName":"","value":tr_ndzbkz_qzjz},
                {"check":false,"name":"4G核心网","secondName":"","value":tr_ndzbkz_qzhxw},
                // {"check":false,"name":"4G年度资本开支其中4G核心网","secondName":"","value":res.msg.tr_ndzbkz_qzhxw},
                {"check":false,"name":"IPRan","secondName":"","value":tr_ndzbkz_qz_ipran},
                {"check":false,"name":"CN2","secondName":"","value":tr_ndzbkz_qz_cn},
                {"check":false,"name":"传输","secondName":"","value":tr_ndzbkz_qzcs})
                      console.log(tr_ndzbkz_qzcs) 
                 })
              },
    // 产出
         chanchus(){
           var that =this
           var svf =[]
          this.$post('/api/index/pieOut',{
          pageType: "wireless",
          city:"全省",
          year:"2018",
          dataType: 'json'
           }).then(function(res){
             console.log("pieOut---------------")
             console.log(res)
             console.log("pieOut---------------")
                var yhss = (res.msg.yhs/10000).toFixed(2)   
               for (var i = 0; i <res.msg.yhsList.length; i++) {
                     that.suur.push((res.msg.yhsList[i]/10000).toFixed(2))
                // console.log(sxc)      
                }
              // console.log(that.suur) 
             that.chans.push({"arpu":res.msg.arpu,"tzhsq":res.msg.tzhsq,"yhs":yhss})   
             that.arpuLists.push({"arpuList":res.msg.arpuList},{"tzhsqList":res.msg.tzhsqList},{"yearList":that.suur})  
            //  that.tzhsqLists.push({"tzhsqList":res.msg.tzhsqList})
            //  that.yearLists.push({"yearList":res.msg.yearList})
              //  that.arpuLists={"arpuList":res.msg.arpuList}
             that.dats.push(res.msg.yearList)
            //  console.log(that.dats) 
            //  that.drawPie1(name)
             
           })
      },
    back() {
      // if (this.$route.path == '/index/无线网概览/network') {
      //   this.piedata = pieData.network
      // } else {
      //  // this.piedata = pieData.sumdata
      //    this.piedata = this.binchan
      // }
        this.drawPie(this.binchan)
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
      // console.log(piedata)
      var colorList = ['#6990D5', '#FF7F50', '#3feed4', '#00d488', '#afa3f5', '#f1bb4c', "#6A9DFF", '#ffc257', 'rgba(5, 65, 110, 1)', '#3bafff', '#ffedcc', '#fd6f97', '#fed4e0', '#a181fc', '#115dab', '#e3d9fe'];
      var option = {
        
        title: {
          subtext: that.pietitle,
          x: '38%',
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
      console.log(1)
      var that = this;
      // 处理点击事件并且跳转到相应的百度搜索页面
      this.chart.on('click', function (param) {
        // console.log(param)
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
      // var category = ['2015', '2016', '2017', '2018', '2019'];
     var category =this.years

      // console.log(this.years)
      var dottedBase = [];
      var lineData = this.tzdata;//投入
      var barData = this.srdata;//产出
      var newData = this.tzdata//付现
      var rateData = JSON.parse(JSON.stringify(this.trccdata)); 
       var dot = this.trccdata
      var len=rateData.length-1
      // rateData[len]='-'  曲线和实线
      // console.log(dot)
      // var rateData = []; var dot = []
      // for (var i = 0; i < 5; i++) {
      //   var bar = barData[i];
      //   if (barData[i].value) {
      //     bar = barData[i].value
      //   }
      //   var line = lineData[i]
      //   if (lineData[i].value) line = lineData[i].value;
      //   var rate = bar / line;
      //   if (i == 4) {
      //     rateData[i] = '-'
      //   } else {
      //     rateData[i] = rate.toFixed(2);
      //   }
      //   dot[i] = rate.toFixed(2)
      // }
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
          // data: ['产出', '投入', '收入', '投入产出比',],
          data: ['资本开支', '付现成本', '收入', '投入产出比',],
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
            formatter: '{value}元 ',
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
            formatter: '{value}% ',
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
            // name: '付现',
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
            // name: '产出',
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
          },
          {
            // name: '投入',
            name: '资本开支',
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
    
    drawPie1(data) {

      var option = {
        grid: {
          top: "15%",
          bottom: "15%",
          left: "10%",
          right: "6%",
        },
        tooltip:{ trigger: 'axis',
             formatter:function(data) {
                    var result = data[0].name + '<br />';
                 
                    data.forEach(function (item) {
                      result += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'  + '"></span>  ' + item.data=='回本周期'?: + '万<br/>';
                    });
                    return result;
              
             }
        },
        legend:{
            show:true,
            data:[name]
          },
        xAxis: {
          data:this.dats[0],
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
          boundaryGap:0
        },
        yAxis: [
          {
            show: true,
            type: "value",
            axisLine: {
              show: false, //隐藏轴线
            },
            splitLine:{
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
        data:data
          },
        ],  
      }  
      this.myPie = this.$echarts.init(document.getElementById('pie1'));//获取容器元素
      this.myPie.setOption(option,true);
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
      for (var i = 0; i < 3; i++) {
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
      that.timer=timer
      that.$once('hook:beforeDestroy', () => {            
          clearInterval(timer);                                    
      })
    },
    stop() {
      window.clearInterval(this.timer);
    },
    secondClick(type){
      // console.log("type=============="+type)
      this.commType = type;
      // console.log("commType=============="+this.commType)
        this.secondLine=!this.secondLine;
        this.$nextTick(() => {
        this.Lineheader=' > '+type
        if(type=="用户数"){
         this.drawPie1(this.arpuLists[2].yearList)
        }
        if(type=="arpu"){
         this.drawPie1(this.arpuLists[0].arpuList)
        }
         if(type=="回本周期"){
         this.drawPie1(this.arpuLists[1].tzhsqList)
        }
        this.stop()
       
      })
      
    },
    backLine(){
      this.secondLine=true;
      this.$nextTick(() => {
          this.start()
          this.Lineheader='' 
        })
    }
  }
}
</script>

<style lang="less" scoped>
.contain{
  width:99%;
  height:100%;
  box-sizing: border-box;
  .el-row {
    width:100%;
    height:100%;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col{
      height:100%;
    }
    .box-card{
      height:100%
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
.cardHead span{
  cursor: pointer;
}
</style>