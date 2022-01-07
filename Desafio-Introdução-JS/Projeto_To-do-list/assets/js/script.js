var botão = document.querySelector('.adicionar')
var task = document.getElementsByTagName('input type="checkbox"')

function inserir() {
    var tarefa = document.getElementById('textIn').value
    var lista = document.querySelector('.res')

    if(tarefa.length == 0){
        alert('Insira um valor válido')
    }else{
        lista.innerHTML += `<div><input type="checkbox" class="${tarefa}" name="${tarefa}">
        <label for="${tarefa}">${tarefa}</label></div>`
    }
}

botão.addEventListener("click", inserir, false)
