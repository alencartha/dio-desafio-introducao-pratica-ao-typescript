let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let button = document.getElementById('buttonClick')

button.addEventListener('click', () => {
    alert(`A soma dos números é: ${somarNumeros(input1.value, input2.value)}`)
    input1.value = ''
    input2.value = ''
})

function somarNumeros(numero1, numero2) {
    if (typeof numero1 === "number" && typeof numero2 === "number") {  
        return numero1 + numero2
    } else { 
        return Number(numero1) + Number(numero2)
    }
}
