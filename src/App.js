import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Reverie Tea Trolley</h1>
      </header>
      <main className="app-main">
        <h2>A Parisian-Inspired Tea Experience on Wheels</h2>
        <p>
          Join us for luxury afternoon tea seatings across South Florida. Elegant, unforgettable, and designed for the modern romantic.
        </p>
        <form className="app-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="number" min="1" max="20" placeholder="Guests (max 20)" />
          <button type="submit">Request Reservation</button>
        </form>
      </main>
      <footer className="app-footer">
        &copy; 2025 Reverie Tea Trolley. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
