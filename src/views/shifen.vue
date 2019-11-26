<template>
  <div class="contain">
    <el-row :gutter="20">
      <el-col :span="14"><Left></Left></el-col>
      <el-col :span="10"></el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Left from '../components/sfLeft'
import Right from '../components/right'
export default {
  name: 'shifen',
  components: {
    Left: Left,
    //Right: Right
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