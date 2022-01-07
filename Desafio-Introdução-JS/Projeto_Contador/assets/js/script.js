var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function decrement() {
    if (currentNumber > -10) {
        currentNumber = currentNumber - 1
        if(currentNumber<0){
            currentNumberWrapper.style.color = 'red'
        }else{
            currentNumberWrapper.style.color = 'black'
        }
        currentNumberWrapper.innerHTML = currentNumber
    }
}

function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1
        if(currentNumber<0){
            currentNumberWrapper.style.color = 'red'
        }else{
            currentNumberWrapper.style.color = 'black'
        }
        currentNumberWrapper.innerHTML = currentNumber
    }
}

var adicionar = document.querySelector('.adicionar')
var subtrair = document.querySelector('.subtrair')

adicionar.addEventListener("click", increment, false)
subtrair.addEventListener("click", decrement, false)