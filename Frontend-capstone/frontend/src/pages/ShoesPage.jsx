// src/pages/ShoesPage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const ShoesPage = ({ shoes, onAddToCart }) => {
    return (
        <div>
            <h1>Stylish Shoes</h1>
            {shoes.map(shoe => (
                <ProductCard key={shoe.id} product={shoe} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default ShoesPage;
