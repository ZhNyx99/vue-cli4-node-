<template>
  <div class="titleDiv">
    <van-row type="flex" justify="space-between">
      <van-col span="20">
        <van-field
            class="searchDiv"
            v-model="searchInput_v"
            @input="inputValFn"
            placeholder="好货内部价"
            @keyup.enter="submitFn"
        >
          <!--搜索框放大镜 Icon-->
          <template v-slot:left-icon>
            <van-icon name="search" class="searchIconLeft"/>
          </template>
          <!--清空搜索框-->
          <template #button>
            <van-icon v-show="isCloseShow" name="close"
                      @click="clear_search_inputFn"/>
          </template>
        </van-field>

      </van-col>
      <van-col span="3">
        <van-button class="cancelBtn" type="primary" size="mini">取消</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "searchPage",
  data() {
    return {
      searchInput_v:'',
      input_v: '',
      isCloseShow: false,
    }
  },
  watch: {
    input_v() {
      this.isCloseShow = true
    }
  },
  created() {

  },
  methods: {
    // watch监听input有没有值
    inputValFn(_v) {
      this.input_v = _v
    },
    // 清空搜索框
    clear_search_inputFn() {
      this.searchInput_v = ''
      this.isCloseShow = false
    },
    // enter时间响应
    submitFn(){
      axios.get('http://192.168.0.142:3344/search',{
        params:{
          search_key:this.input_v
        }
      })
      .then( _d => {
        console.log(_d.data)
      })
    }
  }
}
</script>

<style scoped>
.titleDiv {
  padding: .2rem .4rem;
}

.cancelBtn {
  width: .98667rem;
  height: .53333rem;
  font-size: .32rem;
  line-height: .53333rem;
  text-align: center;
  color: #dd1a21;
  border: 1px solid #dd1a21;
  border-radius: .10667rem;
  background-color: #fff;
  margin: .1rem 0 0 0;
}

.searchDiv {
  padding-top: 0;
  padding-left: .26667rem;
  padding-bottom: 0;
  bottom: 0;
  background-color: #f4f4f4;
  height: .74667rem;
  line-height: .74667rem;
  border-radius: 4px;
  font-size: .37333rem;
}

.searchIconLeft {
  font-size: .5rem;
}
</style>