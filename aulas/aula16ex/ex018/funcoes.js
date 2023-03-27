let num = window.document.getElementById('num')
let lista = window.document.getElementById('lista')
let res = window.document.getElementById('res')
let valores = []

function VerifN(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function NLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(VerifN(num.value) && !NLista(num.value, valores)) {
        valores.push(Number(num.value))  
        var item = document.createElement('option')
        item.text = `Valor ${(num.value)} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert("Número inválido ou já encontrado na lista.")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Informe valores antes de finalizar')
    } else {
        let numeros_cadastrados = valores.length

        let maior_valor = valores[0]
            for (let pos in valores) {
                if (maior_valor < valores[pos]) {
                    maior_valor = valores[pos]
                }
            }

        let menor_valor = valores[0]
            for (let pos in valores) {
                if (menor_valor > valores[pos]) {
                    menor_valor = valores[pos]
                }
            }

        let soma_valor = 0
        for (let pos in valores) {
            soma_valor = soma_valor + valores[pos]
        }

        let media_valor = soma_valor / valores.length

        res.innerHTML = 
        
        `Ao todo, temos ${numeros_cadastrados} números cadastrados.</br>

        O maior valor informado foi ${maior_valor}.</br>

        O menor valor informado foi ${menor_valor}.</br>

        Somando todos os valores, temos ${soma_valor}.</br>

        A média dos valores digitados é ${media_valor}.</br>`
    }
}

function limpar() {
    valores = []
    lista.innerHTML = ''
    res.innerHTML = ''

}