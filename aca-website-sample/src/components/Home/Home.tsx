import React from 'react';
import { Carousel } from 'react-bootstrap';
import acaSplash from '../../media/aca-splash-image.png';

export default function Home() {
  return (
    <div className='content hero-splash-page'>
      {/* <img className='image'
      src={acaSplashImage} alt='ACA members standing on stage' /> 
      <h4 className='hero-text'>ACF Chefs are bringing</h4>
      <h1 className='hero-text hero-text--large'>Fine Dining to America</h1> */}

      <Carousel>
        <Carousel.Item>
          <img src={acaSplash} alt="Example Logo" />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Heheh look at this website, it's like kinda legit. Only a little though.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
