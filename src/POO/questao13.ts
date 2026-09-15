// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média >= 7) ou reprovado (caso contrário).

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

    calculoMedia(media:number):number{
        media = nota1 + nota2 / 2
        return media
    }
}
let media:number
let nomeAluno:string = String(prompt("qual o nome do aluno?"))
let nota1:number = Number(prompt("quanto o aluno tirou na primeira prova?"))
let nota2:number = Number(prompt("quanto o aluno tirou na segunda prova?"))
let op:number = Number(prompt("quer cadastrar mais algum aluno? (1-sim, 2-nao)"))

while(op != 2){
    if(media >= 7){
        console.log("O aluno foi aprovado!!!")
    }else{
        console.log("o aluno está reprovado!")
    }
}

let novosAlunos:Alunos = new Alunos(nomeAluno, nota1,nota2)
novosAlunos.exibirAluno
let novaNota = novosAlunos.calculoMedia(media)
console.log(novaNota)
novosAlunos.exibirAluno
