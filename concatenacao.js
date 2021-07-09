/*
Var
// Seção de Declarações das variáveis
   nome: caractere
   numero: real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva("Digite seu nome:")
   leia(nome)
   escreva("Digite o número:")
   leia(numero)
   escreval("O tal do ", nome, " digitou o nº: ", numero)

Fimalgoritmo
*/
var nome, numero;

nome = prompt("Digite seu nome:")
numero = prompt("Digite um número")

document.getElementById("paragrafo").innerText = "O tal do " + nome + " digitou o nº: " + numero
