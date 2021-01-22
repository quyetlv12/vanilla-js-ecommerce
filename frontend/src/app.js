import Home from './pages/Home.js';
import Product from './pages/Product.js';
import Error404Page from './pages/Error404Page.js';
import { parseRequestUrl } from './utils.js'

const $ = selector => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements
}

const routes = {
    '/': Home,
    '/product/:id': Product
}

const router = () => {
    const request = parseRequestUrl();

    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '');

    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Page;

    const main = $('#main-content');
    main.innerHTML = screen.render();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)