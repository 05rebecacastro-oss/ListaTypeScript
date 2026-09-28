// 41. Abstração Herança Polimorfismo Repetição Encapsulamento
// Gerenciador de Encomendas de Correios
// Um centro de distribuição precisa calcular o frete de suas entregas. A classe Encomenda possui o peso
// em kg e a cidade de destino privados. A classe EncomendaPadrão cobra R$ 10,00 por kg. A classe
// EncomendaExpressa cobra R$ 20,00 por kg e garante entrega em até 24 horas. O sistema solicita em
// um laço de repetição os dados das encomendas registradas no balcão. O programa processa cada uma,
// calcula o valor do frete utilizando o método sobrescrito nas subclasses e exibe o valor acumulado
// cobrado em taxas de frete expresso durante o dia.
export function POOqt41(): void {
abstract class Encomenda{
    private _peso: number
    private _cidadeDestino: string
   
    constructor(peso:number, cidadeDestino:string){
        this._peso = peso
        this._cidadeDestino = cidadeDestino
    }
    public get peso(): number {
        return this._peso
    }
    public set peso(value: number) {
        this._peso = value
    }
    public get cidadeDestino(): string {
        return this._cidadeDestino
    }
    public set cidadeDestino(value: string) {
        this._cidadeDestino = value
    }

    calcularFreteEntrega():void{

    }
}
class EncomendaPadrão extends Encomenda{
    constructor(peso:number, cidadeDestino:string){
        super(peso,cidadeDestino)
    }
    calcularFreteEntrega(): void {
        this.peso = this.peso * 10
    }
}

class EncomendaExpressa extends Encomenda{
    constructor(peso:number, cidadeDestino:string){
        super(peso,cidadeDestino)
    }
    calcularFreteEntrega(): void {
        this.peso = this.peso * 20
    }
}

let continuar = true
let totalFreteExpresso = 0

while (continuar) {
    let peso:number = Number(prompt("Digite o peso da encomenda em kg:"))
    let cidade:string = String(prompt("Digite a cidade de destino:"))
    let tipo = prompt("informe o tipo: 1- encomenda padrao, 2- encomenda expressa")

    if (tipo === "1") {

        let encomenda: Encomenda = new EncomendaPadrão(peso, cidade)

        let frete = encomenda.calcularFreteEntrega()

        console.log("=== ENCOMENDA ===")
        console.log("Destino:", encomenda.cidadeDestino)
        console.log("Peso:", encomenda.peso, "kg")
        console.log("Frete: R$", frete)

    } else if (tipo === "2") {
        let encomenda: Encomenda = new EncomendaExpressa(peso, cidade)
        let frete = encomenda.calcularFreteEntrega()


        console.log("=== ENCOMENDA ===")
        console.log("Tipo: Expressa")
        console.log("Destino:", encomenda.cidadeDestino)
        console.log("Peso:", encomenda.peso, "kg")
        console.log("Frete: R$", frete)
        console.log("Entrega garantida em até 24 horas.")

    } else if (tipo === "3") {

        continuar = false

    } else {

        console.log("Opção inválida!")
    }
}


console.log("Total cobrado em fretes expressos: R$",totalFreteExpresso.toFixed(2))
}