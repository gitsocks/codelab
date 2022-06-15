import { mount as mountProducts } from 'products';
import { mount as mountCart } from 'cart';

console.log('Container running ...')

mountProducts(document.querySelector('#container-products'))
mountCart(document.querySelector('#container-cart'))