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
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 380,
    maxHeight: 550,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 16,
    boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 9999,
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  header: {
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    padding: '14px 18px',
    fontWeight: 700,
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  title: { fontSize: 15, letterSpacing: '0.5px' },
  messages: {
    flex: 1,
    padding: '14px 16px',
    overflowY: 'auto',
    maxHeight: 360,
    minHeight: 220,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    background: 'rgba(255, 255, 255, 0.95)',
  },
  message: {
    padding: '12px 14px',
    borderRadius: 12,
    fontSize: 14,
    lineHeight: 1.5,
    whiteSpace: 'pre-wrap',
    maxWidth: '85%',
    wordBreak: 'break-word',
  },
  botMsg: {
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    color: '#2c3e50',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  userMsg: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
  },
  inputRow: {
    display: 'flex',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '12px 14px',
    gap: 8,
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
  },
  input: {
    flex: 1,
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    padding: '10px 14px',
    fontSize: 14,
    outline: 'none',
    fontFamily: 'inherit',
    background: 'rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s ease',
  },
  btn: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    padding: '10px 18px',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(245, 87, 108, 0.4)',
  },
};
