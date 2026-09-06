import { useEffect, useState } from 'react';

const API_BASE = (process.env.REACT_APP_API_URL || 'https://localhost:7050/api').replace(/\/api\/?$/, '');

export default function HomeAbout() {
  const [items, setItems] = useState([]);
  const [state, setState] = useState('loading');

  useEffect(() => {
    fetch(`${API_BASE}/api/about`)
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load About content.');
        return response.json();
      })
      .then((response) => {
        setItems((response.data || []).filter((item) => item.isActive && item.showOnHomePage));
        setState('ready');
      })
      .catch(() => setState('error'));
  }, []);

  if (state === 'loading') return <p className="text-center">Loading About content...</p>;
  if (state === 'error') return <p className="text-center">About content is temporarily unavailable.</p>;
  if (!items.length) return <p className="text-center">No About content available.</p>;

  return items.map((item) => (
    <section key={item.id} className="home-about-dynamic">
      <h2>{item.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: item.description }} />
    </section>
  ));
}
