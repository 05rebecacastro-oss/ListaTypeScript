// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.
export function POOqt14():void{
class Livro{
    public titulo:string
    public autor:string
    public anoPublicacao:number
    private disponibilidade: false

    constructor(titulo:string, autor:string, anoPublicacao:number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
        this.disponibilidade = false
    }

    exibirLivro():void{
        console.log(`titulo ${this.titulo}| autor ${this.autor}| ano de publicacao ${this.anoPublicacao}`)
    }
}

let cadastro:Livro [] = []
let op:number = 1

while(op != 2){
let titulo:string = String(prompt("qual o titulo desse livro?"))
let autor:string = String(prompt("qual o autor desse livro?"))
let anoPublicacao:number = Number(prompt("qual é o ano que esse livro foi publicado?"))

    if (cadastro < 15){
    console.log("voce ainda tem espaço para adicionar mais livros")
    }else if (cadastro = 15){
        console.log("voce chegou ao limite da quantidade permitida de livros")
    }else if (cadastro > 15){
        console.log("voce nao pode mais adicionar mais livros")
    }

    let novoLivro:Livro = new Livro(titulo, autor, anoPublicacao)
    novoLivro.exibirLivro()
    op = Number(prompt("deseja cadastrar outro livro? (1- sim, 2-nao)"))
}
}