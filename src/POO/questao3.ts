//3. Classe Retângulo: Crie uma classe que modele um retângulo:
//A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
//B. Métodos:
// Mudar valor dos lados,
// Retornar valor dos lados,
// Calcular Área,
// Calcular Perímetro.

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
}
