import React from 'react';
import "./ProductCard.css";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/slices/cartSlice';



export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.cart.cartItems.find(item => item.id === product.id)?.quantity || 0);




    const quantityClass = product.quantity === 1 ? 'yellow' : product.quantity === 0 ? 'red' : '';
    const quantityText = product.quantity === 0 ? 'Out of Stock' : product.quantity === 1 ? `${product.quantity} Left In Stock` : "available";

    return (
        <div className="product__item">
            <div className="product__banner">
                <a className="product__images">
                    <img src={product.image} alt="" className="product__img default" />
                    <img src={product.image} alt="" className="product__img hover" />
                </a>

                <div className="product__badge light-green">{product.category}</div>
            </div>
            <div className="product__content">
                <span className="product__category">{product.category}</span>
                <a>
                    <h3 className="product__title">{product.code}</h3>
                </a>
                <div className="product__price flex">
                    <span className="new__price">{product.price} L.E</span>
                </div>
                <div className={`product__price flex ${quantityClass}`}>
                    <span className={`new__price  ${quantityClass}`}>{quantityText}</span>
                </div>

                <div className="product__btns flex">
                    <button className="product__btn" onClick={() => dispatch(addItemToCart(product))}>Add</button>

                    {counter > 0 && (
                        <>
                            <div className="product__counter">{counter}</div>
                            <button className="product__btn__rmv" onClick={() => dispatch(removeItemFromCart(product))}>Remove</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
