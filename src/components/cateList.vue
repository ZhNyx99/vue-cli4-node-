<template>
  <div style="position: relative;padding: 2.16rem">
    <!--搜索框-->
    <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        input-align="center"
        class="searchInput"
    />

    <!--侧边栏-->
    <div class="sidebarClass">
      <van-sidebar v-model="sidebarKey" @change="onChangeSidebar">
        <van-sidebar-item
            v-for="(n,index) in sidebar_arr"
            :title="n.txt"
            :key="index"/>
      </van-sidebar>
    </div>

    <!--右侧商品区-->
    <div class="sidebarGoods">
      <div class="goodsItem" v-for="(n,index) in goodsListObj">
        <img :src="n.goods_img" >
        <p>{{n.goods_name}}</p>
        <b>{{n.goods_price}}</b>
      </div>
    </div>

    <!--tabbar-->
    <footer_bar></footer_bar>
  </div>
</template>

<script>
import footer_bar from "./footer_bar";
import axios from "axios";

export default {
  name: "cateList",
  data() {
    return {
      value: '',
      sidebarKey: 0,
      goodsListObj: null,
      sidebar_arr: [
        {
          txt: '推荐专区'
        }, {
          txt: '爆品专区'
        }, {
          txt: '新品专区'
        }, {
          txt: '居家生活'
        }, {
          txt: '服饰鞋包'
        }, {
          txt: '美食酒水'
        }, {
          txt: '个护清洁'
        }, {
          txt: '母婴亲子'
        }, {
          txt: '运动旅行'
        }, {
          txt: '数码家电'
        }, {
          txt: '严选全球'
        }
      ]
    }
  },
  components: {footer_bar},
  methods: {
    onChangeSidebar(index) {
      axios.get('http://192.168.0.142:3344/cate_goods_list_' + index)
          .then(_d => {
            this.goodsListObj = _d.data
          })
    }
  }
}
</script>

<style scoped>
.searchInput {
  position: fixed;
  top: .05rem;
  left: .5rem;
  width: 9rem;
}

.searchInput .van-search__content {
  height: .7rem;
  border-radius: .1rem;
}

.searchInput .van-search__content .van-cell {
  color: #000;
  line-height: .6rem;
}

/*侧边栏*/
.sidebarClass {
  position: absolute;
  left: 0;
  top: 1rem;
}

/*右侧商品栏*/
.sidebarGoods{
  position: absolute;
  top: 1rem;
}
.goodsItem{
  float: left;
  width: 42%;
  margin: 0rem 0.2rem 0.44rem 0.2rem;
  font-size: .37333rem;
  overflow: hidden;
}

.goodsItem img{
  height: 4.6rem;
}
</style>