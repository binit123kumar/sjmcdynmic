import React from 'react';
import './studentLens.css';

const photos = [
  {
    src: require('../asset/student_lens/1.webp'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/2.webp'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/3.webp'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/4.webp'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
   {
    src: require('../asset/student_lens/5.webp'),
    name: 'Saurav kumar Yaduvendu',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/6.webp'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/7.webp'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/8.webp'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
   {
    src: require('../asset/student_lens/9.webp'),
    name: 'Hritik Raj',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/13.webp'),
    name: 'Rajshree Routh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/11.webp'),
    name: 'Rajshree Routh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/12.webp'),
    name: 'Rajshree Routh',
    course: 'M.A JMC',
  },
    {
    src: require('../asset/student_lens/14.webp'),
    name: 'Muskan Kumari Singh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/15.webp'),
    name: 'Muskan Kumari Singh',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/16.webp'),
    name: 'Muskan Kumari Singh',
    course: 'M.A JMC',
  },
    {
    src: require('../asset/student_lens/20.webp'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/21.webp'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/22.webp'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/23.webp'),
    name: 'Durgesh Kumar',
    course: 'M.A JMC',
  },
      {
    src: require('../asset/student_lens/24.webp'),
    name: 'Amar Pathak',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/25.webp'),
    name: 'Amar Pathak',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/26.webp'),
    name: 'Shuhani Anand',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/27.webp'),
    name: 'Shuhani Anand',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/28.webp'),
    name: 'Isha Birlay',
    course: 'Assistant Professor SJMC , AKU Patna',
  },
  {
    src: require('../asset/student_lens/29.webp'),
    name: 'Isha Birlay',
    course: 'Assistant Professor SJMC , AKU Patna',
  },
  {
    src: require('../asset/student_lens/30.webp'),
    name: 'Riya Kumari',
    course: 'M.A JMC',
  },
  {
    src: require('../asset/student_lens/31.webp'),
    name: 'Riya Kumari',
    course: 'M.A JMC',
  },
    {
    src: require('../asset/student_lens/32.webp'),
    name: 'Himanshu Kumar',
    course: 'PGDFM',
  },
  {
    src: require('../asset/student_lens/33.webp'),
    name: 'Himanshu Kumar',
    course: 'PGDFM',
  },
  {
    src: require('../asset/student_lens/37.webp'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/38.webp'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/39.webp'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
    {
    src: require('../asset/student_lens/41.webp'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/42.webp'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  {
    src: require('../asset/student_lens/43.webp'),
    name: 'Dr.Sandeep Kumar Dubey',
    course: 'Faculty SJMC, AKU Patna',
  },
  // Add more photos here
];

const StudentLens = () => {
  return (
    <div
      className="student-lens-section"
      style={{
        width: '100%',
        margin: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        right: '36px',
      }}
    >
      <h2
        style={{
          width: '100%',
          textAlign: 'center',
          borderRadius: '10px',
          textShadow: '0 3px 10px rgba(0, 0, 0, 0.7)',
        }}
      >
        Student Lens
      </h2>

      <p className="subtitle">
        <b>Every frame tells a story</b>
      </p>

      {/* ===== Scroll Container Added (NO layout change) ===== */}
      <div className="photo-scroll-container">
        <div className="photo-grid photo-grid-4">
          {photos.map((photo, index) => (
            <div key={index} className="photo-card">
              <a href={photo.src} target="_blank" rel="noopener noreferrer">
                <img src={photo.src} alt={photo.name} className="photo-image" />
                </a>
                <div className="photo-info">
                  <strong>{photo.name}</strong>
                  <span>{photo.course}</span>
                </div>
            </div>
                ))}
          </div>
        </div>
      {/* ===== End Scroll Container ===== */}

      {/*
      <div className="view-gallery">
        <a href="/full-student-gallery" className="gallery-button">
          View Full Gallery
        </a>
      </div>
      */}
    </div>
  );
};

export default StudentLens;
