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


module.exports = {media, numeroMaiorPar, numeroMenorImpar}