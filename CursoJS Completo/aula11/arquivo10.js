function calcular () {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel} Km/h</strong>`
    
    if (vel > 60)
        res.innerHTML += `<p>Você está <strong>MULTADO!</strong></p>`
    }