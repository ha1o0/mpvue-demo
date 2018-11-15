var Fly=require("flyio/dist/npm/wx") //npm引入方式
var fly = new Fly(); //创建fly实例

//配置请求基地址
fly.config.baseURL="https://virtserver.swaggerhub.com/weifengsmile/test/1.0.0/"

fly.interceptors.request.use((request) => 
  {
    wx.showLoading({
      title: "加载中",
      mask:true
    })
    
    return request
  }
)

fly.interceptors.response.use((response) => 
  {
    wx.hideLoading()
      return response.data
  },
  (err) => {
    console.log(err)
    wx.hideLoading()
    if(err){
      return "请求失败"
    }
  }
)

export default fly