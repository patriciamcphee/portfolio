import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const isHomePage = location.pathname === '/';

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <Link to="/" className="nav-logo">PM</Link>
            
            <div className="nav-menu desktop-menu">
              {isHomePage ? (
                // Home page navigation with scroll links
                <>
                  {['Home', 'About', 'Services', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.toLowerCase());
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {item}
                    </a>
                  ))}
                </>
              ) : (
                // Other pages navigation with router links
                <>
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About</Link>
                  <Link to="/#services" className="nav-link">Services</Link>
                  <Link to="/#portfolio" className="nav-link">Portfolio</Link>
                  <Link to="/#experience" className="nav-link">Experience</Link>
                  <Link to="/contact" className="nav-link">Contact</Link>
                </>
              )}
              <button onClick={toggleTheme} className="theme-toggle">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-toggle">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            {isHomePage ? (
              <>
                {['Home', 'About', 'Services', 'Portfolio', 'Experience', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="mobile-nav-link"
                    onClick={(e) => handleMobileNavClick(e, item.toLowerCase())}
                  >
                    {item}
                  </a>
                ))}
              </>
            ) : (
              <>
                <Link to="/" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/#services" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/#portfolio" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                <Link to="/#experience" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Experience</Link>
                <Link to="/contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </>
            )}
            
            {/* Theme Toggle in Mobile Menu */}
            <button 
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }} 
              className="mobile-nav-link mobile-theme-btn"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                justifyContent: 'flex-start'
              }}
            >
              {theme === 'dark' ? (
                <>
                  <Sun size={20} />
                </>
              ) : (
                <>
                  <Moon size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2025 Patricia McPhee. Crafted with passion and React/TypeScript.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;