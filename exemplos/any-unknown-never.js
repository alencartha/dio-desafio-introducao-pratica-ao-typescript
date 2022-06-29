"use strict";
var anyEstaDeVolta;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 1;
var stringTest = 'verificar';
stringTest = anyEstaDeVolta;
var unknowValor;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;
var stringTest2 = 'agora vai';
if (typeof unknowValor === 'string') {
    stringTest2 = unknowValor;
}
//código encerrado (tipo never)
function jogaErro(erro, codigo) {
    throw { erro: erro, code: codigo };
}
console.log(jogaErro("Deu erro", 500));
