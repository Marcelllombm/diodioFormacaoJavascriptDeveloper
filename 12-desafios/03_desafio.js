/*
    3- fa;a um programa que calcule e imprima o salario a ser tranferida para um 
    funcinario.
    para realizar o calculo receba o valor bruto do salario e o adicional dos beneficio
    o salario a ser transferido e calculado da seguinte maneira.

    valor bruto do salário - percentual de imposto mediante a faixa salarial  + adicionaal dos 
    beneficios

    para calcular o percentual de imposto segue as aliquotas.

    de R$ 0.00 as R$ 1100 - 5.00%
    de R$ 1100.01 a R$ 2500.00 - 10.00%
    maior que R$ 2500.00 - 15.00%
*/

const valorSalarioBrunto = 2000;
const valorAdicionalDosBeneficios = 50;

function calcularPorcentagem(valor, percentual){
    return valor * (percentual / 100)
}

function pegarPercentualComBaseNoSalario(salario){
    if(salario >= 0 && salario <= 1100){
        return 5;
    }
}