import React from 'react';
import conference1 from '../asset/conference1.webp';
import conference2 from '../asset/conference2.webp';
import Home from '../components/HomeButton';

function Conference() {
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
                  <i className="fa fa-university me-2 text-primary"></i>Conference Room
                </h2>
                <div
                  className="mx-auto mb-4"
                  style={{ width: '80px', height: '4px', backgroundColor: '#007bff', borderRadius: '5px' }}
                ></div>
              </div>
            </div>

            {/* Image Carousel */}
            <div id="confCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
              <div className="carousel-inner rounded-3 shadow-sm text-center">
                <div className="carousel-item active">
                  <img
                    src={conference1}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                    alt="Conference Room 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={conference2}
                    className="img-fluid mx-auto d-block"
                    style={{ maxHeight: '500px', width: '85%', objectFit: 'cover' }}
                    alt="Conference Room 2"
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#confCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#confCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

            {/* Description */}
            <div className="border-top pt-3" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
              <p>
                The SJMC Conference Room, located on the 3rd floor of the Excellence Building, is a modern and professionally equipped space ideal for meetings and small-scale events. With a comfortable seating capacity for 30 participants, it features the same high-quality infrastructure as the Seminar Hall, including a fully air-conditioned environment, Smart board and sound system. This room is designed for focused discussions, presentations, and administrative meetings. Over time, it has hosted various national and international academic and administrative events, becoming a vital space for strategic planning and intellectual exchange. The Conference Room has seen collaborations with renowned institutions and government departments, contributing to policy discussions, project reviews, and academic planning. Its compact yet functional design supports effective dialogue and decision-making, making it an essential venue within the SJMC for both internal and external engagements. The room reflects the institution’s commitment to excellence in both education and administration.
              </p>
              {/* Description 
              <p>
                The room is regularly used for faculty meetings, curriculum planning, external reviews, and official presentations.
                The seating layout supports structured conversation and effective group engagement.
              </p>
              <p>
                This space reflects the university’s emphasis on <em>governance, collaboration, and innovation</em>—providing a quiet,
                modern environment to nurture academic decisions and knowledge exchange.
              </p>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conference;
