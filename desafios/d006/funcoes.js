function converter(){
    var celsius = parseFloat(prompt('Digite uma temperatura em °C (Celsius'))
    var res = window.document.querySelector('div#res')

    var kevin = parseFloat(celsius + 273.15)
    var fahrenheit = parseFloat(celsius *1.8 +32)

    res.innerHTML = (`<strong>A temperatura de ${celsius}°C, corresponde a...</strong></br>`)

    res.innerHTML += (`${kevin.toFixed(2)}°K (Kelvin)</br>`)
    res.innerHTML += (`${fahrenheit.toFixed(2)}°F (Fahrenheit)`)
}