import React, { useEffect, useState } from 'react';
import Home from '../components/HomeButton';

const API_BASE = (process.env.REACT_APP_API_URL || "https://localhost:7050/api").replace(/\/api\/?$/, "");
const API_URL = `${API_BASE}/api/faculty?activeOnly=true`;

function Page5() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    load();
  }, []);

  const load = async () => {
    try {
      const res = await fetch(API_URL);
      const json = await res.json();
      const all = json.data || [];
      setItems(all.filter((i) => i.showOnFacultyPage));
    } catch (err) {
      console.error('Faculty API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Home />
      <div className="container">
        {loading && (
          <div className="text-center py-5">
            <h4>Loading...</h4>
          </div>
        )}

        {!loading && items.length === 0 && (
          <div className="text-center py-5">
            <h4>No Faculty members available yet.</h4>
          </div>
        )}

        {items.map((item) => (
          <div key={item.id} className="row justify-content-center align-items-center my-4">
            <div
              style={{ backgroundColor: '#f0f0f0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
              className="col-md-9 p-4 mx-auto text-center"
            >
              {item.photoPath && (
                <img
                  style={{ width: '200px', height: '250px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)', objectFit: 'cover' }}
                  src={`${API_BASE}${item.photoPath}`}
                  alt={item.name}
                  className="img-fluid"
                />
              )}

              <h2
                style={{ position: 'relative', top: '-5px', transform: 'translateY(50%)' }}
                className="text-center"
              >
                {item.name}
              </h2>
              <hr />
              {item.designation && (
                <h4
                  style={{ position: 'relative', top: '-3px', transform: 'translateY(-50%)', fontWeight: 'normal' }}
                >
                  {item.designation}
                </h4>
              )}

              {item.bio && (
                <div
                  className="mt-4 mx-auto text-left"
                  dangerouslySetInnerHTML={{ __html: item.bio }}
                />
              )}

              {(item.qualification || item.email || item.phone) && (
                <p className="mt-3 text-left" style={{ fontSize: '14px', color: '#555' }}>
                  {item.qualification && <>Qualification: {item.qualification}<br /></>}
                  {item.email && <>Email: {item.email}<br /></>}
                  {item.phone && <>Phone: {item.phone}</>}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page5;