/*
Crie 4 funções, cada uma deve receber dois parâmetros
 numéricos e retornar o valor uma das operações básicas 
(soma, subtração, multiplicação e divisão).
*/
let pedidoNum1 = +prompt("Digite o primeiro valor");
let pedidoNum2 = +prompt("Digite o segundo valor");

function funcao1(num1, num2) {
  console.log(num1 + num2);
}
funcao1(pedidoNum1, pedidoNum2);

function funcao2(num1, num2) {
  console.log(num1 - num2);
}
funcao2(pedidoNum1, pedidoNum2);

function funcao3(num1, num2) {
  console.log(num1 * num2);
}
funcao3(pedidoNum1, pedidoNum2);

function funcao4(num1, num2) {
  console.log(num1 / num2);
}
funcao4(pedidoNum1, pedidoNum2);

/*
Em seguida, peça para o usuário inserir dois números
 e chame essas 4 funções com esses valores inputados 
 pelo usuário sendo o argumento.
Por fim, imprima no console o resultado das operações
*/
