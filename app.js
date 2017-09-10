App({
  globalData: {

  },
  onLaunch() {
    wx.request({
      url: 'https://resources.ninghao.net/wxapp-case/db.json',
      success: (response) => {
        Object.assign(this.globalData, response.data)

        const currentPages = getCurrentPages()
        if (currentPages.length !== 0) {
          currentPages[currentPages.length - 1].onLoad()
        }
      }
    })
  }
})
