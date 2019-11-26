<template>
  <div>
    <!-- 跳转中间页面 -->
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$router.replace(from.path)
    })
  }
}
</script>