import React from 'react';
import './cart-item.css';
import Box from '../box/box';
import Button from '../button/button';

const CartItem = ({book: { name, price, img }, color}) => {

    const getClasses = () => `cart-item-wrapper ${color}`;

    const secondary = color === 'cart-item-dark' ? true : false;

    return (
        <section className={getClasses()}>
            <Box>
                <img src={img} alt="book"></img>
            </Box>
            <div>
                <h2 className="book-title">{name}</h2>
                <p>Price: {price}</p>
            </div>
            <div className="cart-item-buttons">
                <Button secondary={secondary}>Remove</Button>
                <Button secondary={secondary}>View book</Button>
            </div>
        </section>
    )
}

export default CartItem;