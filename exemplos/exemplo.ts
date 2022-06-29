let input1 = document.getElementById('input1') as HTMLInputElement
let input2 = document.getElementById('input2') as HTMLInputElement
let button = document.getElementById('buttonClick')

let devePrintar: boolean = true;
let frase: string = 'O valor é:'

function adicionarNumero(numero1: number, numero2:number, devePrintar: boolean, frase: string){
    let resultado = numero1 + numero2
    if(devePrintar){
        console.log (`${frase} ${resultado}`)
    }
    return numero1 + numero2
}

if(button){
    button.addEventListener('click', () => {

        if(input1 && input2){
            adicionarNumero(Number(input1.value), Number( input2.value), devePrintar, frase)
            input1.value = ''
            input2.value = ''
        }
       
    })
}

