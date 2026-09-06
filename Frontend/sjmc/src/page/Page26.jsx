import React from 'react'
import Image1 from '../asset/Our gallery/Hindi Diwas/image (1).webp'
import Image2 from '../asset/Our gallery/Hindi Diwas/image (2).webp'
import Image3 from '../asset/Our gallery/Hindi Diwas/image (3).webp'
import Image4 from '../asset/Our gallery/Hindi Diwas/image (4).webp'

export default function Page26() {
  return (
    <div>
      
      <div style={{ margin: '50px' }}>
      
     
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <h2>Hindi Patrakarita Divas</h2>
              </div>
            </div>
            <div className="row justify-content-around">
              {/* Adjust image size and display */}
              <div className="col-md-4 text-center mb-3">
                <img src={Image1} alt="Staff 1" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image2} alt="Staff 2" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image4} alt="Staff 3" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              <div className="col-md-4 text-center mb-3">
                <img src={Image3} alt="Staff 4" className="img-fluid rounded border p-3" style={{ height: '250px    ', maxWidth: '100%' }} />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
