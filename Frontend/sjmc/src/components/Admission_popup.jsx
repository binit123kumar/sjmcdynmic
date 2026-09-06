import React, { useEffect, useRef } from 'react';
import './ad_popup.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'; // ✅ Navigation added
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // ✅ Navigation CSS

/* ✅ ASSETS (UNCOMMENTED – NOTHING REMOVED) */
import advideo from '../asset/skill course.mp4';
{/*import Image5 from '../asset/Adms_banner1.webp';
import Image1 from '../asset/Adms_banner2.webp';
import Image2 from '../asset/Adms_banner3.webp';
import Image3 from '../asset/Adms_banner4.webp';
import Image4 from '../asset/Adms_banner5.webp';*/}

const Admission_popup = ({ onClose }) => {
  const adRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (adRef.current && !adRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    if (videoRef.current) {
      videoRef.current.play().catch((e) => console.log('Autoplay blocked', e));
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="ad-overlay">
      <div className="ads-container" ref={adRef}>
        <button className="ad-close" onClick={onClose}>×</button>

        <div className="ad-box">
          {/* ✅ VIDEO */}
          <video
            className="ad-video"
            ref={videoRef}
            controls
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={advideo} type="video/mp4" />
          </video>

          {/* ✅ SLIDING IMAGE BANNERS with Arrows */}
          {/*
          <Swiper
            modules={[Autoplay, Pagination, Navigation]} // ✅ Navigation added
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            navigation={true} // ✅ Arrows enabled
          >
            <SwiperSlide>
              <img src={Image1} alt="Ad 1" className="ad-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image2} alt="Ad 2" className="ad-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image3} alt="Ad 3" className="ad-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image4} alt="Ad 4" className="ad-image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Image5} alt="Ad 5" className="ad-image" />
            </SwiperSlide>
          </Swiper>
          */}

          {/* ✅ Button Below */}
          <div className="button_container">
            <a
              href="https://adms.akubihar.ac.in/"
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Click for Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission_popup;

