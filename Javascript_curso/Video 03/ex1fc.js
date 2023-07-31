// crie uma funcao para verificar se um valor é truthy

function verdadeiroOrFalse(condicao) {
  if (condicao != false) {
    return console.log("verdadeiro");
  } else return console.log("falso");
}
verdadeiroOrFalse(0);

// crie uma funcao matematica que retorna o perimetro de um quadrado

function perimetroQuadrado(lado) {
  let multipli = lado + lado + lado + lado;
  return console.log(multipli);
}
perimetroQuadrado(4);

// crie uma funcao que retorne o seu nome completo, precisa de nome e sobrenome

function nomeCompleto(primeiroNome, Sobrenome) {
  return console.log(primeiroNome + " " + Sobrenome);
}
nomeCompleto("Thiago", "Tavares");

// crie uma funcao que veriifca se um numero é par

function verificaPar(numero) {
  if (numero % 2 === 0) {
    return console.log("o numero é par");
  } else return console.log("o numero é impar");
}
verificaPar(3);

// crie uma funcao que retorne o tipo de dado do argumento passado nela typeof

function tipoPassado(argumento) {
  return console.log(typeof argumento);
}
tipoPassado("opa");

// addEventListener é uma funcao nativa do JS
//o primeiro parametro é o evento que ocorre e o segundo o Callback
//utilize essa funcao para mostrar no console o seu nome completo
//quando o evento "scroll " ocorrer.
addEventListener("scroll", function (nomeCompleto) {
    let primeiroNome = "Thiago";
    let segundoNome = "Tavares";
    return console.log(primeiroNome + " " + segundoNome);
  });
  

// corrija o erro

function precisoVisitar(paisesVisitados) {
  let totalPaises = 193;
  return console.log(
    `ainda faltam ${paisesVisitados} do total de ${totalPaises} paises`
  );
}
precisoVisitar(20);

