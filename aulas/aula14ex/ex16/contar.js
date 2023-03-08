function contar() {
    let ninicio = window.document.getElementById('ninicio')
    let nfim = window.document.getElementById('nfim')
    let npasso = window.document.getElementById('npasso')
    let res = window.document.getElementById('res')
    if (ninicio.value.length == 0 || nfim.value.length == 0 || npasso.value.length == 0 ) {
        window.alert('Os números de inicio, fim e passo precisam ser informados.')
        res.innerHTML = 'Preparando a contagem...'
    }
    
    if(npasso.value <= 0) {
            window.alert('Passo invalido, considerando PASSO 1.')
            npasso.value = 1
    }

    let i = Number(ninicio.value)
    let f = Number(nfim.value)
    let p = Number(npasso.value)

    if (i < f) {
        res.innerHTML = 'Contando: <br>'
        while (i <= f) {
            res.innerHTML += (`<strong>${i}</strong> \u{1F449}`)
            i += p
        }
        res.innerHTML += (` \u{1F3C1}`)

        } else if (i > f) {
            res.innerHTML = 'Contando: <br>'
            for (c = i; c >= f; c -= p) {
            res.innerHTML += (`<strong>${c}</strong> \u{1F449}`)
            }
            res.innerHTML += (` \u{1F3C1}`)
        }   

}