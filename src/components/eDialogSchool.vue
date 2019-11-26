<template>
  <div class='edialogSchool'>
    <el-dialog
      :title="title"
      :visible.sync="dialogFormVisible"
      @close="$emit('update:show', false)"
      width="50%"
      :show="show"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="校园：" prop="school">
          <el-radio-group v-model="ruleForm.school" size="medium">
            <el-radio  label="中学"></el-radio>
            <el-radio  label="小学"></el-radio>
            <el-radio  label="幼儿园"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="人数规模：" prop="person">
          <el-radio-group v-model="ruleForm.person" size="medium">
            <el-radio  label="100人以下"></el-radio>
            <el-radio  label="100人-300人"></el-radio>
            <el-radio  label="300人-500人"></el-radio>
            <el-radio  label="500人以上"></el-radio>
          </el-radio-group>
        </el-form-item>
          <el-form-item label="区域：" prop="area">
          <el-radio-group v-model="ruleForm.area" size="medium">
            <el-radio   label="城市"></el-radio>
            <el-radio   label="乡镇"></el-radio>
            <el-radio   label="农村"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="投资金额：" prop="num">
           <el-col :span="8">
            <el-input v-model="ruleForm.num" type='number' size='small'></el-input>
           </el-col>
            <el-col :span="2">万元</el-col>
            <el-col :span="6" class='red'>剩余 {{exarl}} 万元 </el-col>
            <i v-bind:class="[tips ? 'el-icon-arrow-down' : 'el-icon-arrow-right', 'icon']" @click="tips=!tips"></i>
        </el-form-item>
        <div v-show='tips' class='tree' style='margin-left:16%' v-for='(item,i) in treeData' :key='"tree"+i'>
          <el-row>
              <el-col :span="6"><i :class='item.icon' @click='iconBtn(item)'></i>{{item.label}}：</el-col>
              <el-col :span="3" style='text-align:center'>金额:</el-col>
              <el-col :span="4"><el-input type='number' v-model="item.num" size='small' @input="money(item)"></el-input></el-col>
              <el-col :span="3" style='text-align:center'>比例:</el-col>
              <el-col :span="4"><el-input v-model="item.rate"  type='number' size='small' @input='rate(item)'></el-input></el-col>
          </el-row>
          <div style='margin-left:6%' v-show='item.childflag' v-for='(second,i) in item.children' :key='"second"+i'>
              <el-row style='display:block'>
                <el-col :span="6"><i :class='second.icon' @click='iconBtn(second)'></i>{{second.label}}
                </el-col>
                <el-col :span="3" style='text-align:center'>金额:</el-col>
                <el-col :span="4">
                  <el-input type='number' v-model="second.num" size='mini' @input='money(second)'></el-input>
                </el-col>
                <el-col :span="3" style='text-align:center'>比例:</el-col>
                <el-col :span="4">
                  <el-input v-model="second.rate"  type='number' size='mini' @input='rate(second)'></el-input>
                </el-col>
              </el-row>
              <div style='margin-left:6%' v-show='second.childflag' v-for='(third,i) in second.children' :key='"third"+i'>
                  <el-row style='display:block'>
                    <el-col :span="6">{{third.label}}
                    </el-col>
                    <el-col :span="3" style='text-align:center'>金额:</el-col>
                    <el-col :span="4">
                      <el-input type='number' v-model="third.num" size='mini' @input='money(third)'></el-input>
                    </el-col>
                    <el-col :span="3" style='text-align:center'>比例:</el-col>
                    <el-col :span="4">
                      <el-input v-model="third.rate"  type='number' size='mini' @input='rate(third)'></el-input>
                    </el-col>
                  </el-row>
              </div>
          </div>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="submitForm('ruleForm')" size="small">立即创建</el-button>
        <el-button type="primary" @click="resetForm('ruleForm')" size="small">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
//import Add from '../components/add'
export default {
  name: 'eDialog',
  data() {
    return {
      page: this.$route.path,
      dialogFormVisible: this.show,
      ruleForm: {
        school: '',
        person: '',
        area: '',
        num: 100,
      },
      rules: {
        num: [
          { required: true, message: '投资金额不能为空'},
          { type: 'number', message: '投资金额必须为数字值'}
        ],
        school: [
          {required: true, message: '请选择一个学校', trigger: 'change' }
        ],
        person: [
          { required: true, message: '请选择人数规模', trigger: 'change' }
        ],
        area: [
          { required: true, message: '请选择一个区域', trigger: 'change' }
        ],
      },
      //exarl:0,
      tips:true,
      treeData:[
        {icon:'el-icon-remove',childflag:true,label:'建设投入',num:0,rate:0,childsum:0,children:[
          {icon:'el-icon-circle-plus',childflag:false,label:'接入以上投入',num:0,rate:0,childsum:0,children:[
              {icon:'',childflag:false,label:'接入以上投入',num:0,rate:0}  ]},
          {icon:'el-icon-circle-plus',childflag:false,label:'接入以上',num:0,rate:0,childsum:0,children:[
              {icon:'',childflag:false,label:'接入光缆长度',num:0,rate:0},
              {icon:'',childflag:false,label:'接入光缆投资',num:0,rate:0},
              {icon:'',childflag:false,label:'OUN设备数量',num:0,rate:0},
               {icon:'',childflag:false,label:'OUN设备型号',num:0,rate:0},
              {icon:'',childflag:false,label:'OUN投资',num:0,rate:0},
            ]},
         {icon:'el-icon-circle-plus',childflag:false,label:'平台投入',num:0,rate:0,childsum:0,children:[
            {icon:'',childflag:false,label:'信息化平台',num:0,rate:0},
            {icon:'',childflag:false,label:'集聚类设备投资',num:0,rate:0},
          {icon:'',childflag:false,label:'其他',num:0,rate:0},
          ]},
        ]},
        {icon:'el-icon-circle-plus',childflag:false,label:'运营投入',num:0,rate:0,childsum:0,children:[
          {icon:'el-icon-circle-plus',childflag:false,label:'年度人力投资',num:0,rate:0,childsum:0,
          children:[
          {icon:'el-icon-circle-plus',childflag:false,label:'年度人力投资',num:0,rate:0},
        ]},
          {icon:'el-icon-circle-plus',childflag:false,label:'配套投资',num:0,rate:0,childsum:0,children:[
          {icon:'el-icon-circle-plus',childflag:false,label:'光缆维护',num:0,rate:0},
          {icon:'el-icon-circle-plus',childflag:false,label:'机房维护',num:0,rate:0},
          {icon:'el-icon-circle-plus',childflag:false,label:'电力消耗',num:0,rate:0},
        ]},
        ]}
      ]
    }
  },
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
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
    show() {
      this.dialogFormVisible = this.show;
    },
    treeData(old,newValue){
     alert(0)
    }
  },
  computed: {
      exarl: {
            // getter
            get: function () {
                var s=this.sum(this.treeData);
                this.treeData.forEach((item)=>{
                  item.childsum=this.sum(item.children)
                  s+=item.childsum;
                  item.children.forEach((col)=>{
                      col.childsum=this.sum(col.children)
                      s+=col.childsum
                  })
                  //console.log(item.childsum)
                }) 
                console.log(s)
                var m=this.ruleForm.num-s
                return m;
            },
            // setter
            set: function (newValue) {
                this.exarl=newValue
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
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      iconBtn(item){
         if(item.icon==='el-icon-circle-plus'){
            item.icon='el-icon-remove'
          }else{
            item.icon='el-icon-circle-plus'
          }
          item.childflag=!item.childflag
      },
      money(item){
        var s=0
        item.rate=item.num/this.ruleForm.num;
        // this.treeData.forEach((item)=>{
        //   item.childsum=this.sum(item.children)
        //   s+=item.childsum;
        //   console.log(item.childsum)
        // })
        // this.exarl=this.ruleForm.num-s
      },
      rate(item){
        item.num=this.ruleForm.num*item.rate
      },
      sum(data){
        var num=0
        data.forEach((item) => {
          num += Number(item.num);
        });
        return num
      }
  }
}
</script>

<style lang="less" scoped>
.ipt {
  width: 50%;
  margin-right: 10px;
}
.smallipt {
  width: 22%;
  margin-right: 10px;
}
.marL {
  margin-left: 10px;
}
.el-dialog {
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
}
.el-form-item {
  margin-bottom: 10px;
}
.col {
  cursor: pointer;
  color: #559ae7;
  font-size: 20px;
}
.tips {
  margin-left: 10%;
  min-height: 100px;
  width: 80%;
}
.col1 {
  margin-left: 20px;
}
.text-color {
  color: #fc6e09;
  font-size: 16px;
  font-weight: bold;
  margin: 0 5px;
}
.el-row {
    // -webkit-box-sizing: border-box;
    // box-sizing: border-box;
    // height: 42px;
    line-height: 42px;
}
.tree i,.icon{
  color:#ccc;
  font-size: 16px;
  margin-right:6px;
}
.red{
  color:#fc6e09;
}
</style>