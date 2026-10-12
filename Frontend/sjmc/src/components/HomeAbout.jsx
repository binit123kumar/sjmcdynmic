import { useEffect, useState } from 'react';
import { buildApiUrl } from '../utils/api';

export default function HomeAbout() {
  const [items, setItems] = useState([]);
  const [state, setState] = useState('loading');

  useEffect(() => {
    fetch(buildApiUrl('/api/about'))
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
