import React from 'react';
import Home from '../components/HomeButton';

import Image1 from '../asset/film screening/film (1).webp';
import Image2 from '../asset/film screening/film (2).webp';
import Image3 from '../asset/film screening/film (3).webp';
import Image4 from '../asset/film screening/film (4).webp';
import Image5 from '../asset/film screening/film (5).webp';
import Image6 from '../asset/film screening/film (6).webp';

const images = [Image1, Image2, Image3, Image4, Image5, Image6];

function Page20() {
  return (
    <div style={{ margin: '50px' }}>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            className="col-md-9 p-4 mx-auto text-center"
            style={{
              backgroundColor: '#f0f0f0',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              marginTop: '100px'
            }}
          >
            <h2 className="mb-4">Film Screening of Student Films (2021–2023)</h2>
            <div className="row">
              {images.map((img, index) => (
                <div key={index} className="col-md-4 text-center mb-3">
                  <img
                    src={img}
                    alt={`Film ${index + 1}`}
                    className="img-fluid rounded border p-3"
                    style={{ height: '210px', objectFit: 'cover' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page20;
