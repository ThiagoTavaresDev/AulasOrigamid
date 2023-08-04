// quando o usuário clicar nos links internos do site
// adicione a clase ativo ao item clicacdo e remova das demais itens caso eles possuam o mesmo. Previna o comportamento padrao dos links

const linksInternos = document.querySelectorAll('a[href^="#"]')


linksInternos.forEach((link) =>{
    
    link.addEventListener('click', (e) =>{

        linksInternos.forEach((item) =>{
            item.classList.remove('ativo')      
          

        })
       
        e.currentTarget.classList.add('ativo')
     
        e.preventDefault()


    })


})

// Selecione todos os elementos do site começando a partir do body, ao clique mostre quais elementos estao sendo clicados

const allElements = document.querySelectorAll('body *')

allElements.forEach((items) =>{
    
    items.addEventListener('click', (e) =>{
        console.log(e.currentTarget)

        e.currentTarget.remove()

    })



})


// utilizando o codigo anterior, ao inves de mostrar no console, remova o elemnto que esta sendo clicado, o metodo remove() remove um elemento


// se o usuario clicar na tecla T aumente todo o texto do site

window.addEventListener('keydown', (e) =>{
    if(e.key === 't'){
    document.documentElement.classList.toggle('texto-grande')


    }


})
