// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

class Lanchonete{
    nomeCliente:string
    nomePedido:string
    valor:number

    constructor(nomeCliente:string, nomePedido:string, valor:number){
        this.nomeCliente = nomeCliente
        this.nomePedido = nomePedido
        this.valor = valor
    }

    exibirLanchonete():void{
        console.log(`nomeCliente ${this.nomeCliente}| nomePedido ${this.nomePedido}| valor ${this.valor}`)
    }


}

let nomeCliente:string = String(prompt("qual o seu nome?"))
let nomePedido:string = String(prompt("o que vc gostaria de pedir?"))
let valor:number = Number(prompt("quanl foi  valor final do seu pedido?"))

let novaLanchonete:Lanchonete = new Lanchonete(nomeCliente, nomePedido, valor)
novaLanchonete.exibirLanchonete()
