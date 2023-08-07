// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll('p')


const totalParagrafo = Array.prototype.reduce.call(paragrafos, (acumulador,item) => {

    return acumulador + item.innerText.length

}, 0)

console.log(totalParagrafo)

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

 function novaFuncao (tag, classe, conteudo){
    const elemento = document.createElement(tag)
     elemento.classList.add(classe) 
     elemento.innerHTML = conteudo
    return elemento; 




}

console.log(novaFuncao('li', 'azul', 'Esse é o conteudo'))

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará
//dinâmico

const criarH2Titulo = novaFuncao.bind(novaFuncao, 'h1', 'titulo')

const cursosJS = criarH2Titulo('Cursos de JavaScript')

console.log(cursosJS)