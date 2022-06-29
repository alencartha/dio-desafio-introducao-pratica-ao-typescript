function somarValores(number1: number | string, number2: number | string) {
    if (typeof number1 === 'string' || typeof number2 === 'string') {
        return number1.toString() + number2.toString();
    } else {
        return number1 + number2
    }

}

function printaValoresNumericos(number1: number, number2: number): void {
    console.log(number1 + number2)
}

console.log(somarValores(1, 5))
console.log(somarValores('olá', ' tudo bem?'))



/*function somarValoresNumericos(number1: number, number2: number): number {
    return number1 + number2
}*/

function somarValoresNumericosETratar(number1: number, number2: number, callback:(numero: number)=> number): number {
    let resultado = number1 + number2;
    return callback(resultado)
}

function aoQuadrado(numero: number): number{
    return numero * numero
}

function dividirPorEleMesmo(numero: number): number{
    return numero / numero
}

console.log(somarValoresNumericosETratar(1, 2, aoQuadrado))
console.log(somarValoresNumericosETratar(1, 2, dividirPorEleMesmo))