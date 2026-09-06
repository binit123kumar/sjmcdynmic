import React from 'react'
import Image1 from '../News/NewsImages/2_1.webp'
import Image2 from '../News/NewsImages/2_2.webp'
import Image3 from '../News/NewsImages/2_3.webp'

const News2 = () => {
  return (
    <div>
    <div style={{ margin: '50px' }}>

<div className="container">
  <div className="row justify-content-center align-items-center">
    <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">

        <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>
Human Rights Awareness Programme organized at SJMC
</h2>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
<span style={{ fontWeight:'bold'}}>14.10.23:</span> A human rights awareness program was organized under the joint aegis of International Human Rights and Crime Control Forum and the School of Journalism and Mass Communication (SJMC), Aryabhatta Knowledge University, Patna. The Hon’ble Vice Chancellor of the University, Dr. Rameshwar Singh was also present.
</p>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
Addressing the program, the Hon’ble Vice Chancellor said that the scope of human rights is very wide. This is a burning issue at the global level which needs to be addressed in many ways. He said that awareness on human rights is very important in the society. He also talked about giving utmost emphasis to the all-round development of all the centers of the university.
</p>

<p style={{textAlign:'left',fontSize:'20px',margin:'20px'}}>
The Chairman of International Human Rights and Crime Control Forum, Shri GK Pandey, who was the keynote speaker of this program, discussed many aspects of human rights keeping in mind the Universal Declaration of Human Rights. Senior broadcaster Dr. Kishore Kumar Sinha gave his address on the topic of media and human rights. Legal expert Mr. Neeraj Madan answered the questions of the participants. The participants put forward many of their problems and asked questions on how to get legal help. The welcome address was given by Dr. Manisha Prakash, Assistant Professor, SJMC and the vote of thanks was given by Dr. Manish Parashar, Assistant Professor, Center for Geographical Studies. University Registrar Dr. Rajeev Ranjan along with all the officers, teachers, staff and students were present in this program.
</p>




       <div className="row mb-6">
  <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
    <img src={Image1} alt="Image 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '500px', width:' 100%' }} />
  </div>
  <div className="col-md-6">
    <div className="row">
      
        <img src={Image2} alt="Image 2" className="img-fluid rounded border p-3" style={{ maxHeight: '250px', height: '100%', width:' 100%' }} />
      </div>
      
     
    <div className="row">
      
        <img src={Image3} alt="Image 3" className="img-fluid rounded border p-3" style={{ maxHeight: '250px', height: '100%', width:' 100%' }} />
      </div>
 
  
      
   
  </div>
  
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

export default News2
