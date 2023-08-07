// Retorne um número aleatório
// entre 1050 e 2000

const numeroAleatorio = Math.random() * (2000 - 1050) + 1050;

console.log(numeroAleatorio);

// Retorne o maior número da lista abaixo

const numeros = "4, 5, 20, 8, 9";
const numerosArray = numeros.split(", ");

const numeroMaximo = Math.max(...numerosArray);

console.log(numeroMaximo);

// Crie uma funcao para limpar os preços e retornar os numeros  com centavos arrendados depois retorne a soma final

const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$ 230 ', 'r$ 200']

function limparPreco(preco){
    preco = preco.toUppercase().replace('R$,','').trim().replace(',', '.')
    preco = +preco.toFixed(2)
    return preco


}
listaPrecos.forEach((preco) =>{
    soma += limparPreco(preco)


})
limparPreco(listaPrecos[1])