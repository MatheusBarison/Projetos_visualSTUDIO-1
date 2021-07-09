function acaoBotao(){
    var num01, num02, sairLoop;
    do{
        num01 = prompt("Digite o primeiro valor: ")
        num02 = prompt("Digite o segundo valor: ")
        document.getElementById("paragrafo").innerText = "O resultado é: " + (parseInt(num01) + parseInt(num02))     
        sairLoop = prompt("Deseja sair (S/N)? ")       
    }while(sairLoop == "N") or (sairLoop == "n")
}

//Essa estrutura garante que pelo menos uma vez o loop será executado