import React from 'react';
import './spinner.css';

export default function LoadingSpinner() {
  return (
    <div
      className="spinner-container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <div className="loader" />
    </div>
  );
}
