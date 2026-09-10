// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.
export function questao7():void{
class Funcionario{
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

    percentual():number{
        let aumento = Number(prompt("qual o valor do aumento (%) que o funcionario vai receber?"))
        this.salario = this.salario + this.salario * (aumento / 100)
        return this.salario
    }
}

let nome = String(prompt("qual o nome do funcionario?"))
let salario = Number(prompt("qual o salario do funcionario sem o aumento?"))
let cargo = String(prompt("Informe seu cargo atual: "))


let novofuncionario:Funcionario = new Funcionario(nome,cargo,salario)
novofuncionario.exibirFuncionario()
let novoSalario = novofuncionario.percentual()
console.log(novoSalario)
novofuncionario.exibirFuncionario()
}

