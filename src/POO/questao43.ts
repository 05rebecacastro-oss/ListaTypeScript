// Avaliação de Desempenho de Atletas
// Um clube de corrida deseja registrar a performance de seus atletas em uma maratona. Crie a classe
// Atleta com os atributos privados nome, idade e tempoMinutos. Garanta o encapsulamento de todos
// os atributos. O sistema deve permitir que o treinador cadastre via prompt os dados de vários atletas
// em um laço de repetição até digitar &quot;SAIR&quot;. O programa armazena os objetos em um array e, ao final,
// faz uma busca na lista para identificar e exibir os dados do atleta que concluiu a prova no menor
// tempo (o campeão da prova).
export function POOqt43(): void {
    class Atleta{
        private _nome: string
        private _idade: number
        private _tempoMinuto: number

        constructor(nome:string,idade:number,tempoMinuto:number){
            this._nome = nome
            this._idade = idade
            this._tempoMinuto = tempoMinuto
        }
        
        public get nome(): string {
            return this._nome
        }
        public set nome(value: string) {
            this._nome = value
        }
        public get idade(): number {
            return this._idade
        }
        public set idade(value: number) {
            this._idade = value
        }
        public get tempoMinuto(): number {
            return this._tempoMinuto
        }
        public set tempoMinuto(value: number) {
            this._tempoMinuto = value
        }

        exibirAtleta():void{
            console.log(`nome ${this.nome}| idade ${this.idade}| tempoMinuto ${this.tempoMinuto}`)
        }

    }

    let listaAtleta:Atleta[] = []
    let op:number = 1
    while (op != 2) {
        op = Number(prompt("escolha uma opçao: 1-cadastrar atleta, 2-sair"))
        let nome:string = String(prompt("informe o nome:"))
        let idade:number = Number(prompt("informe a idade:"))
        let tempoMinuto:number = Number(prompt("informe o tempo por minuto:"))

        let novoAtleta:Atleta = new Atleta(nome,idade,tempoMinuto)
        listaAtleta.push(novoAtleta)

    }
    if (listaAtleta.length > 0) {

    let campeao = listaAtleta[0]

    for (let i = 1; i < listaAtleta.length; i++) {

        if (listaAtleta[i].tempoMinuto < campeao.tempoMinuto) {
            campeao = listaAtleta[i]
        }
    }
    console.log("CAMPEÃO DA PROVA")
    campeao.exibirAtleta
    }
}