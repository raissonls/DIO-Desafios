const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBotão = document.getElementById('change-cat');
const catImagem = document.getElementById('cat');



const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
};

const loadImg = async () => {
    catImagem.src = await getCats();
}

catBotão.addEventListener('click', loadImg);

loadImg();