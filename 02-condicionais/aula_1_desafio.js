const EthanolPrice = 5.10;
const GasolinePrice = 5.98;
const typeFuel = 'gasolina';

const kilometerPerLiterTheCar = 10;
const distanceTrip = 100;

if(typeFuel === 'gasolie'){
const literSpentOnTheTrip = distanceTrip / kilometerPerLiterTheCar
const valueSpentOnFuel = literSpentOnTheTrip * GasolinePrice
console.log(valueSpentOnFuel)
} else {
    const literSpentOnTheTrip = distanceTrip / kilometerPerLiterTheCar
    const valueSpentOnFuel = literSpentOnTheTrip * EthanolPrice
    console.log(valueSpentOnFuel)
}

