import React, { useEffect, useState } from 'react';
import Home from '../components/HomeButton';

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");
const API_URL = `${API_BASE}/api/about`;

function Page7() {
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
      setItems(all.filter((i) => i.showOnRoleOfSJMC));
    } catch (err) {
      console.error('Role of SJMC API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row justify-content-center align-items-center">
          <div
            style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
            className="col-md-9 p-4 mx-auto"
          >
            <div style={{ margin: '50px' }}>
              {loading && <p>Loading...</p>}

              {!loading && items.length === 0 && (
                <p>No Role of SJMC content available yet.</p>
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
                  <div className="text-justify" style={{ fontSize: '18px' }} dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default Page7;