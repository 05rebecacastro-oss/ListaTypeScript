// 46. Repetição Encapsulamento
// Calculadora de Rendas de Aluguel Imobiliário
// Uma imobiliária quer controlar o recebimento de aluguéis. Crie a classe Imovel com os atributos
// privados codigo, valorAluguel e diasAtraso. Crie um método público
// calcularValorComMulta(): number que aplica uma multa de 2% sobre o valor do aluguel mais R$
// 5,00 por dia de atraso (caso haja atraso). O sistema deve permitir que o corretor digite os dados do
// imóvel e os dias de atraso do inquilino em um menu repetitivo. Após cada digitação, o programa
// exibe o valor atualizado da cobrança. O laço se encerra quando o usuário informar o código 0.

export function POOqt46(): void {
    class Imovel {
    private _codigo: number
    private _valorAluguel: number
    private _diasAtraso: number

    constructor(codigo: number, valorAluguel: number, diasAtraso: number) {
        this._codigo = codigo
        this._valorAluguel = valorAluguel
        this._diasAtraso = diasAtraso
    }

    public get codigo(): number {
        return this._codigo
    }

    public set codigo(value: number) {
        this._codigo = value
    }

    public get valorAluguel(): number {
        return this._valorAluguel
    }

    public set valorAluguel(value: number) {
        this._valorAluguel = value
    }

    public get diasAtraso(): number {
        return this._diasAtraso
    }

    public set diasAtraso(value: number) {
        this._diasAtraso = value
    }

    calcularValorComMulta(): number {
        if (this.diasAtraso > 0) {
            return this.valorAluguel + (this.valorAluguel * 0.02) + (this.diasAtraso * 5)
        }

        return this.valorAluguel
    }
}


let codigo = Number(prompt("Digite o código do imóvel:"))

while (codigo != 0) {

    let valorAluguel = Number(prompt("Digite o valor do aluguel:"))
    let diasAtraso = Number(prompt("Digite os dias de atraso:"))

    let imovel = new Imovel(codigo, valorAluguel, diasAtraso)

    console.log(`Valor atualizado: R$ ${imovel.calcularValorComMulta()}`)

    codigo = Number(prompt("Digite o código do imóvel:"))
}
}