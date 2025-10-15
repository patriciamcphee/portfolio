import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page" style={{ 
      minHeight: '70vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: '80px'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '1rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
          Page Not Found
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            <Home size={20} /> Go Home
          </Link>
          <Link to="/#portfolio" className="btn btn-outline">
            <Search size={20} /> View Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};