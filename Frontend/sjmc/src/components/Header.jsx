import { useEffect, useMemo, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { API_BASE, buildApiUrl } from '../utils/api';
import './sjmc-theme.css';
import akuLogo from '../asset/logo.webp';

const Header = () => {
  const [settings, setSettings] = useState(null);
  const [language, setLanguage] = useState('EN');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(buildApiUrl('/api/settings'))
      .then((response) => response.json())
      .then((response) => setSettings(response.data || null))
      .catch(() => setSettings(null));
  }, []);

  // Search index — only real, existing routes of this website.
  const searchIndex = useMemo(() => ([
    { title: 'Home', path: '/' },
    { title: 'About us', path: '/About' },
    { title: 'Vision & Mission', path: '/Vision_and_mission' },
    { title: 'Role of SJMC', path: '/RoleOfSJMC' },
    { title: 'Our Gallery', path: '/Some_moments' },
    { title: 'Founder Director', path: '/Founder_Director' },
    { title: 'Careers', path: '/Careers' },
    { title: 'M.A. in Journalism and Mass Communication', path: '/MA' },
    { title: 'Ph.D. in Mass Communication', path: '/PhD' },
    { title: 'PG Diploma Courses', path: '/page15' },
    { title: 'Certificate Courses', path: '/page16' },
    { title: 'Free Training', path: '/FreeTraining' },
    { title: 'Admissions', path: '/upcomingEvents' },
    { title: 'Upcoming Events', path: '/upcomingEvents' },
    { title: 'Head of Department', path: '/Faculty' },
    { title: 'Regular Faculty', path: '/Consultant' },
    { title: 'Guest Faculty', path: '/GuestFaculty' },
    { title: 'Staff', path: '/Staff' },
    { title: 'Student Activities', path: '/Student_activities' },
    { title: 'Library', path: '/Library' },
    { title: 'Media Center', path: '/Media_Center' },
    { title: 'Aryabhatta Times', path: '/page38' },
    { title: 'Studio', path: '/Studio' },
    { title: 'Media Lab', path: '/Media_lab' },
    { title: 'Smart Class', path: '/SmartClass' },
    { title: 'Conference Room', path: '/Conference' },
    { title: 'Seminar Hall', path: '/Seminar' },
    { title: 'Contact', path: '/page6' },
  ]), []);

  const handleSearch = (event) => {
    event.preventDefault();
    const term = query.trim().toLowerCase();
    if (!term) return;
    const match = searchIndex.find((item) => item.title.toLowerCase().includes(term));
    if (match) {
      setQuery('');
      navigate(match.path);
    }
  };

  return (
    <header>
      {/* Top utility bar */}
      <div className="sjmc-topbar d-none d-lg-block">
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <div>
            {settings?.email && <span><i className="fa fa-envelope me-1"></i> {settings.email}</span>}
            {settings?.phone && <span className="ms-3"><i className="fa fa-phone me-1"></i> {settings.phone}</span>}
            {settings?.address && <span className="ms-3"><i className="fa fa-map-marker me-1"></i> {settings.address}</span>}
          </div>
          <div>
            <a href="https://akubihar.ac.in" target="_blank" rel="noreferrer">AKU Portal</a>
            <a href="https://akubihar.ac.in" target="_blank" rel="noreferrer">RTI</a>
            <a href="https://akubihar.ac.in" target="_blank" rel="noreferrer">Alumni</a>
            <a href="https://akubihar.ac.in" target="_blank" rel="noreferrer">Careers</a>
            <a href="https://akubihar.ac.in" target="_blank" rel="noreferrer">Feedback</a>
            {settings?.facebook && <a href={settings.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fa fa-facebook"></i></a>}
            {settings?.twitter && <a href={settings.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><i className="fa fa-twitter"></i></a>}
            {settings?.youTube && <a href={settings.youTube} target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fa fa-youtube"></i></a>}
            {settings?.instagram && <a href={settings.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fa fa-instagram"></i></a>}
            <span className="sjmc-lang-switch ms-2">
              <button type="button" className={language === 'EN' ? 'active' : ''} onClick={() => setLanguage('EN')}>EN</button>
              <button type="button" className={language === 'HI' ? 'active' : ''} onClick={() => setLanguage('HI')}>हिं</button>
            </span>
          </div>
        </div>
      </div>

      {/* Main branding header — University | SJMC | Search + Login */}
      <div className="sjmc-branding">
        <div className="container">
          <div className="row align-items-center gy-3">

            {/* Left — University identity */}
            <div className="col-lg-3 col-md-4 col-12">
              <div className="sjmc-aku-brand d-flex align-items-center gap-2">
                <img src={akuLogo} alt="Aryabhatta Knowledge University emblem" className="sjmc-aku-logo" />
                <div>
                  <div className="sjmc-aku-name">Aryabhatta Knowledge University</div>
                  <div className="sjmc-aku-hindi">आर्यभट्ट ज्ञान विश्वविद्यालय</div>
                  <div className="sjmc-aku-city">Patna, Bihar</div>
                </div>
              </div>
            </div>

            {/* Center — SJMC identity */}
            <div className="col-lg-5 col-md-8 col-12 text-lg-center">
              <Link to="/" className="text-decoration-none">
                <h1 className="sjmc-main-title">{settings?.siteName || 'SJMC'}</h1>
                <p className="sjmc-main-sub mb-0">School of Journalism and Mass Communication</p>
                <p className="sjmc-main-aku mb-0">Aryabhatta Knowledge University</p>
              </Link>
            </div>

            {/* Right — Search + Student Login */}
            <div className="col-lg-4 col-md-12 col-12">
              <div className="d-flex justify-content-lg-end justify-content-center flex-wrap gap-2 sjmc-search-col">
                <form className="sjmc-search-group" role="search" onSubmit={handleSearch}>
                  <input
                    className="sjmc-search-input"
                    type="text"
                    placeholder="Search SJMC..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search SJMC"
                  />
                  <button type="submit" className="sjmc-search-btn" aria-label="Search">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
                <Link to="/admin/login" className="sjmc-btn-orange">Student Login</Link>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="navbar navbar-expand-lg sjmc-navbar sticky-top">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sjmcMainNav" aria-controls="sjmcMainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="sjmcMainNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><NavLink to="/" end className="nav-link">Home</NavLink></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#about" role="button" data-bs-toggle="dropdown" aria-expanded="false">About SJMC</a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/About" className="dropdown-item">About us</NavLink></li>
                  <li><NavLink to="/Vision_and_mission" className="dropdown-item">Vision &amp; Mission</NavLink></li>
                  <li><NavLink to="/RoleOfSJMC" className="dropdown-item">Role of SJMC</NavLink></li>
                  <li><NavLink to="/Some_moments" className="dropdown-item">Our Gallery</NavLink></li>
                  <li><NavLink to="/Founder_Director" className="dropdown-item">Founder Director</NavLink></li>
                  <li><NavLink to="/Careers" className="dropdown-item">Careers</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#academics" role="button" data-bs-toggle="dropdown" aria-expanded="false">Academics</a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/MA" className="dropdown-item">M.A. in Journalism and Mass Communication</NavLink></li>
                  <li><NavLink to="/PhD" className="dropdown-item">Ph.D. in Mass Communication</NavLink></li>
                  <li><NavLink to="/page15" className="dropdown-item">PG Diploma Courses</NavLink></li>
                  <li><NavLink to="/page16" className="dropdown-item">Certificate Courses</NavLink></li>
                  <li><NavLink to="/FreeTraining" className="dropdown-item">Free Training</NavLink></li>
                </ul>
              </li>
              <li className="nav-item"><NavLink to="/upcomingEvents" className="nav-link">Admissions</NavLink></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#faculty" role="button" data-bs-toggle="dropdown" aria-expanded="false">Faculty</a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/Faculty" className="dropdown-item">Head of Department</NavLink></li>
                  <li><NavLink to="/Consultant" className="dropdown-item">Regular Faculty</NavLink></li>
                  <li><NavLink to="/GuestFaculty" className="dropdown-item">Guest Faculty</NavLink></li>
                  <li><NavLink to="/Staff" className="dropdown-item">Staff</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#students" role="button" data-bs-toggle="dropdown" aria-expanded="false">Students</a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/Student_activities" className="dropdown-item">Student Activities</NavLink></li>
                  <li><NavLink to="/Some_moments" className="dropdown-item">Some Moments</NavLink></li>
                  <li><NavLink to="/Library" className="dropdown-item">Library</NavLink></li>
                  <li><NavLink to="/Media_Center" className="dropdown-item">Media Center</NavLink></li>
                </ul>
              </li>
              <li className="nav-item"><NavLink to="/PhD" className="nav-link">Research</NavLink></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#media" role="button" data-bs-toggle="dropdown" aria-expanded="false">Media &amp; Events</a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/upcomingEvents" className="dropdown-item">Upcoming Events</NavLink></li>
                  <li><NavLink to="/page38" className="dropdown-item">Aryabhatta Times</NavLink></li>
                  <li><NavLink to="/Studio" className="dropdown-item">Studio</NavLink></li>
                  <li><NavLink to="/Media_lab" className="dropdown-item">Media Lab</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#facilities" role="button" data-bs-toggle="dropdown" aria-expanded="false">Facilities</a>
                <ul className="dropdown-menu">
                  <li><NavLink to="/Studio" className="dropdown-item">Audio/Visual/Virtual Studio</NavLink></li>
                  <li><NavLink to="/Media_lab" className="dropdown-item">Print/Digital Media Lab</NavLink></li>
                  <li><NavLink to="/Library" className="dropdown-item">Library</NavLink></li>
                  <li><NavLink to="/SmartClass" className="dropdown-item">Smart Class</NavLink></li>
                  <li><NavLink to="/Conference" className="dropdown-item">Conference Room</NavLink></li>
                  <li><NavLink to="/Seminar" className="dropdown-item">Seminar Hall</NavLink></li>
                </ul>
              </li>
              <li className="nav-item"><NavLink to="/page6" className="nav-link">Contact</NavLink></li>
            </ul>
            <Link to="/admin/login" className="sjmc-btn-orange d-lg-none mt-2 mb-2">Student Login</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
