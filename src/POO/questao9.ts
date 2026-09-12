// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.
export function POOqt9():void{

class Produtos{
    nome:string
    preco:number
    quantidade:number

    constructor(nome:string, preco:number, quantidade:number){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    exibirProdutos():void{
        console.log(`nome ${this.nome}| preco ${this.preco}| quantidade ${this.quantidade}`)
    }

    totalEstoque(preco:number,quantidade:number):number{
        let calculo = preco * quantidade 
        return calculo
    }
}
 let nome=""
 let preco = 0, quantidade = 0

let novoProduto:Produtos = new Produtos(nome,preco,quantidade) 

let op = 0
    while(op != 2){
        nome = String(prompt("qual o nome do produto?"))
        preco = Number(prompt("qual o valor dele?"))
        quantidade = Number(prompt("quantos desse você quer comprar?"))
        novoProduto = new Produtos(nome,preco,quantidade) 
        op = Number(prompt("deseja continuar? (digite 1-sim, 2-nao)"))
}
let total = novoProduto.totalEstoque(preco,quantidade)
novoProduto.exibirProdutos()
console.log("Toal do produtos: "+total)
}

