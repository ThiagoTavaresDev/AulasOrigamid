//Crie um objeto com os seus dados pessoais
// deve possui pelo menos duas propriedades nome e sobrenome

let dadosPessoais = {
  nomeCompleto: "Thiago Tavares",

  idade: 18,
  altura: 1.6,
  peso: 46,
  hobby: "Jogar Games",
};
console.log(dadosPessoais);

//crie um metodo no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nomeCompleto);

//modifique o valor da propriedade preco para 3000

let carro = {
  preco: 1000,
  portas: 4,
  marca: "audi",
};
carro.preco = 3000;

console.log(carro.preco);

// crie um objeto de um cachorro que representa labrador, preto com 10 anos, que late ao ver um homem

let cachorro = {
  tipo: "canino",
  raca: "labrador",
  cor: "preto",
  idade: 10,
  late: "ao ver homem",
};
console.log(cachorro);
