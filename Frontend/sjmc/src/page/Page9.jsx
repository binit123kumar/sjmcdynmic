import React, { useEffect, useState } from 'react';
import Home from '../components/HomeButton';
import Director from '../asset/founding_director.webp';

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");
const API_URL = `${API_BASE}/api/about`;

function Page9() {
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
      setItems(all.filter((i) => i.showOnFounderDirector));
    } catch (err) {
      console.error('Founder Director API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Home />
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div
            style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
            className="col-md-9 p-4 mx-auto text-center"
          >
            {loading && <p>Loading...</p>}

            {!loading && items.length === 0 && (
              <>
                {/* Backend se abhi tak koi entry nahi — purani static image fallback ke roop mein */}
                <img
                  style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
                  src={Director}
                  alt="Founder Director"
                  className="img-fluid"
                />
                <p style={{ marginTop: '20px' }}>No Founder Director message available yet.</p>
              </>
            )}

            {items.map((item) => (
              <div key={item.id}>
                {item.imagePath ? (
                  <img
                    style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
                    src={`${API_BASE}${item.imagePath}`}
                    alt={item.title}
                    className="img-fluid"
                  />
                ) : (
                  <img
                    style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
                    src={Director}
                    alt="Founder Director"
                    className="img-fluid"
                  />
                )}

                <h2
                  style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }}
                  className="text-center"
                >
                  {item.title}
                </h2>
                <hr />
                <div style={{ fontSize: '18px' }} dangerouslySetInnerHTML={{ __html: item.description }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page9;