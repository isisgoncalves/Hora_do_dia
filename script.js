function carregar(){
  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  //let hora = data.getHours()
  let hora = 10
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 6 && hora < 12){
    img.src = 'images/manha.png'
    document.body.style.background = '#3c9eea'
  } else if(hora >= 12 && hora < 18){
    img.src ='images/tarde.png'
    document.body.style.background = '#bc5f00'
  } else{
    img.src = 'images/noite.png'
    document.body.style.background = '#010e28'
  }
  
}