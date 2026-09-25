// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.
export function POOqt30(): void {
abstract class Passagem {
    private _nome: string
    private _CPF: string
    private _valorBase: number

    constructor(nome: string, CPF: string, valorBase: number) {
        this._nome = nome
        this._CPF = CPF
        this._valorBase = valorBase
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get CPF(): string {
        return this._CPF
    }
    public set CPF(value: string) {
        this._CPF = value
    }
    public get valorBase(): number {
        return this._valorBase
    }
    public set valorBase(value: number) {
        this._valorBase = value
    }
    exibirPassagem(): void {

    }
    calcularFaturamento(): void {

    }
}

class PassagemComum extends Passagem {
    constructor(nome: string, CPF: string, valorBase: number) {
        super(nome, CPF, valorBase)
    }

    exibirPassagem(): void {
        console.log(`nome ${this.nome}| CPF ${this.CPF}| valor Base ${this.valorBase}`)
    }
    calcularFaturamento(): number {
        this.valorBase = this.valorBase + this.valorBase * (50 / 100)
        return this.valorBase
    }
}
class PassagemEstudantil extends Passagem {
    constructor(nome: string, CPF: string, valorBase: number) {
        super(nome, CPF, valorBase)
    }

    exibirPassagem(): void {
        console.log(`nome ${this.nome}| CPF ${this.CPF}| valor Base ${this.valorBase}`)
    }
    calcularFaturamento(): number {
        this.valorBase = this.valorBase + this.valorBase * (50 / 100)
        return this.valorBase
    }
}
let listaPassagemComum: PassagemComum[] = []
let listaPassagemEstudantil: PassagemEstudantil[] = []

let resposta = "s"
while (resposta === "s") {
    let nome: string = String(prompt("informe seu nome"))
    let CPF: string = String(prompt("informe seu cpf"))
    let valorBase: number = Number(prompt("informe o valor base"))

    let tipo = Number(prompt("Digite o tipo: 1 - Comum | 2 - Estudantil"))

    if (tipo === 1) {
        listaPassagemComum.push(
            new PassagemComum(nome, CPF, valorBase)
        )
    } else if (tipo === 2) {
        listaPassagemEstudantil.push(
            new PassagemEstudantil(nome, CPF, valorBase)
        )
    }

    resposta = String(prompt("Deseja cadastrar outra passagem? (s/n)"))?.toLocaleLowerCase()
    console.log("PASSAGENS COMUNS")

    let faturamentoTotal = 0

    for (let passagem of listaPassagemComum) {
        passagem.exibirPassagem()

        console.log("PASSAGENS ESTUDANTIS")
        
        for (let passagem of listaPassagemComum) {
        passagem.exibirPassagem()
    }
    faturamentoTotal += passagem.calcularFaturamento()
}
    console.log(`Faturamento total: R$ ${faturamentoTotal}`)

}
}