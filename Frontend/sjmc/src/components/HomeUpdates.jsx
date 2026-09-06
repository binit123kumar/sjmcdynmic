import { useEffect, useState } from 'react';
import { API_BASE, fileUrl } from '../admin/api/client';

const endpoints = ['/notice?activeOnly=true', '/news?activeOnly=true', '/publications?activeOnly=true'];

export default function HomeUpdates() {
  const [items, setItems] = useState([]);
  const [state, setState] = useState('loading');

  useEffect(() => {
    Promise.all(endpoints.map((endpoint) => fetch(`${API_BASE}${endpoint}`).then((response) => response.json())))
      .then((responses) => {
        const records = responses.flatMap((response) => response.data || []).map((item) => ({
          id: `${item.title}-${item.id}`,
          title: item.title,
          description: item.description,
          path: item.filePath,
          date: item.noticeDate || item.publishDate,
        }));
        setItems(records.slice(0, 30));
        setState('ready');
      })
      .catch(() => setState('error'));
  }, []);

  return (
    <div className="home-sidebar-col" style={{ marginTop: '10px', padding: '10px', textAlign: 'center' }}>
      <div className="news-box" style={{ width: '100%', height: '550px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', padding: '10px', backgroundColor: '#F0F0F0', overflow: 'auto' }}>
        <h4 className="heading-news" style={{ position: 'sticky', top: '-8px', zIndex: '1' }}>News and Announcements</h4>
        {state === 'loading' && <p>Loading...</p>}
        {state === 'error' && <p>Updates are temporarily unavailable.</p>}
        {state === 'ready' && !items.length && <p>No updates available.</p>}
        {items.map((item) => (
          <div key={item.id} style={{ display: 'block', marginBottom: '20px' }}>
            {item.path ? <a href={fileUrl(item.path)} target="_blank" rel="noreferrer" className="text-decoration-none">{item.title}</a> : <span>{item.title}</span>}
            {item.description && <div style={{ fontSize: '12px' }}>{item.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}