// 15. Herança Encapsulamento
// Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados
// via teclado e calcular o salário de cada um.

abstract class Funcionários{
    nome:string

    constructor(nome:string){
        this.nome = nome
    }

    calcularSalario():void{

    }
    
}

class FuncionarioHorista extends Funcionários{
    calcularSalario(): void {
        
    }
}