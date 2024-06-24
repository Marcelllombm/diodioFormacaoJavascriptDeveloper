/* 
uma função é um bloco de código projetado para realizar uma tarefa específica que retorna alguma coisa
funcao que nao retorna nada e procedimento
*/

function increaseFees(price, percenturalInteret  ){
    const increasedValue = (percenturalInteret / 100) * price;
    return price + increasedValue
}

console.log(increaseFees(1000, 10))
console.log(increaseFees(700, 10))
 
//criar o função principal e as outras função dentro dela


function anotherFunction(){
    console.log('outra funcao')
}

function main(){
    console.log('principal')
    anotherFunction();
}

main()