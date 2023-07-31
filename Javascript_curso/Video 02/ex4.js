/*
Verifique se a sua idade é maior do que a de algum parente
Dependendo do resultado coloque no console "é maior", " é igual" ou "é menor"

Qual valor é retornado na seguinte expressao?
-- let expressao = (5-2) && (5 - " ") && (5 -2);

Verifique se as seguintes variaveis sao truthy ou falsy
let nome "Andre"
let idade = 28
let possuiDoutorado = false;
let empregoFuturo;
let dinheiroNaConta = 0

compare o total de habitantes do Brasil com china (valor em milhoes)

let brasil = 207
let china = 1340

o que irá aparecer no console?
    if(("Gato" === "gato") && (5 > 2)){
        console.log("verdadeiro")
    }
    else{
    console.log("falso")
}
*/
let idade = 18;
let idadeParente = 20;

if (idade > idadeParente) {
  console.log("Minha idade é maior");
} else if (idade < idadeParente) {
  console.log("minha idade é menor");
} else {
  console.log("as idades sao iguais");
}

let expressao = 5 - 2 && 5 - " " && 5 - 2;
console.log(expressao);

let nome2 = "Andre" //true
let idade2 = 28 //true
let possuiDoutorado = false; //false
let empregoFuturo; //false
let dinheiroNaConta = 0 //false

let brasil = 207
let china = 1340

if (brasil < china) {
    console.log("pelo menos nao comemos cachorro")

}


//falso
if(("Gato" === "gato") && (5 > 2)){
    console.log("verdadeiro")
}
else{
console.log("falso") 
}