Page({
  data: {
    src:"/Images/icon-image-preview.png",
    status:["Visitado", "Pendiente", "Proximo"],
    index:0
  },
  onChangePiker(e){
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit(e){
    this.createTravel(e)
  },
  chooseImage(){
    my.chooseImage({
      success:(res)=>{
        this.setData({
          src: res.apFilePaths[0]
        })
      }
    })
  },
  createTravel(dataForm){
    let objectAux = {}
    const {descripcion, destino} = dataForm.detail.value
    const travels = my.getStorageSync({key:"Travels"}).data || {}

    objectAux = {
      ...travels
    }
    objectAux[Object.keys(travels).length+1] = {
      destino,
      descripcion,
      status: this.data.status[this.data.index],
      imageUrl: this.data.src,
    }

    my.setStorageSync({
      key: "Travels",
      data: objectAux
    })
  },
  onLoad() {},
});
