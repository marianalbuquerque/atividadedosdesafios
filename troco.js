function troco() {
    let produto = window.prompt('Que produto você está comprando?')
    let preco = Number(window.prompt(`Quanto custa ${produto} que você está comprando?`))
    let pagou = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}? `))
    troco = pagou - preco

    window.alert(`Você comprou ${produto} que custou R$ ${preco}.
Deu R$ ${pagou} em dinheiro e vai receber R$ ${troco} de troco.
Volte Sempre!`)
}