/*
Qual o resultado da seuginte expressao?
let total = 10 + 5 * 2 / 2 + 20

Crie duas expressoes que retornem NaN

somar a string '200' com  o numero 50 e retornar 250

incremente o numero 5 e retorne o seu valor incrementando

como dividir o peso por 2?

let numero "80";
let unidade = "kg";
let peso = numero + unidade; --> "80kg"
let pesoPorDois = peso/2; --> NaN

*/

let conta = 10 + (5 * 2) / 2 + 20;
console.log(conta);

let expressaoNaN1 = "fala" / 200;
let expressaoNaN2 = "opa" * 2;

console.log(expressaoNaN1);
console.log(expressaoNaN2);

let string = "200";

let numero = 50;

let retorno = +string + numero;

console.log(retorno);

let numero1 = 5;
++numero1;
console.log(numero1);

let numeroX = "80";

let peso = numeroX;
let pesoPorDois = peso / 2;
console.log(pesoPorDois)


