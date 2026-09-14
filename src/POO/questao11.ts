// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

class Lanchonete{
    public nomeCliente:string
    public nomePedido:string
    public valorPedido:number

    constructor(nomeCliente:string, nomeProduto:string, valorProduto:number){
        this.nomeCliente = nomeCliente
        this.nomePedido = nomeProduto
        this.valorPedido = valorProduto
    }

    exibirLanchonete():void{
        console.log(`nomeCliente ${this.nomeCliente}| nomePedido ${this.nomePedido}| valorPedido ${this.valorPedido}`)
    }
}

let nomeCliente:string = String(prompt("qual o nome do cliente?"))
let nomePedido:string = String(prompt("qual o nome do pedido do cliente?"))
let valor:number = Number(prompt("qual foi o valor total que o "))
