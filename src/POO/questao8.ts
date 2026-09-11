// Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function questao8():void{
class Funcionarios{
    nome:string
    cargo:string
    salario:number

    constructor(nome:string,cargo:string, salario:number){
        this.nome = nome
        this.cargo = cargo 
        this.salario = salario
    }

    exibirFuncionario():void{
        console.log(`nome ${this.nome} | cargo ${this.cargo}| salario ${this.salario}`)
    }
    
}
let op:number = Number(prompt("deseja continuar? (digite: 1-sim, 2-nao)"))

let listaFuncionarios:Funcionarios [] = []
while(op != 2){
let nome = String(prompt("qual o nome do funcionario?"))
let cargo = String(prompt("Informe seu cargo atual: "))
let salario = Number(prompt("quanto esse funcionario ganha?"))

let novofuncionarios:Funcionarios = new Funcionarios(nome,cargo,salario)
listaFuncionarios.push(novofuncionarios)
novofuncionarios.exibirFuncionario()

op = Number(prompt("deseja continuar? (digite: 1-sim, 2-nao)"))
}

for(let i=0; i < listaFuncionarios.length; i++){
    console.log(listaFuncionarios)
}


}