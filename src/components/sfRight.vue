<template>
  <div class="height school">
    <div class="leftTop flexbox">
      <el-card class="box-card height">
        <div class="height rightcon">
          <div class="flexbox boxd">
            <div class="flex rightdiv flexbox mar">
              <div class="bottomimg flexbox">
                <div>
                  <img src="../assets/image/phone.png" alt />
                  <div>Top终端</div>
                </div>
              </div>
              <div class="con flex">
                <div>
                  <i></i>VIVO
                </div>
                <div>
                  <i></i>OPPO
                </div>
                <div>
                  <i></i>华为
                </div>
              </div>
              <div class="con flex">
                <div>30%</div>
                <div>20%</div>
                <div>10%</div>
              </div>
            </div>
            <div class="flex rightdiv flexbox mar">
              <div class="bottomimg flexbox">
                <div>
                  <img src="../assets/image/bottomdiv1.png" alt />
                  <div>Top套餐</div>
                </div>
              </div>
              <div class="con flex">
                <div>
                  <i></i>29元
                </div>
                <div>
                  <i></i>49元
                </div>
                <div>
                  <i></i>99元
                </div>
              </div>
              <div class="con flex">
                <div>35%</div>
                <div>21%</div>
                <div>24%</div>
              </div>
            </div>
          </div>
          <div class="flexbox boxd">
            <div class="flex rightdiv flexbox mar">
              <div class="bottomimg flexbox">
                <div>
                  <img src="../assets/image/yewu.png" alt />
                  <div>Top业务</div>
                </div>
              </div>
              <div class="con flex">
                <div>
                  <i></i>腾讯
                </div>
                <div>
                  <i></i>阿里
                </div>
                <div>
                  <i></i>普通网页
                </div>
              </div>
              <div class="con flex">
                <div>34%</div>
                <div>27%</div>
                <div>29%</div>
              </div>
            </div>
            <div class="flex rightdiv flexbox mar">
              <div class="bottomimg flexbox">
                <div>
                  <img src="../assets/image/flow.png" alt />
                  <div>单用户日均流量</div>
                </div>
              </div>
              <div class="flex traffic" style="line-height: 66px;">
                <div>
                  <i></i>200M
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="leftBottom">
      <el-card class="box-card height">
        <div slot="header" class="clearfix">
          <span class="cardHead cardTitle">
            <i class="el-icon-s-management"></i>趋势图
          </span>
        </div>
        <div id="line"></div>
      </el-card>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { EleResize } from '@/config/esresize'
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
    this.drawLine()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {
    drawLine() {
       var option = this.$commonJS.sfChartLine();
      var myChart = this.$echarts.init(document.getElementById('line'));//获取容器元素
      var dom = document.getElementById('line')
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
  height: 40%;
  position: relative;
}
.leftBottom {
  width: 100%;
  height: calc(60% - 10px);
  margin-top: 10px;
  position: relative;
}
.box-card {
  position: relative;
}
.leftBottom::after,
.leftTop::after {
  content: "";
  width: 100%;
  height: 100%;
  display: inline-block;
  background: url(../assets/image/top-left.png) top left no-repeat,
    url(../assets/image/top-right.png) top right no-repeat,
    url(../assets/image/bottom-left.png) bottom left no-repeat,
    url(../assets/image/bottom-right.png) bottom right no-repeat;
  background-size: 1.2%;
  position: absolute;
  top: 0;
  left: 0;
}
.boxd {
  width: 100%;
  height: 45%;
  margin-bottom: 20px;
}
.rightcon > div:nth-child(1) > div:nth-child(1) {
  background-image: linear-gradient(0deg, #56d9ff 0%, #8cb2ff 100%);
}
.rightdiv {
  text-align: center;
  color: #fff;
  position: relative;
  border-radius: 10px;
  > .bottomimg {
    width: 80px;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 30px;
  }
  .con {
    padding: 5px 10px 5px 15px;
    text-align: left;
    line-height: 30px;
    font-weight: bold;
    > div {
      position: relative;
      font-family: SourceHanSansC;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      i {
        width: 5px;
        height: 5px;
        background-color: #fff;
        border-radius: 50%;
        vertical-align: middle;
        display: inline-block;
        margin-right: 5px;
      }
    }
  }
}
.rightcon > div:nth-child(1) > div:nth-child(2) {
  background-image: linear-gradient(0deg, #6a89cc 0%, #c017ff 100%);
  border-radius: 10px;
}
.rightcon > div:nth-child(2) > div:nth-child(1) {
  background-image: linear-gradient(0deg, #fbbb6e 0%, #f6ce9e 100%);
}
.rightcon > div:nth-child(2) > div:nth-child(2) {
  background-image: linear-gradient(0deg, #36bbb5 0%, #69e4de 100%);
}
.rightcon {
  padding: 20px 0;
  box-sizing: border-box;
}
#line{
  width: 100%;
  height: 100%
}
</style>