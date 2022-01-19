const BASE_URL_PILOTOS = 'https://swapi.dev/api/people/';
const BASE_URL_NAVES = 'https://swapi.dev/api/starships/';
const BASE_URL_PLANETAS = 'https://swapi.dev/api/planets/';

const btn_sinc = document.querySelector('.sinc');
const btn_ctrl = document.querySelector('.ctrl');

let Planetas_json=null;
let Naves_json=null;
let Pilotos_json=null;

const sinc_planetas = async (next) =>{
    try {
        const data = await fetch(BASE_URL_PLANETAS+next);
        const json = await data.json();
        return json
    } catch (error) {
        console.log(error.message);
    }
};
const sinc_naves = async () =>{
    try {
        let next = -1;
        let json = null;
        do {
            if (next == -1) {
                const data = await fetch(BASE_URL_NAVES);
                json = await data.json();
                next=0;
            }else{
                const data = await fetch(json.Next);
                json = await data.json();
            }
        } while (json.Next !== null);

        return json
    } catch (error) {
        console.log(error.message);
    }
};
const sinc_pilotos = async (next) =>{
    try {
        const data = await fetch(BASE_URL_PILOTOS+next);
        const json = await data.json();
        return json
    } catch (error) {
        console.log(error.message);
    }
};

const sincronizar = async () =>{
    Planetas_json = await sinc_planetas(Planetas_json.Next);
    Naves_json = await sinc_naves(Naves_json.Next);
    Pilotos_json = await sinc_pilotos(Pilotos_json.Next);
};


btn_ctrl.addEventListener('click', controle);
btn_sinc.addEventListener('click', sincronizar);