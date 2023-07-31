function carregar(){
  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  //let hora = data.getHours()
  let hora = 19
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 6 && hora < 12){
    img.src = 'images/manha.png'
  } else if(hora >= 12 && hora < 18){
    img.src ='images/tarde.png'
  } else{
    img.src = 'images/noite.png'
  }
  
}