import React from 'react';
import ProductTypeItem from '../../components/product-type-item/product-type-item';
import './product-types.css';

const ProductTypes = () => {

    const books = [
        { type: 'Action and Adventure', img: '/starwars.jpg'},
        { type: 'Anthology', img: '/starwars.jpg' },
        { type: 'Classic', img: '/starwars.jpg' },
        { type: 'Comic and Graphic Novel', img: '/starwars.jpg' },
        { type: 'Crime and Detective', img: '/starwars.jpg' },
        { type: 'Drama', img: '/starwars.jpg' },
        { type: 'Fable', img: '/starwars.jpg' },
        { type: 'Fairy Tale', img: '/starwars.jpg' },
        { type: 'Fan-Fiction', img: '/starwars.jpg' },
        { type: 'Fantasy', img: '/starwars.jpg' },
        { type: 'Historical Fiction', img: '/starwars.jpg' },
        { type: 'Horror', img: '/starwars.jpg' },
        { type: 'Humor', img: '/starwars.jpg' },
        { type: 'Legend', img: '/starwars.jpg' },
        { type: 'Magical Realism', img: '/starwars.jpg' },
        { type: 'Mystery', img: '/starwars.jpg' },
        { type: 'Mythology', img: '/starwars.jpg' },
        { type: 'Realistic Fiction', img: '/starwars.jpg' },
        { type: 'Romance', img: '/starwars.jpg' },
        { type: 'Satire', img: '/starwars.jpg' },
        { type: 'Science Fiction (Sci-Fi)', img: '/starwars.jpg' },
        { type: 'Short Story', img: '/starwars.jpg' },
        { type: 'Thriller', img: '/starwars.jpg' }
    ]

    const getColor = (i) => {
        return `product-item-${['primary', 'secondary', 'dark'][i % 3]}`
    }

    return (
        <div className="book-types-container">
            <h1>Categories</h1>
            <section className="book-types-wrapper">
                

                {books.map((b, i) => (
                    <div key={i} className="book-type-wrapper"> 
                        <ProductTypeItem type={b.type} img={process.env.PUBLIC_URL + b.img} color={getColor(i)}></ProductTypeItem>
                    </div>
                ))}
            
            </section>
        </div>
    )
}

export default ProductTypes;

