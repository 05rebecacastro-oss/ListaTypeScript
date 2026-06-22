// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

class Retangulo{
    ladoA:number
    ladoB:number

    constructor(ladoA:number,ladoB:number){
        this.ladoA = ladoA
        this.ladoB = ladoB
    }

    exibirRetangulo():void{
        console.log(`ladoA ${this.ladoA} | ladoB ${this.ladoB}`)
    }

    mudarValor(novoladoA:number,novoladoB:number):void{
        this.ladoA = novoladoA
        this.ladoB = novoladoB
        
    }

    calcularArea():number{
        let areaB =  this.ladoA * this.ladoB
        return areaB
    }

    calcularPerimetro():number{
        let perimetro = 2*(this.ladoA + this.ladoB)
        return perimetro
    }

}

let larguraLocal:number = Number(prompt("qual a largura do local?"))
let comprimentoLocal:number = Number(prompt("qual o comprimento do local?"))

let larguraPiso:number = Number(prompt("qual a largura do piso?"))
let comprimentoPiso:number = Number(prompt("qual o comprimento do piso?"))

let comprimentoRodape:number = Number(prompt("qual o comprimento do comprimentoRodapé?"))

let novoRetan = new Retangulo(larguraLocal, comprimentoLocal)
    novoRetan.exibirRetangulo()

let areaLocal = novoRetan.calcularArea()

let areaPiso = larguraPiso * comprimentoPiso
let quantidadePisos = Math.ceil (areaLocal / areaPiso)

let perimetro = novoRetan.calcularPerimetro()
let quantidaderodapes = Math.ceil (perimetro / comprimentoRodape)

console.log("Area local:" + areaLocal)
console.log("quantidade de pisos:" + quantidadePisos)
console.log("quantidade de rodapés:" + quantidaderodapes)

