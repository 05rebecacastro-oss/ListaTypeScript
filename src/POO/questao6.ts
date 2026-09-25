// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.
export function POOqt6(): void {
    class ContaRecorrente {
        numeroConta: number
        nome: string
        saldo: number = 0

        constructor(numeroConta: number, nome: string) {
            this.nome = nome
            this.numeroConta = numeroConta

        }
        exibirContaRecorrente(): void {
            console.log(`numeroConta ${this.numeroConta}| nome ${this.nome}`)
        }

        alterarNome(novoNome: string): void {
            this.nome = novoNome
        }

        deposito(valorDeposito: number): void {
            if (valorDeposito >= 0) {
                this.saldo = this.saldo + valorDeposito
            } else {
                console.log("deposito invalido")
            }
        }

        saque(saque: number): void {
            if (saque <= this.saldo) {
                this.saldo = this.saldo - saque
                console.log("saque feito com sucesso!!")
            } else {
                console.log("saldo insuficiente")
            }
        }
    }

    let nome: string = String(prompt("qual seu nome?"))
    let numeroConta: number = Number(prompt("qual o numero da sua conta"))
    let novaContaRecorrente: ContaRecorrente = new ContaRecorrente(numeroConta, nome)
    novaContaRecorrente.exibirContaRecorrente

    let op: number = 1
    while (op != 4) {
        if (op == 1) {
            let novoNome: string = String(prompt("para qual nome vc deseja trocar?"))
            novaContaRecorrente.alterarNome(novoNome)
        } else if (op == 2) {
            let valorDeposito: number = Number(prompt("quanto vc quer depositar?"))
            novaContaRecorrente.deposito(valorDeposito)
        } else if (op == 3) {
            let saque: number = Number(prompt("quanto vc quer sacar?"))
            novaContaRecorrente.saque(saque)
        } else if (op == 4) {
            console.log("até a próxima...")
        }
        op = Number(prompt("o que vc deseja fazer agora? 1-trocar de nome, 2-depositar, 3-sacar, 4-sair"))
    }
}