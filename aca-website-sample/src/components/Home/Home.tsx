import React from 'react';
import { Carousel } from 'react-bootstrap';
import acaGroupPhoto from '../../media/aca-chef-group-photo.jpg';
import acaDemo from '../../media/aca-demo.jpg';


const carouselSlideContent = [
  {
    id: "chef-group-photo",
    interval: 4000,
    image: {
      url: acaGroupPhoto,
      caption: "ACA Chefs standing in front of a table with ingredients"
    },
    text: {
      header: "ACA at ACF",
      body: "The ACA attended the 2025 ACF National Convetion in Las Vegas."
    }
  },
    {
    id: "chef-demo",
    interval: 4000,
    image: {
      url: acaDemo,
      caption: "Chefs Shirley Cheng, Martin Yan, and Jet Tila cooking in a wok onstage"
    },
    text: {
      header: "ACF Demo",
      body: "ACA Chefs demonstrated wok cooking in front of crowds."
    }
  },
]

export default function Home() {
  return (
      <Carousel indicators={false}>
        {carouselSlideContent.map((slideInfo) => {
          return (
            <Carousel.Item interval={slideInfo.interval}>
              <img src={slideInfo.image.url} alt={slideInfo.image.caption} className='d-block w-100' />
              <Carousel.Caption>
                <h3>{slideInfo.text.header}</h3>
                <p>{slideInfo.text.body}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })}
      </Carousel>
  )
}
