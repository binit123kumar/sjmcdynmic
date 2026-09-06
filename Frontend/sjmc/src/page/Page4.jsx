import React, { useEffect, useState } from 'react';
import Home from '../components/HomeButton';

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");
const API_URL = `${API_BASE}/api/staff?activeOnly=true`;

function Page4() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      setItems(json.data || []);
    } catch (err) {
      console.error('Staff API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Home />
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row justify-content-center">
          <div
            style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
            className="col-md-9 p-4 mx-auto"
          >
            <h2 className="text-center mb-4">Our Staff</h2>

            {loading && <p className="text-center">Loading...</p>}
            {!loading && items.length === 0 && (
              <p className="text-center">No Staff members available yet.</p>
            )}

            <div className="row justify-content-center">
              {items.map((item) => (
                <div key={item.id} className="col-md-4 col-sm-6 text-center mb-4">
                  <div
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: '10px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      padding: '16px',
                    }}
                  >
                    {item.photoPath ? (
                      <img
                        src={`${API_BASE}${item.photoPath}`}
                        alt={item.name}
                        style={{
                          width: '160px',
                          height: '160px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginBottom: '10px',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '160px',
                          height: '160px',
                          background: '#ddd',
                          borderRadius: '8px',
                          margin: '0 auto 10px',
                        }}
                      />
                    )}
                    <div style={{ fontWeight: 'bold', color: '#0d6efd', textTransform: 'uppercase' }}>
                      {item.name}
                    </div>
                    {item.designation && (
                      <div style={{ fontWeight: 'bold', color: '#0d6efd', fontSize: '14px', textTransform: 'uppercase' }}>
                        {item.designation}
                      </div>
                    )}
                    {item.email && (
                      <div style={{ color: '#0d6efd', fontSize: '13px' }}>{item.email}</div>
                    )}
                    {item.phone && (
                      <div style={{ color: '#0d6efd', fontSize: '13px' }}>{item.phone}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page4;