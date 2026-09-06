import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        const apiBase = (process.env.REACT_APP_API_URL || 'https://localhost:7050/api').replace(/\/api\/?$/, '');
        fetch(`${apiBase}/api/settings`)
            .then((response) => response.json())
            .then((response) => setSettings(response.data || null))
            .catch(() => setSettings(null));
    }, []);

    const apiBase = (process.env.REACT_APP_API_URL || 'https://localhost:7050/api').replace(/\/api\/?$/, '');
    return (
        <nav
            className="navbar"
            style={{ backgroundColor: '#000', padding: '40px 40px', color: '#fff' }}
        >
            <div className="container-fluid">
                <div className="row">
                    {/* First div with logo and contact information */}
                    <div className="col-12 col-md-4 col-lg-4 d-flex">
                        <div>
                            {settings?.logoPath && <img src={`${apiBase}${settings.logoPath}`} alt={settings.siteName || 'University Logo'} style={{width:'100%', paddingBottom:'10px', position:'relative', right:'80px'}} />}
                            {settings?.phone && <p>Phone: {settings.phone}</p>}
                            {settings?.address && <p>Address: {settings.address}</p>}
                            {settings?.email && <p>Email: {settings.email}</p>}
                        </div>
                    </div>

                    {/* Second div with heading and links */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <h4>Important Links</h4>
                        <ul>
                        <li><a   href="https://www.nda.gov.in/" className="dropdown-item"> NDA </a></li>
                        <li><a   href="https://www.nptel.ac.in/" className="dropdown-item"> NPTEL </a></li>
                        <li><a   href="https://www.swayam.gov.in/" className="dropdown-item"> SWAYAM </a></li>
                        <li><a   href="https://www.swayamprabhay.gov.in/" className="dropdown-item"> SWAYAM PRABHA </a></li>
                        <li><a   href="https://egyankosh.ac.in/" className="dropdown-item"> EGYANKOSH </a></li>
                            {/* Add similar links for remaining entries */}
                        </ul>
                        
                        {/* Social media links */}
                        <div>
                            <h4>Social Media</h4>
                            <ul>
                                {settings?.facebook && <li><a href={settings.facebook}>Facebook</a></li>}
                                {settings?.twitter && <li><a href={settings.twitter}>Twitter</a></li>}
                                {settings?.instagram && <li><a href={settings.instagram}>Instagram</a></li>}
                                {settings?.youTube && <li><a href={settings.youTube}>YouTube</a></li>}
                                {/* Add more social media links */}
                            </ul>
                        </div>
                    </div>

                    {/* Third div with map iframe */}
                    <div className="col-12 col-md-4 col-lg-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3598.37951544783!2d85.1323539!3d25.5923023!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58702e5ae787%3A0x6c55883d32ec4db4!2sAryabhatta%20Knowledge%20University!5e0!3m2!1sen!2sin!4v1714559725531!5m2!1sen!2sin"
                            width="400"
                            height="300"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Arybhatta Knowledge University - Patna"
                        ></iframe>
                    </div>
                    <div className="mt-3 text-center">
  <Link
    to="/admin/login"
    className="btn btn-danger"
    style={{
      borderRadius: "25px",
      padding: "10px 25px",
      fontWeight: "bold"
    }}
  >
    🔐 Admin Login
  </Link>
</div>
                </div>
            </div>
        </nav>
    );
};

export default Footer;
