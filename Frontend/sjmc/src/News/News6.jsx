import React from 'react'
import Image1 from '../News/NewsImages/6_1.webp'
import Image2 from '../News/NewsImages/6_2.webp'
const News6 = () => {
  return (
    <div>
    <div style={{ margin: '50px' }}>

<div className="container">
  <div className="row justify-content-center align-items-center">
    <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">

        <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>
Student film recognised in renowned film festivals
</h2>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
The film ‘Usha Kiran Khan: Regional Voice of Literature’ based on the famous litterateur of Bihar, Usha Kiran Khan made by 4th semester students (2021-23 batch) <span style={{fontWeight:'bold'}}>Mr. Nikhil Kumar</span> and <span style={{fontWeight:'bold'}}>Ms. Ujjwala</span> was awarded as Best Documentary film in Darbhanga IFF, 2024.
</p>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
<span style={{fontWeight:'bold'}}>Mr. Nikhil Kumar</span>’s another film <span style={{fontWeight:'bold'}}>Ham Aag Bujhate Hain</span> got recognised for Best Concept at Goa International Film Competition 2023.
</p>




        <div className="-md-6  text-center mb-6">
          <img src={Image1} alt="Image 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
          <img src={Image2} alt="Image 2" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
        </div>



        </div>
        
       
        
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

export default News6
