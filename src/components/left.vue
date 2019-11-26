<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="cardHead">
        <i class="el-icon-s-management"></i>
        {{page}}投入产出比
      </span>
    </div>
    <div id="map"></div>
    <div class='mapTip'>
        <div class='agile-num'><p>130%</p></div>
        <div class='agile-detail'>河南省投入产出比</div>
    </div>
  </el-card>
</template>


<script>
import Vue from 'vue';
//import '../assets/js/henan.js';
//require('../assets/js/henan.js')  //引入china.js地图文件
//import '../../node_modules/echarts/map/js/province/henan'
//import "echarts/map/js/china.js";
import "echarts/map/js/province/henan.js";
//import zhengzhou from "../assets/js/map/zhengzhou/zhengzhou.js";
//import anyang from "../assets/js/map/anyang/anyang.js";

export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.params.id,
      data: []
    }
  },
  created() { },
  mounted() {
    this.drawMap()
    //获取store。js {{this.$store.state.date}}
    console.log(this.$store.state.date)
  },
  watch: {
    $route(to, from) {
      if (this.$route.path == '/') {
        this.page = ''
      } else {
        this.page = to.params.id.replace('概览', '');
      }
    }
  },
  methods: {
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
    drawMap() {
      var data = [{ name: "安阳市", rate: Math.round(1e3 * Math.random()), value: 92 },
      { name: "新乡市", rate: Math.round(1e3 * Math.random()), value: 91 },
      { name: "濮阳市", rate: Math.round(1e3 * Math.random()), value: 183 },
      { name: "焦作市", rate: Math.round(1e3 * Math.random()), value: 155 },
      { name: "鹤壁市", rate: Math.round(1e3 * Math.random()), value: 108 },
      { name: "三门峡市", rate: Math.round(1e3 * Math.random()), value: 83 },
      { name: "信阳市", rate: Math.round(1e3 * Math.random()), value: 98 },
      { name: "南阳市", rate: Math.round(1e3 * Math.random()), value: 106 },
      { name: "周口市", rate: Math.round(1e3 * Math.random()), value: 158 },
      { name: "商丘市", rate: Math.round(1e3 * Math.random()), value: 130 },
      { name: "平顶山市", rate: Math.round(1e3 * Math.random()), value: 176 },
      { name: "开封市", rate: Math.round(1e3 * Math.random()), value: 102 },
      { name: "洛阳市", rate: Math.round(1e3 * Math.random()), value: 122 },
      { name: "济源市", rate: Math.round(1e3 * Math.random()), value: 111 },
      { name: "漯河市", rate: Math.round(1e3 * Math.random()), value: 153 },
      { name: "许昌市", rate: Math.round(1e3 * Math.random()), value: 140 },
      { name: "郑州市", rate: Math.round(1e3 * Math.random()), value: 190 },
      { name: "驻马店市", rate: Math.round(1e3 * Math.random()), value: 192 }];
      var geoCoordMap = { // 地图数据
        "郑州市": [113.43808, 34.619528],
        "安阳市": [114.336098, 36.082031],
        "濮阳市": [115.031171, 35.75372],
        "新乡市": [113.916985, 35.287443],
        "鹤壁市": [114.301029, 35.733213],
        "焦作市": [113.249221, 35.186851],
        "济源市": [112.546961, 35.088732],
        "三门峡市": [110.816448, 34.47742],//[110.985491,34.610972],
        "洛阳市": [112.21811, 34.494904],
        "南阳市": [112.446926, 32.938165],
        "平顶山市": [113.078183, 33.805632],
        "许昌市": [113.874441, 34.12038],
        "开封市": [114.53157, 34.637588],
        "商丘市": [115.688587, 34.399763],
        "周口市": [114.858122, 33.747057],
        "漯河市": [114.023344, 33.699014],
        "驻马店市": [114.048353, 32.963372],
        "信阳市": [114.963906, 32.215873]
      };
      var mapName = 'henan';
      // 最大值 4
      var max = Math.max.apply(Math, data.map(item => { return item.value })) + 20

      // 最小值 1
      var min = Math.min.apply(Math, data.map(item => { return item.value })) - 20
      var maxSize4Pin = 100,
        minSize4Pin = 20;

      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          var rate = Number(data[i].rate).toFixed(2)
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(rate).concat(data[i].value),
            });
          }
        }
        return res;
      };
      var option = {
        tooltip: {
          padding: 0,
          enterable: true,
          transitionDuration: 1,
          textStyle: {
            color: '#000',
            decoration: 'none',
          },
          formatter: function (params) {
            var tipHtml = ''; var data = '', rate = ''
            if (params.componentSubType == 'map') {
              rate = params.data.value;
              data = params.data.rate;
            } else {
              data = params.data.value[2]
              rate = params.data.value[3]
            }
            tipHtml = '<div style="width:200px;height:100px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
              + '<div style="width:80%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' + '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' + '</i>'
              + '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' + '</div>'
              + '<div style="padding:12px">'
              // +'<p style="color:#fff;font-size:12px;">'+'<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">'+'</i>'
              // +'无线网项目数量：'+'<span style="color:#f48225;margin:0 6px;font-size:14px;">'+data+'</span>'+'个'+'</p>'
              + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
              + '投入产出比：' + '<span style="color:#11ee7d;margin:0 6px;font-size:14px;">' + rate + '</span>' + '%' + '</p>'
              + '</div>' + '</div>';
            return tipHtml;
          }

        },

        visualMap: {
          show: true,
          min: min,
          max: max,
          left: '0',
          top: 'bottom',
          calculable: true,
          seriesIndex: [1],
          text: ['投入产出比(%)', ''],
          textGap: 16,
          align: 'left',
          // inRange: {
          //     color: ['#ffffff', '#E0DAFF', '#ADBFFF', '#9CB4FF', '#6A9DFF', '#3889FF']
          // }
          inRange: {
            color: ['#E6FFFF', '#3ab8f2', '#6990D5'] // 蓝绿
          }
        },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#666'
              }
            },
            emphasis: {
              show: false,
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: '#023677',
              borderColor: '#1180c7',
            },
            emphasis: {
              areaColor: '#4499d0',
            }
          },
          zoom: 1.2,
          layoutCenter: ['40%', '50%'],
        },
        series: [
          {
            name: '无线网投入产出比',
            type: 'scatter',
            coordinateSystem: 'geo',
            // data: convertData(data),
            // symbolSize: function(val) {
            //     return val[2]/60 ;
            // },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true,
                color: '#666'
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#FF7F50'
              }
            }
          },
          {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#fff'
                }
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
              },
              emphasis: {
                areaColor: '#2B91B7'
              }
            },
            animation: false,
            data: data
          },
          // {
          //     name: '无线网投入产出比',
          //     type: 'effectScatter',
          //     coordinateSystem: 'geo',
          //     data: convertData(data.sort(function(a, b) {
          //         return b.value - a.value;
          //     }).slice(0, 10)),
          //     symbolSize: function(val) {
          //         return val[2]/60 ;
          //     },
          //     showEffectOn: 'render',
          //     rippleEffect: {
          //         brushType: 'stroke'
          //     },
          //     hoverAnimation: true,
          //     label: {
          //         normal: {
          //             formatter: '{b}',
          //             position: 'left',
          //             show: false
          //         }
          //     },
          //     itemStyle: {
          //         normal: {
          //             color: '#FF7F50',
          //             shadowBlur: 10,
          //             shadowColor: '#FF7F50'
          //         }
          //     },
          //     zlevel: 1
          // },

        ]
      };

      var chart = this.$echarts.init(document.getElementById('map'));//获取容器元素
      window.onresize = chart.resize;
      chart.setOption(option);
    }

  }
}
</script>

<style lang="less" scoped>
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card,
#map {
  width: 100%;
  height: 99%;
}
#map {
  position: relative;
}
.box-card{
    position: relative;
}
.mapTip{
    position: absolute;
    top:70px;
    left:10px;
    width: 140px;
    height:40px;
    border-left: 3px solid #f8ac59;
    background: #FAFAFB;
    margin: 0 0 10px 0;
    padding: 10px;
    border-radius: 2px;
}
.agile-detail {
    margin-top: 5px;
    font-size: 12px;
}
.agile-num{
    color: #f8ac59;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    >p:nth-child(2){
        color: #CC355B
    }
}
</style>