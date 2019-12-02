<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="cardHead">
        <i class="el-icon-s-management"></i>
        {{page}}投入产出比
      </span>
    </div>
    <div id="map"></div>
    <div class="mapTip">
      <div class="agile-num">
        <p>{{stop}}%</p>
      </div>
      <div class="agile-detail">河南省投入产出比</div>
    </div>
  </el-card>
</template>


<script>
import Vue from 'vue';
import "../assets/js/lnglatjson/henan.js";
export default {
  name: 'Left',
  data() {
    var map = [{ "value": 0, "name": "新乡市" }, { "value": 0, "name": "焦作市" }, { "value": 0, "name": "濮阳市" }, { "value": 0, "name": "许昌市" }, { "value": 0, "name": "漯河市" }, { "value": 0, "name": "三门峡市" }, { "value": 0, "name": "南阳市" }, { "value": 0, "name": "商丘市" }, { "value": 0, "name": "周口市" }, { "value": 0, "name": "信阳市" }, { "value": 0, "name": "驻马店市" }, { "value": 0, "name": "济源市" }, { "value": 0, "name": "郑州市" }, { "value": 0, "name": "开封市" }, { "value": 0, "name": "洛阳市" }, { "value": 0, "name": "平顶山市" }, { "value": 0, "name": "安阳市" }, { "value": 0, "name": "鹤壁市" }]
    return {
      page: this.$route.params.id,
      data: [],
      stop: '',
      quyu: [],
      mapdata: map,

    }
  },
  created() { },
  mounted() {
    this.maptop()
    this.ditumap()
  },
  watch: {
    $route(to, from) {
      this.drawMap()
    },
    mapdata: {
      deep: true,
      handler: function (newval, oldval) {
        this.drawMap()
      }
    },
    date(val) {
      this.maptop()
      this.ditumap()
    }
  },
  computed: {
    date: function () {
      return this.$store.state.date
    }
  },
  methods: {
    //地图左上角数据
    maptop() {
      var that = this;
      var param = {
        pageType: "wireless",
        city: "全省",
        year:that.date
      }
      this.$post('/api/index/mapTop', param).then(function (res) {
        that.stop = res.msg[0].trccb
      })
    },//地图
    ditumap() {
      var that = this
      var param = {
        pageType: "wireless",
        year: that.date,
        dataType: 'json'
      }
      that.$post('/api/index/map', param).then(function (res) {
        var msg = res.msg, data = []
        msg.map((item, key, arry) => {
          data.push({ 'name': item.city, 'value': item.trccb })
        })
        that.mapdata=[]
        that.mapdata = data
      })
    },
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
    drawMap() {
      // var data = [{ "value": 196.72, "name": "新乡市" }, { "value": 572.61, "name": "焦作市" }, { "value": 489.98, "name": "濮阳市" }, { "value": 341.53, "name": "许昌市" }, { "value": 393.22, "name": "漯河市" }, { "value": 274.62, "name": "三门峡市" }, { "value": 231.75, "name": "南阳市" }, { "value": 270.38, "name": "商丘市" }, { "value": 408.19, "name": "周口市" }, { "value": 226.11, "name": "信阳市" }, { "value": 452.13, "name": "驻马店市" }, { "value": 148.8, "name": "济源市" }, { "value": 363.47, "name": "郑州市" }, { "value": 225.48, "name": "开封市" }, { "value": 289.08, "name": "洛阳市" }, { "value": 530.01, "name": "平顶山市" }, { "value": 254.41, "name": "安阳市" }, { "value": 276.3, "name": "鹤壁市" }]
      var data = this.mapdata;
      var geoCoordMap = { // 地图数据
        "郑州市": [113.43808, 34.619528],
        "安阳市": [114.336098, 36.082031],
        "濮阳市": [115.031171, 35.75372],
        "新乡市": [113.916985, 35.287443],
        "鹤壁市": [114.301029, 35.733213],
        "焦作市": [113.249221, 35.186851],
        "济源市": [112.546961, 35.088732],
        "三门峡市": [110.907399, 34.434786],
        "洛阳市": [111.988613, 34.350542],
        "南阳市": [112.446926, 32.938165],
        "平顶山市": [113.307718, 33.735241],
        "许昌市": [113.826063, 34.022956],
        "开封市": [114.53157, 34.637588],
        "商丘市": [115.688587, 34.399763],
        "周口市": [114.858122, 33.747057],
        "漯河市": [114.026405, 33.575855],
        "驻马店市": [114.048353, 32.963372],
        "信阳市": [114.981269, 31.963486]
      };
      var mapName = '河南';
      // 最大值 4
      var max = Math.max.apply(Math, data.map(item => { return item.value })) + 20
      var min = Math.min.apply(Math, data.map(item => { return item.value })) - 20
      if (min < 0) min = 0
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      // 最小值 1
      var min = Math.min.apply(Math, data.map(item => { return item.value })) - 20
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
            tipHtml = '<div style="width:200px;height:100px;background:rgba(22,80,158,0.8);border:1px solid rgba(7,166,255,0.7)">'
              + '<div style="width:80%;height:40px;line-height:40px;border-bottom:2px solid rgba(7,166,255,0.7);padding:0 20px">' + '<i style="display:inline-block;width:8px;height:8px;background:#16d6ff;border-radius:40px;">' + '</i>'
              + '<span style="margin-left:10px;color:#fff;font-size:16px;">' + params.name + '</span>' + '</div>'
              + '<div style="padding:12px">'
              + '<p style="color:#fff;font-size:12px;">' + '<i style="display:inline-block;width:10px;height:10px;background:#16d6ff;border-radius:40px;margin:0 8px">' + '</i>'
              + '投入产出比：' + '<span style="color:#11ee7d;margin:0 6px;font-size:14px;">' + params.data.value + '</span>' + '%' + '</p>'
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
              formatter: "{b}:{c}"
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
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
                formatter: "{b}:{c}"
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
          {
            name: '无线网投入产出比',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: 1,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: function (param) {
                  return param.data.value[2] + '%'
                },
                position: 'bottom',
                show: true,
                textStyle: {
                  color: '#333'
                },
              }
            },
            itemStyle: {
              normal: {
                color: '#FF7F50',
                shadowBlur: 10,
                shadowColor: '#FF7F50'
              }
            },
            zlevel: 1
          },

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