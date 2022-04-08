<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHidden"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/index";
import Footer from "@/components/Footer/index";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch('home/getCategoryListData')
    // 页面组件加载完毕发送请求
    // ajax.get('/api/product/getBaseCategoryList').then(result=>{
    //   console.log('result',result);
    // },error=>{
    //   console.log('TypeNav Error',error);
    // })
    // reqGetCategoryListData().then(result => console.log(result), error => console.log(error))
  },

}
</script>

<style>
</style>
