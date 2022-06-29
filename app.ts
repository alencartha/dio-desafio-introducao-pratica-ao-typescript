function somarValores(input1: number | string, input2: number | string) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2
    }

}

function somarValoresNumericos(input1: number, input2: number): number {
    return input1 + input2
}

function printaValoresNumericos(input1: number, input2: number): void {
    console.log(input1 + input2)
}

console.log(somarValores(1, 5))
console.log(somarValores('olá', ' tudo bem?'))
console.log(somarValoresNumericos(1, 5))