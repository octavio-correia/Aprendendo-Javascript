/* TIPOS DE FUNÇÕES
    Função: trecho de código que só é executado ao ser chamado / invocado.
    
        Função Void (vazia)
        Função com parâmetro(s)
        Função return
        Função Arrow / Arrow Function
        
*/

function mostraNome(nome) {
    console.log(`Meu nome é ${nome}`)
}

/* A função com parâmetro sempre vai esperar algo dentro dos parenteses quando for chamada */

mostraNome("Octávio")

function somar(num1, num2) {
    var resultado = num1 + num2
    console.log(`A soma de ${num1} e ${num2} é igual a ${resultado}`)
}

somar(5, 9)

/* As funções "return" devolvem um resultado para quem chamou a função */

function somar2(num1, num2) {
    var resultado = num1 + num2
    return console.log(`A soma de ${num1} e ${num2} é igual a ${resultado}`)
}

somar2(40,50)

/* Arrow functions podem ser feitas toda na mesma linha */

const multiplicacao = (n1, n2) => console.log(`A multiplicação de ${n1} e ${n2} é igual a ` + n1 * n2)

console.log(multiplicacao(3, 9))