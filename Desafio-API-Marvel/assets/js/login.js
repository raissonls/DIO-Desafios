let btnE = document.getElementById('btn-enviar');
let res = document.querySelector('#res');
const admin = {
    nomeUser: 'ADM',
    loginUser: 'admin',
    senhaUser: 'admin',
}
let usuarios = [admin];

function verifica_login(login,senha, u){
    let achou =false;
    for(let i=0;i<usuarios.length;i++){
        if (u[i].loginUser == login){
            if(u[i].senhaUser == senha){
                achou =true;
            }
        }
    }
    return achou;
}

if(window.location.href.includes('index')){
    
    btnE.addEventListener('click', function(){ 
        const loginInserido = document.getElementById('login').value;
        const senhaInserido = document.getElementById('senha').value;
        if((loginInserido.length == 0) || (senhaInserido.length == 0)){
            window.alert('[ERRO] Prencher todos os campos')
        }else{
            res.classList.toggle('load');
        }
    
    });
    
    res.addEventListener('webkitAnimationEnd', function(){
        const loginInserido = document.getElementById('login').value;
        const senhaInserido = document.getElementById('senha').value;
        let achou = verifica_login(loginInserido,senhaInserido,usuarios);
        
        if(achou){
            window,location.href = 'pesquisa.html'
        }else{
            res.classList.toggle('load');
            window.alert('Login e Senha informados não cadastrados');
        }
    });
}


//dados cadastrais
let btnC = document.getElementById('btn-cadastrar');

function users (){
    const nome = document.getElementById('nome-cad').value;
    const login = document.getElementById('login-cad').value;
    const senha = document.getElementById('senha-cad').value;

    if((nome.length == 0) || (login.length == 0) || (senha.length == 0)){
        window.alert('[ERRO] Prencher todos os campos');
    }else{
        let user = {
            nomeUser: nome,
            loginUser: login,
            senhaUser: senha,
        }
        usuarios.push(user);
        console.log(usuarios);
        window,location.href = 'index.html'
    }
}

if(window.location.href.includes('cadastro')){
    btnC.addEventListener('click',users);
}