// function cotacao() {
//     var cotacao = parseFloat(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
    function converter() {
        var res = window.document.querySelector('div#res')
        cotacao = 5.17

        var dinheirobr = parseFloat(prompt('Quantos R$ você tem na carteira?'))

        var dinheirous = parseFloat(dinheirobr * cotacao)

    
        res.innerHTML = (`Você tem ${dinheirous} dólares.`)
    }
//}
