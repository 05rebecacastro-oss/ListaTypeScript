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
    abstract class Consumidor {
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
        abstract calculo(): number;
    }

    class ConsumidorResidencial extends Consumidor {
        constructor(numeroConta: number, quantidadeKWH: number) {
            super(numeroConta, quantidadeKWH)
        }

        calculo(): number {
            this.quantidadeKWH = this.quantidadeKWH * 0.75
            return this.quantidadeKWH
        }
    }
    class ConsumidorComercial extends Consumidor {
        constructor(numeroConta: number, quantidadeKWH: number) {
            super(numeroConta, quantidadeKWH)
        }

        calculo(): number {
            if (this.quantidadeKWH <= 1000) {
                this.quantidadeKWH = this.quantidadeKWH * 0.60
            } else {
                let valorPrimeiros1000 = 1000 * 0.60
                let excedente = this.quantidadeKWH - 1000
                let valorExcedente = excedente * 0.50

                return valorPrimeiros1000 + valorExcedente
            }
        }
    }

    let listaConsumo: Consumidor[] = []

    let opcao = 0

    while (opcao !== 3) {

        opcao = Number(prompt("Escolha:" + "1 - Consumidor Residencial" + "2 - Consumidor Comercial" + "3 - Sair"))

        if (opcao === 1) {

            let numeroConta = Number(
                prompt("Informe o número da conta:")
            )

            let quantidadeKWH = Number(
                prompt("Informe a quantidade de kWh consumidos:")
            )

            let consumidor = new ConsumidorResidencial(
                numeroConta,
                quantidadeKWH
            )

            listaConsumo.push(consumidor)

        } else if (opcao === 2) {

            let numeroConta = Number(
                prompt("Informe o número da conta:")
            )

            let quantidadeKWH = Number(
                prompt("Informe a quantidade de kWh consumidos:")
            )

            let consumidor = new ConsumidorComercial(
                numeroConta,
                quantidadeKWH
            )

            listaConsumo.push(consumidor)
        }
    }
    for (let consumidor of listaConsumo) {

        console.log(`Conta: ${consumidor.numeroConta}`)
        console.log(`Consumo: ${consumidor.quantidadeKWH} kWh`)
        console.log(`Valor da fatura: R$ ${consumidor.calculo().toFixed(2)}`)
    }
}
