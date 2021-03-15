<template>
  <!--tabbar DIV-->
  <div class="footer_Div">
    <van-tabbar active-color="#f00" v-model="active" @change="onFooterBtnChange">
      <van-tabbar-item to="/">
        <span>首页</span>
        <template #icon="props">
          <div :class="props.active ? icon.selectOne : icon.one">
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/cateList">
        <span>分类</span>
        <template #icon="props">
          <div :class="props.active ? icon.selectTwo : icon.two">
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>值得买</span>
        <template #icon="props">
          <div :class="props.active ? icon.selectThree : icon.three">
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>购物车</span>
        <template #icon="props">
          <div :class="props.active ? icon.selectFour : icon.four">
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>个人</span>
        <template #icon="props">
          <div :class="props.active ? icon.selectFive : icon.Five">
          </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "footer_bar",
  data() {
    return {
      active:'',
      icon: {
        one: 'footerIcon footer_icon_1',
        selectOne: 'footerIcon footer_icon_1_red',
        two: 'footerIcon footer_icon_2',
        selectTwo: 'footerIcon footer_icon_2_red',
        three: 'footerIcon footer_icon_3',
        selectThree: 'footerIcon footer_icon_3_red',
        four: 'footerIcon footer_icon_4',
        selectFour: 'footerIcon footer_icon_4_red',
        Five: 'footerIcon footer_icon_5',
        selectFive: 'footerIcon footer_icon_5_red',
      }
    }
  },
  mounted() {
    let _n = localStorage.getItem('save_inx')
    this.active = Number(_n)
  },
  methods:{
    // tabbar导航
    onFooterBtnChange( _inx ){
     localStorage.setItem('save_inx',_inx)
    }
  }
}
</script>

<style scoped>
/*footer icon样式*/
.footerIcon{
  width: .53rem;
  height: .53rem;
  margin: 0 auto;
  background-image: url("../assets/footer_icon.png");
  background-size: .53333rem;
  background-repeat: no-repeat;
}

/*第一个按钮*/
.footer_icon_1{
  background-position: 0 -251px;
}
.footer_icon_1_red{
  background-position: 0 -201px;
}
/*第二个按钮*/
.footer_icon_2{
  background-position: 0 -145px;
}
.footer_icon_2_red{
  background-position: 0 -100px;
}
/*第三个按钮*/
.footer_icon_3{
  background-position: 0 -349px;
}
.footer_icon_3_red{
  background-position: 0 -300px;
}
/*第四个按钮*/
.footer_icon_4{
  background-position: 0 -48px;
}
.footer_icon_4_red{
  background-position: 0 -2px;
}
/*第五个按钮*/
.footer_icon_5{
  background-position: 0 -451px;
}
.footer_icon_5_red{
  background-position: 0 -401px;
}
</style>