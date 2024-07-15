// como funciona a estrutura do for
for (let index = 0; index < 10; index++) {
    console.log(index)
    
}

// executando  for em uma string
const nome = "Marcelo"
for (let i = 0; i < nome.length; i++) {
    const letra = nome[i];
    console.log(letra)
}

// Executando For Para Exibir a Média de Notas
const notas = [];
notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)

let soma = 0;
for(let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma = soma + nota
}
console.log(soma / notas.length)