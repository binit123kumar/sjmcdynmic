import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Home from '../components/HomeButton';
import { API_BASE } from '../admin/api/client';

export default function CmsPage() {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [state, setState] = useState('loading');

  useEffect(() => {
    setState('loading');
    fetch(`${API_BASE}/api/contentpages/${encodeURIComponent(slug)}`)
      .then((response) => {
        if (!response.ok) throw new Error('Page not found');
        return response.json();
      })
      .then((response) => { setPage(response.data); setState('ready'); })
      .catch(() => setState('error'));
  }, [slug]);

  return (
    <>
      <Home />
      <main className="container my-5">
        {state === 'loading' && <div className="text-center py-5">Loading...</div>}
        {state === 'error' && <div className="text-center py-5">Page not found.</div>}
        {state === 'ready' && (
          <article className="bg-white shadow rounded-4 p-4">
            {page.coverImagePath && <img src={`${API_BASE}${page.coverImagePath}`} alt={page.coverAltText || page.title} className="img-fluid rounded-4 mb-4" />}
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.body }} />
          </article>
        )}
      </main>
    </>
  );
}