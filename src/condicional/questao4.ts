// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let x:number = Number(prompt("digite um numero"));
let y:number = Number(prompt("digite outro numero"));

if (x == y){
    console.log("numeros iguais");
}else if (x > y){
    console.log("o primeiro é maior");
}else if (x < y){
    console.log("o segundo é maior")
}