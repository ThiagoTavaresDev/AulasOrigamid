// crie uma array com os anos que o Brasil ganhou a copa // 1959, 1962, 1970, 1994, 2002

let anosCopaBrasilWin = [1959, 1962, 1970, 1994, 2002];

// interja com a array utilizando um loop, para mostrar no console a seguinte mensagem, `o brasil ganhou a copa de ${ano}`

anosCopaBrasilWin.forEach(function (anosGanhados) {
  console.log(`o brasil ganhou o ano de: ${anosGanhados}`);
});
//interaja com um loop nas frutas abaixos e pare ao chegar em pera
let frutas = ["banana", "maca", "pera", "uva", "mamao"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "pera") {
    break;
  }
}

let ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
