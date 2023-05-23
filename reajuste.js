function reajuste() {
    let name = window.prompt(`Qual é o nome do funcionário?`)
    let atual = Number(window.prompt(`Qual é o salário atual do ${name}?`))
    let reajuste = (window.prompt(`O salário do ${name} vai ser reajustado em qual porcentagem?`))
    salario = (reajuste / 100) * atual
    final = atual + salario


    let res = document.getElementById('saida')
    res.innerHTML = `<p> <strong>${name} recebeu um aumento salarial!</strong> </p>`
    res.innerHTML += `<p> O salário atual era R$ ${atual}. </p>`
    res.innerHTML += `<p> Com um aumento de ${reajuste}%, o salário vai aumentar R$ ${salario} no próximo mês. </p>`
    res.innerHTML += `<p> E a partir daí, ${name} vai passar a ganhar R$ ${final}. </p>`
}