// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média >= 7) ou reprovado (caso contrário).
export function POOqt13():void{
class Alunos{
    public nomeAluno:string
    public nota1:number
    public nota2:number

    constructor(nomeAluno:string, nota1:number, nota2:number){
        this.nomeAluno = nomeAluno
        this.nota1 = nota1
        this.nota2 = nota2
    }

    exibirAluno():void{
        console.log(`nomeAluno ${this.nomeAluno}| nota1 ${this.nota1}| nota2 ${this.nota2}`)
    }

    calculoMedia(nota1:number, nota2:number):number{
        let media = (nota1 + nota2) / 2
        return media
    }
}
let op:number = 1

while(op != 2){

let media:number = 0
let nomeAluno:string = String(prompt("qual o nome do aluno?"))
let nota1:number = Number(prompt("quanto o aluno tirou na primeira prova?"))
let nota2:number = Number(prompt("quanto o aluno tirou na segunda prova?"))


let novosAlunos:Alunos = new Alunos(nomeAluno, nota1,nota2)
novosAlunos.exibirAluno()
media = novosAlunos.calculoMedia(nota1,nota2)
 if(media >= 7){
        console.log("O aluno foi aprovado!!! com média de: " + media)
    }else{
        console.log("o aluno está reprovado! com média de: " + media)
    }
op = Number(prompt("quer cadastrar mais algum aluno? (1-sim, 2-nao)"))
}

}