import React from 'react';

const Loader: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 0',
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          border: '8px solid #e0e0e0',
          borderTop: '8px solid #FF7043',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
        role="status"
        aria-label="Loading"
      ></div>
      <span style={{ marginTop: 32, color: '#BDBDBD', fontSize: 12 }}>
        Loading...
      </span>
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default Loader;
