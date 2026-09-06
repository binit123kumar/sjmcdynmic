import { useEffect, useState } from 'react';
import client, { fileUrl } from '../api/client';

const emptyForm = {
  siteName: '', address: '', phone: '', email: '',
  facebook: '', twitter: '', instagram: '', youTube: '',
  metaTitle: '', metaDescription: '',
};

export default function SettingsPage() {
  const [form, setForm] = useState(emptyForm);
  const [logoPath, setLogoPath] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await client.get('/settings');
        const data = res.data.data;
        setForm({
          siteName: data.siteName || '', address: data.address || '', phone: data.phone || '',
          email: data.email || '', facebook: data.facebook || '', twitter: data.twitter || '',
          instagram: data.instagram || '', youTube: data.youTube || '',
          metaTitle: data.metaTitle || '', metaDescription: data.metaDescription || '',
        });
        setLogoPath(data.logoPath);
      } catch {
        setMessage('Could not load settings. Is the backend running?');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function change(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v ?? ''));
      if (logoFile) fd.append('logo', logoFile);
      const res = await client.put('/settings', fd, { headers: { 'Content-Type': 'multipart/form-data' } });
      setLogoPath(res.data.data.logoPath);
      setMessage('Settings saved successfully.');
    } catch (err) {
      setMessage(err?.response?.data?.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) return <div className="empty-state"><i className="bi bi-hourglass-split" />Loading...</div>;

  return (
    <>
      <div className="page-title-row"><h1>Settings</h1></div>
      <div className="card-panel">
        <form onSubmit={handleSubmit}>
          <div className="modal-body" style={{ maxHeight: 'none' }}>
            {message && <div className="login-error" style={{ background: message.includes('success') ? 'var(--success-bg)' : undefined, color: message.includes('success') ? 'var(--success)' : undefined }}>{message}</div>}

            <div className="form-grid">
              <div className="form-group full">
                <label>Logo</label>
                {logoPath && <img src={fileUrl(logoPath)} alt="" className="img-preview" />}
                <input type="file" onChange={(e) => setLogoFile(e.target.files[0])} />
              </div>

              <div className="form-group">
                <label>Site Name <span className="req">*</span></label>
                <input type="text" value={form.siteName} onChange={(e) => change('siteName', e.target.value)} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="text" value={form.email} onChange={(e) => change('email', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="text" value={form.phone} onChange={(e) => change('phone', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" value={form.address} onChange={(e) => change('address', e.target.value)} />
              </div>

              <div className="form-group">
                <label>Facebook URL</label>
                <input type="text" value={form.facebook} onChange={(e) => change('facebook', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Twitter / X URL</label>
                <input type="text" value={form.twitter} onChange={(e) => change('twitter', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Instagram URL</label>
                <input type="text" value={form.instagram} onChange={(e) => change('instagram', e.target.value)} />
              </div>
              <div className="form-group">
                <label>YouTube URL</label>
                <input type="text" value={form.youTube} onChange={(e) => change('youTube', e.target.value)} />
              </div>

              <div className="form-group full">
                <label>Meta Title (SEO)</label>
                <input type="text" value={form.metaTitle} onChange={(e) => change('metaTitle', e.target.value)} />
              </div>
              <div className="form-group full">
                <label>Meta Description (SEO)</label>
                <textarea value={form.metaDescription} onChange={(e) => change('metaDescription', e.target.value)} />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Saving...' : 'Save Settings'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
