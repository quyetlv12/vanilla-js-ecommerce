import Homepage from './pages/Home.js';
import ProductDetailPage from './pages/Product.js';
import Error404Page from './pages/Error404Page.js';
import { parseRequestUrl } from './utils.js'

const homePage = new Homepage();
const productDetailPage =  new ProductDetailPage();

const $ = selector => {
    const elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements
}

const routes = {
    '/': homePage,
    '/product/:id': productDetailPage
}

const router = () => {
    const request = parseRequestUrl();

    const parseUrl = (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '');

    const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;

    const main = $('#main-content');
    main.innerHTML = page.render();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)