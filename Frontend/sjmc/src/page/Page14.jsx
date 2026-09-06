import React from 'react'
import LibImage1 from '../asset/Library.webp'
import LibImage2 from '../asset/library2.webp'
import Home from '../components/HomeButton'

function Page14() {
  return (
    <div style={{ margin: '50px' }}>
   <Home/>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', marginTop: '100px' }} className="col-md-9 p-4 mx-auto text-center">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">


            <div className="-md-6 text-center mb-6">
              <img src={LibImage1} alt="Staff 1" className="img-fluid rounded border p-3" style={{ maxHeight: '500px', height: '435px', width:' 1200px' }} />
            </div>



            </div>
            
            <h2 style={{display: 'block',borderBottom: '1px solid black', textAlign:'left',fontWeight:'bold',margin:'20px'}}>SJMC Library</h2>
            <p style={{ textAlign:'left',fontSize:'20px'}}>The Library is an integral component of the institution ever since its inception in 2020. The Library offers vital support for teaching, learning, research activities of the SJMC by disseminating knowledge and offering modern services to the academic fraternity

<br></br><br></br>To keep an update with the latest happenings and to correlate it to history, merging it with technology, the students need the resource of information. The library at SJMC maintains the record of the entire requirement to cater to the need of students. It has incorporated collections of prints, visuals, and creative resources which are systematically organized with different sources from India and abroad. The list of books is being upgraded as per the requirement from time to time.
<br></br><br></br>The library is specialized in Mass Communication. It has collected books on different aspects of mass communication and allied subjects such as print media, broadcasting, advertising, communication, communication research, public relations, radio and television, film, information technology and traditional media.
<br></br><br></br>It has also been providing a newspaper-clipping service to its users, including complete record of news items, newspapers and magazines.
<br></br><br></br>SJMC Library is committed to providing access to quality information. Our library includes latest references, periodicals, journals, magazines, and books. In addition to text books recommended by the University, the library houses works of eminent authors, Indian and international.
.</p>
            
          </div>
         
            {/* <div className="col-md-4 text-center mb-3">
              <img src={Image6} alt="Staff 6" className="img-fluid rounded border p-3" style={{ maxHeight: '300px', maxWidth: '100%', height: '210px' }} />
            </div> */}
          </div>
        </div>
      </div>
    </div>

  
  )
}

export default Page14