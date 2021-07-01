const baseUrl = {
  test: "http://localhost:4000",
  online: ""
}
Page({
  data: {
    tabData: [
      {
        img: "../../images/weibo.png",
        url: "/weibo"
      },
      {
        img: "../../images/zhihu.png",
        url: "/zhihu"
      },
      {
        img: "../../images/baidu.png",
        url: "/baidu"
      },
      {
        img: "../../images/bilibili.png",
        url: "/bilibili"
      },
      {
        img: "../../images/toutiao.png",
        url: "/toutiao"
      },
    ],
    isChecked: 0,
    weibo: []
  },

  // 点击 tab
  clickTab(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      isChecked: index
    }, () => {
      this.getData(this.data.tabData[index].url)
    })
  },

  // 加载数据
  getData(url) {
    wx.showLoading({
      title: '加载中···',
    })
    wx.request({
      url: baseUrl.test + url,
      success: res => {
        this.setData({
          weibo: res.data.data
        }, () => {
          wx.hideLoading()
        })
      }
    })
  },

  onLoad() {
    this.getData(this.data.tabData[0].url)
  },
})
