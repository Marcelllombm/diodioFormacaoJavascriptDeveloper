/*
    1- crie umna classe par representar carros.
    os carros possuem um marca, um cor e um gasto média de conbustivel por kilometor rodado.
    crie um método que dado a quantidade de quilometros e o pre;o  do combustível nos dë o valor 
    gasto em reis para realizaer este percurso.

*/

class Cars {

    brand; 
    color;
    averageExpensePerKm;

    constructor(brand, color, averageExpensePerKm){
        this.brand = brand
        this.color = color;
        this.averageExpensePerKm = averageExpensePerKm
    }   

    calculateTravelExpenses(distanceKm, fuelPrice){
        return distanceKm * this.averageExpensePerKm * fuelPrice
    }
}

const uno = new Cars('Fiat', 'Prata', 1 /12)
console.log(uno)
const viagem = uno.calculateTravelExpenses(70, 5.5)
console.log(viagem)