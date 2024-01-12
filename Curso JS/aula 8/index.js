/*
Igor Emanuell Carneiro tem 25 anos, pesa 78 kg
tem 1.79 de altura e seu IMC é de 
Igor Emanuell Carneiro nasceu em 1997
*/
// const prompt=require('prompt-sync')({sigint:true});

// var nome=0; idade =0;
// nome=(prompt("Meu nome é: "))
// idade=Number(prompt("minha idade é: "))
// console.log("Me chamo", nome, "tenho", idade)



const nome = "Igor Emanuell";
const sobrenome = 'Carneiro';
const idade = 26;
const peso = 78;
const altura = 1.79;

let imc = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)


// console.log(`${nome}`);
// console.log('${nome}') 



