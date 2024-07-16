/*
    1- faça um programa que receba a média de um aluno
    caso a média seja < 5 imprima reprovado
    caso a média seja  >= 5 < 7 imprima recuperação
    caso a média seja >= 7 imprima aprovados
*/
const {media} = require("./funcoes")
const notas = [5,10,5,1]


const mediaTotal = media(notas)

if( mediaTotal >= 7){
    console.log("Aprovado")
}else if( mediaTotal < 7 && mediaTotal >= 5 ){
    console.log("Reculperação")
} else{
    console.log("reprovado")
}