<template>
  <div>
    <TypeNav></TypeNav>
    <listContainer></listContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorListData" :key="floor.id" :floor="floor" :cname="'floor-swiper'+floor.id"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import {mapActions, mapState} from "vuex";

export default {
  name: 'Home',
  components : {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  methods: {
    ...mapActions('home',['getFloorListData'])
  },
  mounted() {
    this.getFloorListData()
  },
  computed: {
    ...mapState('home',['floorListData'])
  }
}
</script>

<style lang="less" scoped>
</style>