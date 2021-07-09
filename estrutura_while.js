function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Digite a qntd de vezes a ser verificado a idade: ")
    contador = 0
    while(contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt(nome + ", informe sua idade: ")
        if (idade >= 18)
            document.getElementById("paragrafo").innerText = nome + ", você é maior de idade"
        else
            document.getElementById("paragrafo").innerText = nome + ", você é menor de idade"
        contador++
    }    
}

// Apertar ctrl e clicar na função --> chama uma tela q explica a função