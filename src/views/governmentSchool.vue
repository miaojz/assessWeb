<template>
  <div class="contain">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card height">
          <div slot="header" class="clearfix">
            <span class="cardHead">
              <i class="el-icon-s-management"></i>
              {{city}}投入产出比
              <el-link icon="el-icon-arrow-left" style="float:right" v-if='city!="河南"' @click="mapback">返回</el-link>
            </span>
          </div>
          <div id="map" class='height'></div>
          <div class="mapTip">
            <div class="agile-num">
              <p>130%</p>
            </div>
            <div class="agile-detail">{{city}}投入产出比</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <Right></Right>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Right from '../components/right1'
import county from '@/config/countyData'
import mapData from '@/config/map'
import { EleResize } from '@/config/esresize'
//import "echarts/map/js/province/henan.js";
import "../assets/js/lnglatjson/henan.js";
import "../assets/js/lnglatjson/anyang/anyang.js";
import "../assets/js/lnglatjson/hebi/hebi.js";
import "../assets/js/lnglatjson/jiaozuo/jiaozuo.js";
import "../assets/js/lnglatjson/jiyuan/jiyuan.js";
import "../assets/js/lnglatjson/kaifeng/kaifeng.js";
import "../assets/js/lnglatjson/luohe/luohe.js";
import "../assets/js/lnglatjson/luoyang/luoyang.js";
import "../assets/js/lnglatjson/nanyang/nanyang.js";
import "../assets/js/lnglatjson/pingdingshan/pingdingshan.js";
import "../assets/js/lnglatjson/puyang/puyang.js";
import "../assets/js/lnglatjson/sanmenxia/sanmenxia.js";
import "../assets/js/lnglatjson/shangqiu/shangqiu.js";
import "../assets/js/lnglatjson/xinxiang/xinxiang.js";
import "../assets/js/lnglatjson/xinyang/xinyang.js";
import "../assets/js/lnglatjson/xuchang/xuchang.js";
import "../assets/js/lnglatjson/zhengzhou/zhengzhou.js";
import "../assets/js/lnglatjson/zhoukou/zhoukou.js";
import "../assets/js/lnglatjson/zhumadian/zhumadian.js";
export default {
  name: 'school',
  components: {
    Right: Right
  },
  data() {
    return {
      newsList: '',
      city: this.$store.state.city,
      chart: null,
    }
  },
  created() { },
  mounted() {
    if (!this.$store.state.city) this.city = localStorage.getItem(city)
    this.drawMap(this.city)
    this.mapclick()
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
    drawMap(city) {
      var data = mapData[city];
      var mapName = city;
      var zoom=1.2
      if(city!='河南')zoom=1;
      // 最大值 4
      var max = Math.max.apply(Math, data.map(item => { return item.value })) + 20
      // 最小值 1
      var min = 0
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
            var tipHtml = '';
            var value = params.data.value
            tipHtml = '<div style="width:200px;height:100px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
              + '<div style="width:80%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' + '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' + '</i>'
              + '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' + '</div>'
              + '<div style="padding:12px">'
              + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
              + '投入产出比：' + '<span style="color:#11ee7d;margin:0 6px;font-size:14px;">' + value + '</span>' + '%' + '</p>'
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
          seriesIndex: [0],
          text: ['投入产出比(%)'],
          textGap: 16,
          align: 'left',
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
              },
              formatter: '{b}: {c}'
            },
            emphasis: {
              show: false,
            }
          },
          //roam: true,
          itemStyle: {
            normal: {
              areaColor: '#023677',
              borderColor: '#1180c7',
            },
            emphasis: {
              areaColor: '#4499d0',
            }
          },
          zoom: zoom,
          layoutCenter: ['40%', '50%'],
        },
        series: [
          {
            type: 'map',
            geoIndex: 0,
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
            //roam: true,
            animation: false,
            data: data
          },
        ]
      };
      this.chart=this.$echarts.init(document.getElementById('map'))
      this.chart.setOption(option,true);
      var dom = document.getElementById('map');
      var that = this;
      let lestener = function () {
        that.chart.resize()
      };
      EleResize.on(dom, lestener)
    },
    mapclick() {
      var that = this;
      // 处理点击事件并且跳转到相应的百度搜索页面
      that.chart.on('click', function (param) {
        var name = param.name;
        var city = name.slice(0, name.length - 1)
        that.drawMap(city)
        that.city = city
        that.$store.commit('changeCity', city)
        
      });
    },
    mapback() {
      this.drawMap('河南')
      this.$store.commit('changeCity', '河南')
      this.city = '河南'
    }
  },
  watch: {
    
  },
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
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      height: 100%;
    }
  }
}
.box-card {
  position: relative;
}
.mapTip {
  position: absolute;
  top: 70px;
  left: 10px;
  width: 140px;
  height: 40px;
  border-left: 3px solid #f8ac59;
  background: #fafafb;
  margin: 0 0 10px 0;
  padding: 10px;
  border-radius: 2px;
}
.agile-detail {
  margin-top: 5px;
  font-size: 12px;
}
.agile-num {
  color: #f8ac59;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  > p:nth-child(2) {
    color: #cc355b;
  }
}
</style>