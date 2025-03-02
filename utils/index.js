
function deleteDestino(id){

  let travels = my.getStorageSync({key:"Travels"}).data
  delete travels[id]

  my.setStorageSync({
    key:"Travels",
    data: travels
  })

  return travels
}

export default {
  deleteDestino
}