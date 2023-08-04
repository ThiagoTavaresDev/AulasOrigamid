// crie uma funcao construtora de pessoas
// deve conter nome, sobrenome e idade
//crie um metodo no prototipo que retorne o nome completo da pessoa

function Pessoas(nome, sobrenome,idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

}
Pessoas.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`

}

const th = new Pessoas('th', 'tavares', 18)