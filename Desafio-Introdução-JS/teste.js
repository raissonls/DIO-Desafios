//comentario de linha
/*comentario de texto*/

//criação de variaveis (boa pratica colocar nomes que têm sentido para as variaveis)
var preço = 2;
var quantidade = 5;
var desconto = 0.15;
const VALOR_ESTACIONAMENTO = 15;//Colocar o valor de constantes em MAIUSCULO é uma boa prática

var valor_compra =  (preço*quantidade)*desconto;
var valor_gasto = valor_compra + VALOR_ESTACIONAMENTO;

/*ESTUDO DE FUNÇÕES*/
function soma(a, b) {
    //return da o retorno da função para aonde ela foi chamada
    return a+b;
}

soma(3,9);//8
