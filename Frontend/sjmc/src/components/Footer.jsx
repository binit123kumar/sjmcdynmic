import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { API_BASE, buildApiUrl } from '../utils/api';
import './sjmc-theme.css';

const Footer = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        fetch(buildApiUrl('/api/settings'))
            .then((response) => response.json())
            .then((response) => setSettings(response.data || null))
            .catch(() => setSettings(null));
    }, []);

    return (
        <footer className="sjmc-footer">
            <div className="container">
                <div className="row gy-4">
                    {/* Branding and contact */}
                    <div className="col-12 col-md-4">
                        {settings?.logoPath && <img src={`${API_BASE}${settings.logoPath}`} alt={settings.siteName || 'University Logo'} style={{ height: '64px', width: 'auto', marginBottom: '12px' }} />}
                        <div className="sjmc-footer-brand">SJMC</div>
                        <div>School of Journalism and Mass Communication</div>
                        <div>Aryabhatta Knowledge University, Patna, Bihar</div>
                        {settings?.phone && <div className="mt-2"><i className="fa fa-phone me-2"></i>{settings.phone}</div>}
                        {settings?.email && <div><i className="fa fa-envelope me-2"></i>{settings.email}</div>}
                        {settings?.address && <div><i className="fa fa-map-marker me-2"></i>{settings.address}</div>}
                        <div className="mt-3">
                            {settings?.facebook && <a href={settings.facebook} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginRight: '14px' }}><i className="fa fa-facebook fa-lg"></i></a>}
                            {settings?.twitter && <a href={settings.twitter} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginRight: '14px' }}><i className="fa fa-twitter fa-lg"></i></a>}
                            {settings?.instagram && <a href={settings.instagram} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginRight: '14px' }}><i className="fa fa-instagram fa-lg"></i></a>}
                            {settings?.youTube && <a href={settings.youTube} target="_blank" rel="noreferrer" style={{ display: 'inline-block' }}><i className="fa fa-youtube fa-lg"></i></a>}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="col-6 col-md-2">
                        <h5>Quick Links</h5>
                        <Link to="/About">About SJMC</Link>
                        <Link to="/Some_moments">Our Gallery</Link>
                        <Link to="/upcomingEvents">Upcoming Events</Link>
                        <Link to="/Media_Center">Media Center</Link>
                        <Link to="/page38">Aryabhatta Times</Link>
                        <Link to="/Careers">Careers</Link>
                    </div>

                    {/* Student links */}
                    <div className="col-6 col-md-2">
                        <h5>Students</h5>
                        <Link to="/Student_activities">Student Activities</Link>
                        <Link to="/Library">Library</Link>
                        <Link to="/page14">eResources</Link>
                        <a href="https://akubihar.ac.in" target="_blank" rel="noreferrer">AKU Portal</a>
                        <a href="https://akubihar.ac.in" target="_blank" rel="noreferrer">Alumni</a>
                    </div>

                    {/* Academic links */}
                    <div className="col-12 col-md-4">
                        <h5>Academics</h5>
                        <div className="row">
                            <div className="col-6">
                                <Link to="/MA">M.A. Journalism &amp; Mass Communication</Link>
                                <Link to="/PhD">Ph.D. Mass Communication</Link>
                                <Link to="/page15">PG Diploma Courses</Link>
                                <Link to="/page16">Certificate Courses</Link>
                                <Link to="/FreeTraining">Free Training</Link>
                            </div>
                            <div className="col-6">
                                <Link to="/AdvisoryCommittee">Academic Advisory Committee</Link>
                                <Link to="/board-of-studies">Board of Studies</Link>
                                <Link to="/Faculty">Faculty</Link>
                                <Link to="/Staff">Staff</Link>
                                <Link to="/admin/login">Admin Login</Link>
                            </div>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3598.37951544783!2d85.1323539!3d25.5923023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1714559725531!5m2!1sen!2sin"
                            width="100%"
                            height="180"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Aryabhatta Knowledge University - Patna"
                            className="mt-3 rounded-3"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="sjmc-footer-bottom text-center">
                © {new Date().getFullYear()} School of Journalism and Mass Communication, Aryabhatta Knowledge University, Patna. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
