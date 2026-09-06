import React from 'react'
import Image1 from '../News/NewsImages/1.webp'

function News1() {
  return (
    <div>
       <div style={{ margin: '50px' }}>
   
   <div className="container">
     <div className="row justify-content-center align-items-center">
       <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
         <div className="row justify-content-center">
           <div className="col-md-12 text-center">


           <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>
Street Play Script Writing Contest on the Theme Disaster Management
</h2>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
The School of Journalism and Mass Communication, Aryabhatta Knowledge University, Patna in collaboration with the Bihar State Disaster Management Authority organised a street play writing contest on the theme of Disaster Management in which entries were received from all over the country.
</p>



           <div className="-md-6 text-center mb-6">
             <img src={Image1} alt="Image 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
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

export default News1
