/* quero que exiba a media da nota*/

const notas = [];

notas.push(10)
notas.push(8)
notas.push(5)
notas.push(7)

let soma = 0;

for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    soma =  soma + nota
}
let media = soma / notas.length
console.log("sua media é: " + media)