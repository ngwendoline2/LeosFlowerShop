// src/pages/HomePage.jsx, the main landing page of my website
import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = ({ products, onAddToCart }) => {
    return (
        <div>
            <h1>Welcome to Leo's Flower Shop</h1>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
