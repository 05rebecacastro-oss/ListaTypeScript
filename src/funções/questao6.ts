//6. Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
//descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
//3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
//que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita)

//O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
//pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

//Desconto do IR:
//1. Salário Bruto <= R$ 2428,80 (inclusive) - isento
//2. Salário Bruto > R$ 2.428,81 < R$ 2.826,65 (inclusive) - desconto de 7,5%
//3. Salário Bruto > R$ 2.826,66 < R$ 3.751,05 (inclusive) - desconto de 15%
//4. Salário Bruto > R$ 3.751,06 < R$ 4.664,68 (inclusive) - desconto de 22,5%
//5. Salário Bruto > R$4664,68 - desconto de 27,5%.
//Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
//é R$15,00 e a quantidade de horas é 220.

//Exemplo: Salário Bruto: (15 * 220)       : R$ 3300,00
//(-) IR (15%)                      : R$  495,00  
//(-) INSS (10%)                  : R$  330,00
//(-) SINDICATO (3%)                  : R$   99,00
//(-) V. ALIMENTAÇÃO (8%)              : R$  264,00
//(-) V. TRANSPORTE (6%)               : R$  198,00
//FGTS (11%)                       : R$  121,00
//Total de descontos               : R$  1386,00
//Salário Líquido                 : R$  1914,00

function pagamento(){
    let horas:number = Number(prompt("quantas horas vc trabalha no dia?"));
    let quantidade:number = Number(prompt("e quantas horas vc trabalha no mês"));
    let salario_bruto:number = (horas * quantidade);

    let IR:number = 0

    if (salario_bruto <= 2428.80){
        IR = 0
    }else if (salario_bruto > 2428.81 && salario_bruto < 2826.65){
        IR = salario_bruto * 0.075
    }else if (salario_bruto > 2826.66 && salario_bruto < 3751.05){
        IR = salario_bruto * 0.15
    }else if (salario_bruto > 3751.06 && salario_bruto < 4664.68){
        IR = salario_bruto * 0.255
    }else if (salario_bruto > 4664.68){
        IR = salario_bruto * 0.275
    }

    let INSS:number = salario_bruto * 0.10;
    let Sindicato:number = salario_bruto * 0.03
    let alimentacao:number = salario_bruto * 0.08
    let transporte:number = salario_bruto * 0.06
    let FGTS:number = salario_bruto * 0.11

    let descontoTotal:number = IR + INSS + Sindicato + alimentacao +transporte;
    let salario_liquido:number = salario_bruto - descontoTotal;

    console.log(`Salário Bruto: (${horas} * ${quantidade}) : R$ ${salario_bruto.toFixed(2)}`);
    console.log(`(-) IR : R$ ${IR.toFixed(2)}`);
    console.log(`(-) INSS (10%) : R$ ${INSS.toFixed(2)}`);
    console.log(`(-) SINDICATO (3%) : R$ ${Sindicato.toFixed(2)}`);
    console.log(`(-) V. ALIMENTAÇÃO (8%) : R$ ${alimentacao.toFixed(2)}`);
    console.log(`(-) V. TRANSPORTE (6%) : R$ ${transporte.toFixed(2)}`);
    console.log(`FGTS (11%) : R$ ${FGTS.toFixed(2)}`);
    console.log(`Total de descontos : R$ ${descontoTotal.toFixed(2)}`);
    console.log(`Salário Líquido : R$ ${salario_liquido.toFixed(2)}`);
}
pagamento();
