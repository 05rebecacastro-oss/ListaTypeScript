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
export function POOqt16(): void {
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
        
    }
    
    alimentar_Animal():void{

    }

    emitir_som():void{

    }
    mover():void{

    }

}

class Mamiferos extends Animal{
    public tipoAlimentacao: string
    
    constructor(nome:string,especie:string, idade:number,sexo:string, tipoAlimentacao:string){
        super(nome,especie,idade,sexo)
        this.tipoAlimentacao = tipoAlimentacao
    }

    emitir_som(): void {
        console.log("o mamifero está emitindo um som")
    }
    mover(): void {
        console.log("o mamifero está se movendo")
    } 
    exibirAnimal(): void {
        console.log(`nome ${this.nome}| idade ${this.idade}| especie ${this.especie}| sexo ${this.sexo}|tipo de alimentacao ${this.tipoAlimentacao}`)
    }   
}

class Aves extends Animal{
    public migratoria: boolean
    
    constructor(nome:string,especie:string, idade:number,sexo:string, migratoria:boolean){
        super(nome,especie,idade,sexo)
        this.migratoria = migratoria
    }

    emitir_som(): void {
        console.log("a ave está cantando")
    }
    mover(): void {
        console.log("a ave está voando")
    }

    exibirAnimal(): void {
        console.log(`nome ${this.nome}| idade ${this.idade}| especie ${this.especie}| sexo ${this.sexo}| migratoria ${this.migratoria ? "sim"}`)
    }
}

function alimentar_Animal(listaAnimal:Animal [] = []): void {
    console.log("HORA DA ALIMENTAÇÃO!!")

    for(let i=0; i<listaAnimal.length; i++){
        console.log(`o tratador está alimentando ${listaAnimal[i].nome}`)
        listaAnimal[i].emitir_som
    }
} 
let listaAnimal:Animal[] = []
let op:number = 0

while(op != 4){
    op = Number(prompt("escolha uma opção: 1-cadastrar mamifero, 2- cadastrar ave, 3-listar animais, 4-sair"))
    if (op == 1){
        let nome:string = String(prompt("qual o nome do mamifero?"))
        let idade:number = Number(prompt("qual é a idade dele?"))
        let especie:string = String(prompt("qual a especie dele?"))
        let sexo:string = String(prompt("qual o sexo dele?"))
        let tipoAlimentacao:string = String(prompt("qual o tipo de alimentacao dele?"))
        let mamiferos:Mamiferos = new Mamiferos(nome,idade,especie,sexo,tipoAlimentacao)

        listaAnimal.push(mamiferos)
        console.log("mamifero cadastrado com sucesso!")
    }
    else if(op == 2){
        let nome:string = String(prompt("qual o nome da ave?"))
        let idade:number = Number(prompt("qual é a idade dela?"))
        let especie:string = String(prompt("qual a especie dela?"))
        let sexo:string = String(prompt("qual o sexo dela?"))
        let quest:string = String(prompt("essa ave é migratoria? (s/n)")).toLowerCase()

        let migratoria:boolean
        if (quest == "s"){
            migratoria = true
        }else{
            migratoria = false
        }
        let Aves:Aves = new Aves(nome,idade,especie,sexo,migratoria)

        listaAnimal.push(Aves)
        console.log("Ave cadastrada com sucesso!")
    }
    else if (op == 3){
        console.log("LISTA DE ANIMAIS")
        for(let i=0; i<listaAnimal.length; i++){
            listaAnimal[i].exibirAnimal()
        }
    }
    else if(op == 4){
        console.log("saindo....")
    }else{
        console.log("opção invalida")
    }
}
}