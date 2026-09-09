// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

class ContaRecorrente{
    numeroConta:number
    nome:string
    saldo:number = 0

    constructor(numeroConta:number, nome:string){
        this.nome = nome
        this.numeroConta = numeroConta
        
    }

    alterarNome(novonome:string):void{
        novonome = String(prompt("para qual nome vc deseja trocar?"))
        novonome = novonome
        this.alterarNome
    }
    
    deposito():void{

    }

    saque():void{

    }
}

