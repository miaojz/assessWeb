<template>
  <div class="height school">
    <div class="leftTop flexbox">
      <div class="mar1 flexbox">
        <div class="topimg">
          <img src="../assets/image/xuexiao.png" alt />
        </div>
        <div class="topcon">
          <div>物业点数量</div>
          <div>
            118
            <span class="danwei">个</span>
          </div>
        </div>
      </div>
      <div class="mar1 flexbox">
        <div class="topimg">
          <img src="../assets/image/shentoulv.png" alt />
        </div>
        <div class="topcon">
          <div>渗透率</div>
          <div>
            20
            <span class="danwei">%</span>
          </div>
        </div>
      </div>
      <div class="mar1 flexbox">
        <div class="topimg">
          <img src="../assets/image/koubei1.png" alt />
        </div>
        <div class="topcon">
          <div>口碑好 低值</div>
          <div>
            38
            <span class="danwei">个</span>
          </div>
        </div>
      </div>
      <div class="flexbox">
        <div class="topimg">
          <img src="../assets/image/topdiv3.png" alt />
        </div>
        <div class="topcon">
          <div>口碑差 高值</div>
          <div>
            118
            <span class="danwei">个</span>
          </div>
        </div>
      </div>
    </div>
    <div class="leftBottom">
        <el-card class="box-card height">
            <div id="map" class='height'></div>
            <!-- select -->
            <div class='selectBtn'>
               <el-select v-model="value" size='mini' clearable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
        </el-card>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { EleResize } from '@/config/esresize'
import "echarts/map/js/province/henan.js";
export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
      options: [{
          value: '1',
          label: '物业点分布'
        }, {
          value: '2',
          label: '用户规模'
        }, {
          value: '3',
          label: '渗透率'
        }, {
          value: '4',
          label: '投诉数量'
        }, {
          value: '5',
          label: '高价值用户数'
        }],
        value: ''
    }
  },
  components: {

  },
  created() { },
  mounted() {
    this.drawmap()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {
    drawmap() {
       var data = [{ name: "安阳市",  value: 92 },
      { name: "新乡市",  value: 91 },
      { name: "濮阳市",  value: 183 },
      { name: "焦作市",  value: 155 },
      { name: "鹤壁市",  value: 108 },
      { name: "三门峡市",  value: 83 },
      { name: "信阳市",  value: 98 },
      { name: "南阳市",  value: 106 },
      { name: "周口市",  value: 158 },
      { name: "商丘市",  value: 130 },
      { name: "平顶山市",  value: 176 },
      { name: "开封市",  value: 102 },
      { name: "洛阳市",  value: 122 },
      { name: "济源市",  value: 111 },
      { name: "漯河市",  value: 153 },
      { name: "许昌市",  value: 140 },
      { name: "郑州市",  value: 190 },
      { name: "驻马店市",  value: 192 }];
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
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          var rate = Number(data[i].rate)
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      var max = Math.max.apply(Math, data.map(item => { return item.value })) + 20

      // 最小值 1
      var min = Math.min.apply(Math, data.map(item => { return item.value })) - 20
      var option = this.$commonJS.chartMap(convertData(data),max,min);
      var myChart = this.$echarts.init(document.getElementById('map'));//获取容器元素
      var dom = document.getElementById('map')
      myChart.setOption(option,true);
      let lestener = function () {
        myChart.resize()
      }
      EleResize.on(dom, lestener)
    },
  }
}
</script>

<style lang="less" scoped>
.leftTop {
  width: 100%;
  > div {
    flex: 1;
    font-size: 14px;
    color: #000000;
    padding: 5px;
    text-align: center;
    line-height: 38px;
    position: relative;
    background-color: white;
    background-size: 100% 100%;
    height: 80px;
  }
  .topimg {
    width: 36%;
    text-align: center;
    height: 100%;
    line-height: 72px;
}  
.topimg>img {
    width: 50%;
    vertical-align: middle;
}
.topcon>div:nth-child(2) {
    font-family: Hooge0555;
    font-size: 20px;
    color: #000;
} 
.danwei {
    font-size: 12px;
    margin-left: 5px;
}
>div::after {
    content: '';
    width: 100%;
    height: 100%;
    display: inline-block;
    background: url(../assets/image/top-left.png) top left no-repeat,
                url(../assets/image/top-right.png) top right no-repeat,
                url(../assets/image/bottom-left.png) bottom left no-repeat,
                url(../assets/image/bottom-right.png) bottom right no-repeat;
    background-size: 3.5%;
    position: absolute;
    top: 0;
    left: 0;
}
}
.leftBottom{
    width: 100%;
    height:calc(100% - 100px);
    margin-top: 10px;
    position: relative;
}
.box-card{
  position: relative;
}
.selectBtn{
  position: absolute;
  top:10px;
  right:16px;
}
.leftBottom::after{
   content: '';
    width: 100%;
    height: 100%;
    display: inline-block;
    background: url(../assets/image/top-left.png) top left no-repeat,
                url(../assets/image/top-right.png) top right no-repeat,
                url(../assets/image/bottom-left.png) bottom left no-repeat,
                url(../assets/image/bottom-right.png) bottom right no-repeat;
    background-size: 0.8%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>