import React from 'react';
import '../styles/notFound.css';

const NotFound = () => {
  return (
    <main className="not-found-container">
      <section className="not-found-section">
        <h2 className="not-found-title">Oops, Page Not Found</h2>
        <p className="not-found-message">The requested page could not be found.</p>
      </section>
    </main>
  );
};

export default NotFound;
