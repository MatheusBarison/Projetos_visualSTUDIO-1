var nome, nota1, nota2, media, passou;
passou = false;
nome = prompt("Escreva seu nome:");
nota1 = prompt("Escreva a nota da P1:");
nota2 = prompt("Escreva a nota da P2:");
media = (parseInt(nota1) + parseInt(nota2))/2

if (media >= 5)
    passou = true;
if (passou && (media >= 7 && media <= 9))
    alert("Aprovado com B! " + nome)  
else
    alert("Reprovado, " + nome)

    // codigo feio!!!!