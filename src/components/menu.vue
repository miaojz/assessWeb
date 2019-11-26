<template>
  <el-row class="tac">
    <el-col :span="24">
      <div class="icondiv">
        <i :class="[icon]" @click="collapse" class="icon"></i>
      </div>
      <el-divider></el-divider>
      <el-menu
        class="el-menu-vertical-demo"
        router
        unique-opened
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#C7A150"
        :default-active="currentMenu"
        :collapse="isCollapse"
      >
        <el-submenu index="first">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>投资收益评估</span>
          </template>
          <el-menu-item index="/">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">投资收益评估概览</span>
          </el-menu-item>
          <el-submenu index="无线网">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>无线网</span>
            </template>
            <el-menu-item index="/index/无线网概览/network">无线网概览</el-menu-item>
            <el-menu-item index="/index/宏站/network">宏站</el-menu-item>
            <el-menu-item index="/shifen/室分">室分</el-menu-item>
          </el-submenu>
          <el-submenu index="政企">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>政企</span>
            </template>
            <el-menu-item index="/index/政企概览/network">政企概览</el-menu-item>
            <el-menu-item index="/index/专线/network">专线</el-menu-item>
            <el-menu-item index="/index/校园/network">校园</el-menu-item>
            <el-menu-item index="/index/DICI/network">DICT</el-menu-item>
          </el-submenu>
          <el-submenu index="接入网">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>接入网</span>
            </template>
            <el-menu-item index="/index/接入网概览/network">接入网概览</el-menu-item>
            <el-menu-item index="/index/家庭宽带/network">家庭宽带</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>


<script>
export default {
  data() {
    return {
      //menu: menu,
      currentMenu: this.$route.path,
      isCollapse: true,
      icon: 'el-icon-s-unfold',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
      this.$store.dispatch('changeMenu',key)
      if (key == '无线网') {
        this.to('/index/无线网概览/network')
      } else if (key == '政企') {
        this.to('/index/政企概览/network')
      } else if (key == '接入网') {
        this.to('/index/接入网概览/network')
      }
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    collapse() {
      this.isCollapse = !this.isCollapse;
      if (this.icon == 'el-icon-s-fold') {
        this.icon = 'el-icon-s-unfold'
      } else {
        this.icon = 'el-icon-s-fold'
      }
    },
    to(e) {
      window.scrollTo(0, 0)
      if (e != this.$route.path) {
        this.$router.push({
          path: e
        })
      }
    }
  },
  watch: {
    $route(to, from) {
      this.currentMenu = to.path
      //console.log(this.$route.path);
    }
  },
  mounted() {
    //console.log(this.$route)

  }
}
</script>
<style scoped lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.menu,
.tac,
ul,
.el-col-24 {
  height: 100%;
}
.icon {
  color: #fff;
  font-size: 22px;
}
.tac {
  background: #545c64;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-flex-negative: 0;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
}
.icondiv {
  height: 32px;
  line-height: 32px;
  padding: 10px 20px;
  box-sizing: border-box;
  width: 100%;
  border-right: solid 1px #e6e6e6;
  margin: 0;
  cursor: pointer;
}
.is-active .iconleft {
  color: #c7a150;
}
</style>
