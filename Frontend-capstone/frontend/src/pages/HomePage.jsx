import React from 'react';
import ImageCard from '../components/ImageCard';

const HomePage = () => {
    const images = [
        { title: 'Beautiful Tulips', imageUrl: 'https://source.unsplash.com/featured/?tulips' },
        { title: 'Stylish Sneakers', imageUrl: 'https://source.unsplash.com/featured/?sneakers' },
        { title: 'Elegant Jewelry', imageUrl: 'https://source.unsplash.com/featured/?jewelry' },
        { title: 'Fashionable Purses', imageUrl: 'https://source.unsplash.com/featured/?purse' },
    ];

    return (
        <div>
            {images.map((img, index) => (
                <ImageCard key={index} imageUrl={img.imageUrl} title={img.title} />
            ))}
        </div>
    );
};

export default HomePage;
