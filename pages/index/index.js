//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    swpimg:null,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray: [
      {
        "iconUrl": '../../image/user.png',
        "iconText": '分类'
      },
      {
        "iconUrl": '../../image/user.png',
        "iconText": '分类'
      },
      {
        "iconUrl": '../../image/user.png',
        "iconText": '分类'
      },
      {
        "iconUrl": '../../image/user.png',
        "iconText": '分类'
      }
    ],
    textArray:[
      {
        "bText":'标题',
        "bText1":'标题1'
      }
    ]
  },
  
  // changeIndicatorDots: function (e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },
  // changeAutoplay: function (e) {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },
  // intervalChange: function (e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange: function (e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // }
  onLoad: function () {
    var that = this//不要漏了这句，很重要
    wx.request({
      url: 'http://localhost/getswpimg.php?rid=1',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        //将获取到的json数据，存在名字叫zhihu的这个数组中
        that.setData({
          swpimg: res.data.result,
          //res代表success函数的事件对，data是固定的，stories是是上面json数据中stories
        })
      }
    })
  }
})
