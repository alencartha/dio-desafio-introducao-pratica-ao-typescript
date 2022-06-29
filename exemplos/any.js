"use strict";
var valorAny;
valorAny = 1;
valorAny = 'hello';
valorAny = true;
var valorString = 'teste';
valorString = valorAny;
var valorString2 = 'textão';
valorString2 = valorAny;
function somarString(string1, string2) {
    console.log(string1 + string2);
}
somarString(valorString, valorString2);
