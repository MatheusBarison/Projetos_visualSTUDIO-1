function acaoBotao() {
    var num01, num02, resultado, operacao;
    num01 = prompt("Digite o primeiro valor:")
    operacao = prompt("Informe a operação (Ex: +, -, *, /): ")
    num02 = prompt("Digite o segundo valor:")

    switch(operacao){
        case "+":
            resultado = (parseInt(num01) + parseInt(num02))
            break;
        case "-":
            resultado = (parseInt(num01) - parseInt(num02))
            break;
        case "*":
            resultado = (parseInt(num01) * parseInt(num02))
            break;
        case "/":
            resultado = (parseInt(num01) / parseInt(num02))
            break;
    }

    document.getElementById("paragrafo").innerText = "O resultado é: " + resultado
}