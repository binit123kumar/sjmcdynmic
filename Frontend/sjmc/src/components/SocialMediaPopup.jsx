// SocialMediaPopup.jsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

function SocialMediaPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => setIsOpen(!isOpen);

  const buttonStyle = {
    backgroundColor: '#780000',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    position: 'fixed',
    bottom: '180px', // ✅ Enough space above SJMC Club button
    right: '20px',
    padding: '12px',
    borderRadius: '8px',
    zIndex: 1000,
  };

  const popupStyle = {
    position: 'fixed',
    bottom: '240px', // ✅ Popup above the button
    right: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0,0,0,0.25)',
    padding: '12px 16px',
    zIndex: 1000,
    display: isOpen ? 'block' : 'none',
    width: '230px',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '10px 0',
    fontWeight: '600',
    fontSize: '15px',
    borderBottom: '1px solid #eee',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '18px',
    minWidth: '24px',
  };

  return (
    <>
      <button onClick={toggleLinks} style={buttonStyle}>
        <FontAwesomeIcon icon={faShareAlt} /> <br /> Social Media
      </button>

      <div style={popupStyle}>
        <a
          href="https://www.facebook.com/people/School-of-Journalism-and-Mass-Communication-Patna/100063903589436/?ref=embed_page"
          target="_blank"
          rel="noreferrer"
          style={{ ...linkStyle, color: '#3b5998' }}
        >
          <FontAwesomeIcon icon={faFacebookF} style={iconStyle} /> Facebook
        </a>
        <a
          href="https://x.com/PatnaSjmc"
          target="_blank"
          rel="noreferrer"
          style={{ ...linkStyle, color: '#1DA1F2' }}
        >
          <FontAwesomeIcon icon={faTwitter} style={iconStyle} /> Twitter / X
        </a>
        <a
          href="https://www.youtube.com/@AryabhattaKnowledgeUniversity"
          target="_blank"
          rel="noreferrer"
          style={{ ...linkStyle, color: '#FF0000' }}
        >
          <FontAwesomeIcon icon={faYoutube} style={iconStyle} /> AKU YouTube
        </a>
        <a
          href="https://www.youtube.com/@schoolofjournalismmasscomm6140"
          target="_blank"
          rel="noreferrer"
          style={{ ...linkStyle, color: '#FF0000' }}
        >
          <FontAwesomeIcon icon={faYoutube} style={iconStyle} /> SJMC YouTube
        </a>
      </div>
    </>
  );
}

export default SocialMediaPopup;
