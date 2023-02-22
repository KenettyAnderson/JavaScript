function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var hora_atual = window.document.getElementById('hora_atual')
    var img_hora = window.document.getElementsByClassName('img_hora')

    hora_atual.innerHTML = `Agora são ${hora}:${minuto}.`



    // img_hora.src = "imagens/noite.png"
    // window.document.body.style.background = "#1c395b"
}