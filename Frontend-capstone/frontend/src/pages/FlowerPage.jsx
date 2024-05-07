// src/pages/FlowerPage.jsx, dedicated for flowers
import React from 'react';
import ProductCard from '../components/ProductCard';

const FlowerPage = ({ flowers, onAddToCart }) => {
    return (
        <div>
            <h1>Explore Our Flowers</h1>
            {flowers.map(flower => (
                <ProductCard key={flower.id} product={flower} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default FlowerPage;
