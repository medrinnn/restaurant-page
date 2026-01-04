import "./style.css";
import Home from './components/home.js';
import About from './components/about.js';
import Contact from './components/contact.js';
import Menu from './components/menu.js';

const navs = document.querySelectorAll("nav");
const content = document.querySelector("#content");

navs.forEach(nav => {
  nav.addEventListener("click", event => {
    const tab = event.target.id;
    if (!tab) return;

    content.textContent = "";

    switch(tab) {
      case 'home':
        Home();
        break;
      case 'menu':
        Menu();
        break;
      case 'about':
        About();
        break;
      case 'contact':
        Contact();
        break;
    }
  });
});

// initial render
Home();
