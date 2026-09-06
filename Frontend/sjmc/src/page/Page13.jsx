import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import MediaLab from '../asset/media_lab.webp';
import MediaLab2 from '../asset/media_lab2.webp';
import MediaLab3 from '../asset/media_lab3.webp';
import Home from '../components/HomeButton';

function Page13() {
  return (
    <div style={{ margin: '50px' }}>
      <Home />

      <div className="container">
        <div className="text-center mb-4">
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '36px',
              textAlign: 'center',
              color: '#333',
              borderBottom: '4px double #555',
              display: 'inline-block',
              paddingBottom: '10px',
            }}
          >
            Media Lab
          </h1>
        </div>

        <div
          className="col-md-10 mx-auto text-center"
          style={{
            backgroundColor: '#f0f0f0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
            padding: '30px',
            marginTop: '20px',
          }}
        >
          {/* Carousel with updated order: MediaLab2 -> MediaLab3 -> MediaLab */}
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={MediaLab2}
                alt="Media Lab 2"
                style={{ height: '435px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={MediaLab3}
                alt="Media Lab 3"
                style={{ height: '435px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={MediaLab}
                alt="Media Lab 1"
                style={{ height: '435px', objectFit: 'cover' }}
              />
            </Carousel.Item>
          </Carousel>

          {/* Text Below Carousel */}
          <div className="text-start mt-4">
            <p style={{ fontSize: '18px' }}>
              A modern computer lab is available to all students. The lab is
              installed with latest computers, software, and infrastructure.
              Original software including Microsoft Office, Adobe PageMaker,
              Photoshop, Corel Draw, Video Editing software etc. is available to
              facilitate student learning and practice. The Media Lab is home to
              an interdisciplinary research culture where art, science, design,
              and technology build and play off one another.
            </p>

            <p style={{ fontSize: '18px' }}>
              The upgraded Media Lab now includes advanced sound editing suites,
              high-end video capture equipment, and collaborative work spaces.
              Students get hands-on experience with modern industry tools that
              prepare them for careers in journalism, film, multimedia, and
              digital design.
            </p>

            <p style={{ fontSize: '18px' }}>
              The Media Lab also supports virtual reality (VR) and augmented
              reality (AR) experiments, giving students access to cutting-edge
              immersive media experiences. Regular workshops and peer mentoring
              help learners grow through collaboration and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page13;
