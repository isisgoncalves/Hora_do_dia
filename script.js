function carregar(){

  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  //DATA ATUAL
  let hora = data.getHours()
  //HORA ATUAL
  //let hora = 10
  //manipulando o horário pra teste
  msg.innerHTML = `Agora são ${hora} horas.`
  //msg com hora atualizada

  if (hora >= 6 && hora < 12){
    img.src = 'images/manha.png'
    document.body.style.background = '#3c9eea'
    //BOM DIA

  } else if(hora >= 12 && hora < 18){
    img.src ='images/tarde.png'
    document.body.style.background = '#bc5f00'
    //BOA TARDE

  } else{
    img.src = 'images/noite.png'
    document.body.style.background = '#010e28'
    //BOA NOITE
  }
  
}