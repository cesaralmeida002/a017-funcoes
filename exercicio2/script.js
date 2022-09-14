/* 
a) Uma função que receba 2 números como parâmetros, e, 
dentro da função, faça a soma das duas entradas
 e imprima o resultado.
 Invoque a função e imprima no console o resultado.
*/
console.log("=======================");

function numeros(numero1, numero2) {
  const soma = numero1 + numero2;
  console.log(`O resultado é: ${soma}`);
}
numeros(2, 5);

/*
b) Uma função que recebe 2 números e
 imprime um booleano que informa se o primeiro 
 número é **maior ou igual** ao segundo.
*/
console.log("====================");

function numeros1(numero1, numero2) {
  const maior = numero1 === numero2;
  console.log(`O numero maior é: ${maior}`);
}
numeros1(5, 4);

/*
c) Uma função que receba
 um número e imprima se ele é par ou não
*/
console.log("=====================");

function numero3(numero1) {
  const novoNumero = prompt("Insira um numero");
  if (novoNumero % 2 === 0) {
    console.log(`O ${numero1} é: PAR `);
  } else {
    console.log("O número é IMPAR.");
  }
}
numero3(2);

/*
d) Uma função que recebe uma mensagem (`string`) como parâmetro
 e imprima o tamanho dessa mensagem, juntamente com 
 uma versão dela contendo apenas letras maiúsculas.
*/
console.log("======================");

function string(nome) {
  console.log(`O nome é: ${nome}`.toUpperCase());
}
string(prompt("Digite seu nome:"));
