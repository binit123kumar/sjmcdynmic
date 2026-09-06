import React, { useEffect, useState } from 'react';
import Home from '../components/HomeButton';

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");
const API_URL = `${API_BASE}/api/about`;

function Page11() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      const all = json.data || [];
      setItems(all.filter((i) => i.showOnVisionMission));
    } catch (err) {
      console.error('Vision & Mission API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Home />
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div
            style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
            className="col-md-9 p-4 mx-auto"
          >
            <div style={{ margin: '50px' }}>
              {loading && <p>Loading...</p>}

              {!loading && items.length === 0 && (
                <p>No Vision & Mission content available yet.</p>
              )}

              {items.map((item) => (
                <div key={item.id} style={{ marginBottom: '30px' }}>
                  <h2 style={{ textAlign: 'left', borderBottom: '1px solid black' }}>
                    {item.title}
                  </h2>
                  <br />
                  {item.imagePath && (
                    <img
                      src={`${API_BASE}${item.imagePath}`}
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: '350px', objectFit: 'contain', marginBottom: '20px' }}
                    />
                  )}
                  <div style={{ fontSize: '20px' }} dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page11;