function bhaskara() {
    let a = window.prompt(`Qual o valor de a?`)
    let b = window.prompt(`Qual o valor de b?`)
    let c = window.prompt(`Qual o valor de c?`)
    delta = (b * b) - 4 * a * c


    let res = document.getElementById('saida')
    res.innerHTML = `<p>A equação atual é <strong style;> ${a}x<sup>2</sup>+${b}x+${c}=0</p>`
    res.innerHTML += `<p>O cálculo realizado será <strong style;> Δ= ${b}<sup>2</sup> -4 . ${a} . ${c}</p>`
    res.innerHTML += `<p>O valor calculado foi<strong style;> Δ= ${delta}</p>`
}
