/*
    2) crie uma classe para representar pessoas
    para cada pessoa teremos os atributos nome, peso e altura
    as pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura * altura))
    instancie um pessoa chamda josé que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer 
    o valor do seu IMC
*/

class Person {
    name;
    weight;
    height;
    imc;

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.imc = (weight / Math.pow(height, 2 )).toFixed(2);
    }
    
    details(){
        if(this.imc < 18.5 ){
            return (`${this.imc} = abaico do peso`)
            } else if(this.imc >= 18.5 && this.imc < 25 ){
                return (`${this.imc} = peso normal`)
            }else if(this.imc >= 25 && this.imc <30 ){
                return (`${imc} = acima do peso`)
            }else if(this.imc >= 30 && this.imc <= 40 ){
                return (`${this.imc} = obeso`)
            } else {
                return (`${this.imc} = obesidade grave`)
            }
    }
    
}

const marcelo = new Person('marcelo', 92, 1.67,)
const detalhe = marcelo.details();
console.log(detalhe)

const rosy = new Person('rosy',59, 1.59)
const detalheRosy = rosy.details();
console.log(detalheRosy)