//  array - e um lista de dados
const alunos = ["joão","victor","Marina"];
console.log(alunos[1])

// adicionar no final da lista
alunos.push("Marcelo")
console.log(alunos)

// remove o ultimo da lista
alunos.pop();
console.log(alunos)

// remove o primeiro da lista
alunos.shift();
console.log(alunos)

// notas do alunos
const notas = [];
notas.push(5)
notas.push(7)
notas.push(8)
notas.push(2)
notas.push(5)
console.log(notas.length)
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]
console.log(soma / 5)
