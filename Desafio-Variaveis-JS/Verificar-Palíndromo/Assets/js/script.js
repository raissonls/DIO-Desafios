let botãoEnviar = document.querySelector('.botãoEnviar');

function verifica () {
    let texto = document.getElementById('txtin').value;

    if(texto.length == 0){
        window.alert(' [ERRO] DIGITE UM TEXTO');
    }else{
        let texto_sem_espaço = texto.replace(/ /g, '').toUpperCase();
        let array = texto_sem_espaço.split('');
        let array_invertido = array.slice(0).reverse();
        let texto_sem_espaço_invertido = array_invertido.toString().replace(/,/g, '').toUpperCase();
        let resultado = document.querySelector('.res');

        (texto_sem_espaço_invertido == texto_sem_espaço) ? resultado.innerHTML = `O texto <strong>${texto}</strong> é um Palíndromo` : resultado.innerHTML = `O texto <strong>${texto}</strong> não é um Palíndromo`;
    }
}

botãoEnviar.addEventListener("click", verifica, false);