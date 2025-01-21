'use client';

import React from 'react';

const Loading: React.FC = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9f9f9',
    },
    spinner: {
      width: '50px',
      height: '50px',
      border: '5px solid #e6e6e6', // Light grey border
      borderTop: '5px solid #0044cc', // Blue color
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    },
    text: {
      marginTop: '20px',
      fontSize: '1.2rem',
      color: '#0044cc',
      fontWeight: 'bold' as const,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading...</p>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
