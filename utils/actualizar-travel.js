function update(data){

  let travels = my.getStorageSync({key:"Travels"}).data

  travels[data.id] = {
    destino:data.destino,
    descripcion:data.descripcion,
    status: data.status[data.index],
    imageUrl: data.urlImage
  }

  my.setStorageSync({
    key:"Travels",
    data: travels
  })
}

export default update