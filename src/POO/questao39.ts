// 39. Abstração Herança Polimorfismo Repetição Encapsulamento
// Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal():number. O PedidoLocal adiciona uma taxa de serviço de 10%. O
// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. O sistema interativo
// deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. A cada pedido inserido, o
// programa invoca o cálculo total e acumula o valor em uma variável de faturamento bruto, exibindo na
// tela o resumo do pedido recém-calculado até que o usuário opte por fechar o caixa.
export function POOqt39(): void {
abstract class Pedido{
    private _numeroPedido:number
    private _valorBase:number

    constructor(numeroPedido:number,valorBase:number){
        this._numeroPedido = numeroPedido
        this._valorBase = valorBase
    }
    public get numeroPedido():number{
        return this._numeroPedido
    }
    public set numeroPedido(value:number){
        this._numeroPedido = value
    }
    public get valorBase():number{
        return this._valorBase
    }
    public set valorBase(value:number){
        this._valorBase = value
    }
    abstract calcularTotal():number;
}

class PedidoLocal extends Pedido{
    constructor(numeroPedido:number,valorbase:number){
        super(numeroPedido,valorbase)
    }
    calcularTotal(): number {
        this.valorBase = this.valorBase + 0.1
        return this.valorBase
    }
}
class PedidoDriveThru extends Pedido{
    constructor(numeroPedido:number,valorbase:number){
        super(numeroPedido,valorbase)
    }
    calcularTotal(): number {
        this.valorBase = this.valorBase + 3
        return this.valorBase
    }
}

let faturamento = 0
let continuar = true

while (continuar) {

    let numeroPedido:number = Number(prompt("Digite o número do pedido:"))
    let valorBase:number = Number(prompt("Digite o valor base do pedido:"))

    let tipo = prompt("Digite o tipo do pedido: 1 - Local 2 - Drive-Thru")

    let pedido: Pedido

    if (tipo === "1") {
        pedido = new PedidoLocal(numeroPedido, valorBase)
    } else {
        pedido = new PedidoDriveThru(numeroPedido, valorBase)
    }

    let total = pedido.calcularTotal()

    faturamento += total

    console.log("RESUMO DO PEDIDO")
    console.log("Número do pedido:", pedido.numeroPedido)
    console.log("Valor base: R$", pedido.valorBase.toFixed(2))
    console.log("Total: R$", total.toFixed(2))

    let resposta = prompt("Deseja inserir outro pedido? (s/n)")

    if (resposta?.toLowerCase() !== "s") {
        continuar = false
    }
}

console.log("Caixa fechado!")
console.log("Faturamento bruto: R$", faturamento.toFixed(2))
}