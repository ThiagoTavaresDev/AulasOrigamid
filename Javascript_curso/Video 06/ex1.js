// mostre no console cada parágrafo do site
const seguraParagrafos = document.querySelectorAll('p')

seguraParagrafos.forEach((item) => {
    console.log(item)
})
// mostre o texto dos paragrafos no console

seguraParagrafos.forEach((item) => {
    console.log(item.innerText)
})


// corrija os erros abaixo

const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) => {
    console.log(item, index)


})

let i = 0;

imgs.forEach(() => {
    console.log(i++)


})
imgs.forEach(() => i++)