// 47. Repetição Encapsulamento
// Sistema de Controle de Gastos Pessoais
// Para ajudar no planejamento financeiro, crie uma classe Despesa com os atributos privados
// descricao, categoria e valor. Crie métodos de leitura e escrita com validação para impedir valores

// menores ou iguais a zero no atributo valor. O programa deve solicitar repetidamente que o usuário
// insira suas despesas do mês. O sistema mantém uma variável acumuladora para somar o valor total
// das despesas inseridas e exibe o saldo devedor atualizado a cada nova entrada até que o usuário decida
// parar o preenchimento.
export function POOqt47(): void {
class Despesa{
    private _descricao: string
    private _categoria: string
    private _valor: number    

    constructor(descricao:string, categoria:string, valor:number){
        this._descricao = descricao
        this._categoria = categoria
        this._valor = valor
    }
     public get descricao(): string {
        return this._descricao
    }
    public set descricao(value: string) {
        this._descricao = value
    }
    public get categoria(): string {
        return this._categoria
    }
    public set categoria(value: string) {
        this._categoria = value
    }
    get valor(): number {
        return this._valor
    }

    valores(valor: number) {
    if (valor > 0) {
        this._valor = valor
    } else {
        console.log("O valor deve ser maior que zero.")
    }
}
}
let total = 0
    let continuar = true

    while (continuar) {

        let descricao:string = String(prompt("Digite a descrição da despesa:"))
        let categoria:string = String(prompt("Digite a categoria da despesa:"))
        let valor:number = Number(prompt("Digite o valor da despesa:"))

        if (valor > 0) {
            let novaDespesa = new Despesa(descricao, categoria, valor)

            total += novaDespesa.valor

            console.log("Despesa cadastrada!")
            console.log("Total das despesas: R$", total)
        } else {
            console.log("O valor deve ser maior que zero.")
        }

        let resposta = prompt("Deseja cadastrar outra despesa? (s/n)")!

        if (resposta.toLowerCase() !== "s") {
            continuar = false
        }
    }

    console.log("Total final das despesas: R$", total)
}