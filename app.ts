let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement
let button = document.getElementById('buttonClick')

function adicionarNumero(numero1: number, numero2:number){
    return numero1 + numero2
}

if(button){
    button.addEventListener('click', () => {

        if(input1 && input2){
            alert(`A soma dos números é: ${adicionarNumero(Number(input1.value), Number(input2.value))}`)
            input1.value = ''
            input2.value = ''
        }
       
    })
}

