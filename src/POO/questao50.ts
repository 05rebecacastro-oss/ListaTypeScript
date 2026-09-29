// 50. Repetição Encapsulamento Arrays
// Controle de Ponto e Escala de Funcionários da Reitoria
// O setor de gestão de pessoas precisa de um software para registrar as batidas de ponto dos servidores.
// Crie a classe RegistroPonto com os atributos privados matricula, nomeServidor, horaEntrada e
// horaSaida (armazenados como números inteiros de 0 a 23). Crie métodos setters com validação para
// garantir que as horas informadas estejam entre 0 e 23, e que a horaSaida seja obrigatoriamente maior
// que a horaEntrada. Crie também o método calcularHorasTrabalhadas(): number. O programa
// deve rodar dentro de uma estrutura de repetição solicitando que o operador cadastre o ponto de vários
// servidores em um array. Ao encerrar as entradas, o programa varre a lista, invoca o método de cálculo
// de horas trabalhadas de cada objeto e exibe o relatório final com o nome de cada servidor, o total de
// horas cumpridas no dia e o somatório geral de horas trabalhadas por toda a equipe da reitoria.

export function POOqt50(): void {
    class RegistroPonto {
        private _matricula: number
        private _nomeServidor: string
        private _horaEntrada: number
        private _horaSaida: number

        constructor(matricula: number,nomeServidor: string,horaEntrada: number,horaSaida: number) {
            this._matricula = matricula
            this._nomeServidor = nomeServidor
            this._horaEntrada = horaEntrada
            this._horaSaida = horaSaida
        }
        public get matricula(): number {
            return this._matricula
        }

        public set matricula(value: number) {
            this._matricula = value
        }
        public get nomeServidor(): string {
            return this._nomeServidor
        }

        public set nomeServidor(value: string) {
            this._nomeServidor = value
        }
        public get horaEntrada(): number {
            return this._horaEntrada
        }

        public set horaEntrada(value: number) {

            if (value >= 0 && value <= 23) {
                this._horaEntrada = value
            } else {
                console.log("A hora de entrada deve estar entre 0 e 23.")
            }
        }
        public get horaSaida(): number {
            return this._horaSaida
        }

        public set horaSaida(value: number) {

            if (value >= 0 && value <= 23) {

                if (value > this._horaEntrada) {
                    this._horaSaida = value
                } else {
                    console.log("A hora de saída deve ser maior que a hora de entrada.")
                }

            } else {
                console.log("A hora de saída deve estar entre 0 e 23.")
            }
        }
        public calcularHorasTrabalhadas(): number {
            return this._horaSaida - this._horaEntrada
        }
    }
    let registros: RegistroPonto[] = []
    let continuar = true

    while (continuar) {
        let matricula = Number(prompt("Digite a matrícula do servidor:"))
        let nomeServidor = prompt("Digite o nome do servidor:")
        let horaEntrada = Number(prompt("Digite a hora de entrada (0-23):"))
        let horaSaida = Number(prompt("Digite a hora de saída (0-23):"))

        if (horaEntrada >= 0 && horaEntrada <= 23 && horaSaida >= 0 && horaSaida <= 23 && horaSaida > horaEntrada) {

            let registro = new RegistroPonto(matricula,nomeServidor,horaEntrada,horaSaida)
            registros.push(registro)
            console.log("Registro cadastrado com sucesso!")
        } else {
            console.log("Dados de horário inválidos.")
        }

        let resposta:string = String(prompt("Deseja cadastrar outro servidor? (s/n)"))

        if (resposta.toLowerCase() !== "s") {
            continuar = false
        }
    }
    let totalGeral = 0

    console.log("RELATÓRIO FINAL")

    for (let registro of registros) {

        let horasTrabalhadas =
            registro.calcularHorasTrabalhadas()
        console.log("Servidor:",registro.nomeServidor)
        console.log("Horas trabalhadas:",horasTrabalhadas)

        totalGeral += horasTrabalhadas
    }
    console.log("TOTAL DE HORAS DA EQUIPE:",totalGeral)
}
