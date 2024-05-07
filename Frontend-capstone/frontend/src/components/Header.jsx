// src/components/Header.jsx
import React from 'react';
import Button from './Button';

const Header = ({ onLogin, onLogout, isAuthenticated }) => {
    return (
        <header>
            <h1>Leo's Flower Shop</h1>
            {isAuthenticated ? (
                <Button text="Logout" onClick={onLogout} />
            ) : (
                <Button text="Login" onClick={onLogin} />
            )}
        </header>
    );
};

export default Header;
