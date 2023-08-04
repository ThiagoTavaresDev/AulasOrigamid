//Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu')

const menuClonado = menu.cloneNode(true)

const copy = document.querySelector('.copy')

copy.appendChild(menuClonado)

// Selecione o primeiro DT do dl de Faq


const faq = document.querySelector('.faq')

const primeiraDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const proximoDd = primeiraDt.nextElementSibling

// substitua o conteúdo html de .faq pelo .animais

const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML

