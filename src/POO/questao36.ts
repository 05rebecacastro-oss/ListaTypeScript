// 36. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function POOqt36(): void {
    abstract class Curso {
        private _titulo: string
        private _cargaHoraria: number

        constructor(titulo: string, cargaHoraria: number) {
            this._titulo = titulo
            this._cargaHoraria = cargaHoraria
        }
        public get titulo(): string {
            return this._titulo
        }
        public set titulo(value: string) {
            this._titulo = value
        }
        public get cargaHoraria(): number {
            return this._cargaHoraria
        }
        public set cargaHoraria(value: number) {
            this._cargaHoraria = value
        }

        emitirCertificado(): void { }
    }
    class CursoLivre extends Curso {
        private _concluiuHoras: boolean

        constructor(titulo: string, cargaHoraria: number, concluiuHoras: boolean) {
            super(titulo, cargaHoraria)
            this._concluiuHoras = concluiuHoras
        }

        emitirCertificado(): void {
            if (this._concluiuHoras) {
                console.log(`Certificado liberado: ${this.titulo}`)
            } else {
                console.log(`Certificado pendente: ${this.titulo}`)
            }
        }
    }

    class CursoTecnico extends Curso {

        private _notaProjeto: number

        constructor(titulo: string, cargaHoraria: number, notaProjeto: number) {
            super(titulo, cargaHoraria)
            this._notaProjeto = notaProjeto
        }

        emitirCertificado(): void {
            if (this._notaProjeto >= 7) {
                console.log(`Certificado liberado: ${this.titulo}`)
            } else {
                console.log(`Certificado pendente: ${this.titulo}`)
            }
        }
    }
    let cursos: Curso[] = []

    let op: number = 0
    while (op !== 3) {
        op = Number(prompt("escolha uma opcao 1- curso livre, 2- curso tecnico, 3- sair"))

        if (op === 1) {
            let titulo: string = String(prompt("informe o titulo do seu curso:"))
            let cargaHoraria: number = Number(prompt("informe a carga horária:"))
            let concluirHoras: string = String(prompt("concluiu todas as horas?(s/n)")).toLowerCase()

            let curso = new CursoLivre(titulo, cargaHoraria, concluirHoras === "s")
            cursos.push(curso)
        } else if (op === 2) {
            let titulo: string = String(prompt("informe o titulo do seu curso:"))
            let cargaHoraria: number = Number(prompt("informe a carga horária:"))
            let notaProjeto: number = Number(prompt("informe a nota do projeto"))

            let curso = new CursoTecnico(titulo, cargaHoraria, notaProjeto)
            cursos.push(curso)
        } else if (op === 3) {
            console.log("Cadastro encerrado.")

        } else {
            console.log("Opção inválida.")
        }
    }
    for (let curso of cursos) {
        curso.emitirCertificado()
    }
}