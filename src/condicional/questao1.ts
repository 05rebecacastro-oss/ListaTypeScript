// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

let num1:number = Number("informe um numero");
let resolucao = Math.sign(num1);

if (num1 % 2 == 0 ){
    console.log("esse número é par");
}else{
    console.log("esse número é impar");
}

if (num1 == resolucao){
    console.log("esse número é positivo");
}else{
    console.log("esse número é negativo");
}