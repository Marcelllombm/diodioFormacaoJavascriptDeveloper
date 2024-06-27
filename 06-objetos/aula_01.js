// objeto é uma coleção de dados dinâmico , que tem chave: e valor
const marcelo ={
    nome: 'Marcelo Borges de melo',
    sobreNome:'borges',
    idade: 40,
    // funsao dentro do objeto e chamado de metado
    descrever: function(){
        console.log(`Meu nome é ${this.sobreNome} e minha idade é ${this.idade}`)
    }
}

// acesso dinâmico
const atributo = 'nome'
marcelo[atributo] = 'teste';
// ou
marcelo['nome'] =  'teste'

//acesso direto
marcelo.nome=  'teste'
// vc pode add valor no objeto
marcelo.altura = 1.68;

// vc pode deleta o chave no objeto
delete marcelo.nome;

console.log(marcelo.nome)
console.log(marcelo.idade)
console.log(marcelo)
marcelo.descrever();

