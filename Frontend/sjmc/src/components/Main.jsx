import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './sjmc-theme.css';
import aboutImg from '../asset/about.webp';
import heroCampus from '../asset/home_slider_1.webp';
import heroMedia from '../asset/home_slider_2.webp';
import Home from '../components/HomeButton';
import Clubs from '../components/ClubsButton';
import Track from '../components/traffic';
import StudentLens from '../components/StudentLens';
import ImageSlider from './Slider';
import HomeUpdates from './HomeUpdates';
import { API_BASE } from '../utils/api';

const MainContent = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [events, setEvents] = useState([]);
    const [courses, setCourses] = useState([]);
    const [aboutItems, setAboutItems] = useState([]);
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

        fetch(`${API_BASE}/api/news?activeOnly=true`)
            .then((response) => response.json())
            .then((json) => { if (mounted) setNewsItems(json.data || []); })
            .catch(() => { if (mounted) setNewsItems([]); });

        fetch(`${API_BASE}/api/events?activeOnly=true`)
            .then((response) => response.json())
            .then((json) => { if (mounted) setEvents(json.data || []); })
            .catch(() => { if (mounted) setEvents([]); });

        fetch(`${API_BASE}/api/courses?activeOnly=true`)
            .then((response) => response.json())
            .then((json) => { if (mounted) setCourses(json.data || []); })
            .catch(() => { if (mounted) setCourses([]); });

        fetch(`${API_BASE}/api/about`)
            .then((response) => {
                if (!response.ok) throw new Error('Unable to load About content.');
                return response.json();
            })
            .then((json) => {
                if (mounted) setAboutItems((json.data || []).filter((item) => item.isActive && item.showOnHomePage));
            })
            .catch(() => { if (mounted) setAboutItems([]); });

        return () => { mounted = false; };
    }, []);

    const quickLinks = [
        { icon: 'fa-graduation-cap', title: 'Admissions', desc: 'Apply Online', link: '/upcomingEvents' },
        { icon: 'fa-calendar', title: 'Academic Calendar', desc: 'View Schedule', link: '/upcomingEvents' },
        { icon: 'fa-edit', title: 'Examinations', desc: 'Results & Notices', link: '/upcomingEvents' },
        { icon: 'fa-user-circle', title: 'Student Portal', desc: 'Login', link: '/admin/login' },
        { icon: 'fa-book', title: 'Library', desc: 'Digital Resources', link: '/Library' },
        { icon: 'fa-newspaper-o', title: 'News & Events', desc: 'Latest Updates', link: '/upcomingEvents' },
    ];

    const programmes = [
        { title: 'M.A. in Journalism and Mass Communication', desc: 'Postgraduate programme covering reporting, editing, media production and communication research.', link: '/MA' },
        { title: 'Ph.D. in Mass Communication', desc: 'Doctoral research programme in media studies and communication.', link: '/PhD' },
        { title: 'PG Diploma Courses', desc: 'Development Communication, Film Making, Digital Journalism, Photography and Science Communication.', link: '/page15' },
        { title: 'Certificate & Skill Development', desc: 'Certificate course in writing for media and free skill development training programmes.', link: '/page16' },
    ];

    const splitDate = (value) => {
        if (!value) return null;
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return null;
        return {
            day: date.getDate(),
            month: date.toLocaleDateString('en-GB', { month: 'short' }),
            year: date.getFullYear(),
        };
    };

    return (
        <>
            <Header />
            <Track />

            {/* ================= HERO ================= */}
            <section className="sjmc-hero">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-7">
                            <p className="sjmc-hero-eyebrow">Welcome to</p>
                            <h1>SJMC</h1>
                            <p className="sjmc-hero-sub">School of Journalism and Mass Communication</p>
                            <p className="sjmc-hero-aku">Aryabhatta Knowledge University, Patna</p>
                            <div className="sjmc-hero-tags my-4">
                                <span>Media</span>
                                <span className="sjmc-tag-divider">|</span>
                                <span>Society</span>
                                <span className="sjmc-tag-divider">|</span>
                                <span>Knowledge</span>
                                <span className="sjmc-tag-divider">|</span>
                                <span>Responsible Communication</span>
                            </div>
                            <div className="d-flex gap-3 flex-wrap">
                                <a href="#sjmc-about" className="sjmc-btn-orange">Explore SJMC</a>
                                <a href="https://adms.akubihar.ac.in/" target="_blank" rel="noreferrer" className="sjmc-btn-purple">Admission 2026</a>
                            </div>
                        </div>
                        <div className="col-lg-5 sjmc-hero-media">
                            <img src={heroCampus} alt="SJMC campus" />
                            <img src={heroMedia} alt="Media production at SJMC" className="sjmc-hero-img-secondary" />
                            <div className="sjmc-hero-badge">
                                <i className="fa fa-video-camera"></i>
                                <span>Studio &amp; Media Production</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= QUICK ACCESS ================= */}
            <section className="sjmc-section">
                <div className="container">
                    <h2 className="sjmc-section-title">Quick Access</h2>
                    <p className="sjmc-section-sub">Everything you need, one click away</p>
                    <div className="sjmc-quick-scroll row g-3">
                        {quickLinks.map((item) => (
                            <div className="col-6 col-md-4 col-lg-2" key={item.title}>
                                <Link to={item.link} className="sjmc-quick-card">
                                    <div className="sjmc-quick-icon"><i className={`fa ${item.icon}`}></i></div>
                                    <h5>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= SLIDER ================= */}
            <section className="pb-4">
                <div className="container">
                    <ImageSlider />
                </div>
            </section>

            {/* ================= ABOUT ================= */}
            <section className="sjmc-section sjmc-section-alt" id="sjmc-about">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6">
                            <h2 className="sjmc-section-title text-start">About SJMC</h2>
                            <p className="sjmc-section-sub text-start mb-4">School of Journalism and Mass Communication, Aryabhatta Knowledge University</p>
                            <div className="sjmc-about-text">
                                <p>
                                    School of Journalism and Mass Communication (SJMC) was established by Bihar government vide
                                    Cabinet decision 15/&Pcy; 5- 09/ 2016-629 dated April 12, 2017. The then Rajya Sabha MP Shri Pavan K Verma
                                    contributed approximately Rs. nine crores from his MPLADs funds to set up the said institute, the DPR for
                                    which was prepared by Aryabhatta Knowledge University. The Bihar government has proposed to develop
                                    SJMC as the potential Centre of Excellence.
                                </p>
                                <p>
                                    Journalism &amp; Mass Communication has emerged as a major area of interest and has immensely contributed
                                    to the development &amp; empowerment of society.
                                </p>
                            </div>
                            {aboutItems.map((item) => (
                                <div key={item.id} className="sjmc-about-cms">
                                    <h3>{item.title}</h3>
                                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                </div>
                            ))}
                            <Link to="/About" className="sjmc-btn-orange mt-2">Know More</Link>
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={aboutImg} alt="SJMC building" className="sjmc-about-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= LATEST NEWS ================= */}
            <section className="sjmc-section">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-end mb-4">
                        <div>
                            <h2 className="sjmc-section-title mb-0 text-start">Latest News</h2>
                            <p className="sjmc-section-sub mb-0 text-start">News and notices from SJMC</p>
                        </div>
                        <Link to="/upcomingEvents" className="sjmc-viewall">View All &rarr;</Link>
                    </div>
                    <div className="row g-3">
                        {newsItems.slice(0, 6).map((item) => {
                            const date = splitDate(item.publishDate || item.noticeDate);
                            return (
                                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                                    <div className="sjmc-news-card sjmc-news-hover">
                                        <div className="d-flex align-items-center mb-2">
                                            {date && (
                                                <span className="sjmc-news-date-badge">
                                                    <span className="day">{date.day}</span>
                                                    <span className="month">{date.month}</span>
                                                </span>
                                            )}
                                            <span className="sjmc-news-year">{date ? date.year : ''}</span>
                                        </div>
                                        <p className="sjmc-news-title">
                                            {item.filePath ? (
                                                <a href={`${API_BASE}${item.filePath}`} target="_blank" rel="noreferrer">{item.title}</a>
                                            ) : item.title}
                                        </p>
                                        {item.description && <p className="sjmc-news-desc">{item.description}</p>}
                                    </div>
                                </div>
                            );
                        })}
                        {newsItems.length === 0 && (
                            <div className="col-12"><p className="text-center text-muted mb-0">No news available yet.</p></div>
                        )}
                    </div>
                </div>
            </section>

            {/* ================= PROGRAMMES ================= */}
            <section className="sjmc-section sjmc-section-alt">
                <div className="container">
                    <h2 className="sjmc-section-title">Our Programmes</h2>
                    <p className="sjmc-section-sub">Academic offerings at SJMC</p>
                    <div className="row g-4">
                        {programmes.map((programme) => (
                            <div className="col-md-6 col-lg-3" key={programme.title}>
                                <Link to={programme.link} className="sjmc-programme-card">
                                    <h5>{programme.title}</h5>
                                    <p>{programme.desc}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                        {courses.length > 0 && (
                        <div className="row g-4 mt-4">
                            {courses.map((course) => (
                                <div className="col-12 col-sm-6 col-lg-3" key={course.id}>
                                    <div className="sjmc-programme-card sjmc-programme-hover">
                                        {course.imagePath && (
                                            <img
                                                src={`${API_BASE}${course.imagePath}`}
                                                alt={course.name}
                                                className="sjmc-programme-img"
                                            />
                                        )}
                                        {course.duration && <span className="sjmc-programme-tag">{course.duration}</span>}
                                        <h5>{course.name}</h5>
                                        {course.description && <p className="sjmc-programme-desc">{course.description}</p>}
                                        {course.eligibility && <p className="sjmc-programme-meta"><strong>Eligibility:</strong> {course.eligibility}</p>}
                                        <a href="https://adms.akubihar.ac.in/" target="_blank" rel="noreferrer" className="sjmc-programme-btn">View Details <i className="fa fa-arrow-right ms-1"></i></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* ================= STATISTICS ================= */}
            <section className="sjmc-stats">
                <div className="container">
                    <div className="row text-center gy-4">
                        <div className="col-6 col-md-3">
                            <div className="sjmc-stat-icon"><i className="fa fa-graduation-cap"></i></div>
                            <div className="sjmc-stat-value">{programmes.length + courses.length}</div>
                            <div className="sjmc-stat-label">Programmes &amp; Courses</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="sjmc-stat-icon"><i className="fa fa-newspaper-o"></i></div>
                            <div className="sjmc-stat-value">{newsItems.length}</div>
                            <div className="sjmc-stat-label">News Updates</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="sjmc-stat-icon"><i className="fa fa-calendar"></i></div>
                            <div className="sjmc-stat-value">{events.length}</div>
                            <div className="sjmc-stat-label">Upcoming Events</div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="sjmc-stat-icon"><i className="fa fa-camera"></i></div>
                            <div className="sjmc-stat-value">{galleryItems.length}</div>
                            <div className="sjmc-stat-label">Gallery Highlights</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= UPCOMING EVENTS ================= */}
            <section className="sjmc-section">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-end mb-4">
                        <h2 className="sjmc-section-title mb-0">Upcoming Events</h2>
                        <Link to="/upcomingEvents" className="sjmc-viewall">View All &rarr;</Link>
                    </div>
                    {events.length === 0 && <p className="text-center text-muted">No upcoming events available.</p>}
                    <div className="row g-3">
                        {events.slice(0, 4).map((event) => {
                            const date = splitDate(event.eventDate);
                            return (
                                <div className="col-12 col-md-6" key={event.id}>
                                    <div className="sjmc-event-item">
                                        {date && (
                                            <div className="sjmc-event-date">
                                                <div className="day">{date.day}</div>
                                                <div className="month">{date.month}</div>
                                                <div className="year">{date.year}</div>
                                            </div>
                                        )}
                                        <div>
                                            <p className="sjmc-event-title">{event.title}</p>
                                            <p className="sjmc-event-meta"><i className="fa fa-map-marker me-1"></i>{event.venue || 'SJMC, Aryabhatta Knowledge University, Patna'}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= GALLERY ================= */}
            <section className="sjmc-section sjmc-section-alt">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-end mb-4">
                        <div>
                            <h2 className="sjmc-section-title mb-0 text-start">Our Gallery</h2>
                            <p className="sjmc-section-sub mb-0 text-start">Campus, media production, events and student life at SJMC</p>
                        </div>
                        <Link to="/Some_moments" className="sjmc-viewall">View All &rarr;</Link>
                    </div>
                    {galleryLoading && <p className="text-center text-muted">Loading gallery...</p>}
                    {galleryError && <p className="text-center text-muted">{galleryError}</p>}
                    {!galleryLoading && !galleryError && galleryItems.length === 0 && (
                        <p className="text-center text-muted">No gallery items available.</p>
                    )}
                    <div className="row g-3">
                        {!galleryLoading && !galleryError && galleryItems.slice(0, 6).map((item, index) => (
                            <div className={index === 0 ? 'col-12 col-md-6 sjmc-gallery-featured' : 'col-6 col-md-3'} key={item.id}>
                                <NavLink to={item.linkUrl || '/Some_moments'} className="sjmc-gallery-item">
                                    <img src={`${API_BASE}${item.imagePath}`} alt={item.altText || item.title} loading="lazy" />
                                    <span className="sjmc-gallery-caption">
                                        <i className="fa fa-camera me-1"></i>
                                        {item.title || 'SJMC Moments'}
                                    </span>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    {!galleryLoading && !galleryError && galleryItems.length > 0 && (
                        <div className="text-center mt-4">
                            <Link to="/Some_moments" className="sjmc-btn-purple">View Full Gallery</Link>
                        </div>
                    )}
                </div>
            </section>

            {/* ================= FEATURE STRIP — WHY CHOOSE SJMC ================= */}
            <section className="sjmc-feature-strip">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-6 col-md-3">
                            <div className="sjmc-feature">
                                <i className="fa fa-building"></i>
                                <span>Modern Infrastructure</span>
                                <p>Studio, media lab, smart class and library facilities</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="sjmc-feature">
                                <i className="fa fa-users"></i>
                                <span>Experienced Faculty</span>
                                <p>Regular and guest faculty from academia and the media industry</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="sjmc-feature">
                                <i className="fa fa-camera"></i>
                                <span>Practical Learning</span>
                                <p>Hands-on training in reporting, production and photography</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="sjmc-feature">
                                <i className="fa fa-globe"></i>
                                <span>Industry Exposure</span>
                                <p>Workshops, interactions and events with media organisations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= STUDENT LENS ================= */}
            <section className="sjmc-section">
                <div className="container">
                    <StudentLens />
                </div>
            </section>

            <Footer />
            <Home />
            <Clubs />
        </>
    );
};

export default MainContent;