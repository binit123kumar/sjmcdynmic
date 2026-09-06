import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Toolbar = () => {
  return (
    <div id="toolbar" className="toolbar" style={{
      backgroundColor: '#0a0a0a',
      color: '#fff',
      fontSize: '12px',
      paddingTop: '10px',
      paddingBottom: '10px',
      lineHeight: '30px',
      fontWeight: '700',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: '15px',
      paddingLeft: '15px',
    }}>
      {/* Mobile Number with Icon */}
      <div className="mobile-number" style={{paddingLeft:'40px'}}>
        <FontAwesomeIcon icon={faPhone} color="#fff" />
        <span style={{ textDecoration: 'none', color: '#fff' }}>
          <a href="tel:06312229530" style={{ textDecoration: 'none', color: '#fff' }}> 06312229530</a>,
          <a href="tel:06312229531" style={{ textDecoration: 'none', color: '#fff' }}> 7868576</a>
        </span>
      </div>

      {/* List of Links */}
      <ul className="toolbar-links" style={{ display: 'flex', listStyle: 'none', padding: 0, paddingRight:'40px'  }}>
        <li style={{ marginRight: '10px' }}>
          <a href="https://www.cusb.ac.in/rti-and-pg-portal/" style={{ textDecoration: 'none', color: '#fff' }}>RTI</a>
        </li>
        <li style={{ marginRight: '10px' }}>
          <a href="https://www.cusb.ac.in/screen-reader/" style={{ textDecoration: 'none', color: '#fff' }}>Screen Reader</a>
        </li>
        <li>
          <a href="https://www.cusb.ac.in/contact-us/" style={{ textDecoration: 'none', color: '#fff' }}>Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
