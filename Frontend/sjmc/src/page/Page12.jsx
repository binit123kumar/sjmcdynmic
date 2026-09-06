import React from 'react'
import Image1 from '../asset/studio (1).webp'
import Image2 from '../asset/studio (2).webp'
import Image3 from '../asset/studio (3).webp'
import Image4 from '../asset/studio (4).webp'
import Image5 from '../asset/studio (5).webp'
import Banner from '../asset/Studio_pic1 (1).webp'
import Home from '../components/HomeButton'

function Page12() {
  return (
    <div style={{ margin: '50px' }}>
   <Home/>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">


            <div className="-md-6 text-center mb-6">
              <img src={Banner} alt="Staff 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
            </div>



            </div>
            
            <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>Audio/Visual/Virtual Studio</h2>
            <p style={{ textAlign:'left',fontSize:'20px'}}>The Audio/Visual/Virtual Studio at the Aryabhatta Knowledge University campus has been setup to facilitate audio/video production activities as well as online learning. The studio is used for practical classes of Mass Communication students and also to develop lectures and course content by subject experts, interviews and interactive sessions with peers from industry and academia. The facility of the studio is also planned to be used for developing training modules and massive open online courses (MOOCs) for the benefit of faculty members and students of the University.</p>
            
          </div>
          <div className="row justify-content-around" style={{margin:'20px'}}>
            {/* Adjust image size and display */}
            <div className="col-md-4 text-center mb-3">
              <img src={Image1} alt="Staff 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', maxWidth: '100%', height: '210px' }} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image2} alt="Staff 2" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', maxWidth: '100%', height: '210px' }} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image3} alt="Staff 3" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', maxWidth: '100%', height: '210px' }} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image4} alt="Staff 4" className="img-fluid rounded border p-3" style={{ position:'relative', left:'100px',maxHeight: '500px', maxWidth: '100%' , height: '210px'}} />
            </div>
            <div className="col-md-4 text-center mb-3">
              <img src={Image5} alt="Staff 5" className="img-fluid rounded border p-3" style={{ position:'relative', right:'60px',maxHeight: '500px', maxWidth: '100%', height: '210px' }} />
            </div>
            {/* <div className="col-md-4 text-center mb-3">
              <img src={Image6} alt="Staff 6" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' }} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Page12