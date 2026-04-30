// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

let QPares = 0
let Qimpares  = 0

let op:number = Number(prompt("digite um numero e quando quiser sair do programa digite -1"))
while (op != -1){
    if (op % 2 == 0){
        QPares ++
    }
    if (op % 3 == 0){
        Qimpares ++ 
    }
op = Number(prompt("digite um numero e quando quiser sair do programa digite -1"))
}

console.log("a quantidade de numeros pares é:" + QPares);
console.log("a quantidade de numeros impares é:" + Qimpares);