// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor


class Bola{
    cor: string = "azul"
    circunferencia: number
    material: string

    constructor( cor: string, circunferencia: number, material: string)
{
    this.cor= cor
    this.circunferencia = circunferencia
    this.material = material
        
    }
    exibirbola():void{
        console.log(`cor: ${this.cor} | circunferencia: ${this.circunferencia} | material: ${this.material}`)
    }
    
    trocarcor(novacor:string):void{
        novacor = "vermelho"
        this.trocarcor
    }

    mostrarcor():void{
        this.trocarcor
    }
    novaBola:Bola = new
    Bola("azul",1.22,"ferro")
}
