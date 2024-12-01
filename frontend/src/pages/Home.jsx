import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/c1.png"
import ban2 from "../images/c2.png"
import ban3 from "../images/c3_1.png"


const Home = () => {
  return (
   

    <Carousel>
       
      <Carousel.Item>
      <img src={ban1} width="100%" height="450"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={ban2} width="100%" height="450"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
      <img src={ban3} width="100%" height="450"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
