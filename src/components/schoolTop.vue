<template>
    <el-row :gutter="20" class='school'>
        <el-col :span="6" style='height:88%'>
            <div class='flexbox title' style='margin-bottom: 7px;'>
                <div class='tit'></div>投资回收期
            </div>
             <el-card class="box-card height">
                <div id='demo1' class='height'></div>
            </el-card>
        </el-col>
        <el-col :span="18" style='height:88%'>
            <div class='flexbox title' style='margin-bottom:7px;'><div class='tit'></div>投入明细
            </div>
            <el-card class="box-card height">
                <div id='demo'></div>
                <div class='tipLegend'>
                    <div><span></span>建设投入</div>
                    <div><span></span>运营投入</div>
                </div>
            </el-card>
        </el-col>
          <!-- 弹出框 -->
    <eDialog :show.sync="show" :title="title" @close="close"></eDialog>
    </el-row>
  
</template>
<script>
import Vue from 'vue';
import 'echarts-liquidfill/src/liquidFill.js';
import eDialog from '../components/eDialogSchool'
export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
      show:false,
      title:'项目投资推演',
      data:[
              {
            "value": 302,
            "name": "建设投入", 
            "path": "建设投入",
              itemStyle: {
                color: '#CC355B',
            },
            "children": [
                {
                    "value": 90,
                    "name": "接入以上投入",
                    "path": "建设投入/接入以上投入",
                     itemStyle: {
                                colorSaturation: 0.60,
                                colorAlpha: 1
                            },
                    "children": [
                        {
                            "value": 90,
                            "name": "接入以上投入",
                            "path": "建设投入/接入以上投入/接入以上投入",
                            itemStyle: {
                                colorSaturation: 0.50,
                                colorAlpha: 1
                            },
                        },
                        
                    ]
                },
                {
                    "value": 92,
                    "name": "接入投入",
                    "path": "建设投入/接入投入",
                    itemStyle: {
                        colorSaturation: 0.62,
                        colorAlpha: 1
                    },
                    "children": [
                        {
                            "value": 24,
                            "name": "接入光缆长度",
                            "path": "建设投入/接入投入/接入光缆长度"
                        },
                        {
                            "value": 16,
                            "name": "接入光缆投资",
                            "path": "建设投入/接入投入/接入光缆投资"
                        },
                        {
                            "value": 20,
                            "name": "OUN设备数量",
                            "path": "建设投入/接入投入/OUN设备数量"
                        },
                        {
                            "value": 16,
                            "name": "OUN设备型号",
                            "path": "建设投入/接入投入/OUN设备型号"
                        },
                        {
                            "value": 16,
                            "name": "OUN投资",
                            "path": "建设投入/接入投入/OUN投资"
                        }
                    ]
                },
                {
                    "value": 120,
                    "name": "平台投入",
                    "path": "建设投入/平台投入",
                    itemStyle: {
                        colorSaturation: 0.5,
                        colorAlpha: 1
                    },
                    "children": [
                        {
                            "value": 40,
                            "name": "信息化平台",
                            "path": "建设投入/平台投入/信息化平台"
                        },
                        {
                            "value": 40,
                            "name": "集聚类设备投资",
                            "path": "建设投入/平台投入/集聚类设备投资"
                        },{
                            "value": 40,
                            "name": "其他",
                            "path": "建设投入/平台投入/其他"
                        }
                    ]
                }
            ]
        },
        {
            "value": 194,
            "name": "运营投入",
            "path": "运营投入",
            itemStyle: {
                color:'#7591CC'//'rgba(143, 219, 255 ,1)' //'#7591CC',
            },
            "children": [
                {
                    "value": 74,
                    "name": "年度人力投资",
                    "path": "运营投入/年度人力投资",
                      itemStyle: {
                       //color: '#7591CC',
                        colorSaturation: 0.55,
                        colorAlpha: 0.8
                    },
                    "children": [
                        {
                            "value": 74,
                            "name": "人工费",
                            "path": "运营投入/年度人力投资/人工费",
                              itemStyle: {
                            //color: '#7591CC',
                                colorSaturation: 0.45,
                                colorAlpha: 0.8
                            },
                        }
                    ]
                },
                {
                    "value": 120,
                    "name": "配套投资",
                    "path": "运营投入/配套投资",
                    itemStyle: {
                    //  color: '#f3aa02',
                        colorSaturation: 0.45,
                        colorAlpha: 1
                    },
                    "children": [
                        {
                            "value": 40,
                            "name": "光缆维护",
                            "path": "运营投入/配套投资/光缆维护",
                            itemStyle: {
                            //  color: '#f3aa02',
                                colorSaturation: 0.55,
                                colorAlpha: 1
                            },
                        },
                        {
                            "value": 40,
                            "name": "机房维护",
                            "path": "运营投入/配套投资/机房维护",
                            itemStyle: {
                            //  color: '#f3aa02',
                                colorSaturation: 0.55,
                                colorAlpha: 1
                            },
                        },
                        {
                            "value": 40,
                            "name": "电力消耗",
                            "path": "运营投入/配套投资/电力消耗",
                            itemStyle: {
                            //  color: '#f3aa02',
                                colorSaturation: 0.55,
                                colorAlpha: 1
                            },
                        }
                    ]
                },
            ]
        },
    ],
    chart:''
    }
  },
    components: {
        eDialog:eDialog
  },
  created() { },
  mounted() {
      this.drawjuxingtu(this.data)
      this.drawPie()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {    
    drawjuxingtu(data){
        var option=this.$commonJS.diskdata(data);
         this.chart = this.$echarts.init(document.getElementById('demo'));//获取容器元素
        window.onresize = this.chart.resize;
        this.chart.setOption(option,true);
    },
    drawPie(){
        var uploadedDataURL = require("../assets/image/data.png");
        let Green = {
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#99da69' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#01babc' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        };
        var dataValArray = 0.63;
        var datatext = ['17.25','20','12','32','19'];
        var datasubtext = ['投资回报周期'];
        var option = {
            title: {
                text: '3年',
                subtext: '投资回报周期',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize:26,
                    fontWeight:'normal',
                    color: ['#67828c'],
                },
                textVerticalAlign:'middle',
                subtextStyle: {
                    color: '#67828c',
                    fontSize: 15,
                    align: 'center',
                }
            },
            series: [{
                //渐变圆环
                name: "",
                type: "pie",
                radius: ["43%", "58%"],
                startAngle: 180,
                hoverAnimation: false,
                avoidLabelOverlap: true,
                z: 0,
                zlevel: 0,
                label: {
                    show: false,
                    normal: {show: false}
                },
                data: [{
                    value: 0,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: Green
                        }
                    }
                }]
            },
                {
                    //仪表盘样式
                    name: "",
                    type: "gauge",
                    radius: "58%",
                    startAngle: 180,
                    clockwise:true,
                    splitNumber: 40,
                    hoverAnimation: true,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        length: 20,
                        lineStyle: {
                            width: 1,
                            color: "#fff"
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    detail: {
                        show: false
                    },
                    data: [{
                        value: Math.round((dataValArray*100)),
                        name: ""
                    }]
                },
                {
                    //进度圆环
                    name: 'Line 1',
                    type: 'pie',
                    startAngle: 180,
                    clockWise: true,
                    radius:['64%','66%'],
                    itemStyle: {
                        normal: {
                            label: {
                                show: true
                            },
                            labelLine: {
                                show: false
                            },
                        }
                    },
                    hoverAnimation: false,

                    data: [{
                        value:  Math.round((dataValArray*100)) ,
                        itemStyle: {
                            normal: {
                                color: '#20da97'
                            }
                        }
                    },{//画中间的图标
                        name: "",
                        value: 0,
                        label: {
                            position:'inside',
                            backgroundColor: {
                                image: uploadedDataURL
                            },
                            width: 16,
                            height: 16,
                            borderRadius: 20,
                            padding: 11
                        }
                    }, {
                        value: 100- Math.round((dataValArray*100)) ,
                        name: 'invisible',
                        itemStyle: {
                            normal: {
                                color: 'transparent', //未完成的圆环的颜色
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        }
                    }
                    ]
                }
            ]
        };
        var chart = this.$echarts.init(document.getElementById('demo1'));//获取容器元素
                window.onresize = chart.resize;
                chart.setOption(option,true);
    },
    close(e) {
        this.show = false;
    },
    open() {
      this.show = true;
    },
  }
}
</script>

<style lang="less" scoped>
 #demo{
     width:100%;
     height:100%
 }
 .tit{
   width: 6px;
	height: 20px;
  background-color: #0a9cf5;
  margin-right:10px;
 }
 .title{
   margin-bottom: 0;
   font-family: SourceHanSansSC-Medium;
	font-size: 16px;
	font-weight: normal;
	font-stretch: normal;
	letter-spacing: 0px;
  color: #333333;
      line-height: 18px;
      margin-left:10px;
      span{
        cursor: pointer;
      }
 }
 .box-Card{
     position: relative;
 }
 .tipLegend{
     position: absolute;
     right:16px;
     top:50px;
     >div{
         margin-bottom: 5px;
     }
     >div>span{
        display: inline-block;
         width: 24px;
         height: 14px;
         margin-right: 5px;
         border-radius:3px
     }
     >div:nth-child(1)>span{
         background-color: #CC355B
     }
     >div:nth-child(2)>span{
         background-color: #7591CC
     }
 }
</style>