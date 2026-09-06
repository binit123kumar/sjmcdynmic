import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../asset/Our gallery/space_day/space_day (1).webp';
import Image2 from '../asset/Our gallery/space_day/space_day (2).webp';
import Image3 from '../asset/Our gallery/space_day/space_day (3).webp';
import Image4 from '../asset/Our gallery/space_day/space_day (4).webp';
import Image5 from '../asset/Our gallery/space_day/space_day (5).webp';
import Image6 from '../asset/Our gallery/space_day/space_day (6).webp';
import Image7 from '../asset/Our gallery/space_day/space_day (7).webp';
import Pdf from '../asset/News/PR (August 8, 2024).pdf';

const Page30 = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];

  return (
    <div style={{ margin: '50px' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              marginTop: '100px',
            }}
            className="col-md-9 p-4 mx-auto text-center"
          >
            <a href={Pdf} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="col-md-12 text-center">
                <h4>Speech and Quiz Competition on National Space Day 2024</h4>
                <div
                  className="col-md-12 text-center"
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <div
                    style={{
                      width: '40%',
                      height: '30px',
                      backgroundColor: 'orange',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '90%',
                        height: '30px',
                        backgroundColor: 'black',
                      }}
                    >
                      <h5 style={{ color: 'white' }}>
                        DOWNLOAD ATTACHMENT{' '}
                        <span style={{ marginLeft: '3px', fontWeight: 'bolder' }}>&#x2B07;</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Swiper Slider Start */}
            <div style={{ marginTop: '40px' }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                spaceBetween={30}
                slidesPerView={1}
              >
                {images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`space_day_${index + 1}`}
                      className="img-fluid rounded border p-3"
                      style={{ width: '100%', maxHeight: '550px', objectFit: 'contain' }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Swiper Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page30;
