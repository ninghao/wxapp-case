const app = getApp()

Page({
  data: {
    entities: null
  },
  onLoad() {
    this.setData({
      entities: app.globalData.stories
    })
  }
})
