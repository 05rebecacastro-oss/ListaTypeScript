// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.
export function POOqt14(): void {
    class Livro {
        public titulo: string
        public autor: string
        public anoPublicacao: number
        public disponibilidade: boolean

        constructor(titulo: string, autor: string, anoPublicacao: number, disponibilidade: boolean) {
            this.titulo = titulo
            this.autor = autor
            this.anoPublicacao = anoPublicacao
            this.disponibilidade = disponibilidade
        }

        exibirLivro(): void {
            console.log(`titulo ${this.titulo}| autor ${this.autor}| ano de publicacao ${this.anoPublicacao}| disponibilidade ${this.disponibilidade}`)
        }
    }

    let listaLivro: Livro[] = []
    let op: number = 1
    let disponibilidade: boolean

    let quantidade: number = Number(prompt("informe quntos livros vc quer cadastrar:"))

    if (quantidade > 15) {
        quantidade = 15
    }
    for (let i = 0; i < quantidade; i++) {
        let titulo: string = String(prompt("qual o titulo desse livro?"))
        let autor: string = String(prompt("qual o autor desse livro?"))
        let anoPublicacao: number = Number(prompt("qual é o ano que esse livro foi publicado?"))
        let disp: number = Number(prompt("O livro tem disponibilidade? 1-Sim 2-Não"))

        if (disp == 1) {
            disponibilidade = true
        } else {
            disponibilidade = false
        }

        let novoLivro: Livro = new Livro(titulo, autor, anoPublicacao, disponibilidade)
        listaLivro.push(novoLivro)

        for (let i = 0; i < listaLivro.length; i++) {
            listaLivro[i].exibirLivro()
        }
    }
}