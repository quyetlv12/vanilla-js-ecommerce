// import data from '../data.js';

export default class Product {
    static async render() {
        // const { products } = data;
        const response = await fetch('http://localhost:5000/api/products');
        if (!response || !response.ok) {
            console.log('Error')
        }

        const products = await response.json();

        const product = products.find(product => product.id == 1);
        return `<h2>${product.name}</h2>`;
    }
}