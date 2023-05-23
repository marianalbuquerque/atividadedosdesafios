function situacao() {
    let nom = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Insira a primeira nota de ${nom}:`))
    let n2 = Number(window.prompt(`Insira a outra nota de ${nom}:`))
    med = (n1 + n2) / 2
    let msg
    let msg2

    if (med >= 6) {
        msg = `Com a média acima de 6,0, o aluno está`
        msg2 = `<strong style='color:green;'>APROVADO</strong>`
    } else if (med < 3) {
        msg = `Com a média abaixo de 3,0, o aluno está`
        msg2 = `<strong style='color:red;'>REPROVADO</strong>`
    }
    else {
        msg = `Com a média entre de 3,0, e 6,0, o aluno está em`
        msg2 = `<strong style='color:yellow;'>RECUPERAÇÃO</strong>`

    }

    let res = document.getElementById('saida')
    res.innerHTML = `<p><strong>Analisando a situação de ${nom} </strong></p>`
    res.innerHTML += `<p> <strong> A média de ${nom} é ${med} </strong> </p>`
    res.innerHTML += `<p>${msg} ${msg2}</p>`
}