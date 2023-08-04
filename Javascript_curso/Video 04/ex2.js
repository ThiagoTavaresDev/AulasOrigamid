// por qual motivo o codigo abaixo retorna com erros?
{ 
   
    var cor = 'preto'
   
   


}
let portas = 4;
const marca = 'fiat'
console.log(cor, marca ,portas) // é necessario colocar o nome certo da variavel, e as variaveis criadas com let e const precisam estar no mesmo escopo da execução determinada para serem dadas como definidas.

// como corrigir o erro abaixo?

function somarDois(x){
    const dois = 2;
    return x + dois

}
function dividirDois(x){
    const dois = 2
    return x + dois;



}
somarDois(4)
dividirDois(6)
// a variavel dois dada por const, possui escopo de função, com isso precisa ser redeclarada abaixo na nova função OBS: COMO ALTERNATIVA TAMBEM POSSO COLOCAR CONST OU LET FORA DESTES ESCOPOS, POIS AI SERÃO DADAS COMO DEFINIDAS NAS FUNCOES

// o que fazer para total retornar 500?

var numero = 50;

for(let numero = 0; numero < 10; numero++){
    console.log(numero);


}
const total = 10 * numero;
console.log(total);
// basta substituir o var que inicializava a variavel numero, para let, pois o anterior por possuir escopo global era reatribuido no final.
