function renderHome() {
    const content = document.querySelector(".centent");

    const container = document.createElement("div");
    container.setAttribute("id", "home-container");

    const name = document.createElement("h1");
    name.textContent = "medrinnn Restaurant";
    
    const quote = document.createElement("p");
    quote.textContent = "The Best Goofy Restaurant In The World";

    const button = document.createElement('button');
    button.textContent = "Book Your Place Now";

    container.append(header, caption, button);
    content.append(container);
}

export default renderHome;