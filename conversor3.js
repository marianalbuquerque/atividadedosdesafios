function conversor() {
    let celsius = Number(window.prompt('Digite uma temperatura em °C (Celsius)'))
    kelvin = celsius + 273, 15
    fahrenheit = (celsius * 9 / 5) + 32

    let res = document.getElementById('saida')
    res.innerHTML = `<p> A temperatura de <strong> ${celsius}, corresponde a... </strong> </p>`
    res.innerHTML += `<p> ${kelvin} (Kelvin) </p>`
    res.innerHTML += `<p> ${fahrenheit} (Fahrenheit) </p>`
}