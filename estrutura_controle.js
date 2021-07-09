/*
 escreval("Digite seu nome:")
   leia(nome)
   escreval("Digite a nota da P1:")
   leia(nota1)
   escreval("Digite a nota da P2:")
   leia(nota2)
   media <- (nota1 + nota2)/2
   se media >= 5 entao
      escreval("Aprovado! ", nome)
   senao
      escreval("Reprovado ", nome)
   fimse*/

 var nome, nota1, nota2, media;
 nome = prompt("Escreva seu nome:");
 nota1 = prompt("Escreva a nota da P1:");
 nota2 = prompt("Escreva a nota da P2:");
 media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5)
    alert("Aprovado, " + nome)
else
    alert("Reprovado, " + nome)

 



