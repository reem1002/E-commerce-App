import React from 'react';
import { useSelector } from 'react-redux';
import './CartPage.css'; // CSS file for styling

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <div className="cart-page">
            <h2 className="cart-title">REWAQGALLERY</h2>
            {cartItems.length === 0 ? (
                <div id="cartItem" className="empty-cart">
                    Your Cart is empty
                </div>
            ) : (
                <ul className="cart-items">
                    {cartItems.map((item) => (
                        <li key={item.id} className="cart-item">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-quantity">Quantity: {item.quantity}</p>
                            <p className="item-price">Price: ${item.price}</p>
                        </li>
                    ))}
                    <div id="total" className="cart-total">
                        Total: ${Math.round(cartItems.reduce((total, item) => total + item.price * item.quantity, 2))}

                    </div>
                </ul>
            )}
        </div>
    );
};

export default CartPage;
