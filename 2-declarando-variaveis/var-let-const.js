//var

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)
// var area;

// let forma = 'retângulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retângulo') {
//   area = altura * comprimento;
// } else {
//   area = (altura * comprimento) / 2;
// }

// console.log(area)

const forma = 'triângulo';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'quadrado') {
  area = altura * comprimento;
} else {
  area = (altura * comprimento) / 2;
}

console.log(area)


var respostaDeTudo = 42
let idade = 29
const pi = 3.14
{
  var respostaDeTudo = 3.14
  let idade = 42
  const pi = 29
  console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)


let minhaLet;
console.log(minhaLet); //undefined

// atribuindo um valor com TIPO DE DADO STRING
minhaLet = "eu sou um texto";
console.log(minhaLet); // "eu sou um texto"

// reatribuindo, desta vez com dado do TIPO NUMBER
minhaLet = 100;
console.log(minhaLet); //100