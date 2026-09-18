// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação (ex:"Carnívoro", "Herbívoro”, ...). Para as aves precisa-se saber
// se são migratórias ou não. Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente.

// O Método "Hora da Alimentação" (Rotina Polimórfica): Crie uma função ou método executável
// chamado simularHoraAlimentacao(listaAnimais: Animal[]). Esse método deve percorrer o array de
// animais com um laço de repetição, imprimindo o nome do animal sendo alimentado pelo tratador e
// acionando o seu método emitirSom()

// Fluxo do Programa: O sistema deve cadastrar vários animais, listar por tipo (Mamíferos ou Aves) e
// ao final a disparar a rotina simularHoraAlimentacao() chamando o método de som de cada um.

abstract class Animal{
    private _nome: string 
    private _especie: string
    private _idade: number
    private _sexo: string
    
    constructor(nome:string,especie:string,idade:number,sexo:string){
        this._nome = nome
        this._especie = especie
        this._idade = idade
        this._sexo = sexo
    }

    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
    public get especie(): string {
        return this._especie
    }
    public set especie(value: string) {
        this._especie = value
    }
   
    public get idade(): number {
        return this._idade
    }
    public set idade(value: number) {
        this._idade = value
    }
    public get sexo(): string {
        return this._sexo
    }
    public set sexo(value: string) {
        this._sexo = value
    }

    exibirAnimal():void{
        console.log(``)
    }
    
    alimentar_Animal():void{

    }

    emitir_som():void{

    }
    mover():void{

    }

}


class Mamiferos extends Animal{
     
    constructor(nome:string,especie:string, idade:number,sexo:string){
        super(nome,especie,idade,sexo)
    }

    alimentar_Animal(): void {
        let listaAnimal:Animal [] = []
    }
}
