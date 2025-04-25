import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-rose-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md p-6 border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-rose-700 tracking-tight">
            Reverie Tea Trolley
          </h1>
          <button className="bg-rose-500 text-white px-4 py-2 rounded">Book Now</button>
        </div>
      </header>

      <section className="py-20 text-center px-6">
        <h2 className="text-4xl font-bold text-rose-600 mb-4">
          A Parisian-Inspired Tea Experience on Wheels
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join us for luxury afternoon tea seatings across South Florida. Elegant, unforgettable, and designed for the modern romantic.
        </p>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-semibold text-rose-600 mb-2">Reserve Your Experience</h3>
          <p className="text-gray-600">Choose your date and time below. Each seating is 90 minutes and includes tea, petite bites, and luxe ambiance.</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-rose-100 p-6 rounded-xl shadow">
            <h4 className="text-lg font-medium text-rose-700 mb-4">Select Date</h4>
            <input type="date" className="w-full p-3 rounded border border-gray-300" />
          </div>
          <div className="bg-rose-100 p-6 rounded-xl shadow">
            <h4 className="text-lg font-medium text-rose-700 mb-4">Enter Your Info</h4>
            <form className="space-y-4">
              <input className="w-full p-3 rounded border" placeholder="Full Name" />
              <input className="w-full p-3 rounded border" placeholder="Email Address" />
              <input className="w-full p-3 rounded border" placeholder="Number of Guests (max 20)" type="number" min="1" max="20" />
              <button className="bg-rose-500 text-white w-full p-3 rounded">Request Reservation</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-8">
        &copy; 2025 Reverie Tea Trolley. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
