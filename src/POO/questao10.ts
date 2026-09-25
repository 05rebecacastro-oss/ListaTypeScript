// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então
// não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a
// qualquer momento.

export function POOqt10(): void {
    class BichinhoVirtual {
        nome: string
        fome: number
        saude: number
        idade: number

        constructor(nome: string, fome: number, saude: number, idade: number) {
            this.nome = nome
            this.fome = fome
            this.saude = saude
            this.idade = idade
        }

        exibirBichinho(): void {
            console.log(`nome ${this.nome}| fome ${this.fome}| saude ${this.saude}| idade ${this.idade}`)
        }

        alterarNome(novoNome: string): void {
            this.nome = novoNome
        }
        alterarFome(novaFome: number): void {
            this.fome = novaFome
        }
        alterarSaude(novaSaude: number): void {
            this.saude = novaSaude
        }
        alterarIdade(novaIdade: number): void {
            this.idade = novaIdade
        }
        calculoHumor(saude: number, fome: number): number {
            return (saude + (10 - fome)) / 2

        }
    }
    let op: number = 1
    let novobichinho: BichinhoVirtual

    while (op != 2) {
        let nome: string = String(prompt("qual vai ser o nome do nosso bichinho?"))
        let idade: number = Number(prompt("qual a idade que o nosso bichinho vai ter?"))
        let fome: number = Number(prompt("me diga um numero de 0 a 10 do quanto nosso bichinho está com fome:"))
        let saude: number = Number(prompt("me diga um numero de 0 a 10 de quanto o nosso bichinho está bem de saúde"))

        novobichinho = new BichinhoVirtual(nome, fome, saude, idade)
        let media = novobichinho.calculoHumor(saude, fome)

        if (media >= 8 && media <= 10) {
            console.log("ele está muito feliz!!")
        } else if (media >= 5 && media < 8) {
            console.log("ele está neutro/ok")
        } else if (media < 5) {
            console.log("ele está triste e transtornado ")
        }


        novobichinho.exibirBichinho()
        console.log(`Humor ${media}`)

        op = Number(prompt("deseja continuar? (1-sim, 2-nao)"))
    }
}