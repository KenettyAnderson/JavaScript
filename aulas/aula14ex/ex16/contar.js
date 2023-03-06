function contar() {
    let ninicio = window.document.getElementById('ninicio')
    let nfim = window.document.getElementById('nfim')
    let npasso = window.document.getElementById('npasso')
    if (ninicio.value.length == 0 || nfim.value.length == 0) {
        window.alert('O número de inicio e fim precisam ser informados.')
    }
    
    if(npasso.value.length == 0) {
            window.alert('Considerando passo 1')
            npasso = 1
    }

    let res = window.document.getElementById('res')

    // do {
    //     res.innerHTML =
    //     ninicio = ninicio + npasso
    // } while (ninicio <= nfim)

    // while (ninicio <= nfim) {
    //     res.innerHTML = (`${ninicio}`)
    //     ninicio = ninicio + npasso
    // }

    // for (c = ninicio; ninicio <= nfim; c = npasso ) {
    //     res.innerHTML = ninicio
    //}    
}