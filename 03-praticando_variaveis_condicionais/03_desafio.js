/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vista Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const productPrice = 100;
const paymentTerms = 'debito';

if(paymentTerms === 1){
    const debit = (productPrice * 10) / 100;
    const amountPaid = productPrice - debit
    console.log("valor a pagar: R$ "+amountPaid.toFixed(2))
} else if(paymentTerms === 2) {
    const debit = (productPrice * 15) / 100;
    const amountPaid = productPrice - debit;
    console.log("valor a pagar: R$ "+amountPaid.toFixed(2))
} else if(paymentTerms === 3){
    const productPrice = 100;
    console.log("valor a pagar: R$ "+productPrice.toFixed(2))
} else {
    const debit = (productPrice * 10) / 100;
    const amountPaid = productPrice + debit
    console.log("valor a pagar: R$ "+amountPaid.toFixed(2))
}
 
