const app = getApp()

Page({
  data: {
    entities: null
  },
  play(event) {
    const currentVideo = wx.createVideoContext(
      `${ event.target.dataset.vid }`)
    currentVideo.play()
  },
  onLoad() {
    this.setData({
      entities: app.globalData.stories
    })
  }
})
