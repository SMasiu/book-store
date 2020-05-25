import React from 'react';
import './nav.css';
import {Link} from 'react-router-dom';
import ShoppingCart from '../shopping-cart/shopping-cart';

const Nav = () => (
    <nav className="nav">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><a href="#contact-main">Contact</a></li>
            <li className="cart-wrapper">
                <Link to="/cart">
                    <ShoppingCart/>
                </Link>
            </li>
        </ul>
    </nav>
);

export default Nav;