<template>
  <div class="type-nav">
    <div class="container">
      <div class="nav-left" @mouseleave="handlerMouseLeave">
        <h2 class="all" @mouseenter="isShowNav=true">全部商品分类</h2>
        <div class="sort" v-show="isShowNav">
          <div class="all-sort-list2" @click="btnSearch">
            <div class="item" v-for="c1 in categoryListData.slice(0,-2)" :key="c1.categoryId">
              <h3>
                <a data-level="1" :data-id="c1.categoryId" :data-name="c1.categoryName">{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a data-level="2" :data-id="c2.categoryId" :data-name="c2.categoryName">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a data-level="3" :data-id="c3.categoryId" :data-name="c3.categoryName">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="#">服装城</a>
        <a href="#">美妆馆</a>
        <a href="#">尚品汇超市</a>
        <a href="#">全球购</a>
        <a href="#">闪购</a>
        <a href="#">团购</a>
        <a href="#">有趣</a>
        <a href="#">秒杀</a>
      </nav>
    </div>
  </div>


</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "TypeNav",
  data() {
    return {
      isShowNav:false
    }
  },
  computed: {
    ...mapState('home',['categoryListData'])
  },
  mounted() {
    if(this.$route.meta.isShowNav){
      this.isShowNav = true
    }
  },
  methods: {
    btnSearch(e) {
      const {level,id,name} = e.target.dataset
      if(!level)return;
      const {keyWord} = this.$route.query
      this.$router.push({
        name:'search',
        query:{
        keyWord,
          categoryName: name,
          [`category+${level}+ID`]:id,

        }
      })
    },
    handlerMouseLeave(){
      // 如果是主页面，即使鼠标离开，下拉框也不能隐藏  其它则可隐藏
      if(!this.$route.meta.isShowNav){
        this.isShowNav = false
      }
    }
  }

}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #fafafa;
      z-index: 999;
      border-top: 2px solid #e1251b;

      .all-sort-list2 {
        .item {
          &:hover {
            background-color: #ddd;
            cursor: pointer;
            text-decoration: underline;

          }
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}


</style>