import { useState } from 'react';
import { API_BASE } from '../utils/api';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'How can I help you today? Ask about news, events, courses, gallery, or pages.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chatbot/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.text }),
      });
      const data = await res.json();
      const botText = data?.data?.results?.length
        ? data.data.results
            .map((r) => `[${r.Source}] ${r.Title}: ${r.Snippet || ''}`)
            .join('\n\n')
        : 'I couldn\'t find any relevant information.';
      setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
    } catch {
      setMessages((prev) => [...prev, { role: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>💬 SJMC Assistant</span>
      </div>
      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div key={i} style={{ ...styles.message, ...(m.role === 'user' ? styles.userMsg : styles.botMsg) }}>
            {m.text}
          </div>
        ))}
        {loading && <div style={styles.botMsg}>Searching...</div>}
      </div>
      <div style={styles.inputRow}>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          placeholder="Ask about news, events, courses..."
        />
        <button style={styles.btn} onClick={send} disabled={loading}>
          Send
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed' as const,
    bottom: 20,
    right: 20,
    width: 360,
    maxHeight: 500,
    background: '#fff',
    borderRadius: 12,
    boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
    display: 'flex',
    flexDirection: 'column' as const,
    zIndex: 9999,
    fontFamily: 'Kanit, sans-serif',
    overflow: 'hidden',
  },
  header: {
    background: '#1a237e',
    color: '#fff',
    padding: '10px 14px',
    fontWeight: 600,
  },
  title: { fontSize: 14 },
  messages: {
    flex: 1,
    padding: '10px 12px',
    overflowY: 'auto' as const,
    maxHeight: 320,
    minHeight: 200,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 6,
  },
  message: {
    padding: '8px 10px',
    borderRadius: 8,
    fontSize: 13,
    lineHeight: 1.4,
    whiteSpace: 'pre-wrap' as const,
  },
  botMsg: {
    background: '#f0f0f0',
    color: '#333',
    alignSelf: 'flex-start',
  },
  userMsg: {
    background: '#e3f2fd',
    color: '#1565c0',
    alignSelf: 'flex-end',
  },
  inputRow: {
    display: 'flex',
    borderTop: '1px solid #e0e0e0',
    padding: '8px 10px',
    gap: 6,
  },
  input: {
    flex: 1,
    border: '1px solid #ccc',
    borderRadius: 6,
    padding: '8px 10px',
    fontSize: 13,
    outline: 'none',
    fontFamily: 'inherit',
  },
  btn: {
    background: '#1a237e',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    padding: '8px 14px',
    cursor: 'pointer',
    fontSize: 13,
    fontFamily: 'inherit',
  },
};
