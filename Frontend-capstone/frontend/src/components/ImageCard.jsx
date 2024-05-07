import React from 'react';

const ImageCard = ({ imageUrl, title }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={imageUrl} alt={title} style={{ width: '100%', height: 'auto' }} />
            <h3>{title}</h3>
        </div>
    );
};

export default ImageCard;
