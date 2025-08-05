import React from 'react';

export default function paragraph({ children }) {
  return (
    <div style={{
      marginBottom: '1.25rem',
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#444',
      maxWidth: '700px'
    }}>
      {children}
    </div>
  );
}