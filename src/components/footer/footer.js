import React from "react";
import "./footer.css";
import List from "../list/list";
import Button from "../button/button";

const Footer = () => (
  <footer className="main-footer" id="contact-main">
    <section className="footer-content">
      <h2>Conact</h2>

      <div className="footer-sect-wrapper">
        <article className="contact-info">
          <div>
            <h3>Adress</h3>
            <List items={["some street 10/25"]} />
          </div>
          <div>
            <h3>Open hours</h3>
            <List
              items={["Mon - Fir: 8:00am - 3pm", "Sat - Sun: 8:00am - 11am"]}
            />
          </div>
          <div>
            <h3>Contact us</h3>
            <List
              items={["email: makeastory@gmail.com", "phone: 503 294 492"]}
            />
          </div>
          <div>
            <h3>FAQ</h3>
            <List
              items={[
                "What's the cost of delivery",
                "How to buy a book",
                "Whre i can find the sales",
              ]}
            />
          </div>
        </article>
        <form className="footer-form">
          <label htmlFor="name-control" className="input-label">
            Name
          </label>
          <input placeholder="Name" id="name-control" />
          <label htmlFor="email-control" className="input-label">
            Email
          </label>
          <input placeholder="Email" id="email-control" />
          <label htmlFor="message-control" className="input-label">
            Message
          </label>
          <textarea placeholder="Message" rows="5" id="message-control" />
          <div className="footer-submit">
            <Button secondary>Send</Button>
          </div>
        </form>
      </div>
      <div className="footer-bootom">
        <p>&copy; Make a story 2020</p>
      </div>
    </section>
  </footer>
);

export default Footer;
