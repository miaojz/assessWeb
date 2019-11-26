<template>
    <el-row :gutter="20" class='school'>
        <el-col :span="12">
            <div class='flexbox title'><div class='tit'></div>
              <span @click='goback'>投入</span><span @click='secondback'>{{secondName}}</span><span>{{thirdName}}</span>
            </div>
            <el-card class="box-card">
                <!-- <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i>投入</span>
                </div> -->
                <div id='schoolBar'></div>
            </el-card>
        </el-col>
        <el-col :span="12">
          <div class='flexbox title'><div class='tit'></div>产出
            <div class='flex' style='text-align:right'>
              <span v-for="(title,index) in tabTitle" :key='title' @click="cur=index" :class="{active:cur==index}">
                {{title}}</span>
            </div>
          </div>
            <el-card class="box-card">
                <!-- <div slot="header" class="clearfix">
                <span class='cardHead'><i class='el-icon-s-management'></i>产出</span>
                </div> -->
                <div id='schoolLine'></div>
            </el-card>
        </el-col>
    </el-row>
  
</template>

<script src="../assets/js/henan.js"></script>
<script>
import Vue from 'vue';
export default {
  name: 'Left',
  data() {
    return {
      page: this.$route.path,
      data:[],
      barchart:'',
      secondName:'',
      thirdName:'',
      linechart:'',
      tabTitle:['年','/','月'],
      cur:0,
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
  mounted() {
    this.drawBar(this.chartBarData.sum)
    this.clickBar()
    this.darwLine()
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    }
  },
  methods: {    
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
        }else if(this.secondName=='运营投入'){
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
      }
  }
}
</script>

<style lang="less" scoped>
 #schoolBar,#schoolLine{
   width:100%;
   height:100%
 }
 .el-card__body{
     height:100%!important
 }
 .el-col-12{
   height:100%
 }
 .el-card{
   height:calc(100% - 30px)
 }
 .tit{
   width: 6px;
	height: 20px;
  background-color: #0a9cf5;
  margin-right:10px;
 }
 .title{
   margin-bottom: 10px;
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
.active{
  font-size:14px;
  color:#0a9cf5;
  margin:0 5px ;
}
</style>