<template>
  <div class="height">
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
            <div id="map"></div>
        </el-card>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
    }
  },
  components: {

  },
  created() { },
  mounted() {
    //this.drawjuxingtu(this.data)
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {
    drawjuxingtu(data) {
      var option = this.$commonJS.diskdata(data);
      this.chart = this.$echarts.init(document.getElementById('demo'));//获取容器元素
      window.onresize = this.chart.resize;
      this.chart.setOption(option, true);
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
}
</style>