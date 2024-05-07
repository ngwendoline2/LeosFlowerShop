// productService.js
export function getProduct(productId) {
    return { id: productId, name: "rose flower", price: 20.99 };
}

// app.js
import { getProduct } from './productService';

const product = getProduct(1);
console.log(product);