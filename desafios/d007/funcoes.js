// function cotacao() {
//     var cotacao = parseFloat(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
//     return cotacao
// }
    function converter() {
        var res = window.document.querySelector('div#res')
        var cotacao = 5.17

        var dinheiroBR = parseFloat(prompt('Quantos R$ você tem na carteira?'))

        var dinheiroUS = parseFloat(dinheiroBR * cotacao)

    
        res.innerHTML = (`Você tem ${dinheiroUS} dólares.`)
    }

