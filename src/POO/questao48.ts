// 48. Repetição Encapsulamento Arrays
// Sistema de Monitoramento e Ajuste de Ar-Condicionado de Laboratórios
// Para garantir o clima ideal nos laboratórios de informática do campus, crie um sistema de controle
// centralizado. Crie a classe ArCondicionado com os atributos privados sala, potenciaBTUs e
// temperaturaAtual. O setter de temperaturaAtual deve validar estritamente o intervalo permitido
// de operação (somente aceitar valores entre 16°C e 30°C, emitindo um aviso de erro para tentativas
// fora desta faixa). Crie o método exibirStatus() para mostrar os dados do aparelho. O programa
// deve interagir com o usuário em um laço de repetição solicitando o cadastro de vários aparelhos até
// que o operador decida parar. Em seguida, o sistema abre um menu permitindo que o técnico informe o
// nome da sala para buscar o aparelho no array e ajustar a temperatura do ambiente. Ao final, o
// programa percorre a lista e exibe o relatório final da temperatura de todos os laboratórios.

export function POOqt48(): void {
    class ArCondicionado {
        private _sala: string
        private _potencia: number
        private _temperaturaAtual: number

        constructor(sala: string,potencia: number,temperaturaAtual: number) {
            this._sala = sala
            this._potencia = potencia
            this._temperaturaAtual = temperaturaAtual
        }
        public get sala(): string {
            return this._sala
        }
        public set sala(value: string) {
            this._sala = value
        }
        public get potenciaBTUs(): number {
            return this._potencia
        }
        public set potenciaBTUs(value: number) {
            this._potencia = value
        }
        public get temperaturaAtual(): number {
            return this._temperaturaAtual
        }
        public set temperaturaAtual(value: number) {

            if (value >= 16 && value <= 30) {
                this._temperaturaAtual = value
            } else {
                console.log("Erro: a temperatura deve estar entre 16°C e 30°C.")
            }
        }
        public exibirStatus(): void {
            console.log("Sala:", this._sala)
            console.log("Potência:", this._potencia, "BTUs")
            console.log("Temperatura:", this._temperaturaAtual, "°C")
        }
    }
    let aparelhos: ArCondicionado[] = []
    let continuar = true

    while (continuar) {
        let sala:string = String(prompt("Digite o nome da sala:"))
        let potencia:number = Number(prompt("Digite a potência do aparelho em BTUs:"))
        let temperatura = Number(prompt("Digite a temperatura atual:"))

        let aparelho = new ArCondicionado(sala,potencia,temperatura)
        aparelhos.push(aparelho)
        console.log("Aparelho cadastrado com sucesso!")

        let resposta:string = String(prompt("Deseja cadastrar outro aparelho? (s/n)")).toLowerCase()
        if (resposta !== "s") {
            continuar = false
        }
    }
    let continuarMenu = true
    while (continuarMenu) {

        console.log("MENU")
        console.log("1 - Alterar temperatura")
        console.log("2 - Exibir relatório")
        console.log("3 - Sair")

        let opcao = Number(prompt("Escolha uma opção:"))

        if (opcao === 1) {

            let salaBusca = prompt("Digite o nome da sala:")
            let encontrada = false

            for (let aparelho of aparelhos) {
                if (aparelho.sala === salaBusca) {
                    encontrada = true

                    let novaTemperatura = Number(prompt("Digite a nova temperatura:"))
                    aparelho.temperaturaAtual = novaTemperatura
                    console.log("Temperatura atualizada!")
                }
            }

            if (encontrada) {
                console.log("Sala não encontrada.")
            }

        } else if (opcao === 2) {

            console.log("RELATÓRIO FINAL")

            for (let aparelho of aparelhos) {
                aparelho.exibirStatus()
            }

        } else if (opcao === 3) {
            continuarMenu = false
            console.log("Programa encerrado.")

        } else {

            console.log("Opção inválida.")
        }
    }
}
