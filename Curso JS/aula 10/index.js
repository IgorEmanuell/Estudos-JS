// string, number, undefined, null, boolean, symbol

const nome = 'Igor'; // String
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> Não aponta para local nenhum da memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
const boolean = true; // boolean -> true or false (lógico)

// console.log(typeof sobrenomeAluno, sobrenomeAluno);

// const a = [1, 2];
// const b = a;

// console.log(a, b);

// b.push(3);
// console.log(a, b)

let a = 2;
let b = a;

console.log(a, b);

a = 3;
console.log(a, b)