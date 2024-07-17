/*
    Faça um programa que receba a media de um aluno.
    caso a média seja < 5 imprima "reprovado"
    caso a média seja >= 5 imprima "recuperação"
    caso a média seja >= 7 imrima "Aprovado"
*/

const notas = [5,5,5,5]
let soma = 0;
for(i = 0; i < notas.length; i++){
    soma = soma + notas[i]
}

const media = soma / notas.length;
if(media >= 7){
    console.log("Aprovado")
}else if(media >= 5){
    console.log("recuperação")
} else{
    console.log("reprovado")
}