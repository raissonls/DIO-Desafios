function trocadorPares(input){
    if(!input) return -1;
    if(!input.length) return-1;

    for(let i =0; i < input.length; i++){
    if((input[i] % 2) == 0){
            input[i] = 0;
        }
    }
    return input
}

let array = []

console.log(trocadorPares(array))