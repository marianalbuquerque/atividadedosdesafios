function desconto() {
    let produto = window.prompt(`Qual é o produto que você está comprando?`)
    let price = window.prompt(`Qual é o preço do(a) ${produto}`)
    desconto = price * 0.1
    final = price - desconto

    let res = document.getElementById('saida')
    res.innerHTML = `<p> <strong> Calculando desconto de 10% para ${produto}...</strong> </p>`
    res.innerHTML += `<p> O preço original era de R$ ${price}. </p>`
    res.innerHTML += `<p> Você acaba de ganhar R$ ${desconto}  de desconto (-10%). </p>`
    res.innerHTML += `<p> No fim você vai pagaar R$ ${final}  no produto ${produto}. </p>`
}