"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
function somarValoresNumericos(input1, input2) {
    return input1 + input2;
}
function printaValoresNumericos(input1, input2) {
    console.log(input1 + input2);
}
console.log(somarValores(1, 5));
console.log(somarValores('olá', ' tudo bem?'));
console.log(somarValoresNumericos(1, 5));
