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
    <div className="home-sidebar-col" style={{ marginTop: '10px' }}>
      <div className="sjmc-news-card news-box" style={{ width: '100%', height: '550px', overflow: 'auto', padding: '18px 20px', borderLeft: '4px solid var(--sjmc-orange)' }}>
        <h4 className="heading-news" style={{ position: 'sticky', top: '-8px', zIndex: '1', background: '#fff', color: 'var(--sjmc-purple)', fontWeight: 700, fontSize: '1.1rem', padding: '6px 0' }}>News and Announcements</h4>
        {state === 'loading' && <p>Loading...</p>}
        {state === 'error' && <p>Updates are temporarily unavailable.</p>}
        {state === 'ready' && !items.length && <p>No updates available.</p>}
        {items.map((item) => (
          <div key={item.id} style={{ display: 'block', marginBottom: '20px' }}>
            {item.path ? <a href={fileUrl(item.path)} target="_blank" rel="noreferrer" className="text-decoration-none" style={{ color: 'var(--sjmc-purple)', fontWeight: 600 }}>{item.title}</a> : <span style={{ color: 'var(--sjmc-purple)', fontWeight: 600 }}>{item.title}</span>}
            {item.description && <div style={{ fontSize: '12px', color: 'var(--sjmc-muted)' }}>{item.description}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}