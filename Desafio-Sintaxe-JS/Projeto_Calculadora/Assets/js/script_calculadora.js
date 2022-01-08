function soma(n1, n2){
    return (n1+n2);    
}
function subtração(n1, n2){
    return (n1-n2);  
}
function multiplicação(n1, n2){
    return (n1*n2);  
}
function divisão_real(n1, n2){
    return (n1/n2);  
}
function divisão_inteira(n1, n2){
    return (n1%n2);  
}
function potencia(n1, n2){
    return (n1**n2);  
}

function calculadora(){
    let operação = prompt('Escolha a sua Operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potencia (**)')
    while((operação !=6)&&(operação !=5)&&(operação !=4)&&(operação !=3)&&(operação !=2)&&(operação !=1)){
        window.alert('Operação selecionada é Invalida, por favor inserir o numero das operações')
        operação = prompt('Escolha a sua Operação:\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão Real (/) \n 5 - Divisão Inteira (%) \n 6 - Potencia (**)')
    }

    let numero1 = Number(prompt('Insira o Primeiro Valor:'))
    while(!numero1){
        window.alert('Digite um valor de numero valido')
        numero1 = Number(prompt('Insira o Primeiro Valor:'))
    }
    let numero2 = Number(prompt('Insira o Segundo Valor:'))
    while(!numero2){
        window.alert('Digite um valor de numero valido')
        numero2 = Number(prompt('Insira o Segundo Valor:'))
    }




    switch(true){
        case operação == 1:
            window.alert(`Resultado da operação ${numero1} + ${numero2} = ${soma(numero1, numero2)}`)
        break;
        case operação == 2:
            window.alert(`Resultado da operação ${numero1} - ${numero2} = ${subtração(numero1, numero2)}`)
        break;
        case operação == 3:
            window.alert(`Resultado da operação ${numero1} * ${numero2} = ${multiplicação(numero1, numero2)}`)
        break;
        case operação == 4:
            window.alert(`Resultado da operação ${numero1} / ${numero2} = ${divisão_real(numero1, numero2)}`)
        break;
        case operação == 5:
            window.alert(`Resultado da operação ${numero1} % ${numero2} = ${divisão_inteira(numero1, numero2)}`)
        break;
        case operação == 6:
            window.alert(`Resultado da operação ${numero1} ** ${numero2} = ${potencia(numero1, numero2)}`)
        break;
    }
    nova_operação()
}

function nova_operação(){
    let opção = prompt('Deseja realizar uma nova operação?\n 1 - Sim \n 2 - Não')
    while((opção!=1)&&(opção!=2)){
        window.alert('Digite um valor valido')
        opção = prompt('Deseja realizar uma nova operação?\n 1 - Sim \n 2 - Não')
    }
    if(opção == 1){
        calculadora()
    }else{
        window.alert('Finalizando Caluladora')
    }
}

calculadora()
