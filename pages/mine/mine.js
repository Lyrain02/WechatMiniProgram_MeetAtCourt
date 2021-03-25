// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: '../../images/user/user1.png',
    name: '海香蕉鱼',
    club: '飞跃排球协会'
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
  toMyProperty: function(e){
    wx.navigateTo({
      url: '../../pages/myProperty/myProperty',
    })
  },
  toMyActivity: function(e){
    wx.navigateTo({
      url: '../../pages/myActivity/myActivity',
    })
  },
  toSetting: function(e){
    wx.navigateTo({
      url: '../../pages/setting/setting',
    })
  }
})