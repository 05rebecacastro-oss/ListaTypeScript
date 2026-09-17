// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.
export function POOqt12():void{
class Locadora{
    public modeloCarro:string
    public valorDiaria:number
    public quantidadeDias:number

    constructor(modeloCarro:string,valordiaria:number, quantidadeDias:number){
        this.modeloCarro = modeloCarro
        this.valorDiaria = valordiaria
        this.quantidadeDias = quantidadeDias
    }

    exibirLocadora():void{
        console.log(`modeloCarro ${this.modeloCarro}| valorDiaria ${this.valorDiaria}| quantidade ${this.quantidadeDias}`)
    }

    calculoAluguel(valorDiaria:number, quantidadeDias:number):number{
        let totalAluguel = valorDiaria * quantidadeDias
        return totalAluguel
    }
}

let op:number = 1
while(op != 2){
    let totalAluguel = 0
    let modeloCarro:string = String(prompt("qual o modelo do carro que voce quer?"))
    let valorDiaria:number = Number(prompt("qual o valor da diaria desse carro?"))
    let quantidadeDias:number = Number(prompt("quantos dias voce quer usar esse veiculo?"))

    let novaLocadora:Locadora = new Locadora(modeloCarro, valorDiaria, quantidadeDias)
    novaLocadora.exibirLocadora()
    totalAluguel = novaLocadora.calculoAluguel(valorDiaria, quantidadeDias)
    console.log("o total do aluguel é de:" + totalAluguel)
    op = Number(prompt("deseja fazer uma nova locação? (1- sim, 2-nao)"))
}
}