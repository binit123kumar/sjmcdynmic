import React from 'react'
import Image1 from '../News/NewsImages/3_1.webp'
import Image2 from '../News/NewsImages/3_2.webp'

const News3 = () => {
  return (
    <div>
    <div style={{ margin: '50px' }}>

<div className="container">
  <div className="row justify-content-center align-items-center">
    <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">

        <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>
          Training workshop for media professionals to create awareness about disaster mitigation
        </h2>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
29.11.2023. Dr. Manisha Prakash, Assistant Professor, SJMC was invited as resource person by Bihar State Disaster Management Authority for the training workshop organised for media professionals of Bihar to create awareness about disaster mitigation. 
</p>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
Her topic was Infodemic and Disasters. The SJMC students of 2022-24 and 2023-25 batch also attended the media workshop.
</p>



<div className="-md-6 d-flex justify-content-center text-center mb-6">
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

export default News3
