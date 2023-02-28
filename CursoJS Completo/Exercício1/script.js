function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML=`Agora são ${hora}:${minuto} horas.`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src ='imagens/manhã.png'
        document.body.style.background ='#DCDCDC'
       } 
    else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src='imagens/tarde.png'
        document.body.style.background ='#836FFF'
    } 
    else {
        // BOA NOITE!
        img.src ='imagens/noite.png'
        document.body.style.background ='#4F4F4F'
    }
}