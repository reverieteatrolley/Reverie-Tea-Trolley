import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff0f5', minHeight: '100vh', color: '#333' }}>
      <header style={{ backgroundColor: '#fff', padding: '1rem 2rem', borderBottom: '1px solid #f5cfd5', position: 'sticky', top: 0 }}>
        <h1 style={{ color: '#c44569', fontWeight: 'bold', fontSize: '1.75rem' }}>Reverie Tea Trolley</h1>
      </header>

      <main style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <h2 style={{ color: '#e84393', fontSize: '2rem', marginBottom: '1rem' }}>
          A Parisian-Inspired Tea Experience on Wheels
        </h2>
        <p style={{ fontSize: '1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Join us for luxury afternoon tea seatings across South Florida. Elegant, unforgettable, and designed for the modern romantic.
        </p>

        <form style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'left' }}>
          <label>Name</label>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <label>Email</label>
          <input type="email" placeholder="Your email" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <label>Guests</label>
          <input type="number" min="1" max="20" placeholder="Number of guests" style={{ width: '100%', padding: '10px', marginBottom: '20px' }} />
          <button type="submit" style={{ backgroundColor: '#e84393', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
            Request Reservation
          </button>
        </form>
      </main>

      <footer style={{ textAlign: 'center', fontSize: '0.9rem', padding: '2rem', color: '#777' }}>
        &copy; 2025 Reverie Tea Trolley. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
