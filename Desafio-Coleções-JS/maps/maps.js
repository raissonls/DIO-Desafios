function getAdmins(mapa) {
    let admins = [];
    for([chave, valor] of mapa){
        if(valor == 'Admin'){
            admins.push(chave)
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Camila', 'Admin');
usuarios.set('Breno', 'Admin');
usuarios.set('Altair', 'Admin');
usuarios.set('Raisson', 'User');
usuarios.set('Kabib', 'Admin');
usuarios.set('Wagner', 'Admin');
usuarios.set('Gio', 'User');
usuarios.set('Nicolas', 'Admin');
usuarios.set('Lorena', 'User');

console.log(usuarios.see())


//console.log(getAdmins(usuarios));