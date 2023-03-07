function contar() {
    let ninicio = window.document.getElementById('ninicio')
    let nfim = window.document.getElementById('nfim')
    let npasso = window.document.getElementById('npasso')
    let res = window.document.getElementById('res')
    if (ninicio.value.length == 0 || nfim.value.length == 0) {
        window.alert('O número de inicio e fim precisam ser informados.')
        res.innerHTML = 'Preparando a contagem...'
    }
    
    if(npasso.value.length == 0 || npasso <= 0) {
            window.alert('Passo invalido, considerando PASSO 1.')
            npasso = 1
    }

    res.innerHTML = 'Contando: <br>'

    let i = Number(ninicio.value)
    let f = Number(nfim.value)
    let p = Number(npasso.value)

    if (i < f) {
        while (i <= f) {
            res.innerHTML += (`${i} \u{1F449}`)
            i += p
        }

        } else if (i > f) {
            for (c = i; c >= f; c -= p) {
            res.innerHTML += (`${c} \u{1F449}`)
            }
        }   
        res.innerHTML += (` \u{1F3C1}`)
}