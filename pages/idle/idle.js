// pages/idle/idle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    takeBall:false,

    date:'2019-2-14',
    time:'8:00',
    playground:'共青场'
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
  goback: function(e){
    wx.navigateBack({
      delta: 0,
    })
  },
  gohome: function(e){
    wx.switchTab({
      url: '../../pages/search/search',
    })
  },
  join: function(e){
    this.setData({
      showModal:true,
    })
    console.log(this.data)
  },
  return: function(e){
    this.setData({
      showModal:false
    })
    console.log(this.data)
  },
  withBall: function(e){
    this.setData({
      takeBall:true,
      showModal:false,
    })
    console.log(this.data)
  },
  withoutBall: function(e){
    this.setData({
      takeBall:false,
      showModal:false
    })
    console.log(this.data)
  }


})