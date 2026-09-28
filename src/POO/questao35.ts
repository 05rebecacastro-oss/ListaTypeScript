// 35. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Clientes do Posto de Saúde
// O posto de saúde municipal necessita de um sistema para organizar o atendimento diário. Todo
// paciente possui nome e número do cartão do SUS privados. Os pacientes dividem-se em
// PacienteComum e PacientePrioritario (que possui um atributo privado para o tipo de prioridade,
// como &quot;Idoso&quot; ou &quot;Gestante&quot;). A classe base possui o método exibirFicha(). A classe
// PacientePrioritario sobrescreve este método para incluir a informação da prioridade com um
// destaque no texto. O operador deve cadastrar a fila de pacientes do dia via teclado. Ao final do
// cadastro, o programa varre a lista, imprime as fichas de atendimento polimorficamente e exibe a
// quantidade total de pacientes prioritários atendidos.

export function POOqt35(): void {
    abstract class Paciente {
        private _nome: string
        private _cartaoSUS: number

        constructor(nome: string, cartaoSUS: number) {
            this._nome = nome
            this._cartaoSUS = cartaoSUS
        }
        public get nome(): string {
            return this._nome
        }
        public set nome(value: string) {
            this._nome = value
        }
        public get cartaoSUS(): number {
            return this._cartaoSUS
        }
        public set cartaoSUS(value: number) {
            this._cartaoSUS = value
        }

        exibirFicha(): void {
            console.log(`nome ${this.nome}| cartao do SUS ${this.cartaoSUS}`)
        }
    }
    class PacienteComum extends Paciente {
        constructor(nome: string, cartaoSUS: number) {
            super(nome, cartaoSUS)
        }
        exibirFicha(): void {
            console.log(`nome ${this.nome}| cartao do SUS ${this.cartaoSUS}`)
        }
    }
    class PacientePrioritario extends Paciente {
        private _prioridade: string

        constructor(nome: string, cartaoSUS: number, prioridade: string) {
            super(nome, cartaoSUS)
            this._prioridade = prioridade
        }
        public get prioridade(): string {
            return this._prioridade
        }
        public set prioridade(value: string) {
            this._prioridade = value
        }
        exibirFicha(): void {
            console.log(`***PRIORIDADE*** nome ${this.nome}| cartao do SUS ${this.cartaoSUS}| prioridade ${this.prioridade}`)
        }
    }

    let filaPacientes: Paciente[] = []

    let op: number = 0
    while (op !== 3) {
        op = Number(prompt("escolha uma opcao:(1-paciente comum, 2- paciente proprietario)"))

        if (op == 1) {
            let nome: string = String(prompt("informe seu nome:"))
            let cartaoSUS: number = Number(prompt("informe o numero do seu cartao do SUS"))

            let novoPaciente = new PacienteComum(nome, cartaoSUS)
            filaPacientes.push(novoPaciente)

        } else if (op == 2) {
            let nome: string = String(prompt("informe seu nome:"))
            let cartaoSUS: number = Number(prompt("informe o numero do seu cartao do SUS"))
            let prioridade: string = String(prompt("informe a prioridade: idoso ou gestante")).toLowerCase()
            let novoPaciente = new PacientePrioritario(nome, cartaoSUS, prioridade)
            filaPacientes.push(novoPaciente)
        } else if (op == 3) {
            console.log("encerrando....")
        } else {
            console.log("opcao invalida")
        }
    }

    let totalPrioridade: number = 0

    for (let paciente of filaPacientes) {
        paciente.exibirFicha()

        if (paciente instanceof PacientePrioritario) {
            totalPrioridade++
        }
    }
    console.log(`total de pacientes prioritarios: ${totalPrioridade}`)
}
