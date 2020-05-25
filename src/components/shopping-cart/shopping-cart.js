import React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import { ShoppingCart as Cart } from '@material-ui/icons';
import useCartCount from '../../hooks/useCartCount';
import './shopping-cart.css';

const ShoppingCart = () => {

    const count = useCartCount();

    return (
        <IconButton aria-label="cart">
            <Badge badgeContent={count} color="secondary" className="cart-badge">
                <Cart className="cart-svg"/>
            </Badge>
        </IconButton>
    )

}

export default ShoppingCart;