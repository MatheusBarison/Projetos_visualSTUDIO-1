//var num01, num02, operacao, resultado, sair; //Variávies fora da function são globais

function acaoBotao(params){
    var num01, num02, operacao, resultado, aux //Variávies dentro da funtion são locais
    //sair = False
    alert("Informe a operação desejada\n")
    alert("(1)SOMA\n")
    alert("(2)SUBTRAÇÃO\n")
    alert("(3)MULTIPLICAÇÃO\n")
    alert("(4)DIVISÃO\n")
    alert("(5)SAIR")

    aux = prompt("...")
    operacao = parseInt(aux)

    //while (sair == False){
        if (operacao == 1){
            num01 = prompt("Informe o 1° número:") 
            num02 = prompt("Informe o 2° número:")
            resultado = (parseInt(num01) + parseInt(num02))        
        }else if (operacao == 2){
            num01 = prompt("Informe o 1° número:") 
            num02 = prompt("Informe o 2° número:") 
            resultado = (parseInt(num01) - parseInt(num02))        
        }else if (operacao == 3){
            num01 = prompt("Informe o 1° fator:") 
            num02 = prompt("Informe o 2° fator:")
            resultado = (parseInt(num01) * parseInt(num02))        
        }else if (operacao == 4){
            num01 = prompt("Informe o numerador:") 
            num02 = prompt("Informe o denominador:")
            resultado = (parseInt(num01) / parseInt(num02))        
        }//else
            //sair = True

        document.getElementById("paragrafo").innerText = "O resultado é: " + resultado
 }




        


