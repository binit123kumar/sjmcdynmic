import React from 'react';
import Image2 from '../asset/advisoryCommittee/arun.webp';
import Image1 from '../asset/advisoryCommittee/atish.webp';
import Image4 from '../asset/advisoryCommittee/dharmendra.webp';
import Image3 from '../asset/advisoryCommittee/laxmikant.webp';
import Image5 from '../asset/advisoryCommittee/roma.webp';
import Image6 from '../asset/advisoryCommittee/salman.webp';
import Image7 from '../asset/advisoryCommittee/uma.webp';
import Home from '../components/HomeButton'

const Page23 = () => {
  const contentData = [
    {
      imageUrl: Image1,
      name:"Prof. Atish Prashar",
      title: "Professor, Dept. Of Mass Communication and Media",
      email: "atishprashar@cusb.ac.in",
      college: "Central University of South Bihar, Gaya ",
      phone: 9810490789
    },
    {
      imageUrl: Image2,
      name:"Mr. Arun Kumar",
      title: "Associate Editor  ",
      email: "ak.arunkr@gmail.com",
      college: " Hindustan Times",
      phone: 9431035110
    },
    {
      imageUrl: Image3,
      name:"Dr. Laxmikant Chaudhary (Sajal) ",
      title: "Sr. Journalist",
      email: "drlksajal@gmail.com",
      college: " Aaj (Hindi Dainik)",
      phone: 9431079814
    },
    {
      imageUrl: Image4,
      name:"Mr. Dharmendra Rai",
      title: "Sr. Correspondent",
      email: "dkrai24@gmail.com",
      college: "AIR News, Patna",
      phone: 9801866221
    },
    {
      imageUrl: Image5,
      name:"Ms. Roma ",
      title: "HoD, Dept. of Mass Communication",
      email: "roma.bmc@patnawomenscollege.in",
      college: "Patna Women's College   ",
      phone: 8882721444
    },
    {
      imageUrl: Image7,
      name:" Dr. Uma Yadav",
      title: "Assistant Professor",
      email: "umayadav@mgcub.ac.in",
      college: "Mahatma Gandhi Central University, Motihari  ",
      phone: 9479355993
    },
    {
      imageUrl: Image6,
      name:" Mr. Salman Haidar",
      title: "Dy. Director (News)",
      email: "salman.haider2369@gmail.com",
      college: "DD News, Bihar, Patna",
      phone: 9471000490
    }
  ];

  return (
    <>
    <div style={{margin:'50px'}}>
    <Home/>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }} className="col-md-9 p-4 mx-auto text-center">
            <div className="col-md-12 text-center">
              <h2 style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Academic Advisory Committee</h2>
            </div>
            
            {/* Mapping through contentData to render each item */}
            {contentData.map((content, index) => (
              <div key={index} className="d-flex align-items-center" style={{ border: '1px solid black', margin: '13px' }}>
                <img src={content.imageUrl} alt="Your Image" style={{ width: '150px', height: '200px', marginRight: '20px',border:'1px solid grey' }} />
                {/* Right side with heading and paragraphs */}
                <div style={{ textAlign: 'left' }}>
                  <h5>{content.name}</h5>
                  <p>{content.title} <br></br>
                  {content.college}<br></br>
                  Email : {content.email} <br></br>
                  Phone: {content.phone} <br></br>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Page23;
