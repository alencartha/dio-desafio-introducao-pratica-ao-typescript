"use strict";
let anyEstaDeVolta;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 1;
let stringTest = 'verificar';
stringTest = anyEstaDeVolta;
let unknowValor;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
let stringTest2 = 'agora vai';
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
//código encerrado (tipo never)
function jogaErro(erro, codigo) {
    throw { erro: erro, code: codigo };
}
console.log(jogaErro("Deu erro", 500));
