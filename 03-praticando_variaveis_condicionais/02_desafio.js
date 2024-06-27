/*
o imc - indice de massa corporal é um criterio da organazaçoa mundial de saude para dar uma indicação sobre
a condição de peso de uma pesso adulta.

formula do imc
imc = peso / (altura * altura)

elabora em algoritmo que dado o peso e a atura de um adulto mostre
sua condição de acordo com a tabela abaixo.

IMC em adultos condição
- Abaixo de 18.5 Abaixo do peso
- Entre 18.5 e 25 peso normal
- entre 25 e 30 acima do peso
- entre 30 e 40 obeso
- acima de 40 obesidade grave
*/

const Weight = 69.5;
const height = 1.67;

const imc = (Weight /  Math.pow(height, 2 )).toFixed(2)

if(imc < 18.5 ){
console.log(`${imc} = abaico do peso`)
} else if(imc >= 18.5 && imc < 25 ){
    console.log(`${imc} =peso normal`)
}else if(imc >= 25 && imc <30 ){
    console.log(`${imc} = acima do peso`)
}else if(imc >= 30 && imc <= 40 ){
    console.log(`${imc} = obeso`)
} else {
    console.log(`${imc} = obesidade grave`)
}
