import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../components/HomeButton';
import Image100 from '../asset/Our gallery/Wastemanegment/k1.webp';
import Image101 from '../asset/Our gallery/Wastemanegment/k2.webp';
import Image102 from '../asset/Our gallery/Wastemanegment/k3.webp';
import Image103 from '../asset/Our gallery/Wastemanegment/k4.webp';
import Image104 from '../asset/Our gallery/Wastemanegment/k5.webp';
import Image105 from '../asset/Our gallery/Wastemanegment/k6.webp';
import Image106 from '../asset/Our gallery/Wastemanegment/k7.webp';
import Image107 from '../asset/Our gallery/Wastemanegment/k8.webp';
import Image108 from '../asset/Our gallery/Wastemanegment/k9.webp';
import Image109 from '../asset/Our gallery/Wastemanegment/k10.webp';
import Image110 from '../asset/Our gallery/Wastemanegment/k11.webp';
import Image111 from '../asset/Our gallery/Wastemanegment/k12.webp';
import Image112 from '../asset/Our gallery/Wastemanegment/k13.webp';
import Image113 from '../asset/Our gallery/Wastemanegment/k14.webp';
import Image114 from '../asset/Our gallery/Wastemanegment/k15.webp';
import Image115 from '../asset/Our gallery/Wastemanegment/k16.webp';
import Image116 from '../asset/Our gallery/Wastemanegment/k17.webp';
import Image117 from '../asset/Our gallery/Wastemanegment/k18.webp';
import Image118 from '../asset/Our gallery/Wastemanegment/k19.webp';
import Image119 from '../asset/Our gallery/Wastemanegment/k20.webp';
import Image120 from '../asset/Our gallery/Wastemanegment/k21.webp';
import Image121 from '../asset/Our gallery/Wastemanegment/k22.webp';
import Image122 from '../asset/Our gallery/Wastemanegment/k23.webp';
import Image123 from '../asset/Our gallery/Wastemanegment/k27.webp';
import Image124 from '../asset/Our gallery/Wastemanegment/k24.webp';
import Image125 from '../asset/Our gallery/Wastemanegment/k25.webp';
import Image126 from '../asset/Our gallery/Wastemanegment/k26.webp';
import Image127 from '../asset/Our gallery/Wastemanegment/k28.webp';
import Image128 from '../asset/Our gallery/Wastemanegment/k29.webp';
import Image129 from '../asset/Our gallery/Wastemanegment/k30.webp';
import Image130 from '../asset/Our gallery/Wastemanegment/k31.webp';
import Image131 from '../asset/Our gallery/Wastemanegment/k32.webp';
import Image132 from '../asset/Our gallery/Wastemanegment/k34.webp';
import Image134 from '../asset/Our gallery/Wastemanegment/k35.webp';
import Image135 from '../asset/Our gallery/Wastemanegment/k36.webp';

function Wastemanegment() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const images = [
    { src: Image100, date: '08 Aug 2025' },
    { src: Image106, date: '08 Aug 2025' },
    { src: Image101, date: '08 Aug 2025' },
    { src: Image102, date: '08 Aug 2025' },
    { src: Image103, date: '08 Aug 2025' },
    { src: Image104, date: '08 Aug 2025' },
    { src: Image105, date: '08 Aug 2025' },
    { src: Image107, date: '08 Aug 2025' },
    { src: Image108, date: '08 Aug 2025' },
    { src: Image109, date: '08 Aug 2025' },
    { src: Image110, date: '08 Aug 2025' },
    { src: Image111, date: '08 Aug 2025' },
    { src: Image112, date: '08 Aug 2025' },
    { src: Image113, date: '08 Aug 2025' },
    { src: Image114, date: '08 Aug 2025' },
    { src: Image115, date: '08 Aug 2025' },
    { src: Image116, date: '08 Aug 2025' },
    { src: Image117, date: '08 Aug 2025' },
    { src: Image118, date: '08 Aug 2025' },
    { src: Image119, date: '08 Aug 2025' },
    { src: Image120, date: '08 Aug 2025' },
    { src: Image121, date: '08 Aug 2025' },
    { src: Image122, date: '08 Aug 2025' },
    { src: Image123, date: '08 Aug 2025' },
    { src: Image124, date: '08 Aug 2025' },
    { src: Image125, date: '08 Aug 2025' },
    { src: Image126, date: '08 Aug 2025' },
    { src: Image127, date: '08 Aug 2025' },
    { src: Image128, date: '08 Aug 2025' },
    { src: Image129, date: '08 Aug 2025' },
    { src: Image130, date: '08 Aug 2025' },
    { src: Image131, date: '08 Aug 2025' },
    { src: Image132, date: '08 Aug 2025' },
    { src: Image134, date: '08 Aug 2025' },
    { src: Image135, date: '08 Aug 2025' },

  ];

  const [zoomIndex, setZoomIndex] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0, visible: false });

  // ✅ Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (zoomIndex === null) return; // only work in zoom mode
      if (e.key === 'ArrowRight') setZoomIndex((prev) => (prev + 1) % images.length);
      if (e.key === 'ArrowLeft') setZoomIndex((prev) => (prev - 1 + images.length) % images.length);
      if (e.key === 'Escape') setZoomIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomIndex, images.length]);

  // ✅ Tooltip show/hide on mouse move
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
          <h2 className="mb-4 fw-bold text-primary">Training Program for Skill Development on Waste Management | 08 Aug 2025</h2>

          {/* ✅ Image Grid */}
          <div className="row">
            {images.map((img, i) => (
              <div key={i} className="col-6 col-md-4 mb-3">
                <div
                  style={styles.imgBox}
                  onMouseEnter={(e) => {
                    e.currentTarget.querySelector('.overlay').style.opacity = 1;
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.querySelector('.overlay').style.opacity = 0;
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  }}
                  onClick={() => setZoomIndex(i)}
                >
                  <img src={img.src} alt="Gallery" style={styles.img} />
                  <div className="overlay" style={styles.overlay}>Training Program for Skill Development on Waste Management | {img.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Zoom View */}
      {zoomIndex !== null && (
        <div style={styles.zoom} onMouseMove={handleMouseMove}>

          {/* ❌ Close only on button */}
          <span onClick={() => setZoomIndex(null)} style={{ position: 'absolute', top: 20, right: 30, fontSize: '2.5rem', color: '#fff', cursor: 'pointer' }}>&times;</span>

          {/* ◀ Prev */}
          <span onClick={handlePrev} style={{ ...styles.arrow, left: 30 }}>&#10094;</span>

          <img src={images[zoomIndex].src} alt="Zoomed" style={{ width: '100%', height: '100%', objectFit: 'contain' }} draggable={false} />

          {/* ▶ Next */}
          <span onClick={handleNext} style={{ ...styles.arrow, right: 30 }}>&#10095;</span>

          {/* ✅ Tooltip */}
          <div style={{ ...styles.tooltip, top: hoverPos.y, left: hoverPos.x }}>
            Training Program for Skill Development on Waste Management | 08 Aug 2025
          </div>
        </div>
      )}
    </div>
  );
}

export default Wastemanegment;
