// 38. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Plataforma de Vendas e Cashback
// Uma loja virtual quer implementar um programa de fidelidade. A classe base Cliente possui nome e
// e-mail privados. A classe ClientePadrao acumula 1% do valor das compras como saldo de
// cashback. A classe ClienteVIP acumula 5% de cashback e possui frete grátis garantido. Ambas as
// classes possuem o método processarCompra(valor: number). O sistema deve interagir com o
// atendente para registrar as compras do dia, solicitando o tipo de cliente e o valor gasto. Tudo deve ser

// armazenado em uma lista de clientes. Ao encerrar o programa, a lista é percorrida para exibir o saldo
// final de cashback acumulado por cada cliente e o valor total de cashback concedido pela loja.
export function POOqt38(): void {
    abstract class Cliente {
        private _nome: string
        private _email: string
        private _cashback: number = 0

        constructor(nome: string, email: string) {
            this._nome = nome
            this._email = email
        }

        public get nome(): string {
            return this._nome
        }
        public set nome(value: string) {
            this._nome = value
        }
        public get email(): string {
            return this._email
        }
        public set email(value: string) {
            this._email = value
        }
        public get cashback(): number {
            return this._cashback
        }
        public set cashback(value: number) {
            this._cashback = value
        }
        processarCompra(valor: number): void {

        }

    }
    class ClientePadrao extends Cliente {
        constructor(nome: string, email: string) {
            super(nome, email)
        }

        processarCompra(valor: number): void {
            this.cashback += valor * 0.01
        }
    }
    class ClienteVIP extends Cliente {
        constructor(nome: string, email: string) {
            super(nome, email)
        }

        processarCompra(valor: number): void {
            this.cashback += valor * 0.05

        }
    }

    let ListaClientes: Cliente[] = []

    let op: number = 1
    while (op != 3) {
        op = Number(prompt("escolha uma opcao: 1-cliente padrao, 2-cliente VIP, 3- sair"))
        if (op == 1) {
            let nome: string = String(prompt("Digite o nome do cliente:"))
            let email: string = String(prompt("Digite o email do cliente:"))
            let valor: number = Number(prompt("Digite o valor da compra:"))

            let cliente = new ClientePadrao(nome, email)

            cliente.processarCompra(valor)

            ListaClientes.push(cliente)

            console.log("Cliente padrão cadastrado com sucesso!")
        } else if (op == 2) {
            let nome: string = String(prompt("Digite o nome do cliente:"))
            let email: string = String(prompt("Digite o email do cliente:"))
            let valor: number = Number(prompt("Digite o valor da compra:"))

            let cliente = new ClienteVIP(nome, email)

            cliente.processarCompra(valor)

            ListaClientes.push(cliente)

            console.log("Cliente VIP cadastrado com sucesso!")
        } else if (op == 3) {
            console.log("Encerrando...")
        } else {
            console.log("opcao invalida")
        }
    }
    let totalCashback: number = 0
    console.log("RELATORIO FINAL");

    for (let i = 0; i < ListaClientes.length; i++) {
        console.log("Nome: " + ListaClientes[i].nome)
        console.log("Email: " + ListaClientes[i].email)
        console.log("Cashback:" + ListaClientes[i].cashback.toFixed(2))
        totalCashback += ListaClientes[i].cashback
    }

    console.log("Total de cashback concedido: R$ " + totalCashback.toFixed(2))
}