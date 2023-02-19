function compra () {
    var prod = window.prompt('Que produto você está comprando?')
    var valor = parseFloat(window.prompt(`Quanto custa o(a) ${prod} que você está comprando?`))
    var pag = parseFloat(window.prompt(`Qual foi o valor que você deu para o(a) ${prod}?`))

    valor.replace('.', ',')
    pag.replace('.', ',')

    var troco = (parseFloat(pag) - parseFloat(valor))

    if (pag < valor) {
        window.alert('O valor do pagamento está errado, favor conferir!')
    } else {
    window.alert(`Você comprou: ${prod} que custou ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.\nDeu ${pag.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e vai receber ${troco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de troco.\nVolte Sempre!`)
    }
}