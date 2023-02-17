function compra () {
    var prod = window.prompt('Que produto você está comprando?')
    var valor = window.prompt.parseFloat(`Quanto custa o(a) ${prod} que você está comprando?`)
    var pag = window.prompt.parseFloat(`Qual foi o valor que você deu para o(a) ${prod}?`)

    var troco = (pag - valor)

    if (pag >valor) {
        window.alert('O valor do pagamento está errado, favor conferir!')
    } else {
    window.alert(`Você comprou: ${prod} que custou ${valor}.\nDeu ${pag} e vai receber ${troco} de troco.\nVolte Sempre!`)
    }
}