// class é uma definição o que deveriar ser
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

 // força a ser obrigatorio  (contrato)
constructor(nome , idade){
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2024 - idade;
}

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`)        
    }
}

// instância é um ocorrencia de  um pessoa
const marcelo = new Pessoa('Marcelo', 39)

const renam = new Pessoa('renam', 22)

console.log(marcelo)
console.log(renam)
