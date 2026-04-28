//10. Calculadora de IMC com Classificação.
//Um personal trainer precisa de uma ferramenta para avaliar seus alunos.
// Função calcular_imc(peso, altura): Retorna o resultado da fórmula IMC = peso/altura².
// Função classificar_imc(valor_imc): Recebe o IMC e retorna uma string:
//o Abaixo de 18.5: &quot;Abaixo do peso&quot;
//o Entre 18.5 e 24.9: &quot;Peso Normal&quot;
//o 25 ou mais: &quot;Sobrepeso&quot;
// Função exibir_laudo(nome, classificacao): Imprime: &quot;Paciente: [nome] - Status:
//[classificacao]&quot;.
// Uso: Peça o nome, peso e altura, processe os dados e exiba o laudo.

let nome:string = String(prompt("qual seu nome?"))
let peso:number = Number(prompt("qual o seu peso?"))
let altura:number = Number(prompt("qual sua altura?"))
let valor_IMC:number


function calcular_imc(peso:number, altura:number){
    return valor_IMC = peso/(altura*altura)
}
function classificar_imc(valor_imc:number){
    if (valor_IMC < 18.5){
        console.log("abaixo do peso")
    }else if (valor_IMC > 18.5 && valor_IMC < 24.9){
        console.log("peso normal")
    }else if (valor_IMC > 25){
        console.log("sobrepeso")
    }
}
function exibir_laudo(nome:string,valor_IMC:number){
    console.log("paciente:" + nome + "<br>" + "status:" + valor_IMC)
}
let chamar =  calcular_imc(peso, altura)
let trazer = classificar_imc(chamar)
exibir_laudo(nome, valor_IMC)
