import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../asset/Our gallery/aryabhatta times/image (1).webp';
import Image2 from '../asset/Our gallery/aryabhatta times/image (2).webp';
import Image3 from '../asset/Our gallery/aryabhatta times/image (3).webp';
import Image4 from '../asset/Our gallery/aryabhatta times/image (4).webp';
import Image5 from '../asset/Our gallery/aryabhatta times/image (5).webp';
import Image6 from '../asset/Our gallery/aryabhatta times/image (6).webp';
import Image7 from '../asset/Our gallery/aryabhatta times/image (7).webp';
import Image8 from '../asset/Our gallery/aryabhatta times/image (8).webp';

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const Page33 = () => {
  return (
    <div style={{ padding: '40px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div
          style={{
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            padding: '30px',
            borderRadius: '12px',
          }}
        >
          <h2 className="text-center mb-4">Aryabhatta Times Launching 2024</h2>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{
                    width: '100%',
                    height: '350px',
                    overflow: 'hidden',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Page33;
