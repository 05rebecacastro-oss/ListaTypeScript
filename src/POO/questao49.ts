// 49. Repetição Encapsulamento Arrays
// Ficha de Triagem e Vacinação de Clínica Veterinária
// Uma clínica veterinária precisa de um programa para controlar a fila de vacinação do dia. Crie a
// classe Pet com os atributos privados nome, especie, peso e vacinado (boolean com valor inicial
// false). Crie métodos de leitura e escrita para todos os atributos e o método aplicarVacina(), que
// altera o status de vacinado para true e exibe uma mensagem confirmando a imunização. O programa
// deve interagir com o recepcionista solicitando em um laço os dados de até 10 animais que chegaram
// para atendimento, armazenando-os em um array. Após o cadastro completo da fila, o sistema executa
// um novo laço simulando o atendimento do veterinário: para cada pet da lista, se o animal ainda não
// estiver vacinado, o programa chama o método aplicarVacina(). Ao término, exibe-se a quantidade
// total de pets imunizados na sessão.


export function POOqt49(): void {
    class Pet {
        private _nome: string
        private _especie: string
        private _peso: number
        private _vacinado: boolean

        constructor(nome: string,especie: string,peso: number) {
            this._nome = nome
            this._especie = especie
            this._peso = peso
            this._vacinado = false
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
        public get peso(): number {
            return this._peso
        }

        public set peso(value: number) {
            this._peso = value
        }
        public get vacinado(): boolean {
            return this._vacinado
        }

        public set vacinado(value: boolean) {
            this._vacinado = value
        }
        public aplicarVacina(): void {
            this._vacinado = true

            console.log(
                this._nome + " foi vacinado com sucesso!"
            )
        }
    }

    let pets: Pet[] = []
    let continuar = true

    while (continuar && pets.length < 10) {
        let nome:string = String(prompt("Digite o nome do pet:"))
        let especie:string = String(prompt("Digite a espécie do pet:"))
        let peso:number = Number(prompt("Digite o peso do pet:"))

        let pet = new Pet(nome,especie,peso)
        pets.push(pet)
        console.log("Pet cadastrado com sucesso!")

        if (pets.length === 10) {
            console.log("Limite de 10 pets atingido.")
            continuar = false
        } else {

            let resposta:string = String(prompt("Deseja cadastrar outro pet? (s/n)"))

            if (resposta.toLowerCase() !== "s") {
                continuar = false
            }
        }
    }

    let totalImunizados = 0

    for (let pet of pets) {
        if (pet.vacinado === false) {
            pet.aplicarVacina()
            totalImunizados++
        }
    }

    console.log("Atendimento finalizado!")
    console.log("Total de pets imunizados:",totalImunizados)
}