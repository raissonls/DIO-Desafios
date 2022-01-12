function toggleDarkMode(){
    toggleClass();
    toggleText();
}
function toggleClass(){
    botão.classList.toggle(DARK_MODE_CLASS);
    h1.classList.toggle(DARK_MODE_CLASS);
    body.classList.toggle(DARK_MODE_CLASS);
    footer.classList.toggle(DARK_MODE_CLASS);
}
function toggleText(){
    const text_h1_darkMode = 'Dark Mode On';
    const text_button_darkMode = 'Ligth Mode';
    const text_h1_ligthMode = 'Light Mode On';
    const text_button_ligthMode = 'Dark Mode';


    if (body.className.includes(DARK_MODE_CLASS)) {
        h1.innerHTML = text_h1_darkMode;
        botão.innerHTML = text_button_darkMode;
    }else{
        h1.innerHTML = text_h1_ligthMode;
        botão.innerHTML = text_button_ligthMode;
    }
}

const DARK_MODE_CLASS = 'dark-mode'
const botão = document.getElementById('mode-selector');
const h1 = document.getElementById('pag-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

botão.addEventListener('click',toggleDarkMode);