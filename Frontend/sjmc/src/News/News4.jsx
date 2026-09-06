import React from 'react'
import Image1 from '../News/NewsImages/4_1.webp'
import Image2 from '../News/NewsImages/4_2.webp'

const News4 = () => {
  return (
    <div>
    <div style={{ margin: '50px' }}>

<div className="container">
  <div className="row justify-content-center align-items-center">
    <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">

        <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>
Open Mic on "Youth Icon of Bihar"
</h2>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
<span style={{fontWeight:'bold'}}>06.01.2024.</span> An open mic on “Youth Icon of Bihar” was organised at SJMC in collaboration with News Hunters, a popular news website. Intense discussion and viewpoints on politics were shared by participants on this occasion.
</p>




        <div className="-md-6 text-center mb-6">
          <img src={Image1} alt="Image 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 800px' }} />
          <img src={Image2} alt="Image 2" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 800px' }} />
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

export default News4
