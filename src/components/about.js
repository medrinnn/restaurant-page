function renderAbout() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.setAttribute('id', 'about-container'); 

  const header = document.createElement('h1');
  header.textContent = "medrinnn Restaurant";

  const paragraph1 = document.createElement('p');
  paragraph1.textContent = `Welcome to medrinnn Restaurant, a cozy neighborhood spot where classic bistro fare meets modern comfort. Our philosophy is simple: we believe in creating delicious, approachable food that feels both familiar and special. We've crafted our menu as a "greatest hits" collection, taking timeless classics and adding our own unique touch to make each dish a signature experience.`;

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = `Whether you're stopping by for a hearty main course, a decadent dessert, or a fresh, vibrant salad, our goal is to provide a warm and inviting atmosphere. We're more than just a place to eat; we're a corner of the community where people can gather, relax, and savor a meal made with care. We look forward to welcoming you and sharing our passion for great food and good company.`;

  const button = document.createElement('button');
  button.textContent = 'Dine with us';
  
  container.append(header, paragraph1, paragraph2, button);
  content.append(container);
}

export default renderAbout;