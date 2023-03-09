function tabuada() {
    let num = window.document.getElementById('numero')
    let res = window.document.getElementById('res')

    if (num.value.length == 0) {
        window.alert ('Um número precisa ser informado')
    } else {
        var n = Number(num.value)
    }

    res.innerHTML = ''

    c = 1

    while (c <= 10){
        res.text = `${n} x ${c} = ${n*c}`
        option.appendChild (res)
        c++
    }
    
}