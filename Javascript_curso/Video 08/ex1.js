// Transforme o objeto abaixo em uma Constructor Function

const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'andou')


    }

}

function PessoaAnda(nome, idade) {
    this.nome = nome
    this.idade = idade

    this.andar = function(){
        console.log(this.nome + ' andou')


    }

}

// Crie 3 pessoas , Joao 20 anos, Maria 25 anos, Bruno 15 anos

const pessoa1 = new PessoaAnda ('João', 20)
const pessoa2 = new PessoaAnda ('Maria', 25)
const pessoa3 = new PessoaAnda ('Bruno', 15)

// crie uma Constructor Function (Dom) para manipulação de listas de elementos no dom. Deve conter as seguintes propriedades e métodos:

//elements, retorna Nodelist com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
    const elementsList = document.querySelectorAll(seletor)
    this.elementos = elementsList
    this.adicionaClasse = function(classe){
        elementsList.forEach((element) =>{
            element.classList.add(classe)


        })
     
    }
    this.removeClasse = function(classe){
       elementsList.forEach((element) =>{
        element.classList.remove(classe)


       })

    }


}