import React from 'react';
import smartclass1 from '../asset/smartclass1.webp';
import smartclass2 from '../asset/smartclass2.webp';
import Home from '../components/HomeButton';

function SmartClass() {
  return (
    <div style={{ margin: '50px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-md-9 p-4 mx-auto text-center"
            style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }}
          >
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2 style={{ fontFamily: 'Kanit, sans-serif' }}>
                  <i className="fa fa-desktop me-2 text-warning"></i>Smart Class
                </h2>
                <div
                  className="mx-auto mb-4"
                  style={{ width: '80px', height: '4px', backgroundColor: '#ffc107', borderRadius: '5px' }}
                ></div>
              </div>
            </div>

            {/* Image Carousel */}
            <div id="smartCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-inner rounded-3 shadow-sm text-center">
                <div className="carousel-item active">
                  <img
                    src={smartclass1}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                    alt="Smart Class 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={smartclass2}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                    alt="Smart Class 2"
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#smartCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#smartCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

            {/* Description */}
            <div className="border-top pt-3" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
              <p>
                The <strong>Smart Class</strong> at SJMC is equipped with interactive boards, HD projectors, and seamless internet
                connectivity. It enables dynamic teaching through visuals, multimedia, and collaborative tools.
              </p>
              <p>
                This environment boosts student engagement, encourages interactive learning, and supports innovative pedagogy in
                line with 21st-century education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartClass;
