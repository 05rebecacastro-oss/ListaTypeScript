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

    calcularArea():any{
        let areaB =  this.ladoA * this.ladoB
        console.log(" Área é:" +areaB)
    }

    calcularPerimetro():any{
        let perimetro = 2*(this.ladoA + this.ladoB)
        console.log("o perimetro é:" + perimetro)
    }

    base:number = Number(prompt("qual a base desse lugar?"))
    altura:number = Number(prompt("qual a altura desse lugar?"))

    let novoRetan = new Retangulo(base,altura)
    novoRetan.exibirRetangulo()
}
