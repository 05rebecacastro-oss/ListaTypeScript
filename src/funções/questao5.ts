//5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
//esse intervalo e imprimir apenas os números que são múltiplos de 3.

function multiplos_3(inicio:number, fim:number):void{
    inicio = Number(prompt("digite um numero"));
    fim = Number(prompt("digite outro numero"));
    for (let i = inicio; i <= fim; i++){
        if (i % 3 === 0){
            console.log("os miltiplos de 3 são:" + i);
        }
    }
}
