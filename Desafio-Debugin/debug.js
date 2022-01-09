function arrayVerificaTamanho (vetor, tamanho){
    switch(true){
        case (!vetor)||(!tamanho):
            throw new ReferenceError('Passse os parâmetros para a função, primeiro parâmetro deve ser um objeto e o segunda um numero.');
            break;
        case (typeof vetor !== 'object'):
            throw new TypeError('O primeiro parâmetro deve ser um objeto.');
            break;
        case (typeof tamanho !== 'number'):
            throw new TypeError('O segundo parâmetro deve ser um numero.');
            break;
        case (vetor.length !== tamanho):
            throw new RangeError('O objeto não tem o tamanho desejado na função.');
            break;
        default:
            return  vetor;
    }
}

function tryCatchFinally (vetor, tamanho){
    try {
        console.log(arrayVerificaTamanho (vetor, tamanho));
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log(error.name + ": " + error.message + '\n');
        } else if(error instanceof TypeError){
            console.log(error.name + ": " + error.message + '\n');
        } else if(error instanceof RangeError){
            console.log(error.name + ": " + error.message + '\n');
        }else{
            console.log('tipo de erro não esperado '+ error)
        }
    }

}

tryCatchFinally([1,2],2);
