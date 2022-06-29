"use strict";
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let button = document.getElementById('buttonClick');
let devePrintar = true;
let frase = 'O valor é:';
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    let resultado = numero1 + numero2;
    if (devePrintar) {
        console.log(`${frase} ${resultado}`);
    }
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase);
            input1.value = '';
            input2.value = '';
        }
    });
}
