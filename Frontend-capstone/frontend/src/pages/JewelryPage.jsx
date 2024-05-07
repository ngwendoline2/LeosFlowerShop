// src/pages/JewelryPage.jsx, display jewelry items.
import React from 'react';
import ProductCard from '../components/ProductCard';

const JewelryPage = ({ jewelry, onAddToCart }) => {
    return (
        <div>
            <h1>Our Exclusive Jewelry Collection</h1>
            {jewelry.map(item => (
                <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
            ))}
        </div>
    );
};

export default JewelryPage;
