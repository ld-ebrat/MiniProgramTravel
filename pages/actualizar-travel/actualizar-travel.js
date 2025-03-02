import update from "/utils/actualizar-travel"
Page({
  data: {
    id:0,
    travel:"",
    nameDestino:"",
    descripcion:"",
    src:"",
    status:["Visitado", "Pendiente", "Proximo"],
    index:0
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
  formSubmit(dataForm){
    const {destino, descripcion} = dataForm.detail.value
    const id = this.data.id
    const index = this.data.index
    const status = this.data.status
    const urlImage = this.data.src
    
    update({id,index,status,urlImage,destino,descripcion})
  },
  onChangePiker(e){
    this.setData({
      index: e.detail.value
    })
  },
  onLoad(query) {
    const travel = my.getStorageSync({key:"Travels"}).data[query.id]

    console.log(travel)
    this.setData({
      id:query.id,
      nameDestino:travel.destino,
      descripcion:travel.descripcion,
      index: this.data.status.indexOf(travel.status),
      src: travel.imageUrl
    })
  },
});
