import {deleteDestino} from "/utils/index";
Page({
  data: {
    visibilityModal:false,
    travels: [],
    srcModal:"",
    nameDestinoModal:"",
    descriptionModal:""
  },
  onHandleVisibilityModal(e){
    this.setData({
      visibilityModal: !this.data.visibilityModal,
      srcModal: this.data.travels[e.currentTarget.dataset.id].imageUrl,
      nameDestinoModal: this.data.travels[e.currentTarget.dataset.id].destino,
      descriptionModal: this.data.travels[e.currentTarget.dataset.id].descripcion
    })
  },
  onHnadleCloseModal(){
    this.setData({
      visibilityModal: !this.data.visibilityModal,
    })
  },
  handleAddTravel(){
    my.navigateTo({
      url:"/pages/add-travel/add-travel"
    })
  },
  onHandleDeleteDestino(id){
    let travels = deleteDestino(id)
    console.log(travels)
    this.setData({
      travels:travels
    })
  },
  onHandleUpdateDestino(id){
    my.navigateTo({
      url:`/pages/actualizar-travel/actualizar-travel?id=${id}`
    })
  },
  onLoad(query) {
    const travels = my.getStorageSync({key: "Travels"}).data
    this.setData({
      travels:travels
    })
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
    const travels = my.getStorageSync({key: "Travels"}).data
    this.setData({
      travels:travels
    })
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
