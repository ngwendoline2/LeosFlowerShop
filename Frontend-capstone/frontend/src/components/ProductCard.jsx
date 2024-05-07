// src/components/ProductCard.jsx
import React from 'react';
import Button from './Button';

const ProductCard = ({ product, onAddToCart, title, imageUrl }) => {
    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <img src={`${process.env.PUBLIC_URL}/images/products/flowers/${imageUrl}`} alt={title} />
            <h3>{title}</h3>
            <div className="product-info">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Button text="Add to Cart" onClick={() => onAddToCart(product)} />
            </div>
        </div>
    );
};

export default ProductCard;
