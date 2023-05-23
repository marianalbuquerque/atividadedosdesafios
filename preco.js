function verificar() {
    let anterior = window.prompt(`Qual era o preço anterior do produto?`)
    let atual = window.prompt(`Qual é o prço atual do produto?`)
    let msg
    let dif
    dif1 = anterior - atual
    dif2 = atual - anterior

    if (anterior > atual) {
        msg = `Hoje o produto está mais barato.`
        dif = `O preço diminuiu R$ ${dif1} em relação ao preço anterior`
    }
    else if (atual > anterior) {
        msg = `Hoje o produto está mais caro.`
        dif = `O preço aumentou R$ ${dif2} em relação ao preço anterior`
    }
    else {
        msg = `Hoje o produto possue o mesmo preço que anteriormente.`

    }

    let res = document.getElementById('saida')
    res.innerHTML = `<p> <strong>Analisando os valores informados</strong> </p>`
    res.innerHTML += `<p> O produto custava R$ ${anterior} e agora custa R$ ${atual}. </p>`
    res.innerHTML += `<p> ${msg} </p>`
    res.innerHTML += `<p> ${dif} </p>`
}