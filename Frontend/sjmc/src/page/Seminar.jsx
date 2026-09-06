import React from 'react';
import seminar1 from '../asset/seminar1.webp';
import seminar2 from '../asset/seminar2.webp';
import Home from '../components/HomeButton';

function SeminarRoom() {
  return (
    <div className="container py-5">
      <Home />

      <div
        className="mx-auto p-4 rounded shadow"
        style={{
          backgroundColor: '#f8f9fa',
          maxWidth: '1000px',
          marginTop: '80px'
        }}
      >
        {/* Title */}
        <div className="text-center mb-3">
          <h2 className="fw-bold" style={{ fontFamily: 'Kanit, sans-serif' }}>
            <i className="fa fa-users me-2 text-success"></i> Seminar Hall
          </h2>
          <div
            className="mx-auto"
            style={{ width: '80px', height: '4px', backgroundColor: '#28a745', borderRadius: '5px' }}
          ></div>
        </div>

        {/* Carousel */}
        <div id="seminarCarousel" className="carousel slide mb-3" data-bs-ride="carousel">
          <div className="carousel-inner rounded-3 shadow-sm">
            <div className="carousel-item active">
              <img
                src={seminar1}
                className="d-block mx-auto img-fluid"
                alt="Seminar Room 1"
                style={{ maxHeight: '500px', objectFit: 'cover', width: '90%' }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={seminar2}
                className="d-block mx-auto img-fluid"
                alt="Seminar Room 2"
                style={{ maxHeight: '500px', objectFit: 'cover', width: '90%' }}
              />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#seminarCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#seminarCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* Description – One Single Paragraph */}
        <div className="px-3" style={{ lineHeight: '1.8', fontSize: '1.05rem', textAlign: 'justify' }}>
          <span>
            The <strong>SJMC Seminar Hall</strong>, situated on the 4th floor of the <strong>Excellence Building</strong>, AKU campus, is a well-designed and fully equipped venue for academic and professional events. With a seating capacity of <strong>200</strong>, the hall features modern amenities including a high-quality sound system and full air-conditioning, providing a comfortable and technically sound environment for seminars, workshops, conferences, and guest lectures. Over the years, it has hosted significant national and international programs in collaboration with UNICEF, the Film and Television Institute of India (FTII), and various departments of the Bihar Government. Its central location within the SJMC campus makes it a hub for intellectual and cultural exchange. Designed for effective communication and engagement, the seminar hall stands as a symbol of academic excellence at Aryabhatta Knowledge University.
          </span>
        </div>
      </div>
    </div>
  );
}

export default SeminarRoom;
