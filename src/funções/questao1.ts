//1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
//para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
//deve retornar 10, pois 1+2+3+4 = 10).

function somarAte(n: number){
    let somar:number = 0


    for (let i:number = 0; i <= n; i++){
        somar = somar + i;
    }
    return somar
}
console.log(somarAte(4));
