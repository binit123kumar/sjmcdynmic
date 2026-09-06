import React, { useState } from 'react';
import './page8.css';
import Home from '../components/HomeButton'

import Image48 from '../asset/media_center/2024/26 October 2024/image (4).webp'
import Image47 from '../asset/media_center/2024/26 October 2024/image (3).webp'
import Image46 from '../asset/media_center/2024/26 October 2024/image (2).webp'
import Image45 from '../asset/media_center/2024/26 October 2024/image (1).webp'

import Image44 from '../asset/media_center/2024/24 October 2024/image (4).webp'
import Image43 from '../asset/media_center/2024/24 October 2024/image (3).webp'
import Image42 from '../asset/media_center/2024/24 October 2024/image (2).webp'
import Image41 from '../asset/media_center/2024/24 October 2024/image (1).webp'


import Image39 from '../asset/media_center/2024/6 October 2024/image (1).webp'
import Image40 from '../asset/media_center/2024/6 October 2024/image (2).webp'

import Image37 from '../asset/media_center/2024/22 september/DAINIK BHASKAR 22.09.2024.webp'
import Image38 from '../asset/media_center/2024/22 september/PRABHAT KHABAR 22.09.2024.webp'

import Image35 from '../asset/media_center/2024/15 september/AAJ 15.09.2024.webp'
import Image36 from '../asset/media_center/2024/15 september/NEWS CLIP.webp'



import Image34 from '../asset/media_center/2024/14 september/image.webp'
import Image33 from '../asset/media_center/2024/13 september/DAINIK BHASKAR 1309.2024.webp'

import Image32 from '../asset/media_center/2024/9 September 2024/image (6).webp'
import Image31 from '../asset/media_center/2024/9 September 2024/image (5).webp'
import Image30 from '../asset/media_center/2024/9 September 2024/image (4).webp'
import Image29 from '../asset/media_center/2024/9 September 2024/image (3).webp'
import Image28 from '../asset/media_center/2024/9 September 2024/image (2).webp'
import Image27 from '../asset/media_center/2024/9 September 2024/image (1).webp'


import Image23 from '../asset/media_center/2024/8 september/HINDUSTAN 08.09.2024.webp'
import Image24 from '../asset/media_center/2024/8 september/PRABHAT KHABAR 08.09.2024.webp'
import Image25 from '../asset/media_center/2024/8 september/दैनिक जागरण 8 SEPT 24 PG 4.webp'
import Image26 from '../asset/media_center/2024/8 september/दैनिक भास्कर 08.09.2024 p.04.webp'

import Image22 from '../asset/media_center/2024/20 August 2024/Image.webp'
import Image21 from '../asset/media_center//2024/18 August/image (5).webp'
import Image20 from '../asset/media_center//2024/18 August/image (1).webp'
import Image17 from '../asset/media_center//2024/18 August/image (2).webp'
import Image18 from '../asset/media_center//2024/18 August/image (3).webp'
import Image19 from '../asset/media_center//2024/18 August/image (4).webp'
import Image16 from '../asset/media_center//2024/11 August 2024/11__Aug_2024(2).webp'
import Image15 from '../asset/media_center/2024/11 August 2024/11_Aug_2024.webp';
import Image14 from '../asset/media_center/2024/2 August 2024/2_august_2024 (2).webp';
import Image13 from '../asset/media_center/2024/2 August 2024/2_august_2024 (1).webp';
import Image12 from '../asset/media_center/2024/21 July 2024/21July.webp';
import Image11 from '../asset/media_center/2024/19 july 2024/image (1).webp';
import Image10 from '../asset/media_center/2024/19 july 2024/image (2).webp';
import Image9 from '../asset/media_center/2024/10 july 2024/i2.webp';
import Image8 from '../asset/media_center/2024/10 july 2024/i1.webp';
import Image7 from '../asset/media_center/2024/30 May 2024/30 may.webp'
import Image6 from '../asset/media_center/2024/2 April 2024/2_April (1).webp'
import Image1 from '../asset/media_center/2024/2 April 2024/2_April (2).webp'
import Image2 from '../asset/media_center/2024/2 April 2024/2_April (3).webp'
import Image3 from '../asset/media_center/2024/29 January 2024/29_Jan.webp'
import Image4 from '../asset/media_center/2024/4 April 2024/4_april (1).webp'
import Image5 from '../asset/media_center/2024/4 April 2024/4_april (2).webp'


import Image2_1 from '../asset/media_center/2023/10 December 2023/10_dec (1).webp'
import Image2_2 from '../asset/media_center/2023/10 December 2023/10_dec (2).webp'
import Image2_3 from '../asset/media_center/2023/10 December 2023/10_dec (3).webp'
import Image2_4 from '../asset/media_center/2023/14 September 2023/14_sep (2).webp'
import Image2_5 from '../asset/media_center/2023/14 September 2023/14_sep (3).webp'
import Image2_6 from '../asset/media_center/2023/14 September 2023/14_sep (4).webp'
import Image2_7 from '../asset/media_center/2023/15 September 2023/15_sep (1).webp'
import Image2_8 from '../asset/media_center/2023/15 September 2023/15_sep (2).webp'
import Image2_9 from '../asset/media_center/2023/15 September 2023/15_sep (3).webp'
import Image2_10 from '../asset/media_center/2023/21 July 2023/21_july (1).webp'
import Image2_11 from '../asset/media_center/2023/21 July 2023/21_july (2).webp'
import Image2_12 from '../asset/media_center/2023/21 July 2023/21_july (3).webp'
import Image2_13 from '../asset/media_center/2023/21 July 2023/21_july (4).webp'
import Image2_14 from '../asset/media_center/2023/21 July 2023/21_july (5).webp'
import Image2_15 from '../asset/media_center/2023/24 July 2023/24_july.webp'
import Image2_16 from '../asset/media_center/2023/27 July 2023/27_july.webp'
import Image2_17 from '../asset/media_center/2023/29 November 2023/29_july (1).webp'
import Image2_18 from '../asset/media_center/2023/29 November 2023/29_july (2).webp'
import Image2_19 from '../asset/media_center/2023/29 November 2023/29_july (3).webp'
import Image2_20 from '../asset/media_center/2023/29 November 2023/29_july (4).webp'
import Image2_21 from '../asset/media_center/2023/14 September 2023/14_sep (1).webp'

//2025

import Image3_1 from '../asset/media_center/2025/10-02-2025/image (1).webp'
import Image3_2 from '../asset/media_center/2025/10-02-2025/image (2).webp'
import Image3_3 from '../asset/media_center/2025/10-02-2025/image (3).webp'
import Image3_4 from '../asset/media_center/2025/10-02-2025/image (4).webp'
import Image3_5 from '../asset/media_center/2025/23 march/image.webp'
import Image3_6 from '../asset/media_center/2025/march/13 march.webp'
import Image3_7 from '../asset/media_center/2025/march/26 march.webp'
import Image3_8 from '../asset/media_center/2025/march/26 march.webp'
import Image3_9 from '../asset/media_center/2025/march/27 march (1).webp'
import Image3_10 from '../asset/media_center/2025/march/27 march (1).webp'
import Image3_11 from '../asset/media_center/2025/march/27 march (2).webp'
import Image3_12 from '../asset/media_center/2025/march/27 march (3).webp'
import Image3_13 from '../asset/media_center/2025/march/28 march.webp'
import Image3_14 from '../asset/media_center/2025/march/28 march.webp'
import Image3_15 from '../asset/media_center/2025/march/30 march (1).webp'
import Image3_16 from '../asset/media_center/2025/march/30 march (2).webp'
import ImageJune1 from '../asset/media_center/2025/June/dainik_jagran_28_06_2025_pg04.webp';
import ImageJuly1 from '../asset/media_center/2025/July/hindustan_02_07_2025_pg04.webp';
import ImageJuly2 from '../asset/media_center/2025/July/hin22-07-25.webp';
import ImageJuly3 from '../asset/media_center/2025/July/dani22-07-25.webp';
import ImageJuly4 from '../asset/media_center/2025/July/prabhat22-07-25.webp';
import ImageJuly5 from '../asset/media_center/2025/July/danik bhasker24-07-25.webp';
import ImageJuly6 from '../asset/media_center/2025/July/prabhat24-07-25.webp';
import ImageJuly7 from '../asset/media_center/2025/July/danik29-07-25.webp';
import ImageJuly8 from '../asset/media_center/2025/July/prabhat29-07-25.webp';
import ImageJuly11 from '../asset/media_center/2025/July/hindustan30-07-25.webp';
import ImageJuly9 from '../asset/media_center/2025/July/prabahat30-07-25.webp';
import ImageJuly10 from '../asset/media_center/2025/July/danik30-07-25.webp';

// August

 import ImageAug from '../asset/media_center/2025/August/Danik_Bhasker.webp';
 import ImageAug1 from '../asset/media_center/2025/August/prabhat.webp'; 
 import ImageAug2 from '../asset/media_center/2025/August/hin28.webp';
 import ImageAug3 from '../asset/media_center/2025/August/prabhat28.webp';
 import ImageAug5 from '../asset/media_center/2025/August/hiniqc.webp';
 import ImageAug6 from '../asset/media_center/2025/August/hind30.webp';
 import ImageAug7 from '../asset/media_center/2025/August/hind30.webp';

//2026

 import ImageJan13 from '../asset/media_center/2026/DB_13_Jan_26.webp'
 import ImageJan13_1 from '../asset/media_center/2026/PK_13_Jan_26.webp'


function Page8() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Organize images by year and dates
  const images2026 = [
    { src: ImageJan13, date: '13/01/2026' },
    { src: ImageJan13_1, date: '13/01/2026' },

  ];
  const images2025 = [
    { src: ImageAug7, date: '30/08/2025' },
    { src: ImageAug6, date: '30/08/2025' },
    { src: ImageAug5, date: '30/08/2025' },
    { src: ImageAug3, date: '28/08/2025' },
    { src: ImageAug2, date: '28/08/2025' },
    { src: ImageAug1, date: '13/08/2025' },
    { src: ImageAug, date: '13/08/2025' },
    { src: ImageJuly11, date: '30/07/2025' },
    { src: ImageJuly9, date: '30/07/2025' },
    { src: ImageJuly10, date: '30/07/2025' },
    { src: ImageJuly7, date: '29/07/2025' },
    { src: ImageJuly8, date: '29/07/2025' },
    { src: ImageJuly5, date: '24/07/2025' },
    { src: ImageJuly6, date: '24/07/2025' },
    { src: ImageJuly1, date: '22/07/2025' },
    { src: ImageJuly2, date: '22/07/2025' },
    { src: ImageJuly3, date: '22/07/2025' },
    { src: ImageJuly4, date: '02/07/2025' },
    { src: ImageJune1, date: '28/06/2025' },
    { src: Image3_6, date: '13/03/2025' },
    { src: Image3_7, date: '26/03/2025' },
    { src: Image3_8, date: '26/03/2025' },
    { src: Image3_9, date: '27/03/2025' },
    { src: Image3_10, date: '27/03/2025' },
    { src: Image3_11, date: '27/03/2025' },
    { src: Image3_12, date: '27/03/2025' },
    { src: Image3_13, date: '28/03/2025' },
    { src: Image3_14, date: '28/03/2025' },
    { src: Image3_15, date: '30/03/2025' },
    { src: Image3_16, date: '30/03/2025' },
    { src: Image3_5, date: '21/03/2025' },
    { src: Image3_1, date: '10/02/2025' },
    { src: Image3_2, date: '10/02/2025' },
    { src: Image3_3, date: '10/02/2025' },
    { src: Image3_4, date: '10/02/2025' },
  ];

  const images2024 = [
    { src: Image48, date: '26/10/2024' },
    { src: Image47, date: '26/10/2024' },
    { src: Image46, date: '26/10/2024' },
    { src: Image45, date: '26/10/2024' },
    { src: Image44, date: '24/10/2024' },
    { src: Image43, date: '24/10/2024' },
    { src: Image42, date: '24/10/2024' },
    { src: Image41, date: '24/10/2024' },
    { src: Image40, date: '06/10/2024' },
    { src: Image39, date: '06/10/2024' },
    { src: Image38, date: '22/09/2024' },
    { src: Image37, date: '22/09/2024' },
    { src: Image36, date: '15/09/2024' },
    { src: Image35, date: '15/09/2024' },
    { src: Image34, date: '14/09/2024' },
    { src: Image33, date: '13/09/2024' },
    { src: Image32, date: '09/09/2024' },
    { src: Image31, date: '09/09/2024' },
    { src: Image30, date: '09/09/2024' },
    { src: Image29, date: '09/09/2024' },
    { src: Image28, date: '09/09/2024' },
    { src: Image27, date: '09/09/2024' },
    { src: Image26, date: '08/09/2024' },
    { src: Image25, date: '08/09/2024' },
    { src: Image24, date: '08/09/2024' },
    { src: Image23, date: '08/09/2024' },
    { src: Image22, date: '20/08/2024' },
    { src: Image21, date: '18/08/2024' },
    { src: Image20, date: '18/08/2024' },
    { src: Image19, date: '18/08/2024' },
    { src: Image18, date: '18/08/2024' },
    { src: Image17, date: '18/08/2024' },
    { src: Image16, date: '11/08/2024' },
    { src: Image15, date: '11/08/2024' },
    { src: Image14, date: '02/08/2024' },
    { src: Image13, date: '02/08/2024' },
    { src: Image12, date: '21/07/2024' },
    { src: Image11, date: '19/07/2024' },
    { src: Image10, date: '19/07/2024' },
    { src: Image9, date: '10/07/2024' },
    { src: Image8, date: '10/07/2024' },
    { src: Image7, date: '30/05/2024' },
    { src: Image6, date: '02/04/2024' },
    { src: Image1, date: '02/04/2024' },
    { src: Image2, date: '02/04/2024' },
    { src: Image3, date: '29/01/2024' },
    { src: Image4, date: '04/04/2024' },
    { src: Image5, date: '04/04/2024' }
  ];

  const images2023 = [
    { src: Image2_1, date: '10/12/2023' },
    { src: Image2_2, date: '10/12/2023' },
    { src: Image2_3, date: '10/12/2023' },
    { src: Image2_4, date: '14/09/2023' },
    { src: Image2_5, date: '14/09/2023' },
    { src: Image2_6, date: '14/09/2023' },
    { src: Image2_7, date: '15/09/2023' },
    { src: Image2_8, date: '15/09/2023' },
    { src: Image2_9, date: '15/09/2023' },
    { src: Image2_10, date: '21/07/2023' },
    { src: Image2_11, date: '21/07/2023' },
    { src: Image2_12, date: '21/07/2023' },
    { src: Image2_13, date: '21/07/2023' },
    { src: Image2_14, date: '21/07/2023' },
    { src: Image2_15, date: '24/07/2023' },
    { src: Image2_16, date: '27/07/2023' },
    { src: Image2_17, date: '29/07/2023' },
    { src: Image2_18, date: '29/07/2023' },
    { src: Image2_19, date: '29/07/2023' },
    { src: Image2_20, date: '29/07/2023' },
    { src: Image2_21, date: '14/09/2023' }
  ];

  const handleImageClick = (src) => {
    setModalImage(src);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const renderYearSection = (year, images) => (
    <>
      <div className="flexx" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="rectangle" style={{ 
          width: '150px', 
          height: '50px', 
          backgroundColor: '#780000', 
          overflow: 'hidden', 
          color: 'white', 
          fontSize: '35px', 
          textAlign: 'left',
          paddingLeft: '25px',
          paddingBottom: '18px' 
        }}>
          {year}
        </div>
        <div className="triangle" style={{ 
          width: 0, 
          height: 0, 
          borderTop: '50px solid transparent', 
          borderLeft: '50px solid #780000',
          paddingBottom: '1px'
        }}></div>
      </div>
      
      <div className="autoslider">
        <div className={`slide-track${year === '2023' ? '2' : year === '2025' ? '3' : ''}`}>
          {images.length === 0 ? (
            <div className="aslide">
              <p style={{textAlign:'center', color:'gray'}}>No media content yet</p>
            </div>
          ) : (
            <>
   {images.map((image, index) => (
  <div
    className="aslide"
    key={`${image.src}-${index}`}
    onClick={() => handleImageClick(image.src)}
  >
    <img src={image.src} alt={`Media clipping ${index + 1}`} />
    <p style={{ textAlign: 'left', color: 'gray' }}>
      Date : {image.date}
    </p>
  </div>
))}

</>
)}
</div>
</div>
</>
);

  return (
    <div className='slidecontainer' style={{ margin: '40px' }}>
      <Home/>
      <h2 style={{fontWeight:'bold'}}>Media Center</h2>

      {renderYearSection('2026', images2026)}
      {renderYearSection('2025', images2025)}
      {renderYearSection('2024', images2024)}
      {renderYearSection('2023', images2023)}

      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={modalImage} alt="Modal" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Page8;
