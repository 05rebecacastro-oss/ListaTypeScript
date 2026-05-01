//7. Sistema de Eficiência de Combustível
//Crie um programa que ajude um motorista a saber a autonomia do seu carro.

// Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
//o consumo médio (km/l).
// Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
//quilômetros o carro percorre com o tanque cheio.

function consumo():number{
    let distancia:number = Number(prompt("qual a distancia que vc percorre com seu carro?"));
    let combustivel:number = Number(prompt("quanto de combustivel vc gansta nessa distancia?"));
    let consumoMedio:number = distancia/combustivel
    return consumoMedio
}

function quilometros(consumoMedio:number):number{
    let capacidadeTanque:number = 45
    let carro:number = capacidadeTanque * consumoMedio;
    return carro
    
}

let media = consumo()
let capacidade = quilometros(media)

console.log("consumo medio:" + media + "Km/l")
console.log("capacidade do tanque cheio:" + capacidade + "Km")
