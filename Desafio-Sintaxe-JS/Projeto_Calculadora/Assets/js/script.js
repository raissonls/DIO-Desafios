//oque sõa vetores ou arrays
console.log('MANIPULANDO ARRAYS')
//MANIPULANDO ARRAYS - forEach()

let notas = [8.5, 9, 3, 4, 4.6, 7]

notas.forEach(function(item, index){
    switch (index){
        case 1:
            index='Marcos';
            break;
        case 2:
            index='Julia';
            break;
        case 3:
            index='Paulo';
            break;
        case 4:
            index='Pietro';
            break;
        case 5:
            index='Maria';
            break;
        case 6:
            index='Jordana';
            break;
    }

    if(item>7){
        console.log(`Nota do aluno ${index} foi acima da média`)
    }else{
        console.log(`Nota do aluno ${index} foi abaixo da média`)
    }
})

//MANIPULANDO ARRAYS - push()
notas.push(10)
console.log(notas)

//MANIPULANDO ARRAYS - pop()
notas.pop()
console.log(notas)

//MANIPULANDO ARRAYS - shift()
notas.shift()
console.log(notas)

//MANIPULANDO ARRAYS - unshift()
notas.unshift('primeiro item')
console.log(notas)

//MANIPULANDO ARRAYS - indexOf()
console.log(notas.indexOf(4))

//MANIPULANDO ARRAYS - splice()
let notas_novas = notas.splice(0 , 3)
console.log(notas_novas)

//MANIPULANDO ARRAYS - slice()
let notas_novas2 = notas.slice(0 , 3)
console.log(notas_novas2)

//MANIPULANDO OBJETOS
console.log('\n\n\n\n\n\n\n')
console.log('MANIPULANDO OBJETOS')

let objeto = {
    string: 'string',
    number: 1,
    Boleana: true,
    array: ['array1'], 
    objetoInterno: {string:'string do Objeto Interno'}
}

console.log(objeto.objetoInterno)