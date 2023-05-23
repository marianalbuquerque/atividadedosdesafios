function antesedepois() {
    let numero = Number(window.prompt('Digite um número qualquer'))

    let sucessor = numero + 1
    let antecessor = numero - 1

    window.alert(`Antes de ${numero}, temos ${antecessor}.
Depois de ${numero}, temos ${sucessor}.`)
}