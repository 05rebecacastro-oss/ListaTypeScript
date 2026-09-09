// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.
export function questao5():void{
class Pessoa{
    nome:string
    idade:number
    peso:number
    altura:number

    constructor(nome:string,idade:number,peso:number,altura:number){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }

    exibirPessoa():void{
        console.log(`nome ${this.nome}| idade ${this.idade}| peso ${this.peso}| altura ${this.altura}`)
    }
    envelhecer():void{
  

    }
    engordar():void{

    }
    emagrecer():void{

    }
    crescer():void{
        if(idade < 21){
            estatura = 21 - idade
            crescimento = altura + 0.5 * estatura
        }
    }


}
let crescimento
let estatura
let nome:string = String(prompt("qual seu nome?"))
let idade:number = Number(prompt("qual sua idade?"))
let peso:number = Number(prompt("qual seu peso?"))
let altura:number = Number(prompt("qual sua altura?"))

console.log("voce cresceu:" + crescimento)

let novaPessoa = new Pessoa(nome,idade,peso,altura)
novaPessoa.exibirPessoa()
}