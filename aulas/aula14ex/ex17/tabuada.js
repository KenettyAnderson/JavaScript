function tabuada() {
    let num = window.document.getElementById('numero')
    let tab = window.document.getElementById('tabuada')

    if (num.value.length == 0) {
        window.alert ('Um número precisa ser informado')
    } else {
        var n = Number(num.value)
    }

    c = 1

    tab.innerHTML = ''
    while (c <= 10){
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++
    }
    
}