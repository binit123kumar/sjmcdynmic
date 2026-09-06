import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'; // Assuming you're using Font Awesome icons

function HomeButton() {
  const buttonStyle = {
    backgroundColor: '#780000',
    border: 'none',
    color: 'white',
    padding: '12px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    position: 'fixed', // Fix the position
    bottom: '20px', // Position from bottom
    left: '20px', // Position from left
  };

  const hoverStyle = {
    backgroundColor: 'RoyalBlue',
  };

  return (
    <Link to="/" style={{ textDecoration: 'none' }}> {/* Link to your default page */}
      <button className="btn" style={buttonStyle} >
        <FontAwesomeIcon icon={faHome} />
      </button>
    </Link>
  );
}

export default HomeButton;
