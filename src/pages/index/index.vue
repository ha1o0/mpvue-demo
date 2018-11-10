<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <div class="test">
      <button @click="testClick">request</button>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
  </div>
</template>

<script>
import card from '@/components/card'
// var Fly = require("@/utils/wx") //wx.js为您下载的源码文件
var Fly=require("flyio/dist/npm/wx") //npm引入方式
var fly = new Fly(); //创建fly实例

// fly.interceptors.request.use((config,promise)=>{
//     //给所有请求添加自定义header
//     config.headers["X-Tag"]="flyio";
//     return config;
// })
//配置请求基地址
fly.config.baseURL="https://virtserver.swaggerhub.com/weifengsmile/test/1.0.0/"

console.log(fly)
export default {
  data () {
    return {
      motto: 'Hello',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    testClick () {
      fly.get("inventory").then((d) => {
        console.log(d)
      })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang="less">
@import "./index.less";
</style> 