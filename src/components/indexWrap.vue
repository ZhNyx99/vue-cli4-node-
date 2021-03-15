<template>
  <div class="title_div">
    <!--搜索框-->
    <van-row type="flex" justify="space-between" style="padding: 0 .2rem">
      <van-col span="5">
        <img class="logo" src="../assets/logo-img.png"/>
      </van-col>
      <van-col span="15" class="search_div" @click="searchBtnFn">
        <van-icon name="search" size=".5rem"/>
        <span>请输入用户名</span>
      </van-col>
      <van-col span="3">
        <van-button class="loginBtn" type="primary" size="mini">登录</van-button>
      </van-col>
    </van-row>

    <!--导航栏-->
    <van-tabs v-model="active" animated class="tabBtnWrap">
      <van-tab v-for="n in tabBtnArr" :title="n">
      </van-tab>
    </van-tabs>

    <!--轮播图-->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="img in swiperImg">
        <img :src='img'>
      </van-swipe-item>
    </van-swipe>

    <!--简洁描述-->
    <div class="indexServicePolicy">
      <ul>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png);"></i>网易自营品牌
        </li>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png);"></i>30天无忧退货
        </li>
        <li><i style="background-image:url(http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png);"></i>48小时快速退款
        </li>
      </ul>
    </div>

    <!--icon图标列表-->
    <div class="goodsColumn_wrap">
      <van-grid :border="false" :column-num="5">
        <van-grid-item
            v-for="(n,index) in goodsColumn_Arr"
            :key="index"
            :icon=n.img_url
            :text=n.img_txt>
        </van-grid-item>
      </van-grid>
    </div>

    <!--倒计时-->
    <div class="countDownWrap">
      <p>限时购</p>
      <van-count-down :time="time_val" class="CountDownStyle">
        <template #default="timeData">
          <span class="time_block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="time_block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="time_block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <a href="#" class="right">更多>></a>
    </div>

    <div class="GoodsList_wrap">
      <van-grid :border="false" :column-num="3">
        <van-grid-item
            v-for="(n,index) in goodsListObj"
            :key="index"
            :icon=n.img_url
            :text=n.img_txt>
        </van-grid-item>
      </van-grid>
    </div>

    <!--tabbar DIV-->
    <div class="footer_Div">
      <van-tabbar active-color="#f00" v-model="active">
        <van-tabbar-item>
          <span>首页</span>
          <template #icon="props">
            <div :class="props.active ? icon.selectOne : icon.one" >
            </div>
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>分类</span>
          <template #icon="props">
            <div :class="props.active ? icon.selectTwo : icon.two" >
            </div>
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>值得买</span>
          <template #icon="props">
            <div :class="props.active ? icon.selectThree : icon.three" >
            </div>
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>购物车</span>
          <template #icon="props">
            <div :class="props.active ? icon.selectFour : icon.four" >
            </div>
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>个人</span>
          <template #icon="props">
            <div :class="props.active ? icon.selectFive : icon.Five" >
            </div>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import '../assets/resetVant.css'
import axios from "axios";

export default {
  name: "indexWrap",
  data() {
    return {
      active: '',
      tabBtnArr: [],
      swiperImg: [],
      time_val: 30 * 60 * 60 * 1000,
      goodsColumn_Arr: [
        {
          img_url: 'https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png',
          img_txt: '新品首发'
        }, {
          img_url: 'http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png',
          img_txt: '居家生活'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png',
          img_txt: '服饰鞋包'
        }, {
          img_url: 'http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png',
          img_txt: '美食酒水'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png',
          img_txt: '个护清洁'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png',
          img_txt: '母婴亲子'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png',
          img_txt: '运动旅行'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png',
          img_txt: '数码家电'
        }, {
          img_url: 'https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png',
          img_txt: '全球特色'
        }, {
          img_url: 'http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif',
          img_txt: '好货抄底'
        }
      ],
      goodsListObj: [{
        img_url: 'https://yanxuan-item.nosdn.127.net/e78096b543cc65af16da3a93cacb4071.png?quality=75&type=webp&imageView&thumbnail=216x216',
        img_txt: '￥219'
      }, {
        img_url: 'https://yanxuan-item.nosdn.127.net/570e762763536175b9ec226c0d93a7cd.png?quality=75&type=webp&imageView&thumbnail=216x216',
        img_txt: '￥167'
      }, {
        img_url: 'https://yanxuan-item.nosdn.127.net/f3f18a4fe9e7905cd7c9ff28e42ff0c2.png?quality=75&type=webp&imageView&thumbnail=216x216',
        img_txt: '￥50.2'
      }, {
        img_url: 'https://yanxuan-item.nosdn.127.net/0b05c22b99e8fc2cf3015e4bbb8d7c3f.png?quality=75&type=webp&imageView&thumbnail=216x216',
        img_txt: '￥139'
      }, {
        img_url: 'https://yanxuan-item.nosdn.127.net/ec55e5314bfd670320c3c15ce5e0b095.png?quality=75&type=webp&imageView&thumbnail=216x216',
        img_txt: '￥42.8'
      }, {
        img_url: 'https://yanxuan-item.nosdn.127.net/f815bf4d31ece0500089d69475c2014c.png?quality=75&type=webp&imageView&thumbnail=216x216',
        img_txt: '￥249'
      }],
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
  created() {
    axios.get('http://192.168.0.142:3344/get_TabBtn_list')
        .then(_d => {
          this.tabBtnArr = _d.data
        })
    axios.get('http://192.168.0.142:3344/get_swipe_img')
        .then(_n => {
          console.log(_n)
          this.swiperImg = _n.data
        })
  },
  methods: {
    searchBtnFn() {
      this.$router.push('/searchPage')
    }
  }
}
</script>

<style scoped>
.title_div {
  padding: .23rem 0 .23rem 0;
}

.logo {
  width: 1.84rem;
  height: .53333rem;
  margin-top: .1rem;
}

.loginBtn {
  width: .98667rem;
  height: .53333rem;
  line-height: .53333rem;
  text-align: center;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  border-radius: .10667rem;
  margin-left: .21333rem;
  font-size: .32rem;
  background-color: white;
  margin-top: .1rem;
}

.search_div {
  background-color: #ededed;
  border-radius: .10667rem;
  height: .75rem;
  font-size: .37333rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tabBtnWrap {
  font-size: .35rem;
  padding: 0 .2rem;
}

.my-swipe .van-swipe-item {
  height: 4rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.indexServicePolicy {
  width: 100%;
}

.indexServicePolicy ul {
  height: .96rem;
  padding: 0 .4rem;
  display: flex;
  align-items: center;
}

.indexServicePolicy ul li {
  flex: 1;
  float: left;
  font-size: .32rem;
  color: #333;
  margin-left: .10667rem;
  line-height: .42667rem;
  display: inline-block;
  vertical-align: middle;
}

.indexServicePolicy ul li i {
  width: .42667rem;
  height: .42667rem;
  display: inline-block;
  vertical-align: middle;
  font-size: .32rem;
  color: #333;
  margin-left: .10667rem;
  line-height: .42667rem;
  background-size: 100% 100%;
}

/* 倒计时 */
.countDownWrap {
  line-height: 1.33333rem;
  overflow: hidden;
  padding: 0 .4rem;
  /*width: 100%;*/
  height: 1.33333rem;
  background: #fff;
}

.countDownWrap p {
  float: left;
  font-size: .42667rem;
}

.countDownWrap a.right {
  float: right;
  font-size: .37333rem;
  color: #333;
}

.colon {
  display: inline-block;
  margin: 0 4px;
  color: #333;
  font-size: .5rem;
}

.time_block {
  display: inline-block;
  width: .48rem;
  height: .48rem;
  font-size: .32rem;
  color: #fff;
  text-align: center;
  background-color: #333;
  border-radius: .05333rem;
  line-height: .48rem;
}

.CountDownStyle {
  float: left;
  margin: 32px 0 0 21px;
}

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