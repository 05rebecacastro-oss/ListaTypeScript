// 44. Repetição Encapsulamento Arrays
// Gestão de Manutenção de Computadores
// O setor de suporte técnico do campus precisa de um controle de chamados. Crie a classe Chamado
// com os atributos privados id, descricaoEquipamento, laboratorio e concluido (boolean). Crie
// um método finalizarChamado() que altera o status de concluido para true. O programa deve
// pedir ao técnico para cadastrar os chamados do dia em um array. Após o cadastro, o programa entra

// em um novo laço permitindo que o técnico informe o id dos chamados que ele conseguiu resolver no
// turno para marcá-los como concluídos. Ao final, o sistema exibe o relatório de quantos chamados
// foram atendidos e quantos continuam pendentes.
export function POOqt44(): void {
    class Chamado {
        private _id: number
        private _descricaoEquipamento: string
        private _laboratorio: string
        private _concluido: boolean

        constructor(id: number, descricaoEquipamento: string, laboratorio: string, concluido: boolean) {
            this._id = id
            this._descricaoEquipamento = descricaoEquipamento
            this._laboratorio = laboratorio
            this._concluido = concluido
        }
        public get id(): number {
            return this._id
        }
        public set id(value: number) {
            this._id = value
        }
        public get descricaoEquipamento(): string {
            return this._descricaoEquipamento
        }
        public set descricaoEquipamento(value: string) {
            this._descricaoEquipamento = value
        }
        public get laboratorio(): string {
            return this._laboratorio
        }
        public set laboratorio(value: string) {
            this._laboratorio = value
        }
        public get concluido(): boolean {
            return this._concluido
        }
        public set concluido(value: boolean) {
            this._concluido = value
        }
        exibirChamados(): void {
            console.log(`id ${this._id}| descricao do equipamento ${this._descricaoEquipamento}| laboratorio ${this._laboratorio}| concluido ${this._concluido}`)
        }
        finalizarChamado(conclusao: number): void {
            if (conclusao == 1) {
                this._concluido == true
            } else {
                this._concluido == false
            }
        }
    }
    let listaChamadosAtendidos: Chamado[] = []
    let listaChamadosPendentes: Chamado[] = []
    let op: number = 1
    let quantidade: number = Number(prompt("qual a quantidade de chamados vc gostaria de cadastrar?"))

    for (let i = 0; i < quantidade; i++) {
        let id: number = Number(prompt("informe o id:"))
        let descricaoEquipamento: string = String(prompt("descriva o equipamento usado:"))
        let laboratorio: string = String(prompt("em que laboratorio:"))
        let atendidos: number = Number(prompt("quantos já foram atendidos?"))
        let pendentes: number = Number(prompt("quantos ainda estao pendentes?"))
        let conclusao: number = Number(prompt("a quantidade que vc queria foi cadastrada (1-sim,2-nao)?"))

        let novoChamado: Chamado = new Chamado(id, descricaoEquipamento, laboratorio, false)
        novoChamado.finalizarChamado(conclusao)

        if (novoChamado.concluido) {
            listaChamadosAtendidos.push(novoChamado)
        } else {
            listaChamadosPendentes.push(novoChamado)
        }




        console.log("RELATORIO")

        console.log("CHAMADOS QUE JÁ FORAM ATENDIDOS");
        for (let i = 0; i < listaChamadosAtendidos.length; i++) {
            listaChamadosAtendidos[i].exibirChamados()
        }
        console.log("CHAMADOS QUE ESTÃO PENDENTES");
        for (let i = 0; i < listaChamadosPendentes.length; i++) {
            listaChamadosPendentes[i].exibirChamados()
        }
        op = Number(prompt("deseja cadastrar mais algum id? (1-sim, 2-nao)"))
    }
}