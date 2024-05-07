// To view and manage items in the shopping cart
import React from 'react';
import CartItem from '../components/CartItem';  // Assume a component that renders cart items

const CartPage = ({ cartItems, onUpdateCartQty, onRemoveFromCart }) => {
    return (
        <div>
            <h1>Your Shopping Cart</h1>
            <div>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
                ))}
            </div>
        </div>
    );
};

export default CartPage;
