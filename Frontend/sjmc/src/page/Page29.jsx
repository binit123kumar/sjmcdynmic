import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Image1 from '../asset/Our gallery/Orientation/orientation (1).webp';
import Image2 from '../asset/Our gallery/Orientation/orientation (2).webp';
import Image3 from '../asset/Our gallery/Orientation/orientation (3).webp';
import Image4 from '../asset/Our gallery/Orientation/orientation (4).webp';
import Image5 from '../asset/Our gallery/Orientation/orientation (5).webp';
import Image6 from '../asset/Our gallery/Orientation/orientation (6).webp';
import Image7 from '../asset/Our gallery/Orientation/orientation (7).webp';
import Image8 from '../asset/Our gallery/Orientation/orientation (8).webp';
import pdf from '../asset/News/orientation_sjmc.pdf';

const Page29 = () => {
  const images = [
    { src: Image1, alt: "Orientation at SJMC 1" },
    { src: Image2, alt: "Orientation at SJMC 2" },
    { src: Image3, alt: "Orientation at SJMC 3" },
    { src: Image4, alt: "Orientation at SJMC 4" },
    { src: Image5, alt: "Orientation at SJMC 5" },
    { src: Image6, alt: "Orientation at SJMC 6" },
    { src: Image7, alt: "Orientation at SJMC 7" },
    { src: Image8, alt: "Orientation at SJMC 8" }
  ];

  return (
    <div style={{ margin: '50px' }}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ 
            backgroundColor: '#f0f0f0', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', 
            marginTop: '100px',
            padding: '20px'
          }} className="col-md-10 mx-auto text-center">
            
            <a href={pdf} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div>
                <h4 style={{ fontWeight: 'bold' }}>Orientation at SJMC 2024</h4>
                <div className="d-flex justify-content-center my-3">
                  <div style={{width:'250px', height:'40px', backgroundColor:'orange', display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'95%', height:'35px', backgroundColor:'black', display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <span style={{color:'white', fontSize:'15px', fontWeight:'bold'}}>
                        DOWNLOAD ATTACHMENT <span style={{ marginLeft: '3px' }}>&#x2B07;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Swiper Slider */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ padding: '20px 0' }}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="d-flex justify-content-center align-items-center p-2">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="img-fluid rounded border"
                      style={{ 
                        height: '250px', 
                        width: '100%', 
                        objectFit: 'cover',
                        maxWidth: '400px'
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
  );
};

export default Page29;
