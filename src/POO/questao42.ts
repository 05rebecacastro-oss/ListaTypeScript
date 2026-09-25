// 42. Repetição Encapsulamento Arrays
// Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.
export function POOqt42(): void {
    class Medicamento {
        nome: string
        lote: number
        preco: number
        private _qnt: number

        constructor(nome: string, lote: number, preco: number, qnt: number) {
            this.nome = nome
            this.lote = lote
            this.preco = preco
            this._qnt = qnt
        }
        set qnt(qnt: number) {
            if (qnt < 0) {
                this.qnt = 0
            } else {
                this.qnt = qnt
            }
        }
        exibirMedicamento(): void {
            console.log(`nome ${this.nome}| lote ${this.lote}| preço ${this.preco}| quantidade ${this.qnt}`)
        }
    }

    let listaMedicamento: Medicamento[] = []
    let medicamento: Medicamento
    let estoque: number = Number(prompt("quantos produtos deseja cadastrar?"))
    if (estoque > 10) {
        estoque = 10
    }
    for (let i = 0; i < estoque; i++) {
        let nome: string = String(prompt("informe o nome"))
        let lote: number = Number(prompt("informe o lote"))
        let preco: number = Number(prompt("informe o preço"))
        let qnt: number = Number(prompt("informe a quantidade"))

        medicamento = new Medicamento(nome, lote, preco, qnt)
        listaMedicamento.push(medicamento)
    }

    for (let i = 0; i < estoque; i++) {
        if (listaMedicamento[i].qnt < 5) {
            listaMedicamento[i].exibirMedicamento()
        }
    }
}