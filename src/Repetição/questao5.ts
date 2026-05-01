// 5. Analisador de Desempenho de Vendas (Relatório de Equipe)
// Imagine que você está gerindo uma equipe de 5 vendedores.
//  Função classificarVenda(valor):

// o Se valor &lt; 1000: Retorna &quot;Bronze&quot;
// o Se valor entre 1000 e 5000: Retorna &quot;Prata&quot;
// o Se valor &gt; 5000: Retorna &quot;Ouro&quot;

//  O Programa:

// 1. Use um laço for para pedir o valor da venda de cada um dos 5 vendedores.
// 2. Dentro do laço, chame a função de classificação.
// 3. Ao final, o programa deve exibir:
//  O total de vendas da equipe (soma).
//  Quem foi o vendedor com a maior venda (maior valor digitado).
//  Quantos vendedores atingiram a categoria

let variavel:number [] = [123,890,2345,4120,6789]

function classificarVenda(valor:number){
    if (valor < 1000){
        return "Bronze"
    }
    else if (valor > 1000 && valor < 5000){
        return "Prata"
    }
    else if (valor > 5000){
        return "Ouro"
    }
}
let maiorVenda:number = 0;
let ouros:number[] = []

for (let i=0;i < variavel.length;i++){
    let classificacao = classificarVenda(variavel [i])

    if (variavel[i] > maiorVenda){
        maiorVenda = variavel[i];
    }
    if (classificacao === "ouro"){
        ouros.push(variavel[i]);
    }

}

console.log("o vendedor com a maior venda foi:" + maiorVenda)
console.log("os vendedores que atingiram a categoria ouro foram:" + ouros)
