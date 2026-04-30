// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

let listas:number [] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

if (listas.length % 2 == 0){
    console.log("os numeros pares são:" + listas);
}
if (listas.length % 3 == 0){
    console.log("os numeros impares são:" + listas);
}
if (listas.length % 2 && listas.length % 3 && listas.length % 4){
    console.log("os multiplos de 2,3 e 4 são:" + listas)
}

listas.reverse();