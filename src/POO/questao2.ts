// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

class quadrado {
    tamanhoLado:number 


    constructor(tamanhoLado:number){
        this.tamanhoLado = tamanhoLado
    }

    exibirQuadrado():void{
        console.log(`tamanho ${this.tamanhoLado}`)
    }

    mudarValor(novoValor:number):number{
        let area = novoValor * novoValor
        return area
    
    }
    
    novoQuadrado:quadrado = new quadrado(0)
}
