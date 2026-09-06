import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';

import Image100 from '../asset/Our gallery/JagranSpeechCompetition/img1.webp';
import Image101 from '../asset/Our gallery/JagranSpeechCompetition/img2.webp';
import Image102 from '../asset/Our gallery/JagranSpeechCompetition/img3.webp';
import Image103 from '../asset/Our gallery/JagranSpeechCompetition/img4.webp';
import Image104 from '../asset/Our gallery/JagranSpeechCompetition/img5.webp';
import Image105 from '../asset/Our gallery/JagranSpeechCompetition/img6.webp';
import Image106 from '../asset/Our gallery/JagranSpeechCompetition/img7.webp';
import Image107 from '../asset/Our gallery/JagranSpeechCompetition/img8.webp';
import Image108 from '../asset/Our gallery/JagranSpeechCompetition/img9.webp';
import Image109 from '../asset/Our gallery/JagranSpeechCompetition/img10.webp';
import Image110 from '../asset/Our gallery/JagranSpeechCompetition/img11.webp';
import Image111 from '../asset/Our gallery/JagranSpeechCompetition/img12.webp';
import Image112 from '../asset/Our gallery/JagranSpeechCompetition/img13.webp';
import Image113 from '../asset/Our gallery/JagranSpeechCompetition/img14.webp';
import Image114 from '../asset/Our gallery/JagranSpeechCompetition/img15.webp';
import Image115 from '../asset/Our gallery/JagranSpeechCompetition/img16.webp';
import Image116 from '../asset/Our gallery/JagranSpeechCompetition/img17.webp';
import Image117 from '../asset/Our gallery/JagranSpeechCompetition/img18.webp';
import Image118 from '../asset/Our gallery/JagranSpeechCompetition/img19.webp';
import Image119 from '../asset/Our gallery/JagranSpeechCompetition/img20.webp';
import Image120 from '../asset/Our gallery/JagranSpeechCompetition/img21.webp';
import Image121 from '../asset/Our gallery/JagranSpeechCompetition/img22.webp';
import Image122 from '../asset/Our gallery/JagranSpeechCompetition/img23.webp';


function JagranSpeechCompetition() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const images = [
    { src: Image100, date: '24 July 2025' },
    { src: Image101, date: '24 July 2025' },
    { src: Image102, date: '24 July 2025' },
    { src: Image103, date: '24 July 2025' },
    { src: Image104, date: '24 July 2025' },
    { src: Image105, date: '24 July 2025' },
    { src: Image106, date: '24 July 2025' },
    { src: Image107, date: '24 July 2025' },
    { src: Image108, date: '24 July 2025' },
    { src: Image109, date: '24 July 2025' },
    { src: Image110, date: '24 July 2025' },
    { src: Image111, date: '24 July 2025' },
    { src: Image112, date: '24 July 2025' },
    { src: Image113, date: '24 July 2025' },
    { src: Image114, date: '24 July 2025' },
    { src: Image115, date: '24 July 2025' },
    { src: Image116, date: '24 July 2025' },
    { src: Image117, date: '24 July 2025' },
    { src: Image119, date: '24 July 2025' },
    { src: Image118, date: '24 July 2025' },
    { src: Image120, date: '24 July 2025' },
    { src: Image121, date: '24 July 2025' },
    { src: Image122, date: '24 July 2025' }
  ];

  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0, visible: false });

  // ✅ Keyboard navigation for zoom mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex === null) return;
      if (e.key === 'ArrowRight') setZoomIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'Escape') setZoomIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIndex, images.length]);

  // ✅ Tooltip for zoom mode
  let tooltipTimer;
  const handleMouseMove = (e) => {
    setHoverPos({ x: e.clientX, y: e.clientY, visible: true });
    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => setHoverPos((p) => ({ ...p, visible: false })), 1500);
  };

  const handleNext = (e) => { e.stopPropagation(); setZoomIndex((prev) => (prev + 1) % images.length); };
  const handlePrev = (e) => { e.stopPropagation(); setZoomIndex((prev) => (prev - 1 + images.length) % images.length); };

  const styles = {
    container: { margin: '50px' },
    card: { background: '#fff', borderRadius: '12px', boxShadow: '0 6px 15px rgba(0,0,0,0.2)', marginTop: '30px' },
    imgBox: { position: 'relative', overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' },
    img: { objectFit: 'cover', height: '200px', width: '100%', transition: 'transform 0.3s ease' },
    overlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.6)', color: '#fff', opacity: 0, textAlign: 'center', padding: '5px', transition: 'opacity 0.3s' },
    zoom: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 },
    tooltip: { position: 'absolute', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '14px', transform: 'translate(-50%,-120%)', whiteSpace: 'nowrap', opacity: hoverPos.visible ? 1 : 0, transition: 'opacity 0.3s' },
    arrow: { position: 'absolute', fontSize: '3rem', color: '#fff', cursor: 'pointer', opacity: 0.4, userSelect: 'none', transition: 'opacity 0.3s' }
  };

  return (
    <div style={styles.container}>
      <Home />
      <div className="container">
        <div className="p-4 mx-auto text-center" style={styles.card}>
          <h2 className="mb-4 fw-bold text-primary">
            Jagran Speech Competition 
            <br /><small>15 July 2025</small>
          </h2>

          {/* ✅ Image Grid */}
          <div className="row">
            {images.map((img, i) => (
              <div key={i} className="col-6 col-md-4 mb-3">
                <div
                  style={styles.imgBox}
                  onMouseEnter={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay');
                    overlay.style.opacity = 1;
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    const overlay = e.currentTarget.querySelector('.overlay');
                    overlay.style.opacity = 0; // ✅ overlay disappears immediately
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  }}
                  onClick={() => setZoomIndex(i)}
                >
                  <img src={img.src} alt="Gallery" style={styles.img} />
                  {/* ✅ Hover text only visible on hover */}
                  <div className="overlay" style={styles.overlay}>Jagran Speech Competition | 15 July 2025</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Zoom Mode */}
      {zoomIndex !== null && (
        <div style={styles.zoom} onMouseMove={handleMouseMove}>
          <span onClick={() => setZoomIndex(null)} style={{ position: 'absolute', top: 20, right: 30, fontSize: '2.5rem', color: '#fff', cursor: 'pointer' }}>&times;</span>
          <span onClick={handlePrev} style={{ ...styles.arrow, left: 30 }}>&#10094;</span>

          <img src={images[zoomIndex].src} alt="Zoomed" style={{ width: '100%', height: '100%', objectFit: 'contain' }} draggable={false} />

          <span onClick={handleNext} style={{ ...styles.arrow, right: 30 }}>&#10095;</span>

          {/* ✅ Tooltip shows only when moving mouse */}
          <div style={{ ...styles.tooltip, top: hoverPos.y, left: hoverPos.x }}>
            Jagran Speech Competition | 15 July 2025
          </div>
        </div>
      )}
    </div>
  );
}

export default JagranSpeechCompetition;
