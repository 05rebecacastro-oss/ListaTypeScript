// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.
export function POOqt17(): void {
    abstract class Refeitorio {
        public nome: string
        public identificador: number

        constructor(nome: string, identificador: number) {
            this.nome = nome
            this.identificador = identificador
        }
        exibir(): void {

        }
    }
    class Alunos extends Refeitorio {
        public curso: string

        constructor(nome: string, identificador: number, curso: string) {
            super(nome, identificador)
            this.curso = curso
        }
        exibir(): void {
            console.log(`nome ${this.nome}|identificador ${this.identificador}| curso ${this.curso}`)
        }
    }
    class Servidores extends Refeitorio {
        public departamento: string

        constructor(nome: string, identificador: number, departamento: string) {
            super(nome, identificador)
            this.departamento = departamento
        }
        exibir(): void {
            console.log(`nome ${this.nome}|identificador ${this.identificador}| departamento ${this.departamento}`)
        }
    }

    let fila: Refeitorio[] = []
    let historico: Refeitorio[] = []
    let op: number = 0

    while (op == 3) {
        op = Number(prompt("escolha uma opcao: 1- cadastrar usuario, 2- registrar entrada na catraca, 3- Encerrar e mostrar relatorio"))
        if (op == 1) {
            let tipo: number = Number(prompt("qual é o usuario? (1- aluno, 2- servidor)"))
            let nome: string = String(prompt("informe seu nome completo:"))
            let identificador: number = Number(prompt("informe seu identificador:"))

            if (tipo == 1) {
                let curso: string = String(prompt("qual o seu curso?"))
                let novoAluno: Alunos = new Alunos(nome, identificador, curso)
                fila.push(novoAluno)
                console.log("aluno cadastrado na fila")
            } else if (tipo == 2) {
                let departamento: string = String(prompt("informe seu departamento?:"))
                let novoServidor: Servidores = new Servidores(nome, identificador, departamento)
                fila.push(novoServidor)
                console.log("servidor cadastrado na fila")
            } else {
                console.log("tipo de usuario invalido")
            }
        } else if (op == 2) {
            if (fila.length > 0) {
                let Refeitorio: Refeitorio = fila[0]
                historico.push(Refeitorio)
                fila.shift()
                console.log(`${Refeitorio.nome} passou pela catraca`)
            } else {
                console.log("não tem ninguem na fila")
            }
        } else if (op == 3) {
            console.log("RELATÓRIO DO DIA")
            for (let i = 0; i < historico.length; i++) {
                historico[i].exibir()
            }
        } else {
            console.log("opçao invalida")
        }
        let quantAlunos: number = 0
        let quantServidores: number = 0
        for (let i = 0; i < historico.length; i++) {
            if (historico[i] instanceof Alunos) {

                quantAlunos++
            }

            else if (historico[i] instanceof Servidores) {

                quantServidores++
            }
        }
        console.log("TOTAL DE ACESSOS")

        console.log(`Total de alunos: ${quantAlunos}`)
        console.log(`Total de servidores: ${quantServidores}`)
        console.log(`Total geral: ${historico.length}`)
        console.log("Encerrando....")
    }
}