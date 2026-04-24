// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let a:number = Number(prompt("digite um numero"));
let b:number = Number(prompt("digite outro numero"));

let op:string = String(prompt("escolha qual operacao matematica vc quer usar: A - adicao, S - subtracao, D - divisao, M - multiplicacao")).toUpperCase()

switch (op){
    case "A":
        let resultado:number = a + b;
        console.log(resultado)
        break

    case "S":
        let produto:number = a - b;
        console.log(produto)
        break

    case "D":
        let resultancia:number = a / b;
        console.log(resultancia)
        break
        
    case "M":
        let conclusao:number = a * b;
        console.log(conclusao) 
        break

    default:
        console.log("operador invalido");      
}
