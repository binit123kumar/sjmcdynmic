// src/page/FreeTraining.jsx
import React from "react";   // React library ko import kiya gaya hai UI components banane ke liye

const FreeTraining = () => {
  // Card ka ek style object banaya jisse har card ka look same रहे
  const cardStyle = {
    width: "300px",                      // card ki fixed width
    padding: "20px",                     // andar ke content ke liye spacing
    margin: "20px",                      // cards ke bich gap
    border: "1px solid #ddd",            // halka border
    borderRadius: "10px",                // corner rounded
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", // halka shadow for 3D effect
    textAlign: "center",                 // text center align
    backgroundColor: "#fff",             // white background
  };

  // Button ke liye ek common style banaya
  const buttonStyle = {
    padding: "10px 20px",                // button size
    marginTop: "15px",                   // text aur button ke bich gap
    fontSize: "16px",                    // text size
    backgroundColor: "darkred",          // default button color
    color: "white",                      // text white
    border: "none",                      // border remove
    borderRadius: "5px",                 // rounded corners
    cursor: "pointer",                   // hover pe pointer cursor
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Heading */}
      <h1>Free Training at SJMC</h1>
      <p>Please select a training program:</p>

      {/* Flex container - cards ko side by side rakhne ke liye */}
      <div
        style={{
          display: "flex",               // cards ko ek row me lane ke liye
          justifyContent: "center",      // center me align karne ke liye
          flexWrap: "wrap",              // agar screen chhoti ho to next line me card aa jaye
          marginTop: "30px",
        }}
      >
        {/* Card 1 - 3 Months Training */}
        <div style={cardStyle}>
          <h2>3 Months Training</h2>
          <p>
            Learn the basics of Mass Communication with practical exposure and
            guided mentorship.
          </p>
          <button style={buttonStyle}>Apply Now</button>
        </div>

        {/* Card 2 - 5 Months Training */}
        <div style={cardStyle}>
          <h2>5 Months Training</h2>
          <p>
            Advanced training program covering detailed modules with project
            work and certification.
          </p>
          {/* is card ke button me color alag rakha gaya hai (darkgreen) */}
          <button style={{ ...buttonStyle, backgroundColor: "darkgreen" }}>
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeTraining;  // component ko export kiya gaya taaki App.js ya kahin aur use ho sake
