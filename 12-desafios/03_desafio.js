/*
faça um programa que calcule e imprima o salario  a ser transferido para o funcionario
para realizar o calculo receba o valor bruto de salario e o adicional dos beneficio
o salario a ser transferido e calculado da seguinte maneira

valor bruto do salario - percentual de imposto mediante a faixa salarial + adicional do beneficios

para calcular o percentual de imposto segue as aliguotas

De R$ 0,00 a R$ 1100.00 - 5%
De R$ 1100.01 a R$ 2500.00 - 10%
Maior que R$ 2500.00= 15%

entrada     
 2000
 250

 saida 
 2050
*/

const {valorComDesconto} = require('./funcoes')

console.log(valorComDesconto(2000,250))