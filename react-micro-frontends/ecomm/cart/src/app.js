import faker from 'faker';

const mount = (element) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart.`;

    element.innerHTML = cartText;    
}

// Context/Situation #1
// When we are running the file in development in isoloation/standalone
// We are using our local index.html file which deinitely has an element of dev-product
const isInDev = process.env.NODE_ENV === 'development';
const element = document.querySelector('#dev-cart');
if (isInDev && element) {
    mount(element)
}

// Context/Situation #2
// We are running this file in development or production in container
// No gaurentee that element with id of dev-products exist.
// Do not try to immediately render the app.
export { mount };