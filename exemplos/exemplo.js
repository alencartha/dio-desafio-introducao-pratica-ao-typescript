"use strict";
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var button = document.getElementById('buttonClick');
var devePrintar = true;
var frase = 'O valor é:';
function adicionarNumero(numero1, numero2, devePrintar, frase) {
    var resultado = numero1 + numero2;
    if (devePrintar) {
        console.log("".concat(frase, " ").concat(resultado));
    }
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', function () {
        if (input1 && input2) {
            adicionarNumero(Number(input1.value), Number(input2.value), devePrintar, frase);
            input1.value = '';
            input2.value = '';
        }
    });
}
