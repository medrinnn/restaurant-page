import "./style.css"

const navs = document.querySelectorAll('nav');
const content = document.querySelector('.content');

navs.forEach(addEventListener("click", event => {
    const nav = event.target.id;

    if (!nav) return;

    content.textContent = "";

    switch(tab) {
        case 'home':
            Home();
            break;
    } // TODO : Add contact + about + menu
}))

// Renders home page at initial render
document.addEventListener('DOMContentLoaded', () => Home());