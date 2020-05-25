import React from 'react';
import './product-type-item.css';
import Box from '../box/box';
import Button from '../button/button';

const ProductTypeItem = ({type, img, color}) => {

    const getClasses = () => `product-type-item ${color}`;

    return (
        <section className={getClasses()}>
            <h2>{type}</h2>
            <Box>
                <img src={img} alt="type img"></img>
            </Box>
            <div className="read-more">
                <Button className="read-more" secondary={color === 'product-item-dark' ? true : false}>More</Button>
            </div>
        </section>   
    )
}

export default ProductTypeItem;