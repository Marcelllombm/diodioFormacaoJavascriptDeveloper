function media(notas){
let notaTotal = 0
for(i = 0; i < notas.length; i++){
    notaTotal = notaTotal + notas[i]
}
    return notaTotal / notas.length  
}


module.exports = {media}