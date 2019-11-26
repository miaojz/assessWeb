<template>
  <div class="contain">
    <div>
      <el-row>
        <el-col :span="24"><Top></Top></el-col>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-col :span="24"><Bottom></Bottom></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Top from '../components/schoolTop'
import Bottom from '../components/schoolBottom'
export default {
  name: 'school',
  components: {
    Top: Top,
    Bottom: Bottom
  },
  data() {
    return {
      newsList: ''
    }
  },
  created() { },
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
  }
}
</script>

<style lang="less" scoped>
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
  >div{
    height:50%;
    width:100%
  }
}
</style>