import React, { Component } from "react";
import PhoneImage from "../assets/img/product-header2.png";
import CarouselBackground from "../assets/img/product-header-bg.jpg";
import "./carousel.scss";

class Carousel extends Component {
  render() {
    return (
      <section
        style={{
          backgroundImage: `url(${CarouselBackground})`,
        }}
        className="carousel"
      >
        <div className="container">
          <div className="content">
            <h1>CyberPhone</h1>
            <span>Best smartphone of 2022</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              laboriosam optio laudantium debitis voluptatum, eius ea nulla
              dolores praesentium? Qui.
            </p>
            <button className="btn-info">
              <i class="fa fa-info-circle"></i> More info
            </button>
            <button className="btn-shop">
              <i class="fa fa-shopping-cart"></i> Shop
            </button>
          </div>
          <div className="thumbnail">
            <img src={PhoneImage} />
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
