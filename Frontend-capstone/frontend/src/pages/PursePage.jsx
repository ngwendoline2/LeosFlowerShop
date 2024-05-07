// src/pages/PursePage.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';

const PursePage = ({ purses, onAddToCart }) => {
    return (
        <div>
            <h1>Elegant Purses</h1>
            {purses.map(purse => (
                <ProductCard key={purse.id} product={purse} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default PursePage;
