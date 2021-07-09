/*
Var
// Seção de Declarações das variáveis 
   contador, numero, fatorial: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite o número para calcular seu fatorial: ")
   leia(numero)
   contador := 1
   fatorial := 1
   
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
        contador := contador + 1
   fimpara
   
   escreva("O fatorial de ", numero, " é: ", fatorial)
Fimalgoritmo
*/
function acaoBotao(){
    var numero, fatorial;
    numero = prompt("Digite o número para calcular seu fatorial: ")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador      
    }
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + "é: " + fatorial
}
