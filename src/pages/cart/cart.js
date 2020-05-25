import React from 'react';
import './cart.css';
import Button from '../../components/button/button';
import CartItem from '../../components/cart-item/cart-item';

const Cart = () => {

    const cartItems = [
        { name: 'Star Wars I', img: process.env.PUBLIC_URL + '/starwars.jpg', price: '30$' },
        { name: 'Star Wars II', img: process.env.PUBLIC_URL + '/starwars.jpg', price: '10$' },
        { name: 'Star Wars III', img: process.env.PUBLIC_URL + '/starwars.jpg', price: '60$' },
        { name: 'Star Wars IV', img: process.env.PUBLIC_URL + '/starwars.jpg', price: '90$' },
    ]

    const getColor = (i) => `cart-item-${['primary', 'secondary', 'dark'][i % 3]}`

    return (
        <section className="cart-page-wrapper">
            <h1>Your cart</h1>
            
            <section>
                {
                    cartItems.map( (b, i) => (
                        <div key={i} className="cart-item-container">
                            <CartItem book={b} color={getColor(i)}></CartItem>
                        </div>
                    ))
                }
            </section>

            <footer className="cart-footer">
                <p className="cart-total">Total: 190$</p>
                <Button>Order</Button>
            </footer>
        </section>
    )
}


export default Cart;