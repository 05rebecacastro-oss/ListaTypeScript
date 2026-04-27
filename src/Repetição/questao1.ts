// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

let cont:number = 0;
let acum:number = 0;
let num1:number = Number(prompt("digite um numero ou 0 para sair do programa"));
while (num1 != 0){
    cont++
    acum = acum + num1
    num1 = Number(prompt("digite um numero ou 0 para sair do programa"));
}
console.log("a quantidade de numeros digitados são:" + cont);
console.log("a soma total foi:" + acum)