//imc com função

function calculateImc(Weight,height){
    const imc = (Weight /  Math.pow(height, 2 )).toFixed(2)
    return imc;
}

function classifyImc(imc){
    if(imc < 18.5 ){
        return (`${imc} = abaico do peso`)
        } else if(imc >= 18.5 && imc < 25 ){
            return (`${imc} = peso normal`)
        }else if(imc >= 25 && imc <30 ){
            return (`${imc} = acima do peso`)
        }else if(imc >= 30 && imc <= 40 ){
            return (`${imc} = obeso`)
        } else {
            return (`${imc} = obesidade grave`)
        }
}


function main(){
    const Weight = 69.5;
    const height = 1.67;
    
    const imc = calculateImc(Weight, height)
    console.log(classifyImc(imc))
}

main()