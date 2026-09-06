import React, { useEffect, useState } from 'react';

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");
const API_URL = `${API_BASE}/api/faculty`;

function Page25() {
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
      setItems(all.filter((i) => i.showOnConsultant));
    } catch (err) {
      console.error('Consultant API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div
        className="mx-auto p-4"
        style={{
          maxWidth: '1000px',
          backgroundColor: '#f4f4f4',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
        }}
      >
        {loading && <p className="text-center">Loading...</p>}
        {!loading && items.length === 0 && (
          <p className="text-center">No Consultant available yet.</p>
        )}

        {items.map((item, idx) => (
          <div key={item.id}>
            <div className="row align-items-center mb-5">
              <div className="col-md-4 text-center">
                {item.photoPath && (
                  <img
                    src={`${API_BASE}${item.photoPath}`}
                    alt={item.name}
                    style={{
                      width: '180px',
                      height: '220px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    }}
                  />
                )}
              </div>
              <div className="col-md-8 text-start">
                <h4 style={{ fontWeight: 'bold' }}>{item.name}</h4>
                {item.designation && (
                  <h6 style={{ fontWeight: 'normal', color: '#555' }}>{item.designation}</h6>
                )}
                {item.bio && (
                  <div style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: item.bio }} />
                )}
              </div>
            </div>
            {idx < items.length - 1 && <hr />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page25;