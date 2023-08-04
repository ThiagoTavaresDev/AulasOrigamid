// adicione a classe ativo a todos os itens do menu

const menuz = document.querySelectorAll(".menu a");
menuz.forEach((item) => {
  item.classList.add("ativo");
});

// remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuz.forEach((item) => {
  item.classList.remove("ativo");
});

menuz[0].classList.add("ativo");

//verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");

imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute("alt");
  console.log(possuiAtributo);
});

// modifique o href do link externo do menu

const link = document.querySelector('a[href^="htpp"]');

link.setAttribute("href", "htpps://www.google.com");

console.log(link);
