function filtraPares(arr) {
    return arr.filter(callbackfn);
}

function callbackfn(item) {
    return (item %2 == 0);
}

function filtraImpares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return (item %2 !== 0);
}

const num = [1,2,3,4,5,6,7,8,9,10];

console.log(filtraPares(num));
console.log(filtraImpares(num));
console.log(num);