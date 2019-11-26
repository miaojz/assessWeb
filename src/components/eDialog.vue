<template>
  <div>
    <el-dialog :title="title" :visible.sync="dialogFormVisible" 
            @close="$emit('update:show', false)" width='50%'
            :show="show">
      <el-form :model="form">
        <el-form-item label="总投入" :label-width="formLabelWidth">
          <el-col :span="7">
              <el-input  v-model="form.touru" autocomplete="off" size='small' ></el-input>
            </el-col>
          <el-col class="line" :span="3">亿元</el-col>
          <span>剩余: <span class='text-color'>{{form.surplus}}</span>亿元</span>
        </el-form-item>
        <div v-for='(item,i) in form.formData' :key='i+"form"'>
            <el-form-item :label="item.label" :label-width="formLabelWidth">
              <i :class="[item.icon,col]" @click='morecontent(item)'></i>
              <el-col :span="7">
                  <el-input type="number" v-model="item.rate" @blur='rateBlur(item)' autocomplete="off" size='small'></el-input>
                </el-col>
                <el-col class="line" :span="2">%</el-col>
                <el-col :span="7">
                  <el-input type="number" v-model="item.value" @blur='valueBlur(item)'  autocomplete="off" size='small'></el-input>
                </el-col>
              <el-col class="line" :span="3">亿元</el-col>
          </el-form-item>
          <Add :touru="form.touru" :inputIdx='i' :sumsync.sync='item.rate'  v-show='item.show'></Add>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="small">取 消</el-button>
        <el-button type="primary" @click="onsubmit" size='small'>确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Vue from 'vue'
import Add from '../components/add'
export default {
  name: 'eDialog',
  data() {
    return {
      page: this.$route.path,
      dialogFormVisible: this.show,
       form: {
          touru:6.1954,
          surplus:0.00,
          formData:[
         {
           label:'LTE主设备1.8G',rate:15,icon:'el-icon-circle-plus-outline',show:false,value:0.92931
         },
         {
           label:'LTE主设备2.1G',rate:15,icon:'el-icon-circle-plus-outline',show:false,value:0.92931
         },
         {
           label:'LTE主设备800M',rate:38,icon:'el-icon-circle-plus-outline',show:false,value:2.35425200
         },
         {
           label:'室内分布系统',rate:12,icon:'el-icon-circle-plus-outline',show:false,value:0.743448
         },
         {
           label:'无线网配套及其他',rate:20,icon:'el-icon-circle-plus-outline',show:false,value:1.239080000
         },
       ]
        },
        formLabelWidth: '160px',
        col:'col',
        sumrate:0,
        sum:[],
       sumsync:{},
       
    }
  },
   components: {
    Add: Add,
  },
  props: {
    show: {
        type: Boolean,
        default: false
      },
      title:{
        type:String
      },
      
  },
  created() { 
    this.$nextTick(() => {
         //console.log(this.$commonJS.test() )
       });
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    },
    show(){
      this.dialogFormVisible = this.show;
    },
    // 'form.touru':function(val){
    // },
     form: {
      handler: function (val) {
        this.touru=val.touru;
        var sum=0
        val.formData.forEach((item) => {
          item.value=Number(val.touru)*Number(item.rate)/100
          sum+=Number(item.rate)/100
        });
        this.form.surplus=(Number(val.touru)*(1-sum)).toFixed(2)
      },
      deep: true //对象的深度验证
    },
    sumsync: {
      handler(val) {
        console.log(val)
        this.sumsync=val
      },
      deep: true,
    },
  },
  computed: {
    
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
    cc(e){
      console.log(e)
      var idx=e.index+1
      this.form['lteRate'+idx]=e.sum
    },
    morecontent(item){
      var that=this;
      if(item.icon==='el-icon-remove-outline'){
        item.icon='el-icon-circle-plus-outline'
      }else{
        item.icon='el-icon-remove-outline'
      }
      item.show=!item.show
    },
    onsubmit(){
        this.dialogFormVisible = false;
        this.$emit('close',this.form.touru)
        
    },
    valueBlur(item){
      item.rate=item.value/Number(this.form.touru)*100
      
    },
    rateBlur(item){
      item.value=Number(this.form.touru)*item.rate/100
    }
  }
}
</script>

<style lang="less" scoped>
.ipt{
  width:50%;
  margin-right:10px;
}
.smallipt{
  width:22%;
  margin-right:10px;
}
.marL{
  margin-left:10px;
}
.el-dialog{
 max-height: calc(100% - 30px);
  max-width: calc(100% - 30px)
}
.el-form-item{
margin-bottom:10px;
}
 .col{
   cursor: pointer;
    color: #559ae7;
    font-size:20px;
 }
 .tips{
   margin-left:10%;
   min-height:100px;
   width:80%
 }
 .col1{
   margin-left:20px;
 }
 .text-color{
   color:#fc6e09;
   font-size: 16px;
   font-weight: bold;
   margin:0 5px;
 }
</style>