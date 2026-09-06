import React from 'react'
import Image1 from '../News/NewsImages/fair1.webp'
import Image5 from '../News/NewsImages/fair5.webp'
import Image2 from '../News/NewsImages/fair2.webp'
import Image3 from '../News/NewsImages/fair3.webp'
import Image4 from '../News/NewsImages/fair4.webp'
const News7 = () => {
  return (
    <div>
    <div style={{ margin: '50px' }}>

<div className="container">
  <div className="row justify-content-center align-items-center">
    <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">

        <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>
        Discussion with Shri Vishnu Prakash Tripathi, Executive Editor of Dainik Jagran Group at Patna Book Fair.
</h2>
<h4>09.12.2023</h4>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
A discussion programme was organised at Patna Book Fair on December 12th, 2023 with Shri Vishnu Prakash Tripathi, Executive Editor, Dainik Jagran group at Patna Book Fair in which Dr. Manisha Prakash, Assistant Professor, SJMC was also invited.
</p>

        <div className="-md-6  text-center mb-6">
          <img src={Image1} alt="Image 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
          <img src={Image2} alt="Image 2" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
          <img src={Image3} alt="Image 3" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:'50%' }} />
          <img src={Image4} alt="Image 4" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '400px', width:' 50%' }} />
          <img src={Image5} alt="Image 5" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
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

export default News7
