import React from 'react';
import Book from '../asset/events.webp';
import FDP from '../asset/upcoming events/fdp.webp'

const Page31 = () => {
  return (
    <>
      <div style={{ width: '100vw', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'darkred', padding: '10px' }}>
        <img src={Book} style={{ height: '4rem', width: 'auto', paddingLeft: '2rem', opacity: '87%' }} alt="Book" />
        <div style={{ width: '55%', display: 'flex', justifyContent: 'flex-end', paddingRight: '5px', color: 'white', backgroundColor: 'darkred' }}>
          <h2 style={{ fontFamily: 'Nova Square,arial', fontWeight: '900', fontSize: '3em', textAlign: 'right' }}>Upcoming Events</h2>
        </div>
        <div style={{ width: '45%', color: 'white', height: '100%' }}>
          <p style={{ fontFamily: 'Kanit, sans', marginTop: '10px' }}>at SJMC</p>
        </div>
      </div>
      {}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '98vw', height: '98vh', display: 'flex', justifyContent: 'center' }}>
                <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)', width: '100%', height: 'auto', marginTop: '20px', padding: '20px' }} className="col-md-9 p-4 text-center">
                  <a href="https://forms.gle/FYAy6pywBM3Mwp7B6" target="_blank" style={{ textDecoration: 'none' }}>
                    <div style={{ width: '100%', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <img src={FDP} alt="Gallery Image 2" style={{ width: '25vw', height: 'auto', objectFit: 'cover', boxShadow: '2px 2px 7px 2px rgba(0, 0, 0, 0.9)', borderRadius: '20px' }} />
                      <p style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif', fontSize: '1.6rem', color: 'black', marginTop: '10px',marginBottom:'0px' }}>
                        Date : 12 Aug 2025<br />
                        <span style={{ color: 'darkred', fontSize: '1.2rem',position:'relative',bottom:'10px'}}>know more &gt;</span>
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

      {/* <div className="alt" style={{ width: '98vw', height: '98vh', display: 'flex', justifyContent: 'center',alignItems:'center' }}>
        No New Upcoming Events...

      </div> */}

      {/* Responsive Media Queries */}
      <style>
        {`
        @media (max-width: 768px) {
          div {
            flex-direction: column !important;
          }
          img {
            width: 100% !important;
            height: auto !important;
          }
          h2 {
            font-size: 2em !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
        `}
      </style>
    </>
  );
};

export default Page31;
