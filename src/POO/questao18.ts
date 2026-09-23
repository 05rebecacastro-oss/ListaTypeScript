// 18. Abstração Herança Polimorfismo Repetição Encapsulamento
// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha
// salarial mensal de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem
// características fundamentais em comum: um nome, uma matrícula e um salário base. Por questões de
// segurança, esses três dados não podem ser acessados diretamente de fora da classe, exigindo métodos
// públicos específicos para sua leitura e modificação. Além disso, a classe base deve conter um método
// para calcular o salário, que por padrão retorna apenas o valor do salário base.

// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características da
// classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria é
// a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, &quot;DE&quot; para
// Dedicação Exclusiva); caso o regime seja &quot;DE&quot;, o professor recebe um acréscimo de 20% sobre o seu
// salário base no momento do cálculo salarial. A segunda categoria é a de Técnico Administrativo, que
// possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação de R$ 1.000,00,
// valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor,
// que possui como atributos privados o seu departamento e o valor de uma gratificação de função, que
// também deve ser incorporada ao salário base no cálculo de sua remuneração.
// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que
// interaja com o usuário. A cada iteração, o software deve perguntar qual tipo de funcionário se deseja
// cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja encerrar o programa.
// Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto
// correto e acionar o método de cálculo salarial específico de cada um de forma polimórfica. O
// programa deve utilizar variáveis acumuladoras dentro do laço para somar e acompanhar os custos
// parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser
// interrompido e o software exibirá um relatório final contendo o custo total gasto com os professores, o
// custo total com os técnicos administrativos, o custo total com os diretores e, por último, o custo total
// geral que a instituição terá com a folha de pagamento daquele mês.

abstract class Funcionarios{
    private _nome: string
    private _matricula: number
    private _salarioBase: number

    constructor(nome:string, matricula:number, salarioBase:number){
        this._nome = nome
        this._matricula = matricula
        this._salarioBase = salarioBase
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(value: string) {
        this._nome = value
    }
     public get matricula(): number {
        return this._matricula
    }
    public set matricula(value: number) {
        this._matricula = value
    }
     public get salarioBase(): number {
        return this._salarioBase
    }
    public set salarioBase(value: number) {
        this._salarioBase = value
    }
    exibirFuncionario():void{

    }
    calcularSalario(regime:string):void{

    }
}

class Professor extends Funcionarios{
    private _regimeTrabalho: string
   
    constructor(nome:string, matricula:number, salarioBase:number,regimeTrabalho:string){
        super(nome,matricula,salarioBase)
        this._regimeTrabalho = regimeTrabalho
    }
     public get regimeTrabalho(): string {
        return this._regimeTrabalho
    }
    public set regimeTrabalho(value: string) {
        this._regimeTrabalho = value
    }
    exibirFuncionario(){
        console.log(`nome ${this.nome}| matricula ${this.matricula}| salario base ${this.salarioBase}| regime de trabalho ${this._regimeTrabalho}`)
    }
    calcularSalario(regimeTrabalho:string): number {
        if (regimeTrabalho == "s"){
            this.salarioBase = this.salarioBase + this.salarioBase * (20/100)
        }else{
            this.salarioBase
        }
        return this.salarioBase
    }
}
class TecnicoAdm extends Funcionarios{
    private _auxilioAlimentacao:number = 1000

    constructor(nome:string, matricula:number, salarioBase:number,auxilioAlimentacao:number){
        super(nome,matricula,salarioBase)
        this._auxilioAlimentacao = auxilioAlimentacao
    }
    public get auxilioAlimentacao(): number {
        return this._auxilioAlimentacao
    }
    public set auxilioAlimentacao(value: number) {
        this._auxilioAlimentacao = value
    }
    exibirFuncionario():void{
        console.log(`nome ${this.nome}| matricula ${this.matricula}| salario base ${this.salarioBase}| auxilio Alimentacao ${this.auxilioAlimentacao}`)
    }
    calcularSalario(salarioBase:number,auxilioAlimentacao:number):number{
        let calculo = salarioBase + auxilioAlimentacao
        return calculo
    }
}
class Diretor extends Funcionarios{
    private _departamento:string
    private _gratificacao:number

    constructor(nome:string, matricula:number, salarioBase:number,departamento:string, gratificacao:number){
        super(nome,matricula,salarioBase)
        this._departamento = departamento
        this._gratificacao = gratificacao
    }
    public get departamento(): string {
        return this._departamento
    }
    public set departamento(value: string) {
        this._departamento = value
    }
    public get gratificacao(): number {
        return this._gratificacao
    }
    public set gratificacao(value: number) {
        this._gratificacao = value
    }
    exibirFuncionario():void{
        console.log(`nome ${this.nome}| matricula ${this.matricula}| salario base ${this.salarioBase}|departamento ${this.departamento}| gratificacao ${this._gratificacao}`)
    }
    calcularSalario(salarioBase:number,gratificacao:number):number{
        let calcular = salarioBase + gratificacao
        return calcular
    }
}
let op:number = 0
while(op != 4){
    op = Number(prompt("qual opcao voce quer calcular o salario: 1-professor, 2- tecnico administrativo, 3- diretor, 4- sair"))
    if (op == 1){
        let nome:string = String(prompt("qual o seu nome?"))
        let matricula:number = Number(prompt("qual é sua matricula?"))
        let salarioBase:number = Number(prompt("qual seu salario base?"))
        let regimeTrabalho:string = String(prompt("voce se dedicou exclusivamente no seu trabalho? (s/n)")).toLowerCase()

        let novoProfessor:Professor = new Professor(nome,matricula,salarioBase,regimeTrabalho)
        novoProfessor.calcularSalario(regimeTrabalho)
    }else if (op == 2){
        let nome:string = String(prompt("qual o seu nome?"))
        let matricula:number = Number(prompt("qual é sua matricula?"))
        let salarioBase:number = Number(prompt("qual seu salario base?"))
        let auxilioAlimentacao:number = Number(prompt("quanto é o seu auxilio alimentacao"))

        let novoTecnico:TecnicoAdm = new TecnicoAdm(nome,matricula,salarioBase,auxilioAlimentacao)
        novoTecnico.calcularSalario(salarioBase,auxilioAlimentacao)
    }else if (op == 3){
        let nome:string = String(prompt("qual o seu nome?"))
        let matricula:number = Number(prompt("qual é sua matricula?"))
        let salarioBase:number = Number(prompt("qual seu salario base?"))
        let departamento:string = String(prompt("qual o departamento que voce trabalha?"))
        let gratificacao:number = Number(prompt("quanto foi a gratificacao recebida?"))

        let novoDiretor:Diretor = new Diretor(nome,matricula,salarioBase,departamento,gratificacao)
        novoDiretor.calcularSalario(salarioBase,gratificacao)
    }
}
