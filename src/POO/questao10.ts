// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então
// não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a
// qualquer momento.

export function POOqt10():void{
class BichinhoVirtual{
    nome:string
    fome:number
    saude:number
    idade:number

    constructor(nome:string,fome:number,saude:number,idade:number){
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }

     exibirBichinho():void{
        console.log(`nome ${this.nome}| fome ${this.fome}| saude ${this.saude}| idade ${this.idade}`)
    }

    alterarNome(novoNome:string):void{
        this.nome = novoNome
    }
    alterarFome(novaFome:number):void{
        this.fome = novaFome
    }
    alterarSaude(novaSaude:number):void{
        this.saude = novaSaude
    }
    alterarIdade(novaIdade:number):void{
        this.idade = novaIdade
    }
}
let nome:string = String(prompt("qual vai ser o nome do nosso bichinho?"))
let idade:number = Number(prompt("qual a idade que o nosso bichinho vai ter?"))
let fome:number = Number(prompt("me diga um numero de 0 a 100 do quanto nosso bichinho está com fome:"))
let saude:number = Number(prompt("me diga um numero de 0 a 100 de quanto o nosso bichinho está bem de saúde"))

let op:number = Number(prompt("deseja continuar? (1-sim, 2-nao)"))
while(op != 2){
    if(fome >= 0 && fome <= 25 || saude >= 0 && saude <= 25){
        console.log("nosso bichinho virtual está bravo e muito doente")
    }else if(fome >= 26 && fome <= 50 || saude >= 26 && saude <= 50){
        console.log("nosso bichinho virtual está irritado e um pouco doente")
    }else if(fome >= 51 && fome <= 75 || saude >= 51 && saude <= 75){
        console.log("nosso bichinho virtual está tranquilo e com alergia")
    }else if(fome >= 76 && fome <= 100 || saude >= 76 && saude <= 100){
        console.log("nosso bichinho virtual está tranquilo e com alergia")
    }
}

let novobichinho:BichinhoVirtual = new BichinhoVirtual(nome, fome, saude, idade)
novobichinho.exibirBichinho()
}

