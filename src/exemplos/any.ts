let valorAny: any;
valorAny= 1
valorAny = 'hello'
valorAny = true

let valorString: string = 'teste'
valorString = valorAny
let valorString2: string = 'textão'
valorString2 = valorAny

function somarString(string1: string, string2: string){
    console.log(string1 + string2)
}

somarString(valorString, valorString2)