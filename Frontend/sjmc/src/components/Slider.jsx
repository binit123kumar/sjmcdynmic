import { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
const API_BASE = (process.env.REACT_APP_API_URL || 'https://localhost:7050/api').replace(/\/api\/?$/, '');

function ImageSlider() {
  const [slides, setSlides] = useState([]);
  const [state, setState] = useState('loading');

  useEffect(() => {
    fetch(`${API_BASE}/api/slider?activeOnly=true`)
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load slider.');
        return response.json();
      })
      .then((response) => { setSlides(response.data || []); setState('ready'); })
      .catch(() => setState('error'));
  }, []);

  if (state === 'loading') return <div className="container text-center py-5">Loading slider...</div>;
  if (state === 'error') return <div className="container text-center py-5">Slider is temporarily unavailable.</div>;
  if (!slides.length) return <div className="container text-center py-5">No slider items available.</div>;

  return (
    <div className="container" style={{width:'700px' , marginBottom:'10px'}}>
      <div className="row">
        <div className="col">
          <Slide arrows={true} dots={true}>
            {slides.map((slide) => (
              <div key={slide.id} className="text-center">
                <img src={`${API_BASE}${slide.imagePath}`} alt={slide.title || 'SJMC banner'} className="img-fluid" style={{ width: '900px', height: '400px' }}/>
                {slide.title && <span className="slide-caption">{slide.title}</span>}
              </div>
            ))}
          </Slide>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
