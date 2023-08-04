// verifique a distancia da primeira imagem, em relação ao topo da pagina

const img = document.querySelector('img')

const verificaTopImg = img.offsetTop

console.log(verificaTopImg)

// retorne a soma da largura de todas as imagens
function somaImage(){
const imgs = document.querySelectorAll('img')
let somaimgs = 0;

imgs.forEach((item) => {

    somaimgs += imgs.offsetWidth



})
    console.log(somaimgs)
}    
window.onload = function(){
    somaImage()


}
// Verifique se os links da pagina possuem o minimo recomendado para telas utilizadas com o dedo. (48px/48px)


    const links = document.querySelectorAll('a')
   
    
   
    links.forEach((link) =>{
       
        const linkWidth = link.offsetWidth;
        const linkHeigth = link.offsetHeight
        if(linkWidth > 48 && linkHeigth > 48) {
            console.log(link,"não está acessível para mobile")
    
    
        }
        else {
            console.log(link, "esta acessível")
        }



    })

    // se o browser for menor que 720px adicione a classe menu-mobile ao menu

    const browserJanela = window.matchMedia('(max-width: 720px)').matches;
    
    if(browserJanela) {
        const menu = document.querySelector('.menu');
        menu.classList.add('menu-mobile');
     


    }


