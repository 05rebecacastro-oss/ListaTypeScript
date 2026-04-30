// 4. Calculadora de Média do ENEM

// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.

// Crie uma função chamada {calcular_media(notas)} que receba um array de notas como argumento.
// A função deve:

// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

let media 
let mediaArredondada

function calcular_media(notas:any){
    notas = [9, 6.5, 8.4, 5.8, 10, 7.2, 8.9];
    media = notas.filter((m:any) => {

return m  * 100 / 100});
console.log("a media é" + media);

mediaArredondada= notas.filter((A:any) => {

return A.toFixed(2)});
console.log("a media arredondada é de " + mediaArredondada)
}