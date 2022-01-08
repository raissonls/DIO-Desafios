var botão = document.querySelector('.botão');

function comparar() {
    let n1Wrap = document.getElementById('num1').value;
    let n2Wrap = document.getElementById('num2').value;

    if((n1Wrap.length == 0)||(n2Wrap.length == 0)){
        window.alert('[ ERRO ] - DIGITE DOIS NUMEROS VALIDOS');
    }else{
        let n1 = Number(n1Wrap);
        let n2 = Number(n2Wrap);
        let igual = n1==n2;
        let maior_10 = (n1+n2)>10;
        let maior_20 = (n1+n2)>20;

        preenchimento(igual, maior_10, maior_20, n1, n2);
    }
}

function preenchimento (igual, maior_10, maior_20, n1, n2){
    let resultado = document.querySelector('.res');

    (igual)?(resultado.innerHTML = `Os numeros ${n1} e ${n2} são iguais. `):(resultado.innerHTML = `Os numeros ${n1} e ${n2} não são iguais. `);

    (maior_10)?(resultado.innerHTML += `Sua soma é ${n1+n2}, que é maior que 10 `):(resultado.innerHTML += `Sua soma é ${n1+n2}, que é menor que 10 `);

    (maior_20)?(resultado.innerHTML += `e é maior que 20.`):(resultado.innerHTML += `e é menor que 20.`);
    
}

botão.addEventListener("click", comparar, false)