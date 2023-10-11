import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../src/assets/CyberTEA Banner.png";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} className="carousel">
        <div>
          <img src={banner} alt="Slide 1" className="carousel-image" />
        </div>
        <div>
          <img src={banner} alt="Slide 2" className="carousel-image" />
        </div>
        <div>
          <img src={banner} alt="Slide 3" className="carousel-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
