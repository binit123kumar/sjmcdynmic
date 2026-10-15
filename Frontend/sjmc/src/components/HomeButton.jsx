import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using Font Awesome icons

import './sjmc-theme.css';

function HomeButton() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <button
        className="btn sjmc-btn-purple"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '12px 16px',
          fontSize: '16px',
          cursor: 'pointer',
          zIndex: 1040,
          boxShadow: '0 4px 14px rgba(51, 18, 90, 0.35)',
        }}
      >
        <FontAwesomeIcon icon={faHome} />
      </button>
    </Link>
  );
}

export default HomeButton;
