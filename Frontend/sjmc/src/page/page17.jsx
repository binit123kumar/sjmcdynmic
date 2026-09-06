import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image1 from '../asset/Disaster education/disastered (1).webp'
import Image2 from '../asset/Disaster education/disastered (2).webp'
import Image3 from '../asset/Disaster education/disastered (3).webp'
import Image4 from '../asset/Disaster education/disastered (4).webp'
import Home from '../components/HomeButton'

function Page17() {
  return (
    <div style={{ margin: '50px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            marginTop: '100px'
          }} className="col-md-9 p-4 mx-auto text-center">

            <h2 className="mb-4">Disaster Management Seminar for Media Persons</h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              loop={true}
            >
              {[Image1, Image2, Image3, Image4].map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="img-fluid rounded border p-3"
                    style={{ maxHeight: '400px', maxWidth: '100%', objectFit: 'cover' }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page17;
