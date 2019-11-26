<template>
  <div class="contain">
    <!-- 整体 -->
    <el-row :gutter="20">
      <!-- left -->
        <el-col :span="12">
          <!-- leftTop -->
          <el-row :gutter="20" style='height:20%;margin-bottom:20px;'>
            <el-col :span="24" class='flexbox'>
                <el-card class="bgcard demo" style='width:49%;margin-right:20px'>
                  <div slot="header" class="clearfix">
                    <span class="cardHead">
                      <i class="el-icon-s-management"></i>投资回报周期
                    </span>
                  </div>
                  <div  class=" cardContent">
                  <h1>3<span style='font-size:12px;margin-left:5px'>年</span></h1>
                  <small>2019回本周期</small>
                  <el-link style='float:right' :underline="false" type='primary'>98%&nbsp;&nbsp;⬆</el-link>
                  </div>
                </el-card>
                <el-card class="bgcard bgcard1 demo" style='width:49%;'>
                  <div slot="header" class="clearfix">
                    <span class="cardHead" >
                      <i class="el-icon-s-management"></i>投资回报周期
                    </span>
                  </div>
                  <div  class="cardContent">
                  <h1>3<span style='font-size:12px;margin-left:5px'>年</span></h1>
                  <small>2019回本周期</small>
                  <el-link style='float:right' :underline="false" type='primary'>98%&nbsp;&nbsp;⬆</el-link>
                  </div>
                </el-card>
            </el-col>
          </el-row>
          <!-- leftRight -->
          <el-row :gutter="20" style='height:78%'>
            <el-col :span="24">
                <el-card class="box-card height">
                <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i>项目拆分
                    <el-button type="primary"  size="small" style='margin-top:-6px;float:right' @click="open"
              icon="el-icon-edit">项目投资推演</el-button>
                </span>
                </div>
                <div id='demo'></div>
                <div class='tipLegend'>
                    <div><span></span>建设投入</div>
                    <div><span></span>运营投入</div>
                </div>
            </el-card>
            </el-col>
          </el-row>
        </el-col>
        <!-- right -->
        <el-col :span="12">
          <!-- rightTop -->
          <el-row :gutter="20" style='height:49%;margin-bottom:20px;'>
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i> <span @click='goback'>投入</span><span @click='secondback'>{{secondName}}</span><span>{{thirdName}}</span></span>
                </div>
                <div id='schoolBar'></div>
            </el-card>
            </el-col>
          </el-row>
          <!-- rightBOttom -->
          <el-row :gutter="20" style='height:49%'>
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                <span class='cardHead'>
                  <i class='el-icon-s-management'></i>产出
                      <el-tabs v-model="activeName" @tab-click="handleClick" style='float:right'>
                        <el-tab-pane label="年" name="first"></el-tab-pane>
                        <el-tab-pane label="月" name="second"></el-tab-pane>
                      </el-tabs>
                </span>
                </div>
                <div id='schoolLine'></div>
            </el-card>
            </el-col>
          </el-row>
        </el-col>
    </el-row>
     <!-- 弹出框 -->
    <eDialog :show.sync="show" :title="title" @close="close"></eDialog>
  </div>
</template>

<script>
import Vue from 'vue'
import eDialog from '../components/eDialogSchool'
export default {
  name: 'demo',
  components: {
eDialog:eDialog
  },
  data() {
    return {
         data:[{
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
                color:'#1d66b0'//'rgba(143, 219, 255 ,1)' //'#7591CC',
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
    show:false,
    title:'项目投资推演',
      barchart:'',
      secondName:'',
      thirdName:'',
      linechart:'',
      activeName: 'second',
      chartBarData:{
        sum:{
          name:'',
          xdata: ['建设投入', '运营投入'],
          datanow:[220, 182],
          dataold:[200,150]
        },
        jianshe:{
          sum:{
            name:'建设投入',
            xdata: ['接入以上投入', '接入投入','平台投入'],
            datanow:[220, 182,209],
            dataold:[200,150,200]
          },
          jieruyishang:{
            name:'接入以上投入',
            xdata: ['接入以上投入'],
            datanow:[220],
            dataold:[200]
          },
          jieru:{
            name:'接入投入',
            xdata: ['接入光缆长度','接入光缆投资','OUN设备数量','OUN设备型号','OUN投资'],
          datanow:[220, 182,220, 182,220],
          dataold:[200,150,200,150,200]
          },
          pingtai:{
              name:'平台投入',
            xdata: ['信息化平台', '集聚类设备投资','其他',],
            datanow:[220, 182,220],
            dataold:[200,150,200]
          }
        },
        touru:{
          sum:{
            name:'运营投入',
            xdata: ['年度人力投资', '配套投资'],
            datanow:[220, 182],
            dataold:[200,150]
          },
          year:{
            name:'年度人力投资',
            xdata: ['人工费'],
            datanow:[220],
            dataold:[200]
          },
           peitao:{
             name:'配套投资',
            xdata: ['光缆维护', '机房维护','电力消耗',],
            datanow:[220, 182,220],
            dataold:[200,150,200]
          }
        }
      }
    }
  },
  created() { },
  mounted(){
  this.drawjuxingtu(this.data)
   this.drawBar(this.chartBarData.sum)
    this.clickBar()
    this.darwLine()
  },
  methods: {
    to(e) {
      console.log(e)
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    },
     drawjuxingtu(data){
        var option=this.$commonJS.diskdata(data);
         this.chart = this.$echarts.init(document.getElementById('demo'));//获取容器元素
        window.onresize = this.chart.resize;
        this.chart.setOption(option,true);
    },
    drawBar(data){
        var option=this.$commonJS.echartsBar(data);
         this.barchart = this.$echarts.init(document.getElementById('schoolBar'));//获取容器元素
        window.onresize = this.barchart.resize;
        this.barchart.setOption(option,true);
      },
      clickBar(){
          var that=this;
    // 处理点击事件并且跳转到相应的
          that.barchart.on('click', function (param) {
            var name = param.name;
            //console.log(param)
            var data;
            if(that.secondName&&that.thirdName==''){
                if(name==='接入以上投入'){
                data=that.chartBarData.jianshe.jieruyishang
                that.secondName=' > 建设投入'
                that.thirdName=' > '+name
              }else if(name==='平台投入'){
                data=that.chartBarData.jianshe.pingtai
                that.secondName=' > 建设投入'
                that.thirdName=' > '+name
              }else if(name==='接入投入'){
                data=that.chartBarData.jianshe.jieru
                that.secondName=' > 建设投入'
                that.thirdName=' > '+name
              }else if(name==='年度人力投资'){
                data=that.chartBarData.touru.year
                that.secondName=' > 运营投入'
                that.thirdName=' > '+name
              }else if(name==='配套投资'){
                data=that.chartBarData.touru.peitao
                that.secondName=' > 运营投入'
                that.thirdName=' > '+name
              }
              that.drawBar(data)
            }else if(that.secondName==''&&that.thirdName==''){
              if (name === '建设投入') {
              data=that.chartBarData.jianshe.sum;
              that.secondName=' > 建设投入'
              }else if(name === '运营投入'){
                data=that.chartBarData.touru.sum;
                that.secondName=' > 运营投入'
              }
              that.drawBar(data)
            }else if(that.thirdName!=''){
              that.$confirm('已经到最底层了，是否返回首层数据?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                that.$message({
                  type: 'success',
                  message: '返回成功!'
                });
                data=that.chartBarData.sum
                that.secondName=''
                that.thirdName=''
                that.drawBar(data)
              }).catch(() => {
                that.$message({
                  type: 'info',
                  message: '已取消'
                });          
              });
            }
            
          });
      },
      goback(){
        this.drawBar(this.chartBarData.sum)
        this.secondName='';
        this.thirdName=''
      },
      secondback(){
        var that=this;var data;
        if(this.secondName=='建设投入'){
           data=that.chartBarData.jianshe.sum;
        }else{
          data=that.chartBarData.touru.sum;
          }
            that.thirdName=''
          that.drawBar(data)
      },
      darwLine(){
        var option=this.$commonJS.chartLine();
         this.linechart = this.$echarts.init(document.getElementById('schoolLine'));//获取容器元素
        window.onresize = this.linechart.resize;
        this.linechart.setOption(option,true);
      },
        close(e) {
        this.show = false;
    },
    open() {
      this.show = true;
    },
    handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<style lang="less" scoped>
.contain{
  width:100%;
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
#schoolBar,#schoolLine{
   width:100%;
   height:100%
 }
.bgcard{
  background-color:#1d66b0;
  color:#fff;
  .cardHead{
    color:#fff;
  }
  .cardContent{
    text-align: left;
    .icon{
      font-size:50px;
      vertical-align: middle;
      color:#fff;
      width:100px;
       text-align: center;
    }
    h1{
      font-size: 30px;
    line-height: 50px;
    }
    .num{
       color:#FF7F50;
      font-size: 18px;
      font-weight: bold;
      span{
        font-size: 12px;
        margin-left:5px;
      }
    }
  }
}
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
 .bgcard1{
      background: rgba(204, 53, 91, 0.8);
      .el-link--inner{
        color:#fff
      }
}

</style>