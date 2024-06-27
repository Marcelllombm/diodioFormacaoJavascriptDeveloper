// class é uma definição o que deveriar ser
class Pessoa {
    nome;
    idade;

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`)        
    }
}

// instância é um ocorrencia de  um pessoa
const marcelo = new Pessoa()
marcelo.nome = 'marcelo borges'
marcelo.idade = 39
marcelo.descrever()


const renam = new Pessoa()
renam.nome = 'renan borges'
renam.idade = 20
renam.descrever()

