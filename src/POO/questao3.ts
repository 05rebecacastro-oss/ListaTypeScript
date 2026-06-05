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

    mudarValor(ladoA:number,ladoB:number):number{
        let areaA = ladoA * ladoA
        let areaB = ladoB * ladoB
        return areaA + areaB
    }
}
