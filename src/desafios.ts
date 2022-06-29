let buttonRespostas = document.getElementById('buttonRespostas')



// Como podemos rodar isso em um arquivo .ts sem causar erros? 
let desafio1 = document.getElementById('desafio1') as HTMLElement

interface Employee {
    code: number;
    name: string;
}

let employee: Employee = {
    code: 0,
    name: ''
};

employee.code = 10;
employee.name = "John";


// Como podemos melhorar o esse código usando TS? 

let desafio2 = document.getElementById('desafio2') as HTMLElement

enum Profissao {
    Atriz = 'Atriz',
    Padeiro = 'Padeiro'
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}

let pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: Profissao.Atriz
}

let pessoa2: Pessoa = {
    nome: 'roberto',
    idade: 19,
    profissao: Profissao.Padeiro
}


let pessoa3: Pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: Profissao.Atriz
}

let pessoa4: Pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
}

// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLInputElement;
let valorAtual: number = 0
let saldo: number = 0

if (campoSaldo) {
    campoSaldo.innerHTML = `${saldo}`
}

function somarAoSaldo(soma: number): void {
    let novoValor = valorAtual + soma
    saldo += novoValor
    campoSaldo.innerHTML = `${saldo}`;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    if (soma) {
        somarAoSaldo(Number(soma.value));
        console.log(typeof soma)
    }

});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});


if (buttonRespostas) {
    buttonRespostas.addEventListener('click', () => {
        desafio1.innerHTML += ` ${employee.code}, ${employee.name}`
        desafio2.innerHTML += ` Pessoa 1 : ${pessoa1.nome}, ${pessoa1.idade}, ${pessoa1.profissao} </div>
        <div> Desafio 2 -- Pessoa 2 : ${pessoa2.nome}, ${pessoa2.idade}, ${pessoa2.profissao} </div>
        <div> Desafio 2 -- Pessoa 3 : ${pessoa3.nome}, ${pessoa3.idade}, ${pessoa3.profissao} </div>
        <div> Desafio 2 -- Pessoa 4 : ${pessoa4.nome}, ${pessoa4.idade}, ${pessoa4.profissao} </div>
        `
    })
}



