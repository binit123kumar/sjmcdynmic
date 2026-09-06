import React, { useEffect, useState } from "react";
import Home from "../components/HomeButton";

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");
const API_URL = `${API_BASE}/api/about?activeOnly=true`;

function About() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAbout();
  }, []);

  const loadAbout = async () => {
    try {
      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await res.json();
      const all = json.data || [];
      setAbout(all.filter((i) => i.showOnAboutPage));
    } catch (err) {
      console.error("About API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Home />
        <div className="container text-center py-5">
          <h3>Loading...</h3>
        </div>
      </>
    );
  }

  if (about.length === 0) {
    return (
      <>
        <Home />
        <div className="container text-center py-5">
          <h3>No About Information Available</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Home />

      <div className="container my-5">
        {about.map((item) => (
          <div key={item.id} className="bg-white shadow rounded-4 p-4 mb-5">
            {item.imagePath && (
              <div
                className="text-center mb-4"
                style={{ background: "#f3f4f6", borderRadius: "1rem", padding: "12px" }}
              >
                <img
                  src={`${API_BASE}${item.imagePath}`}
                  alt={item.title}
                  className="img-fluid rounded-4"
                  style={{
                    width: "100%",
                    maxHeight: "450px",
                    objectFit: "contain",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}

            <h2
              className="text-center text-white rounded-3 py-3 mb-4"
              style={{
                background: "linear-gradient(90deg,#0d6efd,#00bcd4)",
              }}
            >
              {item.title}
            </h2>

            <div
              style={{
                fontSize: "18px",
                lineHeight: "32px",
              }}
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default About;