// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo
export function questao1():void{
let num1:number = Number(prompt("informe um numero"));

if (num1 % 2 == 0 ){
    console.log("esse número é par");
}else{
    console.log("esse número é impar");
}

if (num1 > 0){
    console.log("esse número é positivo");
}else{
    console.log("esse número é negativo");
}
}