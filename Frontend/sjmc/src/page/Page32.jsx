import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../asset/Our gallery/aryabhatta on space day/image (1).webp';
import Image2 from '../asset/Our gallery/aryabhatta on space day/image (2).webp';
import Image3 from '../asset/Our gallery/aryabhatta on space day/image (3).webp';
import Image4 from '../asset/Our gallery/aryabhatta on space day/image (4).webp';
import Image5 from '../asset/Our gallery/aryabhatta on space day/image (5).webp';
import Image6 from '../asset/Our gallery/aryabhatta on space day/image (6).webp';
import Image7 from '../asset/Our gallery/aryabhatta on space day/image (7).webp';

const Page32 = () => {
  return (
    <div style={{ margin: '50px' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-md-9 p-4 mx-auto text-center"
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              marginTop: '100px',
            }}
          >
            <h4>Great astronomer Aryabhatta remembered on National space day 2024</h4>
            <br />

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              style={{ padding: '20px' }}
            >
              {[Image1, Image2, Image3, Image4, Image5, Image6, Image7].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid rounded border p-3"
                    style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }}
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

export default Page32;
