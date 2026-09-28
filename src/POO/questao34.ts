// 34. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Sistema de Gestão de Estacionamento Rotativo
// Para organizar o fluxo de veículos em um estacionamento no centro da cidade, crie um software de
// bilhetagem. A superclasse abstrata Veiculo possui placa e hora de entrada (atributos privados) e o
// método abstrato calcularValor(horasPermanencia: number): number. A classe Carro cobra R$
// 5,00 por hora. A classe Moto cobra R$ 3,00 por hora. O programa deve rodar dentro de um laço de
// repetição permitindo cadastrar os veículos que estão saindo e a quantidade de horas que
// permaneceram. Os objetos devem ser armazenados em um array de veículos. Ao encerrar o
// expediente, o sistema percorre o array, chama o método de cálculo de forma polimórfica para cada
// item e exibe o faturamento total arrecadado no dia.

export function POOqt34(): void {
    abstract class Bilhetagem {
        private _placa: string
        private _horaEntrada: number

        constructor(placa: string, horaEntrada: number) {
            this._placa = placa
            this._horaEntrada = horaEntrada
        }

        public get placa(): string {
            return this._placa
        }
        public set placa(value: string) {
            this._placa = value
        }
        public get horaEntrada(): number {
            return this._horaEntrada
        }
        public set horaEntrada(value: number) {
            this._horaEntrada = value
        }

        exibir(): void {

        }
        abstract calcularValor(horasPermanencia: number): number;


    }

    class Carro extends Bilhetagem {
        constructor(placa: string, horaEntrada: number) {
            super(placa, horaEntrada)
        }
        exibir(): void {
            console.log(`placa ${this.placa}| hora de entrada ${this.horaEntrada}`)
        }
        calcularValor(horasPermanencia: number): number {
            let calculo = horasPermanencia * 5
            return calculo
        }
    }
    class Moto extends Bilhetagem {
        constructor(placa: string, horaEntrada: number) {
            super(placa, horaEntrada)
        }
        exibir(): void {
            console.log(`placa ${this.placa}| hora de entrada ${this.horaEntrada}`)
        }
        calcularValor(horasPermanencia: number): number {
            let calcular = horasPermanencia * 3
            return calcular
        }
    }
    let listaBilhetagem: Bilhetagem[] = []
    let horas: number[] = []

    let resposta = "s"
    while (resposta === "s") {
        let placa: string = String(prompt("informe a placa do seu carro:"))
        let horaEntrada: number = Number(prompt("informe a hora que o veiculo entrou no estacionamento:"))


        let tipo = Number(prompt("Digite o veiculo: 1 - carro | 2 - moto"))
        let veiculo: Bilhetagem;

        if (tipo === 1) {
            veiculo = new Carro(placa, horaEntrada)


        } else {
            veiculo = new Moto(placa, horaEntrada)

        }
        let horasPermanencia: number = Number(prompt("informe a quantidade de horas que o seu carro ficou no estacionamento:"))
        listaBilhetagem.push(veiculo)
        horas.push(horasPermanencia)

        resposta = String(prompt("Deseja cadastrar outro veiculo? (s/n)"))?.toLocaleLowerCase()
    }
    let faturamentoTotal = 0

    for (let i = 0; i < listaBilhetagem.length; i++) {
        faturamentoTotal += listaBilhetagem[i].calcularValor(horas[i])
    }
    console.log(`Faturamento total: R$ ${faturamentoTotal.toFixed(2)}`)
}
