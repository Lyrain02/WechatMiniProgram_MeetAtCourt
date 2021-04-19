const util = require("../../utils/util")

// pages/myActivity/myActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '海香蕉鱼',
    club: '飞跃排球协会',
    img: '../../images/user/user1.png',
    itemList:[],
    preList: [
      {id: 1, type:'约球', date: '2021.2.19', time: '15:00', playground: '共青场',
      finish: false, show: false, msg:'这是一个排球活动'},
      {id: 2, type:'12月主题活动',date: '2020.12.29', time: '20:00', 
      playground: '大学生活动中心', finish: true, show: false, msg:'12月活动'},
      {id: 3, type:'约球',date: '2020.12.3', time: '14:00', playground: '共青场', finish: true, show: false, msg:'这是一个足球活动'}
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

    var url='http://106.15.38.14'
    var that=this
    var offset = that.data.itemList.length
    var util = require('../../utils/util.js')
    wx.request({
      url: 'http://106.15.38.14:5000/member/record/' + 1,
      method:'GET',

      success: function(res) {
        console.log(res.data);
        console.log(res.data[0])
        for(var i=0;i<res.data.length;i++)
        {
          //console.log(that.data)
          var time=new Date(res.data[i].yueqiu_time)
          var newarray = {
            id:res.data[i].campaign_id,
            type:'约球',
            date:util.formatDate(time),
            time:util.formatClock(time),
            playground:res.data[i].yueqiu_location,
            finish:time - new Date() > 0?false:true,
            show:false,
            msg:res.data[i].yueqiu_note,
          };
                  
          
          that.data.itemList = that.data.itemList.concat(newarray);
          that.setData({
            itemList: that.data.itemList
          });   
          // 调试时打开该语句
          //console.log(that.data.itemList);
        }
      }
    })

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
  jumpPage: function(e){
    wx.navigateBack({
      delta: 0,
    })
  },
  changeShow: function(e){
    var index = e.currentTarget.dataset.index;
    var show = "itemList["+index+"].show";
    var value = this.data.itemList[index].show;
    this.setData({
      [show] :!value
    })
    console.log("show: "+this.data.itemList[index].show)
  }
})