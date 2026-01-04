import "./style.css";
import Home from "./components/home.js";

const navs = document.querySelectorAll("nav");
const content = document.querySelector(".content");

navs.forEach(nav => {
    nav.addEventListener("click", event => {
        const tab = event.target.id;

        if (!tab) return;

        content.textContent = "";

        switch (tab) {
            case "home":
                Home();
                break;
            // TODO: Add contact + about + menu
        }
    });
});

// Renders home page at initial render
document.addEventListener("DOMContentLoaded", Home);
