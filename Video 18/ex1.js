// Extraia o backgroundColor, color e margin do btn

const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn)



const desBtn = [btnStyles.backgroundColor, btnStyles.margin, btnStyles.color] 
const [bgBtn, marginBtn, colorBtn] = desBtn

console.log(bgBtn, marginBtn,colorBtn)


// Troque os valores das variáveis abaixo

;

const [cursoAtivo, cursoInativo] = ['Html','JavaScript']

console.log(cursoAtivo)

// Corrija o erro abaixo

const cachorro = {
 nome: 'Bob',
 raca: 'Labrador',
 cor: 'Amarelo'
}
const {cor: bobCor} = cachorro