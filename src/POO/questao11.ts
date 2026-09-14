// 11. Repetição Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

export function POOqt11():void{
class Lanchonete{
    public nomeCliente:string
    public lanche:string
    public bebida:string
    public adicional:string
    public valorTotal:number
    

    constructor(nomeCliente:string, lanche:string,bebida:string,adicional:string, valorTotal:number){
        this.nomeCliente = nomeCliente
        this.lanche = lanche
        this.bebida = bebida
        this.adicional = adicional
        this.valorTotal = valorTotal
    }

    exibirLanchonete():void{
        console.log(`nomeCliente ${this.nomeCliente}| lanche ${this.lanche}| bebida ${this.bebida}| adicional ${this.adicional}| valor ${this.valorTotal}`)
    }


}

// o que o cliente pediu
let nomeCliente:string = String(prompt("qual o nome do cliente?"))
let lanche:string = String(prompt("qual dos nossos lanches ele pediu?"))
let bebida:string = String(prompt("qual bebida ele vai querer?"))
let adicional:string = String(prompt("qual adicional o cliente preferiu?"))
// o valor das coisas que ele pediu
let valorLanche:number = Number(prompt("qual foi  valor do lanche do cliente?"))
let valorBebida:number = Number(prompt("qual foi o valor da bebida do cliente?"))
let valorAdicional:number = Number(prompt("qual foi o valor do adicional do cliente?"))
// 
let op:number = Number(prompt("deseja registrar outro pedido? (1-sim, 2-nao)"))
let valorTotal:number = 0

while(op != 2){
   if (op == 1){
    valorTotal = valorLanche + valorBebida + valorAdicional
    
   }else{
    console.log("registro invalido!!")
   }
}

let novaLanchonete:Lanchonete = new Lanchonete(nomeCliente,lanche,bebida,adicional, valorTotal)
novaLanchonete.exibirLanchonete()
// pedir para o professor olhar 
}
