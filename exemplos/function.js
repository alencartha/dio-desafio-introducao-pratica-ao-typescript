"use strict";
function somarValores(number1, number2) {
    if (typeof number1 === 'string' || typeof number2 === 'string') {
        return number1.toString() + number2.toString();
    }
    else {
        return number1 + number2;
    }
}
function printaValoresNumericos(number1, number2) {
    console.log(number1 + number2);
}
console.log(somarValores(1, 5));
console.log(somarValores('olá', ' tudo bem?'));
/*function somarValoresNumericos(number1: number, number2: number): number {
    return number1 + number2
}*/
function somarValoresNumericosETratar(number1, number2, callback) {
    var resultado = number1 + number2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somarValoresNumericosETratar(1, 2, aoQuadrado));
console.log(somarValoresNumericosETratar(1, 2, dividirPorEleMesmo));
