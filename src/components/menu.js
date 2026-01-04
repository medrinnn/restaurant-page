import Sisig from '../img/sisig.jpg';
import Gambas from '../img/gambas-al-ajillo.jpg';
import Bistek from '../img/bistek-tagalog.jpg';
import CrispyPata from '../img/crispy-pata.jpg';
import ChickenInasal from '../img/chicken-inasal.jpg';
import BeefPares from '../img/beef-pares.jpg';
import UbeCheesecake from '../img/ube-cheesecake.jpg';
import LecheFlan from '../img/creamy-leche-flan.jpg';

const menu = [
  {
    name: 'Sisig Bites',
    caption: 'A crispy, bite-sized take on the classic Filipino sizzling pork dish. We finely chop tender pork face and belly, season it with calamansi and chilies, and serve it in a crunchy, edible cup. A perfect start to your meal.',
    price: '₱350',
    url: Sisig,
  },
  {
    name: 'Gambas al Ajillo',
    caption: "Transport your taste buds to the sun-drenched coast of Spain. Plump, succulent shrimp are lovingly sizzled in a cast-iron skillet, bathing in a fragrant, golden olive oil that we've infused with a generous amount of finely sliced garlic.flavors and brightens the entire dish.",
    price: '₱480',
    url: Gambas,
  },
  {
    name: 'Bistek Tagalog',
    caption: "Our elevated version of the Filipino beef steak. Thin slices of beef sirloin are marinated and braised in a savory-sweet sauce of soy sauce and calamansi, then topped with sautéed onion rings. It's a comforting classic that melts in your mouth.",
    price: '₱580',
    url: Bistek,
  },
  {
    name: 'Crispy Pata',
    caption: 'A Filipino feast staple. A whole pork knuckle is deep-fried to a golden crisp while the meat remains tender and juicy. Served with our signature tangy soy-vinegar dipping sauce and a side of pickled papaya relish (atchara) to cut through the richness.',
    price: '₱850',
    url: CrispyPata,
  },
  {
    name: 'Chicken Inasal',
    caption: 'A beloved grilled chicken dish from the Visayas region. Our chicken is marinated in a blend of calamansi, lemongrass, and annatto oil, then grilled to perfection for a smoky and slightly sweet flavor. Served with garlic rice and a small bowl of chicken oil.',
    price: '₱490',
    url: ChickenInasal,
  },
  {
    name: 'Beef Pares',
    caption: 'A hearty and flavorful beef stew. Tender cubes of beef are slow-cooked in a rich, star anise-scented broth. Served with a piping hot bowl of garlic rice and a side of clear soup, it’s a soul-warming dish.',
    price: '₱520',
    url: BeefPares,
  },
  {
    name: 'Ube Cheesecake',
    caption: 'A modern twist on a Filipino favorite. A velvety, creamy cheesecake infused with the sweet and nutty flavor of ube (purple yam) on a crisp graham cracker crust. Topped with a sprinkle of toasted coconut.',
    price: '₱280',
    url: UbeCheesecake,
  },
  {
    name: 'Leche Flan Torte',
    caption: 'This dessert is a party in itself. It\'s a moist and decadent chocolate cake topped with a generous layer of our homemade, silky-smooth leche flan. The perfect combination of rich, sweet, and creamy.',
    price: '₱320',
    url: LecheFlan,
  },
];

function renderMenu() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.setAttribute('id', 'menu-container');
  content.append(container); 
  
  const header = document.createElement('h1');
  header.textContent = "Menu";

  const grid = document.createElement('div');
  grid.setAttribute('id', 'menu-grid');
  container.append(header, grid);

  menu.forEach(food => {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = food.url;

    const name = document.createElement('p');
    name.textContent = food.name;

    const caption = document.createElement('p');
    caption.textContent = food.caption;

    const price = document.createElement('p');
    price.textContent = food.price;

    card.append(image, name, caption, price);
    grid.append(card);
  });
}

export default renderMenu;