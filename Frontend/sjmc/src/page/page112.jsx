import React from "react";

const Page112 = () => {
  const styles = {
    container: {
      padding: "30px",
      fontFamily: "'Segoe UI', Arial, sans-serif",
      background: "#f0f4f8",
      minHeight: "100vh",
    },
    heading: {
      textAlign: "center",
      fontSize: "22px",
      fontWeight: "bold",
      color: "#1a3c5e",
      marginBottom: "8px",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    subheading: {
      textAlign: "center",
      fontSize: "14px",
      color: "#555",
      marginBottom: "30px",
    },
    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "24px",
      maxWidth: "800px",
      margin: "0 auto",
    },
    card: {
      borderRadius: "16px",
      padding: "28px 24px",
      color: "#fff",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
      position: "relative",
      overflow: "hidden",
    },
    card1: {
      background: "linear-gradient(135deg, #1a3c5e, #2d6a9f)",
    },
    card2: {
      background: "linear-gradient(135deg, #6b2d2d, #c0392b)",
    },
    freeBadge: {
      position: "absolute",
      top: "16px",
      right: "16px",
      backgroundColor: "#f1c40f",
      color: "#333",
      fontWeight: "bold",
      fontSize: "12px",
      padding: "4px 10px",
      borderRadius: "20px",
    },
    icon: {
      fontSize: "40px",
      marginBottom: "12px",
    },
    courseType: {
      fontSize: "11px",
      textTransform: "uppercase",
      letterSpacing: "2px",
      opacity: 0.8,
      marginBottom: "6px",
    },
    title: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "16px",
      lineHeight: "1.3",
    },
    divider: {
      height: "1px",
      backgroundColor: "rgba(255,255,255,0.3)",
      marginBottom: "16px",
    },
    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      fontSize: "13px",
    },
    label: {
      opacity: 0.8,
    },
    value: {
      fontWeight: "bold",
    },
    bottomTag: {
      marginTop: "20px",
      backgroundColor: "rgba(255,255,255,0.15)",
      borderRadius: "8px",
      padding: "8px 12px",
      fontSize: "12px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Free Training Programme</h2>
      <p style={styles.subheading}>
        School of Journalism &amp; Mass Communication, AKU Patna
        <br />
        For Minority Students &bull; Bihar Skill Development Mission
      </p>

      <div style={styles.cardGrid}>

        <div style={{ ...styles.card, ...styles.card1 }}>
          <span style={styles.freeBadge}>FREE</span>
          <div style={styles.icon}>📷</div>
          <p style={styles.courseType}>Skill Development Course</p>
          <h3 style={styles.title}>Photography Training Programme</h3>
          <div style={styles.divider}></div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Duration</span>
            <span style={styles.value}>3 Months</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Seats</span>
            <span style={styles.value}>40 Seats</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Eligibility</span>
            <span style={styles.value}>Graduation</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Fee</span>
            <span style={styles.value}>Rs. 0 / Free</span>
          </div>
          <div style={styles.bottomTag}>
            📍 SJMC, AKU Campus, Mithapur, Patna - 800001
          </div>
        </div>

        <div style={{ ...styles.card, ...styles.card2 }}>
          <span style={styles.freeBadge}>FREE</span>
          <div style={styles.icon}>🎬</div>
          <p style={styles.courseType}>Skill Development Course</p>
          <h3 style={styles.title}>Filmmaking Training Programme</h3>
          <div style={styles.divider}></div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Duration</span>
            <span style={styles.value}>5 Months</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Seats</span>
            <span style={styles.value}>40 Seats</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Eligibility</span>
            <span style={styles.value}>Graduation</span>
          </div>
          <div style={styles.infoRow}>
            <span style={styles.label}>Fee</span>
            <span style={styles.value}>Rs. 0 / Free</span>
          </div>
          <div style={styles.bottomTag}>
            📍 SJMC, AKU Campus, Mithapur, Patna - 800001
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page112;