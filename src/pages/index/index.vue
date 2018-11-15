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
      <button open-type="getUserInfo" lang="zh_CN" bindgetuserinfo="onGotUserInfo">获取用户信息</button>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>
  </div>
</template>

<script>
import card from '@/components/card'

// fly.interceptors.request.use((config,promise)=>{
//     //给所有请求添加自定义header
//     config.headers["X-Tag"]="flyio";
//     return config;
// })

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
      this.$flyio.get("inventory").then((d) => {
        console.log(d.data)
      })
  
      // wx.chooseImage({
      //   success (res) {
      //     const tempFilePaths = res.tempFilePaths
      //     console.log(tempFilePaths)
      //     wx.uploadFile({
      //       url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      //       filePath: tempFilePaths[0],
      //       name: 'file',
      //       formData: {
      //         'user': 'test'
      //       },
      //       success (res){
      //         const data = res.data
      //         //do something
      //       }
      //     })
      //   }
      // })
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