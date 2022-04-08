<template>
  <div  class="wrap">
    <h1>
      您访问的页面不存在，
      <router-link to="/">返回首页</router-link>
    </h1>
  </div>
</template>

<script>

export default {
  name:'Undefined'
}
</script>

<style lang="less" scoped>
  .wrap{
    height: 200px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: blue;
      text-decoration: underline;
    }
  }
</style>