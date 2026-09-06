import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainContent from './components/Main';
import Admission_popup from './components/Admission_popup';
import StudentLens from './components/StudentLens';

// Pages

import Page1 from './page/page1';
import Page2 from './page/page2';
import About from './page/About';
import Page4 from './page/Page4';
import Page5 from './page/Page5';
import Page6 from './page/Page6';
import Page7 from './page/Page7';
import Page8 from './page/Page8';
import Page9 from './page/Page9';
import Page10 from './page/Page10';
import Page11 from './page/Page11';
import Page12 from './page/Page12';
import Page13 from './page/Page13';
import Page14 from './page/Page14';
import Page15 from './page/Page15';
import Page16 from './page/Page16';
import Page17 from './page/page17';
import Page18 from './page/Page18';
import Page19 from './page/Page19';
import Page20 from './page/Page20';
import Page21 from './page/Page21';
import Page22 from './page/Page22';
import Page23 from './page/Page23';
import Page24 from './page/Page24';
import Page25 from './page/Page25';
import Page26 from './page/Page26';
import Page27 from './page/Page27';
import Page28 from './page/Page28';
import Page29 from './page/Page29';
import Page30 from './page/Page30';
import Page31 from './page/Page31';
import Page32 from './page/Page32';
import Page33 from './page/Page33';
import Page34 from './page/Page34';
import Page35 from './page/Page35';
import Page36 from './page/Page36';
import Page37 from './page/Page37';
import Page38 from './page/Page38';
import Page39 from './page/Page39';
import Page40 from './page/Page40';
import Page41 from './page/Page41';
import Page42 from './page/Page42';
import Page43 from './page/Page43';
import Page44 from './page/Page44';
import Page45 from './page/Page45';
import Page46 from './page/Page46';
import Page47 from './page/Page47';
import Page48 from './page/Page48';
import Page49 from './page/Page49';
import Page50 from './page/Page50';
import Page51 from './page/Page51';
import Page52 from './page/Page52';
import Page53 from './page/page53';
import Page54 from './page/Page54';
import Page112 from './page/page112';
import PKAHANI from './page/PKAHANI';
import Wastemanegment from './page/Wastemanegment';
import Project_Shield from './page/Project_Shield';
import Pbord from './page/Pbord';
import FreeTraining from './page/FreeTraining';
import Interaction from './page/Interaction';
import Aiworkshop from './page/Aiworkshop';
import PBOS from './page/PBOS';
import Nikon from './page/Nikon';
import HindiDiwas_25 from './page/HindiDiwas_25';
import CampusConnection from './page/CampusConnection';
import GauraiyaDiwas from './page/GauraiyaDiwas';
import JagranSpeechCompetition from './page/JagranSpeechCompetition';
import VCMeet_2026 from './page/VCMeet_2026';
import Student_Interaction from './page/Student_Interaction';
import Youth_Day from './page/Youth_Day';
import IQACTrainingProgram from './page/IQACTrainingProgram';
import VJDivas from './page/VJDivas';
import Seminar from './page/Seminar';
import Conference from './page/Conference';
import SmartClass from './page/SmartClass';
import Capacity_Building from './page/Capacity_Building';
import Annual_Day from './page/Annual_Day';
import CIPM_Student_Visit from './page/CIPM_Student_Visit';
import Health from './page/Health';
import AdminApp from './admin/AdminApp';
import CmsPage from './page/CmsPage';



// News
import News1 from './News/News1';
import News2 from './News/News2';
import News3 from './News/News3';
import News4 from './News/News4';
import News5 from './News/News5';
import News6 from './News/News6';
import News7 from './News/News7';

function App() {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const adShown = localStorage.getItem('adShown');
    if (!adShown) {
      setShowAd(true);
      localStorage.setItem('adShown', 'true');
    }
  }, []);

  const handleCloseAd = () => setShowAd(false);

  return (
    <>
    
          {showAd && <Admission_popup onClose={handleCloseAd} />}

      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<MainContent />} />
          <Route path="/Capacity_Building" element={<Capacity_Building/>} />
          <Route path="/Annual_Day" element={<Annual_Day/>} />
          <Route path="/CIPM_Student_Visit" element={<CIPM_Student_Visit />} />
          <Route path="/" element={<StudentLens />} />
          <Route path="/MA" element={<Page1 />} />
          <Route path="/PhD" element={<Page2 />} />
          <Route path="/About" element={<About />} />
          <Route path="/Staff" element={<Page4 />} />
          <Route path="/Faculty" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/FreeTraining" element={<FreeTraining />} />
          <Route path="/RoleOfSJMC" element={<Page7 />} />
          <Route path="/Media_Center" element={<Page8 />} />
          <Route path="/Founder_Director" element={<Page9 />} />
          <Route path="/Careers" element={<Page10 />} />
          <Route path="/Vision_and_mission" element={<Page11 />} />
          <Route path="/Studio" element={<Page12 />} />
          <Route path="/Media_lab" element={<Page13 />} />
          <Route path="/Library" element={<Page14 />} />
          <Route path="/page15" element={<Page15 />} />
          <Route path="/page16" element={<Page16 />} />
          <Route path="/Disaster_management" element={<Page17 />} />
          <Route path="/Scipt_writing" element={<Page18 />} />
          <Route path="/Digital_education" element={<Page19 />} />
          <Route path="/Film_screening" element={<Page20 />} />
          <Route path="/Refresher_training" element={<Page21 />} />
          <Route path="/Student_activities" element={<Page22 />} />
          <Route path="/AdvisoryCommittee" element={<Page23 />} />
          <Route path="/Some_moments" element={<Page24 />} />
          <Route path="/Consultant" element={<Page25 />} />
          <Route path="/Page26" element={<Page26 />} />
          <Route path="/Page27" element={<Page27 />} />
          <Route path="/Page28" element={<Page28 />} />
          <Route path="/Page29" element={<Page29 />} />
          <Route path="/Page30" element={<Page30 />} />
          <Route path="/upcomingEvents" element={<Page31 />} />
          <Route path="/Page32" element={<Page32 />} />
          <Route path="/Page33" element={<Page33 />} />
          <Route path="/Page34" element={<Page34 />} />
          <Route path="/Page35" element={<Page35 />} />
          <Route path="/Page36" element={<Page36 />} />
          <Route path="/Page37" element={<Page37 />} />
          <Route path="/Page54" element={<Page54 />} />
          <Route path="/Health" element={<Health />} />
          <Route path="/Pbord" element={<Pbord />} />
          <Route path="/PBOS" element={<PBOS />} />
          <Route path="/Nikon" element={<Nikon />} />
          <Route path="/HindiDiwas_25" element={<HindiDiwas_25 />} />
          <Route path="/CampusConnection" element={<CampusConnection />} />
          <Route path="/GauraiyaDiwas" element={<GauraiyaDiwas />} />
          <Route path="/JagranSpeechCompetition" element={<JagranSpeechCompetition />} />
          <Route path="/IQACTrainingProgram" element={<IQACTrainingProgram />} />
          <Route path="/VJDivas" element={<VJDivas />} />
          <Route path="/Page38" element={<Page38 />} />
          <Route path="/Page39" element={<Page39 />} />
          <Route path="/Page40" element={<Page40 />} />
          <Route path="/Page41" element={<Page41 />} />
          <Route path="/Page42" element={<Page42 />} />
          <Route path="/Page112" element={<Page112 />} />
          <Route path="/Page43" element={<Page43 />} />
          <Route path="/Page44" element={<Page44 />} />
          <Route path="/Page45" element={<Page45 />} />
          <Route path="/Page46" element={<Page46 />} />
          <Route path="/Page47" element={<Page47 />} />
          <Route path="/Page48" element={<Page48 />} />
          <Route path="/Page49" element={<Page49 />} />
          <Route path="/Page50" element={<Page50 />} />
          <Route path="/PKAHANI" element={<PKAHANI />} />
          <Route path="/Interaction" element={<Interaction />} />
          <Route path="/Aiworkshop" element={<Aiworkshop />} />
          <Route path="/Wastemanegment" element={<Wastemanegment />} />
          <Route path="/Project_Shield" element={<Project_Shield />} />
          <Route path="/Page51" element={<Page51 />} />
          <Route path="/GuestFaculty" element={<Page52 />} />
          <Route path="/board-of-studies" element={<Page53 />} />
          <Route path="/Seminar" element={<Seminar />} />
          <Route path="/Conference" element={<Conference />} />
          <Route path="/SmartClass" element={<SmartClass />} />
          <Route path="/VCMeet_2026" element={<VCMeet_2026 />} />
          <Route path="/Student_Interaction" element={<Student_Interaction />} />
          <Route path="/Youth_Day" element={<Youth_Day/>} />

          <Route path="/News1" element={<News1 />} />
          <Route path="/News2" element={<News2 />} />
          <Route path="/News3" element={<News3 />} />
          <Route path="/News4" element={<News4 />} />
          <Route path="/News5" element={<News5 />} />
          <Route path="/News6" element={<News6 />} />
          <Route path="/News7" element={<News7 />} />
          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="/content/:slug" element={<CmsPage />} />



         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
