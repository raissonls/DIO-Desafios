const ts = '1642723496';
const publickey = '3ced073cb4dc8fa72dcfa6bf3b7dd975';
const hash = '142b8d5935b2d0582c3add1737ec1502';
const botão = document.getElementById('btn');
const divHerois = document.getElementById('Herois');

function createDivHero(imgsrc, name, divToAppend) {
    const divPai = document.createElement('div');
    const divFilho = document.createElement('div');
    const NomaHeroi = document.createElement('text');
    const ImgHeroi = document.createElement('img');

    ImgHeroi.src = imgsrc;
    NomaHeroi.textContent = name;

    divFilho.appendChild(ImgHeroi);
    divFilho.appendChild(NomaHeroi);
    divPai.appendChild(divFilho);
    divPai.classList.add('personagem');
    divToAppend.appendChild(divPai);
};

const procurar = async () => {
    let textnamevalue = document.getElementById('textname').value;
    if (!textnamevalue) {
        alert('inserir um nome');
    } else {
        try {
            const BASE_URL = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publickey}&hash=${hash}&nameStartsWith=${textnamevalue}`;
            fetch(BASE_URL).then((response) => {
                return response.json();
            }).then((jsonParsed) => {
                if (jsonParsed.data.count === 0) {
                    divHerois.innerHTML = '<strong>NÃO ACHAMOS NENHUM HEROI COM ESSE NOME</strong>';
                } else {
                    divHerois.innerHTML ='';
                    jsonParsed.data.results.forEach(Element => {
                        const pathImg = Element.thumbnail.path + '.' + Element.thumbnail.extension
                        const nameHero = Element.name
        
                        createDivHero(pathImg, nameHero, divHerois);
                    })
                }
            });
            
        } catch (error) {
            console.log(error.message);
        }

    }
};

botão.addEventListener('click', procurar);
document.addEventListener('keyup', function(e) {
    if (e.keyCode == 13) {
        procurar();
    }
}, false);
