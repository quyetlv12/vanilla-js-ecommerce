import data from '../data.js';

export default class ProductDetailPage {
    render() {
        const { products } = data;
        console.log(data);
        // const response = await fetch('http://localhost:5000/api/products');
        // if (!response || !response.ok) {
        //     console.log('Error')
        // }

        // const products = await response.json();



        const product = products.find(product => product.id == 1);
        console.log(product);
        return `<h2>${product.name}</h2>`;
    }
}