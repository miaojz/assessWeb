<template>
  <div>
      <el-collapse-transition>
      <div class='tips'>
         <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
        <el-divider></el-divider>
          <span v-show="checkedCities.indexOf('新建')>-1">新建<i :class="[icon1,col1,col]" @click='add'></i><i :class="[icon,col1,col]" @click='remove'></i></span>
           <el-divider v-if="checkedCities.indexOf('新建')>-1"></el-divider>
           <div v-for='(col,i) in titleData' :key='i' v-show="checkedCities.indexOf('新建')>-1">
            <el-row style='line-height: 30px;text-align: center;margin-bottom:6px;' :gutter="20" >
              <el-col :span="7">
                <el-select v-model="newselect[i]" placeholder="请选择" size='small'>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-input v-model="col.rate" @blur='onBlur(col)'  autocomplete="off" size='small'></el-input>
              </el-col>
              <el-col class="line" :span="1">%</el-col>
              <el-col :span="6">
                <el-input v-model="col.value" @blur='valueBlue(col)' autocomplete="off" size='small'></el-input>
              </el-col>
            <el-col class="line" :span="3">亿元</el-col>
          </el-row>
           </div>
           <el-divider v-if="checkedCities.indexOf('新建')>-1&&titleData.length>0"></el-divider>
           <span v-show="checkedCities.indexOf('扩容')>-1">扩容<i :class="[icon1,col1,col]" @click='add1'></i><i :class="[icon,col1,col]" @click='remove1'></i></span>
           <el-divider v-if="checkedCities.indexOf('扩容')!=-1"></el-divider>
           <div v-for='(col,i) in kuorongData' :key="'info2-'+i" v-show="checkedCities.indexOf('扩容')>-1">
            <el-row style='line-height: 30px;text-align: center;margin-bottom:6px;' :gutter="20" >
              <el-col :span="7">
                <el-select v-model="kuorong[i]" placeholder="请选择" size='small'>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-input v-model="col.rate" @blur='onBlur(col)'  autocomplete="off" size='small'></el-input>
              </el-col>
              <el-col class="line" :span="1">%</el-col>
              <el-col :span="6">
                <el-input v-model="col.value" @blur='valueBlue(col)' autocomplete="off" size='small'></el-input>
              </el-col>
            <el-col class="line" :span="3">亿元</el-col>
          </el-row>
           </div>
           <el-divider v-if="checkedCities.indexOf('扩容')>-1&&kuorongData.length>0"></el-divider>
            <span v-show="checkedCities.indexOf('更新改造')>-1">更新改造<i :class="[icon1,col1,col]" @click='add2'></i><i :class="[icon,col1,col]" @click='remove2'></i></span>
           <el-divider v-if="checkedCities.indexOf('更新改造')>-1"></el-divider>
           <div v-for='(col,i) in gengxinData' :key="'info3-'+i" v-show="checkedCities.indexOf('更新改造')>-1">
            <el-row style='line-height: 30px;text-align: center;margin-bottom:6px;' :gutter="20" >
              <el-col :span="7">
                <el-select v-model="gengxin[i]" placeholder="请选择" size='small'>
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-input v-model="col.rate" @blur='onBlur(col)'  autocomplete="off" size='small'></el-input>
              </el-col>
              <el-col class="line" :span="1">%</el-col>
              <el-col :span="6">
                <el-input v-model="col.value" @blur='valueBlue(col)' autocomplete="off" size='small'></el-input>
              </el-col>
            <el-col class="line" :span="3">亿元</el-col>
          </el-row>
           </div>
           <el-divider v-if="checkedCities.indexOf('更新改造')>-1&&gengxinData.length>0"></el-divider>
      </div>
    </el-collapse-transition>
  </div>
</template>

<script>
import Vue from 'vue'
const cityOptions = ['新建', '扩容', '更新改造'];
export default {
  name: 'add',
  data() {
    return {
      page: this.$route.path,
         icon:'el-icon-remove-outline',
        icon1:'el-icon-circle-plus-outline',
        col:'col',
        show1:false,
        options:[{
          value: '选项1',
          label: '城市'
        }, {
          value: '选项2',
          label: '乡镇'
        }, {
          value: '选项3',
          label: '乡镇以下'
        }],
        col1:'col1',
        newselect:[''],
        titleData:[{rate:0,value:0}],
        kuorong:[''],
        kuorongData:[{rate:0,value:0}],
        gengxin:[''],
        gengxinData:[{rate:0,value:0}],
        checkedCities: ['新建'],
        cities: cityOptions,
    }
  },
  props:['touru','inputIdx','sumsync'],
  created() {
    console.log(this.sumsync)
  },
  watch: {
    $route(to, from) {
      this.page = to.path
    },
    sumrate:{
      handler: function (val) {
      this.$emit('update:sumsync', val);
      },
      deep: true //对象的深度验证
    },
    //  titleData:{
    //   handler: function (val) {
    //     this.titleData.forEach((item) => {
    //       item.value=item.rate/100*this.touru
    //     });
    //   },
    //   deep: true //对象的深度验证
    // },
    // kuorongData:{
    //   handler: function (val) {
    //     this.kuorongData.forEach((item) => {
    //      item.value=item.rate/100*this.touru
    //     });
    //   },
    //   deep: true //对象的深度验证
    // },
    // gengxinData:{
    //   handler: function (val) {
    //    this.gengxinData.forEach((item) => {
    //       item.value=item.rate/100*this.touru
    //     });
    //   },
    //   deep: true //对象的深度验证
    // }
  },
  computed:{
    sumrate(){
         let sum = 0;
         this.titleData.forEach((item) => {
          sum += Number(item.rate);
        });
        this.kuorongData.forEach((item) => {
          sum += Number(item.rate);
        });
        this.gengxinData.forEach((item) => {
          sum += Number(item.rate);
        });
        return sum
    }
  },
  methods: {
    add(){
      this.changeData(this.titleData,this.newselect)
    },
    remove(){
      this.titleData.pop()
      
    },
    add1(){
      this.changeData(this.kuorongData,this.kuorong)
    },
    remove1(){
      this.kuorongData.pop()
    },
    add2(){
      this.changeData(this.gengxinData,this.gengxin)
    },
    remove2(){
      this.gengxinData.pop()
    },
    onBlur(item){
      item.value=item.rate/100*this.touru
    },
   valueBlue(item){
     console.log(item)
      item.rate=item.value/Number(this.touru)*100
   },
    handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        // if(value.indexOf('扩容')>-1){
        //    this.changeData(this.kuorongData,this.kuorong)
        // }else if(value.indexOf('更新改造')>-1){
        //   alert(0)
        //   this.changeData(this.gengxinData,this.gengxin)
        // }else if(value.indexOf('新建')>-1){
        //   this.changeData(this.titleData,this.newselect)
        // }
      },
    changeData(data,select){
        if(data.length<3){
                data.push({rate:0,value:0})
                select.push('')
              }else{
                alert('选项已经够了，不需要在添加了哦!')
              }
    },
  }
}
</script>

<style lang="less" scoped>
@import '../assets/css/common.less';
.col{
   cursor: pointer;
    color: #559ae7;
    font-size:20px;
 }
 .tips{
   margin-left:30%;
   min-height:40px;
   width:70%
 }
 .col1{
   margin-left:20px;
 }
 .el-divider--horizontal{
   margin:18px 0
 }
</style>

