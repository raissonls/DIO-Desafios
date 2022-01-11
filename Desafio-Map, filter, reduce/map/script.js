const banana = {
    value: 4
}

const pera = {
    value: 9
}

function mapComThis(array, thisarg) {
    return array.map(function (item) {
        return item * this.value;
    }, thisarg)
}

function mapSemThis(array) {
    return array.map(function (item) {
        return item * 2;
    })
}

const num = [4,3]
console.log('resultado para banana ' + mapComThis(num,banana));
console.log('resultado para pera ' + mapComThis(num,pera));
console.log('resultado para pera, sem o this ' + mapSemThis(num));
