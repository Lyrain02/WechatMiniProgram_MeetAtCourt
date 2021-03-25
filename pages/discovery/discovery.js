// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activityList:[
      {id:1, poster:'../../images/discovery/poster1.png', title: '星座杯', 
      detail: '星座杯是排协的传统活动，欢迎大家积极参与，记得报名哦', show: false},
      {id:2, poster:'../../images/discovery/poster2.png', title: '阳光体育联赛', 
      detail: '阳光体育联赛是学校举办的运动赛事，欢迎大家积极参与，记得报名哦', show:false},
      {id:3, poster:'../../images/discovery/poster3.png', title: '秋季会员总结大会', 
      detail: '又到了一年一度的总结季了，让我们一起来回顾一下过去一年的精彩吧！',show: false}
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeShow: function(e){
    var index = e.currentTarget.dataset.index;
    var show = "activityList["+index+"].show";
    var value = this.data.activityList[index].show;
    //console.log(value);
    this.setData({
      [show]: !value
    })
    console.log("show: "+this.data.activityList[index].show);
  }
})