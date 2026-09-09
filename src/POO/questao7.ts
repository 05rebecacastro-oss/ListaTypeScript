// Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

class funcionário{
    nome:string
    cargo:string
    salario:number

    constructor(nome:string,cargo:string, salario:number){
        this.nome = nome
        this.cargo = cargo 
        this.salario = salario
    }

    aumento():void{
        
    }
}