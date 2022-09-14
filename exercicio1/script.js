/*
a) Declare uma função que imprima 
`Olá, [SEU NOME]!`. Chame esta função.
*/

function nome(nome) {
  nome = prompt("Qual seu nome");
  console.log(`Olá: ${nome}`);
}
nome();

// /*
// b) Declare uma função que imprima
// a tabuada do 6. Chame esta função.
// */

let i = 1
function tabuada(c){
    for (let i = 1; i <= 10; i++ )
    console.log(`${c} x ${1} = ${Number(c)*Number(i)} `)
}
console.log(tabuada(6))

/*
 c) Comente as funções criadas acima, e reescreva-as utilizando 
 expressões de função, ou __arrow functions__
 */
const a = (novaFuncao) => {
    console.log(`Olá ${novaFuncao}`)
    a ("César")
}