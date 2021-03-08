<template>
  <div class="title_div">
    <van-row type="flex" justify="space-between">
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
  </div>
</template>

<script>
export default {
name: "indexWrap",
  methods:{
    searchBtnFn(){
      this.$router.push('/searchPage')
    }
  }
}
</script>

<style scoped>
.title_div{
  padding: .21333rem .4rem;
}
.logo{
  width: 1.84rem;
  height: .53333rem;
  margin-top: .1rem;
}
.loginBtn{
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
.search_div{
  background-color: #ededed;
  border-radius: .10667rem;
  height: .75rem;
  font-size: .37333rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>