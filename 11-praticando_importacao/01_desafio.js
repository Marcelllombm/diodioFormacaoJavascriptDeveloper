/*
    Uma sala contem 5 alunos e para cada launo foi sorteado um número 1 -100
    faça um programa que receba os 5 números sorteados para os alunos e mostre o 
    maior número sorteado.

    dados de entreada
    5
    50
    10
    96
    23
*/

const {gets, print} = require('./funcao')

const drawnNumber = []

for(i =0; i<5; i++){
    const sort = gets();
    drawnNumber.push(sort)
}

console.log(drawnNumber)

let biggerNumber = 0

for(i = 0; i < drawnNumber.length; i++){
    const number = drawnNumber[i]
    if(number > biggerNumber){
        biggerNumber = number
    }
}

console.log(biggerNumber)