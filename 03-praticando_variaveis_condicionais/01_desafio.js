/*
1) Faça uma algoritimo que dado as 3 notas  tiradas por um aluno em um 
semestre da faculdade calcule e imprima a sua media e a sua classificação
conforme a tabela abaixo.

media = (nota 1 + nota 2 + nota 3) /  3;

classficaçao
- média menor que 5, reprovação
- média entre 5 e 7, recuperaçao
- média acima de 7, passou de semestre
*/

const noteOne = 5;
const noteTwo = 5;
const noteThree = 3;

const gradeAverange = (noteOne + noteTwo + noteThree) / 3;

if(gradeAverange > 7 ){
    console.log(`a Sua média acima de 7  nota:${gradeAverange.toFixed(2) } ### passou de semestre ###`)
} else if( gradeAverange >= 5 && gradeAverange <= 7) {
    console.log(`a Sua média esta entre 5 e 7 nota:${gradeAverange.toFixed(2) } ### recuperaçao ###`)
} else {
    console.log(`a Sua média e menor que 5 nota: ${gradeAverange.toFixed(2) } ### reprovação ###`)
}
