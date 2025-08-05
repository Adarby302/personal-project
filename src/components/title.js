import React from 'react';

export default function Title({ children }) {
  return (
    <h1 style={{
      fontSize: '2.5rem',
      borderBottom: '3px solid #f1356d',
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem',
      color: '#222',
    }}>
      {children}
    </h1>
  );
}
