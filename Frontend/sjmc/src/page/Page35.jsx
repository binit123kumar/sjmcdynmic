import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image1 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (1).webp';
import Image2 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (2).webp';
import Image3 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (3).webp';
import Image4 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (4).webp';
import Image5 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (5).webp';
import Image6 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (6).webp';
import Image7 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (7).webp';
import Image8 from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/Image (8).webp';

const Page35 = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

  return (
    <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
      <div className="row justify-content-center">
        <div
          className="col-md-9 text-center p-4"
          style={{
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
          }}
        >
          <h4 className="mb-4">Indian TV Broadcasting and Hindi</h4>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid rounded border p-3"
                  style={{
                    maxHeight: '450px',
                    objectFit: 'cover',
                    margin: 'auto',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Page35;
