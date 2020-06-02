import React from "react";
import "./product.css";
import Box from "../../components/box/box";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";

const Product = () => {
  return (
    <div className="product-wrapper">
      <section className="product-item">
        <div className="hp-product-wrapper-i">
          <Box>
            <div className="hp-product-i">
              <div className="hp-img-wrapper-i">
                <figure className="hp-product-img-i">
                  <img
                    src={process.env.PUBLIC_URL + "/book-mockup.webp"}
                    alt="book"
                  />
                </figure>
              </div>
              <section className="hp-get-book-i">
                <h3>The book</h3>
                <p className="hp-price-i">19.99$</p>
                <div className="hp-get-btn-i">
                  <Link to="/product">
                    <Button>Buy</Button>
                  </Link>
                </div>
              </section>
            </div>
          </Box>
        </div>
      </section>
      <article className="desc-wrapper">
        <section className="tile-text-i">
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            excepturi aut error nemo eveniet expedita dolorum, quod culpa
            explicabo rem quasi vitae corporis ut debitis, tempora distinctio.
            Explicabo corrupti doloribus, cupiditate exercitationem voluptatum
            quod quod culpa explicabo rem quasi vitae corporis ut debitis,
            tempora distinctio. Explicabo corrupti doloribus, cupiditate
            exercitationem voluptatum quod
          </p>
        </section>
        <section className="tile-bg-1-i tile-i">
          <div className="tile-img-wrapper-i">
            <Box>
              <div className="tile-image-i">
                <img
                  src={process.env.PUBLIC_URL + "/read.jpeg"}
                  alt="tile-img"
                />
              </div>
            </Box>
          </div>
          <div className="tile-1-btn-wrapper-i">
            <Button>Read More</Button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Product;
