function converter() {
    var metro = parseFloat(window.prompt('Digite uma distância em metros(m)'))
    var res = window.document.getElementById('res')
    var km = parseFloat(metro / 1000)
    var hm = parseFloat(metro / 100)
    var dam = parseFloat(metro / 10)
    var dm = parseFloat(metro * 10)
    var cm = parseFloat(metro * 100)
    var mm = parseFloat(metro * 1000)

    res.innerHTML = (`<strong>A distância de ${metro} metros, corresponde a...</strong>`)

    res.innerHTML += (`${km.toFixed(2)} quilômetros (Km)</br>`)
    res.innerHTML += (`${hm.toFixed(2)} hectômetros (Hm)</br>`)
    res.innerHTML += (`${dam.toFixed(2)} decâmetros(Dam)</br>`)
    res.innerHTML += (`${dm.toFixed(2)} decímetros (dm)</br>`)
    res.innerHTML += (`${cm.toFixed(2)} centímetros(cm)</br>`)
    res.innerHTML += (`${mm.toFixed(2)} milímetros (mm)</br>`)
    
}