/*
function somaNumeros(arr) {
    return arr.reduce(function (prev,current) {
        console.log(prev)
        console.log(current)
        return prev+current;
    })
    
}

const num = [1,10, 3, 4]

console.log(somaNumeros(num))
*/

const lista = [
    {
        name: 'Queijo',
        preço: 20
    },
    {
        name: 'sabão',
        preço: 5
    },
    {
        name: 'pasta de dente',
        preço: 6
    },
    {
        name: 'alho',
        preço: 10
    }
]

function calculaSaldo(lista, saldo) {
    lista.reduce(function (prev,current, index) {
        console.log('rodada ' + Number(index+1) );
        console.log({prev});
        console.log({current});
        return prev - current.preço;
    },saldo)
}

const SALDO_CONTA = 100;

console.log(calculaSaldo(lista, SALDO_CONTA));

