function media(notas){
let notaTotal = 0
for(i = 0; i < notas.length; i++){
    notaTotal = notaTotal + notas[i]
}
    return notaTotal / notas.length  
}

function numeroMaiorPar(numbers){
    let numeroParMaior = 0
    for(i = 0; i < numbers.length; i++){
        if(numbers[i] > numeroParMaior && (numbers[i] % 2) == 0){
            numeroParMaior = numbers[i]
        }
    }
    return numeroParMaior
}

function numeroMenorImpar(numbers){
    let arrayImpar = []
    for(i = 0; i < numbers.length; i++){
        if((numbers[i] % 2) == 1){
           arrayImpar.push(numbers[i])
        }
    }
    return Math.min.apply(null, arrayImpar)
}

function valorImposto (salario){
    if(salario <= 1100){
        return (salario  * 5) / 100;
    }else if(salario > 1100 && salario <= 2500){
        return (salario  * 10) / 100;
    } else {
        return (salario  * 15) / 100; 
    }
}
function valorComDesconto (salario, adicional ){
    return salario + adicional - valorImposto(salario)
     
}
module.exports = {media, numeroMaiorPar, numeroMenorImpar, valorImposto, valorComDesconto }