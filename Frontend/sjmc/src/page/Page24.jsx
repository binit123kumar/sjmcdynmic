import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image1 from '../asset/page_8_1.webp';
import Image2 from '../asset/page_8_2.webp';
import Image3 from '../asset/page_8_3.webp';
import Image4 from '../asset/page_8_4.webp';
import Image5 from '../asset/page_8_5.webp';
import Image6 from '../asset/page_8_6.webp';
import Home from '../components/HomeButton';

function Page24() {
  return (
    <div style={{ margin: '30px auto', maxWidth: '1000px' }}>
      <Home />
      <div
        style={{
          backgroundColor: '#f8f9fa',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          borderRadius: '15px',
          padding: '25px',
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontSize: '34px',
            color: '#0056b3',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          Some Moments
        </h2>

        <Carousel fade interval={3000} pause="hover">
          {[Image1, Image2, Image3, Image4, Image5, Image6].map((img, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={img}
                alt={`Slide ${index + 1}`}
                style={{
                  maxHeight: '500px',
                  objectFit: 'cover',
                  borderRadius: '15px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Page24;
