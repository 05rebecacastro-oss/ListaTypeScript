// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.
export function POOqt15(): void {
    abstract class Funcionarios {

        calcularSalario(): void {
        }
        exibirFuncionarios(): void {
        }

    }

    class FuncionarioHorista extends Funcionarios {
        public qntHorasTrabalhadas: number
        public nomeH: string
        public valorHora: number

        constructor(nomeH: string, valorHora: number, qntHorasTrabalhadas: number) {
            super()
            this.nomeH = nomeH
            this.qntHorasTrabalhadas = qntHorasTrabalhadas
            this.valorHora = valorHora
        }
        calcularSalario(): number {
            let calculo = this.qntHorasTrabalhadas * this.valorHora
            return calculo
        }
        exibirFuncionarios(): void {
            let valorCalculo = this.calcularSalario()
            console.log(`nome ${this.nomeH}| horas trabalhadas ${this.qntHorasTrabalhadas}|valor por hora ${this.valorHora} | Salario Final ${valorCalculo}`)
        }
    }

    class FuncionarioAssalariado extends Funcionarios {
        public nomeA: string
        public salarioBase: number
        constructor(nomeA: string, salarioBase: number) {
            super()
            this.nomeA = nomeA
            this.salarioBase = salarioBase
        }
        // calcularSalario(): void {
        //     this.salarioBase = salarioBase
        // }
        exibirFuncionarios(): void {
            console.log(`nome ${this.nomeA}| salario base ${this.salarioBase}`)
        }
    }
    let op = 0
    while (op != 3) {
        op = Number(prompt("o salario de qual funcionario você quer calcular? (1-horista, 2-assalariado, 3- Sair)"))
        if (op == 1) {
            //funcionario horista 
            let nomeH: string = String(prompt("qual o nome do funcionario"))
            let valorHora: number = Number(prompt("quantas horas esse funcionario trabalhou hoje?"))
            let qntHorasTrabalhadas: number = Number(prompt("quanto esse funcionario recebe por hora?"))

            let horista: FuncionarioHorista = new FuncionarioHorista(nomeH, qntHorasTrabalhadas, valorHora)
            horista.exibirFuncionarios()
        } else if (op == 2) {
            //funcionario assalariado
            let nomeA: string = String(prompt("qual o nome do funcionario?"))
            let salarioBase: number = Number(prompt("qual o salario base "))

            let assalariado: FuncionarioAssalariado = new FuncionarioAssalariado(nomeA, salarioBase)

            assalariado.exibirFuncionarios()

        } else {
            console.log("Saindo...")
        }
    }
}