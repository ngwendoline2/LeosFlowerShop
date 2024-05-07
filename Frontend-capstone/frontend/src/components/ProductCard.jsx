// src/components/ProductCard.jsx
import React from 'react';
import Button from './Button';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Button text="Add to Cart" onClick={() => onAddToCart(product)} />
            </div>
        </div>
    );
};

export default ProductCard;
