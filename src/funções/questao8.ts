//8. Controle de Estoque de Loja (Loop e Relatório)
//Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
//preço unitário do produto e a quantidade comprada.

// Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
//aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
// O programa deve repetir a solicitação até que o preço informado seja zero.
// Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
//cadastrados.

function calculo(produto:number,quantidade:number):number{
    let total = produto * quantidade

    if (quantidade > 10){
        total = total * 0.95
    }
    return total
}

function controle_estoque(){
    let totalGeral = 0
    let somarPreco = 0
    let contadorProdutos = 0

    let precoUnitario:number = Number(prompt("digite o preco desse produto (quando quiser sair do programma digite 0)?"));
    while (precoUnitario != 0){
        precoUnitario = Number(prompt("digite o preco desse produto (quando quiser sair do programma digite 0)?"));
        let quantidadeComprada:number = Number(prompt("digite a quantidade comprada"));
        let itemTotal:number = calculo(precoUnitario,quantidadeComprada)
        
        totalGeral = totalGeral + itemTotal
        somarPreco = somarPreco + itemTotal
        contadorProdutos ++
    }

    let media

    if (contadorProdutos > 0){
        media = somarPreco/contadorProdutos
    }else{
        media = 0
    }

    console.log("total investido no estoque: R$" + totalGeral.toFixed(2));
    console.log("media dos produtos cadastrados:R$" + media.toFixed(2));
}
controle_estoque()
