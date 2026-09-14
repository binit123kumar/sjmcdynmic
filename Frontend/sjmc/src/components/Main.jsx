import React, { useState, useEffect } from 'react';
import ImageSlider from '../components/Slider'
import BlinkingNews from '../components/Blink'
import './styles/styles.css'
import imgAbout from '../asset/about.webp'
import { NavLink } from 'react-router-dom';
import Toolbar from './Toolbar';
import Header from './Header';
import myImage from '../asset/myImage.webp';
import Book from '../asset/events.webp'
import g1 from '../asset/slide1.webp';
import g2 from '../asset/slide2.webp';
import g3 from '../asset/slide3.webp';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Course1 from '../asset/c1.pdf'
import Course2 from '../asset/c2.pdf'
import Course3 from '../asset/c3.pdf'
import Course4 from '../asset/c4.pdf'
import Course5 from '../asset/c5.pdf'
import Certificates from '../asset/certificate.pdf'
import DisasterImage from '../asset/disaster_management.webp'
import AnnualReport1 from '../asset/annual_report_1.pdf'
import AnnualReport2 from '../asset/annual_report_2.pdf'
import course1 from '../asset/c1.pdf'
import course2 from '../asset/c2.pdf'
import course3 from '../asset/c3.pdf'
import course4 from '../asset/c4.pdf'
import Gif from '../asset/newicon.gif'
import course5 from '../asset/c5.pdf'
import './main.css'
import ScriptWritingDay from '../asset/Script seminar/scriptSeminar1.webp'
import DigitalEd from '../asset/Digital Education/digitaled (9).webp'
import Refresher from '../asset/refresher/Refresher (7).webp'
import Film from '../asset/film screening/film (3).webp'
import Students from '../asset/Student activities/students (2).webp'
import Hindi_divas from '../asset/Our gallery/Hindi Diwas/image (2).webp'
import Wetland from '../asset/Our gallery/wetlands_Workshop/poster.webp'
import MOU from '../asset/MOU/2.webp';
import Youth_cover from '../asset/Our gallery/youth as co creators/banner for gallery title.webp'
import Tvbroadcasting_cover from '../asset/Our gallery/Bhartiye tv prasaran -14-09-24/BANNER for title only.webp'
import Wetland_pdf from '../asset/Our gallery/wetlands_Workshop/1.pdf'
import Orientation from '../asset/Our gallery/Orientation/orientation (4).webp'
import Orientation_pdf from '../asset/News/orientation_sjmc.pdf'
import Space_day from '../asset/Our gallery/space_day/space_day (3).webp'
import Free_Course from '../asset/Our gallery/Course/banner.webp'
import Screen_writing from '../asset/Our gallery/screen writing/image (1).webp'
import Resurgent_bharat from '../asset/Our gallery/resurgent bharat/image (2).webp'
import BBC_talk from '../asset/Our gallery/talk with bbc/image (4).webp'
import Prabhat_akhbar from '../asset/Our gallery/prabhat akhbar/image (1).webp'
import Univ from '../asset/Our gallery/univ/image (1).webp'
import Unicef from '../asset/Our gallery/unicef/banner.webp'
import Film_class from '../asset/Our gallery/FILM MASTERCLASS/image (2).webp'
import March25 from '../asset/Our gallery/25 march/IMG-20250330-WA0042.webp'
import March26 from '../asset/Our gallery/26 march/IMG-20250330-WA0058.webp'
import March27 from '../asset/Our gallery/Guru Dakshata program/IMG-20250330-WA0031.webp'
import MOOC_Training4 from '../asset/News/28 march.pdf'
import PROJECT_SHIELD from '../asset/News/PR_120825.pdf'
import MOOC_Training3 from '../asset/News/27 march.pdf'
import MOOC_Training2 from '../asset/News/26 march.pdf'
import MOOC_Training1 from '../asset/News/25 march.pdf'
import Film_masterclass from '../asset/News/PRmarch23.docx'
import Women_Collab from '../asset/News/Women_Incubation.docx'
import Space_day_pdf from '../asset/News/PR (August 8, 2024).pdf'
import Bookistan from '../asset/Our gallery/Bookistan/image (2).webp'
import aryabhatta_cover from '../asset/Our gallery/aryabhatta on space day/image (1).webp'
import Aryabhatta_times from '../asset/Our gallery/aryabhatta times/image (4).webp'
import PRO_img from '../asset/Our gallery/PRO/banner.webp'
import PRO1_img from '../asset/Our gallery/PRO1/img1.webp'
import PBOS_img from '../asset/Our gallery/PBOS/img1.webp'
import Nikon_img from '../asset/Our gallery/Nikon/img.webp'
import HindiDiwas_25_img from '../asset/Our gallery/HindiDiwas_25/img1.webp'
import Pbord_img from '../asset/Our gallery/Pbord/img1.webp'
import CampusConnection_img from '../asset/Our gallery/CampusConnection/img2.webp'
import GauraiyaDiwas_img from '../asset/Our gallery/GauraiyaDiwas/img1.webp'
import JagranSpeechCompetition_img from '../asset/Our gallery/JagranSpeechCompetition/img1.webp'
import IQACTrainingProgram_img from '../asset/Our gallery/IQACTrainingProgram/img1.webp'
import VJDivas_img from '../asset/Our gallery/VJDivas/img1.webp'
import PKAHANI_img from '../asset/Our gallery/PKAHANI/k1.webp'
import Wastemanegment_img from '../asset/Our gallery/Wastemanegment/k1.webp'
import Project_Shield_img from '../asset/Our gallery/Project_Shield/k1.webp'
import Aids_img from '../asset/Our gallery/aids/banner.webp'
import Bookistan_club from '../asset/News/Bookistan club.pdf'
import Bookistan_pdf from '../asset/News/Parsai (PR 17 August).pdf'
import space_day_pr_pdf from '../asset/News/PR_National_Space_Day.pdf'
import BroadcastingLecture from '../asset/News/PR (14 Sep).pdf'
import aryabhattaTimes from '../asset/News/Aryabhatta_time_launch.pdf'
import Youth_pdf from '../asset/News/youth as co creators pr final.pdf'
import Pro_pdf from '../asset/News/PRO_PR (Sep 28).pdf'
import Free_Course_pdf from '../asset/News/PR (October 22).pdf'
import Announcement1 from '../News/Announcement1.pdf'
import Announcement2 from '../News/Announcement2.pdf'
import Announcement3 from '../News/Announcement3.pdf'
import Announcement4 from '../News/Announcement4.pdf'
import Aids_reel_pdf from '../asset/News/एसजेएमसी में एड्स जागरूकता पर व्याख्यान का हुआ आयोजन.pdf'
import Syllabus from '../News/SJMC Prospectus 2026.pdf'
import Home from '../components/HomeButton'
import Clubs from '../components/ClubsButton'
import SocialMediaPopup from '../components/ClubsButton'
import MCLogo from '../asset/media_center_logo.webp'
import AryabhattaTimes_Logo from '../asset/AryabhattaTimes_logo.webp'
import Form from '../components/Form'
//import Advertisement from '../components/Admission_popup'
import Track from '../components/traffic'
import Interaction_img from '../asset/Our gallery/Interaction/img1.webp'
import Aiworkshop_img from '../asset/Our gallery/Aiworkshop/img1.webp'
import VCMeet_2026_img from '../asset/Our gallery/VC Meet_2026/img5.webp'
import Student_Interaction_img from '../asset/Our gallery/Student_Interaction_2026/img1.webp'
import Youth_Day_img from '../asset/Our gallery/youthday_2026/1.webp'
import StudentLens from '../components/StudentLens'
import Capacity_Building_img from '../asset/Our gallery/Still/16.webp'
import Annual_Day_img from '../asset/Our gallery/Annual_Day/1.webp'
import CIPM_Student_Visit_img from '../asset/Our gallery/CIPM_Student_Visit/16.webp'
import TvBanner from '../asset/Our gallery/menstrual health and hygiene/TV Banner.webp';
import HomeUpdates from './HomeUpdates';
import HomeAbout from './HomeAbout';

const API_BASE = (process.env.REACT_APP_API_URL || 'https://localhost:7050/api').replace(/\/api\/?$/, '');


const legacyGalleryItems = [
    {
        id: 119,
        image: TvBanner,
        title: "Menstrual Health and Hygiene | 06th June 2026",
        link: "/Health"
    },

{
        id: 118,
        image: Annual_Day_img,
        title: "Annual Day 2026 | 19 Mar 2026",
        link: "/Annual_Day"
    },
{
        id: 117,
        image: Capacity_Building_img,
        title: "Capacity Building for Mental Health | 21 Feb 2026",
        link: "/Capacity_Building"
    },
    {
        id: 116,
        image: CIPM_Student_Visit_img,
        title: "CIPM Student Visit | 29 Jan 2026",
        link: "/CIPM_Student_Visit"
    },
    {
        id: 115,
        image: Youth_Day_img,
        title: "National Youth Day 2026 |12 Jan 2026",
        link: "/Youth_Day"
    },

    {
        id: 114,
        image: Student_Interaction_img,
        title: "Student Interaction 2026 | 07 Jan 2026",
        link: "/Student_Interaction"
    },

    {
        id: 113,
        image: VCMeet_2026_img,
        title: " VC MEET 2025| 22-23 Dec 2025",
        link: "/VCMeet_2026"
    },

    {
        id: 69,
        image: Aiworkshop_img,
        title: "Training  India's  Workforce to Ai-ready| 27 Aug 2025",
        link: "/Aiworkshop"
    },
     
    {
        id: 68,
        image: Interaction_img,
        title: "Interaction On Film| 22 Aug 2025",
        link: "/Interaction"
    },
 
     {
        id: 67,
        image: Project_Shield_img,
        title: "OUTSMART THE SCAMMERS PROJECT SHIELD | 12 Aug 2025",
        link: "/Project_Shield"
    },
    
     {
        id: 66,
        image: Wastemanegment_img,
        title: "Training Program for Skill Development on Waste Management",
        link: "/Wastemanegment"
    },
    {
        id: 64,
        image: Nikon_img,
        title: "One Day Workshop On Lighting And Grammar Of Photography| 07 Aug 2025",
        link: "/Nikon"
     },      
    {
        id: 57,
        image: PBOS_img,
        title: "BOS MEETING | 26 July 2025",
        link: "/PBOS"
     }, 
      {
        id: 54,
        image: PRO1_img,
        title: "🎬 Master Class On Scene By Actor And Director | 24 July 2025",
        link: "/Page54"
    },
    
     {
        id: 55,
        image: PKAHANI_img,
        title: "Kahani Radio Ki: Chronicles of Indian Broadcasting | 23 July 2025",
        link: "/PKAHANI"
    },
     {
        id: 61,
        image: JagranSpeechCompetition_img,
        title: "Jagran Speech Competition | 15 July 2025",
        link: "JagranSpeechCompetition"
    }, 
    {
        id: 58,
        image: VJDivas_img,
        title: "विश्व जनसंख्या दिवस के अवसर पर नुक्कड़ नाटक| 11 July 2025",
        link: "/VJDivas"
    }, 
    {
        id: 59,
        image: CampusConnection_img,
        title: "Campus Connection University Outreach program by Akashvani Patna (FM 102.5) | 10 July 2025",
        link: "/CampusConnection"
    }, 
    {
        id: 65,
        image: HindiDiwas_25_img,
        title: "Hindi Patrakarita Udbhav Diwas | 30 May 2025",
        link: "/HindiDiwas_25"
     }, 
    {
        id: 56,
        image: Pbord_img,
        title: "Board of Studies Meeting | 07 May 2025",
        link: "/Pbord"
    },
    {
        id: 62,
        image: GauraiyaDiwas_img,
        title: "Gauraiya Diwas | 30 April 2025",
        link: "/GauraiyaDiwas"
    },   

    {
        id: 63,
        image: IQACTrainingProgram_img,
        title: "IQAC Training Program | 07 Feb 2025",
        link: "/IQACTrainingProgram"
    }, 
    
    {
        id: 28,
        image: March27,
        title: "MOOC Training Program Day 3",
        link: "/Page51"
    },

    {
        id: 27,
        image: March26,
        title: "MOOC Training Program Day 2",
        link: "/Page50"
    },

    {
        id: 26,
        image: March25,
        title: "MOOC Training Program Day 1",
        link: "/Page49"
    },
    {
        id: 1,
        image: Film_class,
        title: "Film Acting Masterclass by AKU & BSFD & FC",
        link: "/Page48"
    },

    {
        id: 2,
        image: Unicef,
        title: "Communication For Social and Behavior Change",
        link: "/Page47"
    },

    {
        id: 3,
        image: Univ,
        title: "Collaboration with association of Indian University",
        link: "/Page46"
    },

    {
        id: 4,
        image: Prabhat_akhbar,
        title: "Visit To Prabhat Khabar",
        link: "/Page45"
    },

    {
        id: 5,
        image: BBC_talk,
        title: "Talk with BBC ( 29-01-2025)",
        link: "/Page44"
    },

    {
        id: 6,
        image: Resurgent_bharat,
        title: "Resurgent Bharat",
        link: "/Page43"
    },

    {
        id: 7,
        image: Screen_writing,
        title: "Screen Writing and its Technical Aspects",
        link: "/Page42"
    },

    {
        id: 112,
        image: Screen_writing,
        title: "Screen Writing and its Technical Aspects",
        link: "/Page112"
    },

    {
        id: 8,
        image: Free_Course,
        title: "Free Photography and Film Making Training Course",
        link: "/Page40"
    },

    {
        id: 9,
        image: Aids_img,
        title: "Role of Youth in Combating AIDS",
        link: "/Page39"
     },

    {
        id: 10,
        image: PRO_img,
        title: "Rules and Responsiblities of PRO",
        link: "/Page37"
    },    
    {
        id: 11,
        image: Aryabhatta_times,
        title: "Aryabhatta times",
        link: "/Page33"
    },
    {
        id: 12,
        image: Tvbroadcasting_cover,
        title: "Indian TV Broadcasting and Hindi",
        link: "/Page35"
    },
    {
        id: 13,
        image: Youth_cover,
        title: "Youth as Co-Creators",
        link: "/Page34"
    },
    {
        id: 14,
        image: aryabhatta_cover,
        title: "The Great Aryabhatta Rememberance",
        link: "/Page32"
    },
    {
        id: 15,
        image: Space_day,
        title: "National Space Day 2024",
        link: "/Page30"
    },
    {
        id: 16,
        image: Orientation,
        title: "Orientation at SJMC 2024",
        link: "/Page29"
    },
    {
        id: 17,
        image: Wetland,
        title: "Wetlands For Life Training Workshop",
        link: "/Page28"
    },
    {
        id: 18,
        image: MOU,
        title: "MOU Between BSMFC & SJMC (AKU)",
        link: "/Page27"
    },
    {
        id: 19,
        image: Hindi_divas,
        title: "Hindi Patrakarita Divas",
        link: "/Page26"
    },
    {
        id: 20,
        image: Film,
        title: "Film Screening of Student Films (2021-2023)",
        link: "/Film_Screening"
    },
    {
        id: 21,
        image: Refresher,
        title: "Refresher Training Programme for IPRD Officials",
        link: "/Refresher_training"
    },
    {
        id: 22,
        image: DigitalEd,
        title: "National Workshop on Digital Education",
        link: "/Digital_education"
    },
    {
        id: 23,
        image: ScriptWritingDay,
        title: "Script Writing Workshop",
        link: "/Scipt_writing"
    },
    {
        id: 24,
        image: DisasterImage,
        title: "Disaster Management Seminar for Media Persons",
        link: "/Disaster_management"
    },
    {
        id: 25,
        image: Students,
        title: "Student Activities",
        link: "/Student_activities"
    },
    
 
];

const MainContent = () => {
    

    /*const [showAd, setShowAd] = useState(true);         //for popup admission ad

    const handleCloseAd = () => {
      setShowAd(false);
    };*/


    const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
    const [facultyDropdownOpen, setFacultyDropdownOpen] = useState(false);
    const [pgDiplomaDropdownOpen, setPgDiplomaDropdownOpen] = useState(false);
    const [annualDropdownOpen, setannualDropdownOpen] = useState(false);
    const [ResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
    const [galleryItems, setGalleryItems] = useState([]);
    const [galleryLoading, setGalleryLoading] = useState(true);
    const [galleryError, setGalleryError] = useState('');

    useEffect(() => {
        let mounted = true;
        fetch(`${API_BASE}/api/gallery?activeOnly=true`)
            .then((response) => {
                if (!response.ok) throw new Error('Unable to load gallery.');
                return response.json();
            })
            .then((json) => {
                if (!mounted) return;
                setGalleryItems((json.data || []).filter((item) => item.isActive));
            })
            .catch(() => {
                if (mounted) setGalleryError('Gallery is temporarily unavailable.');
            })
            .finally(() => {
                if (mounted) setGalleryLoading(false);
            });
        return () => { mounted = false; };
    }, []);
    

    const toggleFacultyDropdown = () => {
        if (pgDiplomaDropdownOpen) {
            setPgDiplomaDropdownOpen(false);
        }
        setFacultyDropdownOpen(!facultyDropdownOpen);
    };

    const togglePgdDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation
        setPgDiplomaDropdownOpen(!pgDiplomaDropdownOpen);
    };
    const toggleannualdDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation
        setannualDropdownOpen(!annualDropdownOpen);
    };
    const toggleResourcesdDropdown = (e) => {
        e.stopPropagation(); // Stop event propagation
        setResourcesDropdownOpen(!ResourcesDropdownOpen);
    };

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
                // You can optionally show a notification or provide feedback to the user here
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);
                // Handle error, if any
            });
    };

    const [announcements, setAnnouncements] = useState([
        { id: 1, message: 'Important update regarding our new product launch!' },
        { id: 2, message: 'Limited time offer! Get 20% off your next purchase.' },
      ]);
    
      
    
      useEffect(() => {
        const announcementInterval = setInterval(() => {
          setCurrentAnnouncementIndex((prevIndex) =>
            (prevIndex + 1) % announcements.length
          );
        }, 3000); // Change the interval time as needed (in milliseconds)
    
        return () => clearInterval(announcementInterval);
      }, [announcements]);
    
      const currentAnnouncement = announcements[currentAnnouncementIndex];
    

    const navigate = useNavigate();

    const ugc = () => {
        navigate('https://www.ugc.gov.in/');
      };
    

    const nda = useNavigate('https://nad.gov.in/ ');
    
    const nptel = useNavigate('https://nptel.ac.in/ ');

    const swayam = useNavigate('https://swayam.gov.in/ ');

    const swayamprabha = useNavigate('https://swayamprabha.gov.in/  ');

    const egyankosh = useNavigate('https://egyankosh.ac.in/ ');

    const inflibnet = useNavigate('https://www.inflibnet.ac.in/  ');

    const epathshala = useNavigate('https://epathshala.nic.in/');

    const isro = useNavigate('https://www.isro.gov.in/ ');

    return (
        <>


       
        {/* <Toolbar /> */}
      <Header />
      
      <Track/>
        <main className="container py-4">
            <ul className="nav nav-pills nav-fill nav-list-style">
                 
                <li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>About Department</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><NavLink to={"/About"} className="dropdown-item">About us</NavLink></li>
            <li><NavLink to={"/Vision_and_mission"} className="dropdown-item">Vision & Mission</NavLink></li>
            <li><NavLink to={"/RoleOfSJMC"} className="dropdown-item">Role of SJMC</NavLink></li>
            <li><NavLink to={"/Some_Moments"} className="dropdown-item">Our Gallery</NavLink></li>
            <li><NavLink to={"/Founder_Director"} className="dropdown-item">Founder Director</NavLink></li>
            <li><NavLink to={"/Careers"} className="dropdown-item">Careers</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
                </li>

<li className="nav-item" role="presentation">
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
        <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Infrastructure</a>
        <ul className="dropdown-menu" aria-labelledby="contact-tab">
            <li><NavLink to={"/Studio"} className="dropdown-item">Audio/Visual/Virtual Studio</NavLink></li>
            <li><NavLink to={"/Media_lab"} className="dropdown-item">Print/Digital Media Lab</NavLink></li>
            <li><NavLink to={"/Library"} className="dropdown-item">Library</NavLink></li>

           <li><NavLink to="/SmartClass" className="dropdown-item">Smart Class</NavLink></li>
           <li><NavLink to="/Conference" className="dropdown-item">Conference Room</NavLink></li>
            <li><NavLink to="/Seminar" className="dropdown-item">Seminar Hall</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
        </ul>
    </div>
</li>
<li className="nav-item" role="presentation">
            <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                <a style={{fontWeight:'bold'}} className="nav-link dropdown-toggle text-reset" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Academic Program</a>
                <ul className="dropdown-menu" aria-labelledby="contact-tab">
                    <li><a href="/MA" className="dropdown-item">M.A. in Journalism and Mass communication</a></li>
                    <li><a href="/PhD" className="dropdown-item">Ph.D. in Mass communication</a></li>
                    <li  onClick={togglePgdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">PG Courses</a>
                        <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                            <li><a href={Course5} target='_blank' className="dropdown-item">Development Communication</a></li>
                            <li><a href={Course4} target='_blank' className="dropdown-item">Film Making</a></li>
                            <li><a href={Course1} target='_blank' className="dropdown-item"> Digital and Online journalism</a></li>
                            <li><a href={Course3} target='_blank' className="dropdown-item">Photography</a></li>
                            <li><a href={Course2} target='_blank' className="dropdown-item">Science Communication</a></li>
                        </ul>
                    <li><a href={Certificates} className="dropdown-item" target="_blank">Certificate Courses for Writing in Media</a></li>

                    </li>
                    <li><hr className="dropdown-divider" /></li>
                </ul>
            </div>
        </li>
{/*<li className="nav-item" role="presentation">
  <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
    <a style={{ fontWeight: 'bold' }}className="nav-link dropdown-toggle text-reset" 
    id="faculty-tab"data-bs-toggle="dropdown"href="#Faculty"role="tab"aria-controls="faculty"aria-selected="false"onClick={toggleFacultyDropdown}>
      Faculty/Staff
    </a>
<ul className="dropdown-menu" aria-labelledby="faculty-tab">
<li> <NavLink to="/Faculty" className="dropdown-item"> Head of Department</NavLink></li>
 <li> <NavLink to="/Consultant" className="dropdown-item"> Regular Faculty </NavLink></li>
<li> <NavLink to="/GuestFaculty" className="dropdown-item"> Guest Faculty </NavLink></li>
<li><NavLink to="/Staff" className="dropdown-item"> Staff</NavLink> </li><li> <hr className="dropdown-divider" /> </li>
</ul>
  </div>
</li>*/}

<li className="nav-item" role="presentation">
  <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
    <a
      style={{ fontWeight: 'bold' }}
      className="nav-link dropdown-toggle text-reset"
      id="faculty-tab"
      data-bs-toggle="dropdown"
      href="#Faculty"
      role="tab"
      aria-controls="faculty"
      aria-selected="false"
      onClick={toggleFacultyDropdown}
    >
      Faculty/Staff
    </a>
    <ul className="dropdown-menu" aria-labelledby="faculty-tab">
      <li>
        <NavLink to="/Faculty" className="dropdown-item">
          Head of Department
        </NavLink>
      </li>
      <li>
        <NavLink to="/Consultant" className="dropdown-item">
          Regular Faculty
        </NavLink>
      </li>
      <li>
        <NavLink to="/GuestFaculty" className="dropdown-item">
          Guest Faculty
        </NavLink>
      </li>
      <li>
        <NavLink to="/Staff" className="dropdown-item">
          Staff
        </NavLink>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
    </ul>
  </div>
</li>



    <li className="nav-item" role="presentation"> 
    <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
    <a style={{ fontWeight: 'bold' }}  className="nav-link dropdown-toggle text-reset"  id="annual-report-tab"  data-bs-toggle="dropdown"  href="#AnnualReport"  role="tab"
    aria-controls="annual-report"  aria-selected="false"  onClick={toggleFacultyDropdown}>Resources</a>

    <ul className="dropdown-menu" aria-labelledby="annual-report-tab">
     
      <li  onClick={toggleannualdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">Annual Report</a>
                            <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                             {/* Annual Reports */}
                         <li><NavLink to={AnnualReport1} target='_blank' className="dropdown-item">Annual Report 2022-23</NavLink></li>
                          <li><NavLink to={AnnualReport2} target='_blank' className="dropdown-item">Annual Report 2021-22</NavLink></li>
                        <li><hr className="dropdown-divider" /></li>
                        </ul>
                           </li>
      <li  onClick={toggleResourcesdDropdown}>
                        <a className="dropdown-item dropdown-toggle" style={{ cursor: 'pointer' }} data-bs-toggle="dropdown">eResources</a>
                        <ul className={`dropdown-menu ${pgDiplomaDropdownOpen ? 'show' : ''}`}>
                            <li><a href="https://www.ugc.gov.in/" className="dropdown-item">UGC</a></li>
                            <li><a href="https://www.nda.gov.in/" className="dropdown-item">NDA</a></li>
                            <li><a href="https://www.nptel.ac.in/" className="dropdown-item">NPTEL</a></li>
                            <li><a href="https://www.swayam.gov.in/" className="dropdown-item">SWAYAM</a></li>
                            <li><a href="https://www.swayamprabhay.gov.in/" className="dropdown-item">SWAYAM PRABHA</a></li>
                            <li><a href="https://egyankosh.ac.in/" className="dropdown-item">EGYANKOSH</a></li>
                            <li><a href="https://www.inflibnet.ac.in/" className="dropdown-item">INFLIBNET</a></li>
                            <li><a href="https://epathshala.nic.in/" className="dropdown-item">EPATHSHALA</a></li>
                            <li><a href="https://www.isro.gov.in/" className="dropdown-item">ISRO</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        </ul>
                         </li>
</ul>
  </div>
</li>

<li className="nav-item" role="presentation">
            <div className={`dropdown ${facultyDropdownOpen ? 'show' : ''}`}>
                <a style={{fontWeight:'bold',color: "inherit"}} className="nav-link dropdown-toggle dropdown-item text-reset text-decoration-none" id="contact-tab" data-bs-toggle="dropdown" href="#Facilities" role="tab" aria-controls="contact" aria-selected="false" onClick={toggleFacultyDropdown}>Committee</a>
                <ul className="dropdown-menu" aria-labelledby="faculty-tab">
                    <li><NavLink to="/AdvisoryCommittee" className="dropdown-item"> Academic Advisory Committee </NavLink></li>
                    <li> <NavLink to="/board-of-studies" className="dropdown-item"> Board of Studies</NavLink></li>
                </ul>
            </div>
        </li>
            </ul>
            
            <div className="tab-content" id="myTabContent">
                
<div className="tab-pane fade show tab-border active" id="home" role="tabpanel" aria-labelledby="home-tab" style={{margin:'10px', border:'none'}}>
    <div className='partent' style={{}}>
<div className='Box-About-1 home-main-col' style={{marginLeft:'-10px'}}> 
              <div style={{position:'relative', top:'13px'}}>
                <ImageSlider />
             </div>
            <HomeAbout />
            <div style={{ display: 'none' }}>
                <p style={{ paddingTop: "20px", textAlign:"justify", fontWeight:'bold'}}>
                School of Journalism and Mass Communication (SJMC) was established by Bihar government vide Cabinet decision 15/ पी 5- 09/ 2016-629 dated April 12, 2017. The then Rajya Sabha MP Shri Pavan K Verma contributed approximately Rs. nine crores from his MPLADs funds to set up the said institute, The DPR for which was prepared by Aryabhatta Knowledge University.The Bihar government has proposed to develop SJMC as the potential Centre of Excellence. SJMC will work with other national as well as international Centres to harmonize its journalism curricula in order to promote quality journalism education in the state Careers in Mass Communication are not only high paying but also bring in a great deal of job satisfaction and expression of creativity. </p>
                <p style={{ paddingTop: "20px", textAlign:"justify", fontWeight:'bold'}}>
                Journalism & Mass Communication has emerged as a major area of interest and has immensely contributed to the development & empowerment of society.
                </p>

                <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>The information technology revolution has significantly contributed to the expansion of mass media. It has also posed major challenges for students, teachers and practitioners of mass media. It is a challenge which we accept as an essential part of life at SJMC.</p>
                <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>Mass Communication is not limited to journalism alone. To a great extent mass media is a modern reality which covers all aspects of human life. Moreover, a great change can be observed in the concept of people working in mass media. Careers in Mass Communication are not only high paying but also bring in a great deal of job satisfaction and expression of creativity.</p>
                <p className="text-justify" style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>Generating a cadre of trained human resources specialized in understanding and addressing issues related to mass communication is one of the critical needs of the hour, and educational institutions have to play a crucial role in this regard. The institute would ensure tailored programmes to meet the needs of developing societies. This will make SJMC different from other institutes of Journalism &Mass Communication training in this state and elsewhere. This will also give a different identity and character to our alumni.</p>
                <p style={{ paddingTop: "20px" , textAlign:"justify" , fontWeight:'bold'}}>
                With this view, the School of Journalism &Mass Communication may come up with courses specifically aimed at teaching and research on Communication & Information system Establishment of this institute was essential because of the current trend of proliferation of media institutions in Bihar without appropriate curricula. Media scholars and professionals have over the years debated the benchmark for journalism curriculum of developing countries since the curricula differ structurally and pedagogically from one another.
                </p>
                <br></br>
                {/* <h5>Department Overview</h5>
                <table className="table table-bordered" style={{border:'2px' , margin:'3px'} }>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Established in</td>
                        <td>2017 (School of Journalism and Mass Communication </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Employee Strength</td>
                        <td>Faculty- 01 Staffs - 04</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold' }}>Student Strength</td>
                        <td>• M.A. in Journalism and Mass communication & Ph.D. in Mass   communication-51 <br></br>• PG-Students - 65 <br></br>• Certificate  Course in Writing for Media -20</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white', fontWeight:'bold'  }}>Placement 2021</td>
                        <td>x (tentative)</td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: 'maroon', color: 'white' , fontWeight:'bold' }}>Publications, Books & Patent (Last 4-Years)</td>
                        <td>Publications- Books -</td>
                    </tr>
                </table> */}

            </div>
        </div>


    <HomeUpdates />

    {/* Legacy static updates retained only as source material during migration. */}
<div className="home-sidebar-col"  style={{ display: 'none', marginTop:"10px", padding: "10px",textAlign:'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>        <div className='news-box' style={{ width: '100%', height: '550px',marginTop:"10px",   boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",padding:"10px 10px" , backgroundColor:"#F0F0F0",marginBottom:"10px" ,textAlign:'center',overflow:'auto',marginTop:'0px'}}>
        <h4 className='heading-news' style={{position:'sticky',top:'-8px',zIndex:'1'}}>News and Announcements</h4>
        <br />

        <div style={{marginTop:'-40px' , marginBottom:'10px'}}>

        {/* <a href="https://adms.akubihar.ac.in/" target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', marginTop:'25px' ,fontWeight:'bold',position:'relative',left:'10px'}}>    Admission 2025<img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} /> </a> */}

        <a href="https://adms.akubihar.ac.in/" target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', marginTop:'25px' ,fontWeight:'bold',position:'relative',left:'10px'}}>    Admission 2026 </a>
        <a href={Syllabus} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', fontWeight:'bold',position:'relative',left:'10px' }}>SJMC Prospectus 2026  </a>
        {/* /* <a href={MOOC_Training4} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Mastering MOOC Creation with Studio Shooting and AI-Powered Content at AKU <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */ }
        <a href={MOOC_Training4} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Mastering MOOC Creation with Studio Shooting and AI-Powered Content at AKU   </a>
        {/* <a href={MOOC_Training3} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}> MOOC Training Day 3: Focus on Engaging Content for Students <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
        <a href={MOOC_Training3} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}> MOOC Training Day 3: Focus on Engaging Content for Students </a>
        {/* <a href={MOOC_Training2} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU's MOOC Training Program Day 2  <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
         <a href={MOOC_Training2} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU's MOOC Training Program Day 2  </a>
        {/* <a href={MOOC_Training1} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>MOOC Training Program Begins at AKU <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
        <a href={MOOC_Training1} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>MOOC Training Program Begins at AKU</a>
        <a href={Film_masterclass} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Film Acting Masterclass by AKU & BSFD & FC </a>
        {/* <a href={Women_Collab} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU  Incubation Center Women Entrepreneur Collaboration with NSE <img src={Gif} alt="newicon" height="8" width="27" style={{ marginLeft: '5px', position:'relative'}} />  </a> */}
        <a href={Women_Collab} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>AKU  Incubation Center Women Entrepreneur Collaboration with NSE  </a>
        <a href={Free_Course_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Photography and Film Making Free Training Course 2024</a>
        <a href={Aids_reel_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>S.J.M.C. Hosts Lecture and Reels Competition on AIDS Awareness </a>
        <a href={Pro_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Lecture on Rules and Responsiblities of Public Relation Officer </a>
        <a href={aryabhattaTimes} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>'Aryabhatta Times' was launched at the SJMC </a>
        <a href={BroadcastingLecture} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Lecture on Indian TV Broadcasting and Hindi Celebrated on Hindi Day at AKU  </a>
        <a href={Youth_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px',position:'relative',left:'10px' }}>Youth as Co-creators 2024  </a>
        <a href={space_day_pr_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Great astronomer Aryabhatta remembered on National space day     </a>
        <a href={Bookistan_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Literary discussion on Harishankar Parsai     </a>
        <a href={Space_day_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>National Space Day Quiz & Speech Competition 2024      </a>
        <a href={Bookistan_club} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Bookistan Club at SJMC 2024     </a>
        <a href={Orientation_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Orientation at SJMC 2024      </a>
        <a href={Wetland_pdf} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', position:'relative',left:'10px' }}>Wetlands For Life - Training Workshop      </a>
        <a href="/News6" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Student Film Recognised.</a>
        <a href="/News4" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Open Mic on "Youth Icon of Bihar" </a>       
        <a href="/News7" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Discussion on Journalism at PBF  </a>       
        <a href="/News3" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Training Workshop for Media.</a>        
        <a href="/News2" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Human Rights Awareness</a>        
        <a href="/News1" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Street Play and Script Writing Contest </a>        
        <a href="/News5" className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Screening of Seven Films </a>        
        </div>

    </div>

 {/* Media Center */}


    <a href='/Media_Center' style={{width:'100%',position:'relative',right:'8px',textDecoration:'none'}}>
    <div style={{ width: '100%', height: '70px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0",margin:'10px', position:'relative',bottom:'5px' ,display:'flex'    }}>
    <div style={{ backgroundColor:'#780000',borderRadius:'50%',width:'50px', height:'98%'}}>
        <img src={MCLogo} style={{ width:'100%',height:'auto'}}></img>
    </div>
    <div style={{marginLeft:'15px',marginTop:'10px'}}>
        <h4 >Media Center</h4>
    </div>
    </div>
    </a>

 {/* Upcoming Events */}


    <a href='/upcomingEvents' style={{width:'100%',position:'relative',right:'8px',textDecoration:'none'}}>
    <div style={{ width: '100%', height: '70px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0",margin:'10px', position:'relative',bottom:'5px' ,display:'flex'    }}>
    <div style={{ backgroundColor:'#780000',borderRadius:'50%',width:'50px', height:'98%'}}>
        <img src={Book} style={{ width:'75%',height:'75%',position:'relative',top:'.2rem'}}></img>
        
        </div>
    <div style={{marginLeft:'15px',marginTop:'10px'}}><h4 >Upcoming Events</h4>
    </div>
    </div>
    </a>

 {/* Aryabhatta Times */}


    <a href='/page38' style={{width:'100%',position:'relative',right:'8px',textDecoration:'none'}}>
    <div style={{ width: '100%', height: '70px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0",margin:'10px', position:'relative',bottom:'5px' ,display:'flex'    }}>
    <div style={{ backgroundColor:'#780000',borderRadius:'50%',width:'50px', height:'98%'}}>
         <img src={AryabhattaTimes_Logo} style={{ width:'75%',height:'75%',position:'relative',top:'.2rem'}}></img>    
    </div>
    <div style={{marginLeft:'15px',marginTop:'10px'}}><h4 >Aryabhatta Times</h4>
    </div>
    </div>
    </a>

 {/* Free Trainning */}


    <a href='/page112' style={{width:'100%',position:'relative',right:'8px',textDecoration:'none'}}>
    <div style={{ width: '100%', height: '70px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0",margin:'10px', position:'relative',bottom:'5px' ,display:'flex'    }}>
    <div style={{ backgroundColor:'#780000',borderRadius:'50%',width:'50px', height:'98%'}}>
        <img src={MCLogo} style={{ width:'100%',height:'auto'}}></img>    
    </div>
    <div style={{marginLeft:'15px',marginTop:'10px'}}>    
        <h4 >Free Trainning</h4>
    </div>
    </div>
    </a>


 {/* Important Links */}

    <div style={{ width: '100%', height: '750px',boxShadow:'0 4px 8px rgb(0,0,0,0.5)', padding:"10px 10px"  , backgroundColor:"#F0F0F0" }}>
        <h4 className='heading-news'>Important Links</h4>
        <a href={Announcement1} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px', marginTop:'25px' }}>Notice About Academic Advisory Committee </a>   
        <a href={Announcement2} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Board Of Studies  </a>      
        <a href={Announcement3} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>Approved Syllabus Of Courses Offered By SJMC  </a>     
        <a href={Announcement4} target='_blank' className='text-decoration-none' style={{ display: 'block', marginBottom: '20px' }}>MoU between SJMC & BIPARD  </a>


            </div>
        </div>
    </div>
</div>
<div className="tab-pane fade tab-border" id="profile" role="tabpanel" aria-labelledby="contact-tab">
    <br />
    <h6>VISION:</h6>
    <p>Department of School Of Journalism and Mass communication is to nurture, produce and create innovative young minds of  global standards for media education, research, extension and training, using state-of-the-art technology for building a knowledge driven information society, contributing to human development, empowerment and participatory democracy, anchored in pluralism, universal values & ethics and to attain and remain a centre of excellence.</p>
    <h6>Mission:</h6>
    <p>To create a dynamic learning and working environment which nurtures new ideas, creativity, research and scholarship and develops leaders and innovators in the domain of media and mass communication. anc become a leading national institution by offering the young aspiring media professionals an interdisciplinary and dynamic milieu where they can develop comprehensive and critical awareness of diverse communication, information and media.</p>
</div>
<div className="tab-pane fade tab-border" id="Program" role="tabpanel" aria-labelledby="contact-tab">
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    M.A. in Journalism and Mass Communication
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h5>a. Objectives of the Program:</h5>
                    <p>b. The ever converging world of Mass Media has fuelled the need for multi-tasking and multi-talented media professionals. While SJMC always aims at high academic standards, The extra-curricular activities and innovative research, seminars, etc. Department of School of Journalism and Mass Communication enable the students to develop hands-on-pre-requisite skills, interact with industry experts and exchange ideas with students from other institutes and backgrounds. All this all together at SJMC makes an amalgamation of brilliant ideas, top class academic standards and best in class facilities. School of Journalism and Mass Communication is accustomed to experiment with various innovative academic activities to enhance the media understanding among students.</p>

                    <ul>
                        <li>Program Outcomes:
                            <p>Program will develop the understanding of Journalism responsibility and how to report for serve the society. The concept of communication process and theories will provide the vital learning and understanding of the problems for better solution. Media course is also attached with technical knowledge, the essential and professional software, tools, equipment, production and others many skills will help to become a trained students for media industries. Newspaper/Magazine Designing, Film Production, Radio programmes, Photography, Video Editing, Camera Operation, Audio Mixer, Video Switcher, Graphics Designing, Website Designing, Anchoring and more others skill based understanding will be developed for media students.</p>
                        </li>
                        <li>Eligibility:</li> 
                        <p>Bachelor's degree in any discipline with a minimum of 55% marks for General/OBC/SC/ST candidates.
                        </p>
                        <li>Intake:
                        </li>
                        <p>45</p>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Ph. D. in Mass Communication
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h5>a. Objectives of the Program:
                    </h5>
                    <p>Media Research provides an overview of the concepts, methods, and tools by which communication research is designed, conducted interpreted and critical evaluation. The primary goal of this course are to help you become a knowledgeable consumer and a limited producer of communication research as you develop skill in gathering, organising, interpreting and presenting research information. The major thrust of the curriculum is to impart theoretical and practical knowledge of various aspects of media. The course is designed in such a way that it gives students an overall understanding of Media with specialization in electronic journalism, electronic media production, online journalism and Print media.</p>


                    <h5>b. Program Outcomes:</h5>
                    <p>The program will develop understanding among scholars to different research methods and familiar them with various data collection tools. It will enhance the data analysis and preparation of research report and thesis writing ability in researcher. Comprehend the relationship between theory and research methods in study of communication as a social science.</p>

                    <h5>c. Eligibility:</h5>
                    <p>M.A.in Media stream with 55% Marks.</p>
                    <h5>Intake:</h5>
                    <p>As per vacant seat</p>
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    PG. Dimploma Courses in Development Communication/Online and Digital Journalism/ Photography/Science Communication/Film Making
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <h5>a. Objectives of the Program:
                    </h5>
                    <p>To equip students with the essential skills required to excel in various roles within the field of journalism and mass communication, including reporting, writing, editing, interviewing, and media production. The course is designed in such a way that it gives students an overall understanding of Media with specialization in electronic journalism, electronic media production, online journalism and Print media.</p>

                    <h5>b. Program Outcomes:</h5>
                    <p>Graduates will demonstrate a comprehensive understanding of key concepts, theories, and principles in journalism, mass communication, and related fields. Professional Skills Development: Graduates will possess the necessary skills for effective.</p>
                    <h5>c. Eligibility:</h5>
                    <p>M.A.in Media stream with 55% Marks.</p>
                    <h5>Intake:</h5>
                    <p>As per vacant seat</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="tab-pane fade tab-border" id="Facilites" role="tabpanel" aria-labelledby="contact-tab">...</div>
<div className="tab-pane fade tab-border" id="Student" role="tabpanel" aria-labelledby="contact-tab">
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    PG Toppers
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Post Doc. Fellow Ph D Reserch Scholar & Project Staff
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Post Graducate Students
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Department Alumni
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
    </div>
</div>
<div className="tab-pane fade tab-border" id="Research" role="tabpanel" aria-labelledby="contact-tab">...</div>
<div className="tab-pane fade tab-border" id="eResearch" role="tabpanel" aria-labelledby="contact-tab">...</div>
<div className="tab-pane fade tab-border" id="Contact" role="tabpanel" aria-labelledby="contact-tab">
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Head
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">

                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Contact
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    <div className='gallery' style={{ width: '100%', margin: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',position:'relative', right:'36px' }}>
    <h2 style={{ width: '100%', textAlign: 'center',  borderRadius: '10px', textShadow: '0 3px 10px rgba(0, 0, 0, 0.7)' }}>Our Gallery</h2>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' , height:'780px', overflow:'auto'}}>
        {galleryLoading && <p>Loading gallery...</p>}
        {!galleryLoading && galleryError && <p>{galleryError}</p>}
        {!galleryLoading && !galleryError && galleryItems.length === 0 && <p>No gallery items available.</p>}
        {!galleryLoading && !galleryError && galleryItems.map((item) => (
            <div key={item.id} style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <NavLink to={item.linkUrl || '/Some_moments'} style={{ width: '100%', height: '100%' }}>
                    <img 
                        src={`${API_BASE}${item.imagePath}`} 
                        alt={item.altText || item.title} 
                        style={{ width: '100%', height: '300px', objectFit: 'fill', boxShadow: '0 0 25px 2px rgba(0, 0, 0, 0.4)', borderRadius: '20px' }} 
                    />
                </NavLink>
                <h4 style={{ textAlign: 'center', fontFamily: 'Times New Roman, serif' }}>{item.title}</h4>
            </div>
        ))}
    </div>
</div>

{/* Section: Student lens */}

<div>
  {/* Existing homepage sections */}

  <StudentLens />

  {/* More sections if needed */}
</div>


        </main>
        
        <Footer/>
        <Home/>
        <Clubs/>
        </>
    );
};

export default MainContent;



