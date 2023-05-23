function conversor() {
    let metro = Number(window.prompt('Digite uma distância em metros(m)'))

    let quilometro = metro / 1000
    let hectometro = metro / 100
    let decametro = metro / 10
    let decimetro = metro * 10
    let centimetro = metro * 100
    let milimetro = metro * 1000

    let res = document.getElementById('saida')
    res.innerHTML = `<p> <strong>A distância de ${metro} metros, corresponde a... </strong></p>`
    res.innerHTML += `<p>${quilometro} quilômetros (Km) </p>`
    res.innerHTML += `<p>${hectometro} hectômetros (Hm) </p>`
    res.innerHTML += `<p>${decametro} decâmetros (Dem) </p>`
    res.innerHTML += `<p>${decimetro} decímetros (dm) </p>`
    res.innerHTML += `<p>${centimetro} centímetros (cm) </p>`
    res.innerHTML += `<p>${milimetro} milímetros (mm) </p>`
}