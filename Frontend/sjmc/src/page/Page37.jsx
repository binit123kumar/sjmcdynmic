import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';

import Image1 from '../asset/Our gallery/PRO/Image (1).webp';
import Image2 from '../asset/Our gallery/PRO/Image (2).webp';
import Image3 from '../asset/Our gallery/PRO/Image (3).webp';
import Image4 from '../asset/Our gallery/PRO/Image (4).webp';
import Image5 from '../asset/Our gallery/PRO/Image (5).webp';
import Image6 from '../asset/Our gallery/PRO/Image (6).webp';
import Image7 from '../asset/Our gallery/PRO/Image (7).webp';
import Image8 from '../asset/Our gallery/PRO/Image (8).webp';
import Image9 from '../asset/Our gallery/PRO/Image (9).webp';
import Image10 from '../asset/Our gallery/PRO/Image (10).webp';
import Image11 from '../asset/Our gallery/PRO/Image (11).webp';
import Image12 from '../asset/Our gallery/PRO/Image (12).webp';

function Page37() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const images = [
    { src: Image1, date: '28 Sep 2024' },
    { src: Image2, date: '28 Sep 2024' },
    { src: Image3, date: '28 Sep 2024' },
    { src: Image4, date: '28 Sep 2024' },
    { src: Image5, date: '28 Sep 2024' },
    { src: Image6, date: '28 Sep 2024' },
    { src: Image7, date: '28 Sep 2024' },
    { src: Image8, date: '28 Sep 2024' },
    { src: Image9, date: '28 Sep 2024' },
    { src: Image10, date: '28 Sep 2024' },
    { src: Image11, date: '28 Sep 2024' },
    { src: Image12, date: '28 Sep 2024' },

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
           The Role And Responsibilities

            <br /><small>28 Sep 2024</small>
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
                  <div className="overlay" style={styles.overlay}>The Role And Responsibilities | 28 Sep 2024</div>
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
            The Role And Responsibilities | 28 Sep 2024

          </div>
        </div>
      )}
    </div>
  );
}

export default Page37;