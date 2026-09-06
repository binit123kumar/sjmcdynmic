import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import Image1 from '../asset/Student activities/students (1).webp';
import Image2 from '../asset/Student activities/students (2).webp';
import Image3 from '../asset/Student activities/students (3).webp';
import Image4 from '../asset/Student activities/students (4).webp';
import Image5 from '../asset/Student activities/students (5).webp';

import Home from '../components/HomeButton';

const images = [
  { id: 1, src: Image1, alt: 'Image 1' },
  { id: 2, src: Image2, alt: 'Image 2' },
  { id: 3, src: Image3, alt: 'Image 3' },
  { id: 4, src: Image4, alt: 'Image 4' },
  { id: 5, src: Image5, alt: 'Image 5' },
];

const Page22 = () => {
  return (
    <div style={{ margin: '50px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              marginTop: '100px',
              padding: '30px',
            }}
            className="col-md-9 mx-auto text-center"
          >
            <h2 className="mb-4">Student Activities</h2>

            <Swiper
              navigation={true}
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              style={{ paddingBottom: '30px' }}
            >
              {images.map((image) => (
                <SwiperSlide key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid rounded border"
                    style={{ maxHeight: '500px', objectFit: 'contain' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page22;
