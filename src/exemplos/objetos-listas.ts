const pessoa = {
    nome: 'Mariana',
    idade: 28,
    //profissao: 'desenvolvedora'
}

/*enum Profissao{
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}*/

interface Estudante extends Pessoa {
    materias: string[]
}

interface Pessoa {
    nome: string,
    idade: number,
   // profissao?: Profissao
}

const vanessa: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

const jessica: Estudante = {
    nome:'Jéssica',
    idade: 20,
    profissao: Profissao.Desenvolvedora,
    materias: ['POO', "Python", "SQL"]
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item)
    }
}

listar(jessica.materias)