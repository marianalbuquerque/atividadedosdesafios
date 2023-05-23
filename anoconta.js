function anobissexto() {
   let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))

   let msg
   if (ano % 400 == 0) {

      msg = `É BISSEXTO &#x2705;`
   }
   else if (ano % 4 == 0 && ano % 100 != 0) {

      msg = `É BISSEXTO &#x2705;`
   }
   else {

      msg = `NÃO É BISSEXTO &#x274C;`
   }
   let res = document.getElementById('saida')
   res.innerHTML = `<p><strong style;> Analisando o ano de ${ano}...</p>`
   res.innerHTML += `<p>O ano de ${ano} <mark><strong style='color:red;'>${msg}</strong></mark></p>`
}

