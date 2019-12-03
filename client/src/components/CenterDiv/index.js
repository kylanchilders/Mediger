import React from "react";
import { Carousel } from 'react-bootstrap';
import "./style.css";

const MainDiv = () => {
    return(
<Carousel autoPlay={true} fade="true" interval={1200} className="mainCarousel">
  <Carousel.Item className="ci" >
    <img
      className="d-block w-100 h-100"
      src={require('../../images/carouselImage2.png')}
      alt="First slide"
    />
    <Carousel.Caption className="carouselCaption">
    <h1>Efficiency, Accuracy & Convenience</h1> 
      <h4>We're changing the world with technology</h4>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="ci">
    <img
      className="d-block w-100"
      src={require('../../images/carouselImage14.jpeg')}
      alt="Third slide"
    />

    <Carousel.Caption className="carouselCaption">
    <h1>Taking care of those who take care of us</h1>
      <h4>Get yourself Registered Now!</h4>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="ci">
    <img
      className="d-block w-100"
      src={require('../../images/carouselImage15.png')}
      alt="Third slide"
    />

    <Carousel.Caption className="carouselCaption">
    <h1>Technology makes the world a New Place</h1>
      <h4>Easy & Useful</h4>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
};

//exportes our Nav component
export default MainDiv;
