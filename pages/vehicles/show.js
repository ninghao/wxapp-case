const app = getApp()

Page({
  data: {
    entity: null
  },
  onLoad() {
    const id = 3
    const entity = app.globalData.vehicles.filter((item) => {
      return item.id == id
    })

    this.setData({
      entity: entity[0]
    })

    wx.setNavigationBarTitle({
      title: this.data.entity.header
    })
  }
})
