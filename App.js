import React from 'react';

function App() {
  return (
    <div className="site-wrapper" style={{
      fontFamily: 'serif',
      backgroundImage: 'url("/toile-background.jpg")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundColor: '#fdf9f5',
      color: '#3d3d3d',
      textAlign: 'center',
      padding: '4rem 2rem'
    }}>
      <img src="/logo.png" alt="Reverie Tea Trolley" style={{ maxWidth: '300px', marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '2.5rem', color: '#a1729e', marginBottom: '1rem' }}>Reverie Tea Trolley</h1>
      <h2 style={{ fontSize: '1.5rem', color: '#8c7f6a', marginBottom: '3rem' }}>Coming Soon</h2>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem'
      }}>
        <img src="/trolley-exterior.jpg" alt="Reverie Trolley Exterior" style={{
          maxWidth: '90%',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }} />
        <img src="/trolley-interior.jpg" alt="Reverie Trolley Interior" style={{
          maxWidth: '90%',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }} />
      </div>

      <footer style={{
        marginTop: '4rem',
        fontSize: '0.9rem',
        color: '#777'
      }}>
        &copy; 2025 Reverie Tea Trolley | Designed with love in mauve + gold
      </footer>
    </div>
  );
}

export default App;
