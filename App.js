import React from 'react';

function App() {
  return (
    <div className="site-wrapper" style={{ fontFamily: 'serif', background: '#fdf9f5', color: '#3d3d3d' }}>
      <header style={{ background: '#fff', borderBottom: '1px solid #dfd3c3', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ color: '#b08eae', fontSize: '1.75rem' }}>Reverie Tea Trolley</h1>
        <nav>
          <a href="#about" style={{ margin: '0 1rem', color: '#8c7f6a' }}>About</a>
          <a href="#packages" style={{ margin: '0 1rem', color: '#8c7f6a' }}>Packages</a>
          <a href="#book" style={{ margin: '0 1rem', color: '#8c7f6a' }}>Book</a>
        </nav>
      </header>

      <section className="hero-section" style={{ textAlign: 'center', padding: '4rem 2rem', background: '#f6f1eb' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#a1729e' }}>A Whimsical Tea Experience</h2>
        <p style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '1.1rem' }}>
          Step into a floral dream with South Florida’s first luxury mobile tea salon. Draped in sage, mauve, and gold—our trolley was designed for modern romantics.
        </p>
      </section>

      <section id="about" style={{ padding: '3rem 2rem', background: '#fff' }}>
        <h3 style={{ fontSize: '1.75rem', color: '#b08eae', textAlign: 'center' }}>About Reverie</h3>
        <p style={{ maxWidth: '700px', margin: '1rem auto', fontSize: '1.05rem', textAlign: 'center' }}>
          Reverie Tea Trolley is a mobile tea lounge designed with bridal parties, birthdays, and boutique celebrations in mind. Our Parisian-inspired interior offers a lush escape with custom florals and vintage charm.
        </p>
      </section>

      <section id="packages" style={{ padding: '3rem 2rem', background: '#fdf9f5' }}>
        <h3 style={{ fontSize: '1.75rem', color: '#a1729e', textAlign: 'center' }}>Our Packages</h3>
        <ul style={{ listStyle: 'none', padding: 0, maxWidth: '800px', margin: '2rem auto' }}>
          <li style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#8c7f6a' }}>The Signature Tea</h4>
            <p>90 minutes | $95 per guest<br />Includes signature tea service, sweets, and table styling.</p>
          </li>
          <li style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.25rem', color: '#8c7f6a' }}>The Bridal Bliss</h4>
            <p>2 hours | $120 per guest<br />Champagne, floral headbands, and keepsake favors included.</p>
          </li>
          <li>
            <h4 style={{ fontSize: '1.25rem', color: '#8c7f6a' }}>Private Charter</h4>
            <p>Custom pricing<br />Rent the entire trolley for events or styled shoots.</p>
          </li>
        </ul>
      </section>

      <section id="book" style={{ padding: '3rem 2rem', background: '#fff' }}>
        <h3 style={{ fontSize: '1.75rem', color: '#b08eae', textAlign: 'center' }}>Book Your Tea Time</h3>
        <div style={{ maxWidth: '600px', margin: '2rem auto', border: '1px solid #e0dede', borderRadius: '10px', padding: '1rem' }}>
          <iframe
            src="https://calendly.com/reverieteatrolley"
            width="100%"
            height="600"
            frameBorder="0"
            title="Reverie Booking"
            style={{ borderRadius: '8px' }}
          ></iframe>
        </div>
      </section>

      <footer style={{ textAlign: 'center', fontSize: '0.9rem', padding: '2rem', color: '#777' }}>
        &copy; 2025 Reverie Tea Trolley | Designed with love in mauve + gold
      </footer>
    </div>
  );
}

export default App;
