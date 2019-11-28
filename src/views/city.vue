<template>
  <div class="contain">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="cardHead">
              <i class="el-icon-s-management"></i>
              {{city}}投入产出比
            </span>
          </div>
          <div id="map"></div>
          <div class="mapTip">
            <div class="agile-num">
              <p>130%</p>
            </div>
            <div class="agile-detail">{{city}}投入产出比</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <Right></Right>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
//import Left from '../components/left'
import Right from '../components/right'
import county from '@/config/countyData'
export default {
  name: 'city',
  components: {
    Left: Left,
    Right: Right
  },
  data() {
    return {
      newsList: '',
    }
  },
  created() { },
  mounted() {

  },
  methods: {
  },
  watch: {

  },
}
</script>

<style lang="less" scoped>
.contain {
  width: 99%;
  height: 91%;
  margin: 0 10px;
  box-sizing: border-box;
  .el-row {
    width: 100%;
    height: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    .el-col {
      height: 100%;
    }
  }
}
</style>