function renderHome() {
    const content = document.querySelector(".content");

    const container = document.createElement("div");
    container.id = "home-container";

    const name = document.createElement("h1");
    name.textContent = "medrinnn Restaurant";
    
    const quote = document.createElement("p");
    quote.textContent = "The Best Goofy Restaurant In The World";

    const button = document.createElement('button');
    button.textContent = "Book Your Place Now";

    container.append(name, quote, button);
    content.append(container);
}

export default renderHome;