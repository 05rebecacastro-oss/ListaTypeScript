// 37. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Consumo de Energia Elétrica
// Uma concessionária de energia precisa calcular a conta de luz dos consumidores. A superclasse
// Consumidor possui o número da conta e a quantidade de kWh consumidos no mês privados. A
// subclasse ConsumidorResidencial cobra R$ 0,75 por kWh. A subclasse ConsumidorComercial
// cobra R$ 0,60 por kWh para consumos de até 1000 kWh e R$ 0,50 por kWh para o que exceder esse
// limite. O sistema deve interagir com o usuário solicitando os dados de vários consumidores em um
// laço. Após o preenchimento da lista, o programa exibe o detalhamento de cada fatura chamando o
// método de cálculo de valor polimorficamente e mostra a média de consumo em kWh de todos os
// cadastrados.

export function POOqt37(): void {
    class Consumidor {
        private _numeroConta: number
        private _quantidadeKWH: number

        constructor(numeroConta: number, quantidadeKWH: number) {
            this._numeroConta = numeroConta
            this._quantidadeKWH = quantidadeKWH
        }

        public get numeroConta(): number {
            return this._numeroConta
        }
        public set numeroConta(value: number) {
            this._numeroConta = value
        }
        public get quantidadeKWH(): number {
            return this._quantidadeKWH
        }
        public set quantidadeKWH(value: number) {
            this._quantidadeKWH = value
        }
        calculo(): void{}
    }

    class ConsumidorResidencial extends Consumidor {
        calculo(): void {
            let valorKwH: number  = this.quantidadeKWH * 0.75
            console.log(`Consumidor: ${this.numeroConta} | Valor total a pagar: ${valorKwH}`)  
        }
    }

    class ConsumidorComercial extends Consumidor {
        calculo(): void {
            let valorKwH: number = 0

            if (this.quantidadeKWH <= 1000) {
                valorKwH = this.quantidadeKWH * 0.60
                console.log(`Consumidor: ${this.numeroConta} | Valor total a pagar: ${valorKwH}`)
            } else {
                valorKwH = this.quantidadeKWH * 0.50
                console.log(`Consumidor: ${this.numeroConta} | Valor total a pagar: ${valorKwH}`)
            }
        }
    }

    let listaConsumo: Consumidor[] = []

    let opcao = 0

    while (opcao !== 3) {

        opcao = Number(prompt("Escolha:" + "1 - Consumidor Residencial" + "2 - Consumidor Comercial" + "3 - Sair"))

        if (opcao === 1) {

            let numeroConta = Number(prompt("Informe o número da conta:"))
            let quantidadeKWH = Number(prompt("Informe a quantidade de kWh consumidos:"))

            let consumidor = new ConsumidorResidencial(numeroConta,quantidadeKWH)
            listaConsumo.push(consumidor)

        } else if (opcao === 2) {

            let numeroConta = Number(prompt("Informe o número da conta:"))
            let quantidadeKWH = Number(prompt("Informe a quantidade de kWh consumidos:"))

            let consumidor = new ConsumidorComercial(numeroConta,quantidadeKWH)
            listaConsumo.push(consumidor)
        }
    }
    let somaDKwH: number = 0

    for (let consumidor of listaConsumo) {
        consumidor.calculo()

        somaDKwH += consumidor.quantidadeKWH
    }

    let media: number = somaDKwH / listaConsumo.length

    console.log(`Média de KwH por dia: ${media}`)
}
