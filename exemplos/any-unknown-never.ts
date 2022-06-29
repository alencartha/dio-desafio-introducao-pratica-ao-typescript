let anyEstaDeVolta: any;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 1

let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;

let unknowValor: unknown;
unknowValor = 3;
unknowValor = 'opa';
unknowValor = true;

let stringTest2: string = 'agora vai';

if(typeof unknowValor === 'string'){
    stringTest2 = unknowValor
}

//código encerrado (tipo never)
function jogaErro(erro:string, codigo: number): never{
    throw {erro: erro, code: codigo}
}

console.log(jogaErro("Deu erro", 500))