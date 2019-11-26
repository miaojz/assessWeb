<template>
  <div class="contain flexbox">
    <el-row :gutter="20">
      <el-col :span="12"><Left></Left></el-col>
      <el-col :span="12"><Right></Right></el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Left from '../components/left'
import Right from '../components/right2'
export default {
  name: 'index',
  components: {
    Left: Left,
    Right: Right
  },
  data() {
    return {
      newsList: ''
    }
  },
  created() { },
  mounted(){
   
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
    }
  },
  watch:{
    '$route':function(to,form){
      console.log(this.$route.params)
    }
  }
}
</script>

<style lang="less" >
.contain{
     width: 98%;
    height: 91%;
    margin:0 10px;
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
  }
}
</style>