// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.
export function POOqt12():void{
class locadora{
    modeloCarro:string
    valorDiaria:number
    quantidadeDias:number

    constructor(modeloCarro:string,valordiaria:number, quantidadeDias:number){
        this.modeloCarro = modeloCarro
        this.valorDiaria = valordiaria
        this.quantidadeDias = quantidadeDias
    }

    exibirLocadora():void{
        console.log(`modeloCarro ${this.modeloCarro}| valorDiaria ${this.valorDiaria}| quantidade ${this.quantidadeDias}`)
    }

    calculoAluguel():void{
        
    }
}
}