import React from 'react';

export default function exp_item({ title, company, date, children }) {
  return (
    <div style={{
      marginBottom: '2rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #eee'
    }}>
      <h2 style={{ margin: '0 0 0.3rem', color: '#222' }}>{title}</h2>
      <h4 style={{ margin: '0 0 0.3rem', color: '#555' }}>{company}</h4>
      <p style={{ margin: '0 0 1rem', fontSize: '0.95rem', color: '#999' }}>{date}</p>
      <div style={{ fontSize: '1.05rem', lineHeight: 1.7, color: '#444' }}>
        {children}
      </div>
    </div>
  );
}