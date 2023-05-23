function conversor(){
    let real = Number (window.prompt('Quantos R$ você tem na carteira?'))
conversao = real/dolar

    let res = document.getElementById('saida')
    res.innerHTML =  `<p> Você tem <strong> ${conversao} US$ </strong> na carteira. </p>`
    
}