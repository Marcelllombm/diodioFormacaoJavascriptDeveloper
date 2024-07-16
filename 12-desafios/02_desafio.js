/*
2- faça um programa que receba N (quantidade de numeros) e seus respectivos valores 
imprima o maior numero par e o menor numero impar
*/

const {numeroMaiorPar,numeroMenorImpar} = require('./funcoes')
const number = [5,3,4,1,10,8,11]
console.log(`numero par maior: ${numeroMaiorPar(number)}`)
console.log(`numero impar menor: ${numeroMenorImpar(number)}`)