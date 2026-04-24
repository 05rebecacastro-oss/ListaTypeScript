// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera

let dia:number = Number(prompt("digite um dia do mes de 1 a 31"));
let meses:number = Number(prompt("digite um mes do ano de 1 a 12"));
let ano:number = Number(prompt("digite o ano que vc esta"));

if (meses >= 1 && meses <= 3){
    console.log("VERÃO!");
}else if (meses >= 4 && meses <= 6){
    console.log("OUTONO!");
}else if (meses >= 7 && meses <= 9){
    console.log("INVERNO!");
}else if (meses >= 10 && meses <= 12){
    console.log("PRIMAVERA!");
}else{
    console.log("não identificado");
}