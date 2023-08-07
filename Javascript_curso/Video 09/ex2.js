const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];

//Remova o primeiro valor de comidas e coloque em uma variável

const primeiroValorRemovido = comidas.shift();

console.log(primeiroValorRemovido);

//Remove o último valor de comidas e coloque em uma variável

const ultimoValorRemovido = comidas.pop();

console.log(ultimoValorRemovido);

//Adicione 'Arroz' ao final da array

const valorAdicionadoFinal = comidas.push("Arroz");

console.log(comidas);

// Adicione 'Peixe' e 'Batata' ao inicio da array

const adicionarInicio = comidas.unshift("Peixe", "Batata");

console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];

//Arrume os estudantes em ordem alfabética

const alfabetica = estudantes.sort();

console.log(alfabetica);

//Inverta a ordem dos estudantes

const invertido = estudantes.reverse();

console.log(invertido);

//Verifique se Joana faz parte dos estudantes

const verificaJoa = estudantes.includes("Joana");

console.log(verificaJoa);

//Verifique se Juliana faz parte dos estudantes

const verificaJu = estudantes.includes("Juliana");

console.log(verificaJu);

let html = `
<section>
<div>Sobre</div>
<div>Produtos</div>
<div>Contato</div>
</section>`;
// Substitua section por ul e div com li, utilizando split e join

// html = html.split('section').join('ul').split('div').join('li')

let htmlNovoSec = html.split("section");

let htmlJuntadoUl = htmlNovoSec.join("ul");

console.log(htmlJuntadoUl);

let htmlNovoDiv = htmlJuntadoUl.split("div");

let htmlJuntadoLi = htmlNovoDiv.join("li");

console.log(htmlJuntadoLi);

const carros = ["Ford", "Fiat", "VW", "Honda"];

//Remova o último carro, mas antes de remover

// salve a array original em outra variável

const arraySalva = carros.slice();

const arraySemCarro = carros.pop();

console.log(carros);
