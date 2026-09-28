// 40. Abstração Herança Polimorfismo Repetição Encapsulamento
// Simulador de Investimentos Financeiros
// Uma corretora de valores quer disponibilizar uma calculadora para seus clientes. A classe abstrata
// Investimento possui o valor aplicado e o tempo em meses privados, além do método abstrato
// calcularRendimento():number. O investimento em RendaFixa rende 0,8% ao mês de forma
// simples. O investimento em Acoes possui uma taxa de variação informada pelo usuário (podendo ser
// positiva ou negativa). O programa deve abrir um menu para o usuário testar simulações de
// investimento. A cada iteração, o sistema calcula o retorno financeiro via polimorfismo e exibe o saldo
// final projetado para o investidor.
export function POOqt40(): void {
abstract class Investimento{
    private _valorAplicado:number
    private _tempoMeses:number

    constructor(valorAplicado:number, tempoMeses:number){
        this._valorAplicado = valorAplicado
        this._tempoMeses = tempoMeses
    }

    public get valorAplicado():number{
        return this._valorAplicado
    }
    public set valorAplicado(value:number){
        this._valorAplicado = value
    }
    public get tempoMeses():number{
        return this._tempoMeses
    }
    public set tempoMeses(value:number){
        this._tempoMeses = value
    }
    abstract calcularRendimento():number;
}

class RendaFixa extends Investimento{
    constructor(valorAplicado:number,tempoMeses:number){
        super(valorAplicado,tempoMeses)
    }
    calcularRendimento(): number {
        this.valorAplicado = this.valorAplicado + 0.008
        return this.valorAplicado
    }
}

class Acoes extends Investimento{
    private _taxaVariacao:number
    constructor(valorAplicado:number,tempoMeses:number,taxaVariacao:number){
        super(valorAplicado,tempoMeses)
        this._taxaVariacao = taxaVariacao
    }
     public get taxaVariacao():number{
        return this._taxaVariacao
    }
    public set taxaVariacao(value:number){
        this._taxaVariacao = value
    }
    calcularRendimento(): number {
        return this.valorAplicado + (this.valorAplicado * this._taxaVariacao * this.tempoMeses)
    }
}

let continuar = true

while (continuar) {

    let opcao = prompt("SIMULADOR DE INVESTIMENTOS" + "1 - Renda Fixa" + "2 - Ações" + "3 - Sair")

    if (opcao === "1") {

        let valor:number = Number(prompt("Digite o valor aplicado:"))
        let meses:number = Number(prompt("Digite o tempo em meses:"))

        let investimento: Investimento = new RendaFixa(valor, meses)
        let saldoFinal = investimento.calcularRendimento()

        console.log("SIMULAÇÃO")
        console.log("Tipo: Renda Fixa")
        console.log("Valor aplicado: R$", valor.toFixed(2))
        console.log("Tempo:", meses, "meses")
        console.log("Saldo final: R$", saldoFinal.toFixed(2))

    } else if (opcao === "2") {

        let valor:number = Number(prompt("Digite o valor aplicado:"))
        let meses:number = Number(prompt("Digite o tempo em meses:"))

        let taxa = Number(prompt("Digite a taxa de variação mensal (%):"))
        taxa = taxa / 100

        let investimento: Investimento = new Acoes(valor, meses, taxa)
        let saldoFinal = investimento.calcularRendimento()

        console.log("=== SIMULAÇÃO ===")
        console.log("Tipo: Ações")
        console.log("Valor aplicado: R$", valor.toFixed(2))
        console.log("Tempo:", meses, "meses")
        console.log("Taxa:", taxa * 100, "%")
        console.log("Saldo final: R$", saldoFinal.toFixed(2))

    } else if (opcao === "3") {

        continuar = false
        console.log("Simulador encerrado.")

    } else {

        console.log("Opção inválida!")
    }
}
}