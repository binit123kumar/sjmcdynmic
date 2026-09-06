import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import images
import Image1 from '../asset/Our gallery/wetlands_Workshop/wetland (1).webp';
import Image2 from '../asset/Our gallery/wetlands_Workshop/wetland (2).webp';
import Image3 from '../asset/Our gallery/wetlands_Workshop/wetland (3).webp';
import Image4 from '../asset/Our gallery/wetlands_Workshop/wetland (4).webp';
import Image5 from '../asset/Our gallery/wetlands_Workshop/wetland (5).webp';
import Image6 from '../asset/Our gallery/wetlands_Workshop/wetland (6).webp';
import Image7 from '../asset/Our gallery/wetlands_Workshop/wetland (7).webp';
import Image8 from '../asset/Our gallery/wetlands_Workshop/wetland (8).webp';
import pdf from '../asset/Our gallery/wetlands_Workshop/1.pdf';

export default function Page28() {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

  return (
    <div style={{ margin: '50px' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div 
            style={{ 
              backgroundColor: '#f0f0f0', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', 
              marginTop: '100px',
              padding: '20px'
            }} 
            className="col-md-9 mx-auto text-center"
          >
            <a href={pdf} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="col-md-12 text-center">
                <h4>Wetlands for Life: Training workshop organised for media students</h4>
                <div className="col-md-12 text-center" style={{display:'flex', justifyContent:'center'}}>
                  <div style={{width:'40%', height:'30px', backgroundColor:'orange', display:'flex',justifyContent:'center'}}>
                    <div style={{width:'90%', height:'30px', backgroundColor:'black'}}>
                      <h5 style={{color:'white'}}>
                        DOWNLOAD ATTACHMENT <span style={{ marginLeft: '3px', fontWeight:'bolder' }}>&#x2B07;</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </a>

            {/* Swiper Slider */}
            <div style={{ padding: '20px 0' }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div style={{ padding: '10px' }}>
                      <img 
                        src={image} 
                        alt={`Wetland Workshop ${index + 1}`} 
                        className="img-fluid rounded border"
                        style={{ 
                          height: '250px', 
                          width: '100%', 
                          objectFit: 'cover' 
                        }} 
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}