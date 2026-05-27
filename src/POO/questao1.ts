// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor


class Bola{
    cor: string
    circunferencia: string
    material: string

    constructor( cor: string, circunferencia: string, material: string)
{
    this.cor= cor
    this.circunferencia = circunferencia
    this.material = material
        
    }
}
let novaBola:Bola = new
Bola("azul","1.22","ferro")
