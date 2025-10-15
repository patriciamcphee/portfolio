import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const toggleDarkMode = (): void => {
  setIsDarkMode(!isDarkMode);
  // Change from class to data attribute
  document.documentElement.setAttribute('data-theme', !isDarkMode ? 'dark' : 'light');
};

// Also update the useEffect to set initial theme
useEffect(() => {
  // Get saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  const isDark = savedTheme === 'dark';
  setIsDarkMode(isDark);
  document.documentElement.setAttribute('data-theme', savedTheme);
}, []);

// Update useEffect to save theme preference
useEffect(() => {
  const theme = isDarkMode ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [isDarkMode]);

  const isHomePage = location.pathname === '/';

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
                  <Link to="/#portfolio" className="nav-link">Portfolio</Link>
                  <Link to="/contact" className="nav-link">Contact</Link>
                </>
              )}
              <button onClick={toggleDarkMode} className="theme-toggle">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
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
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    {item}
                  </a>
                ))}
              </>
            ) : (
              <>
                <Link to="/" className="mobile-nav-link">Home</Link>
                <Link to="/about" className="mobile-nav-link">About</Link>
                <Link to="/#portfolio" className="mobile-nav-link">Portfolio</Link>
                <Link to="/contact" className="mobile-nav-link">Contact</Link>
              </>
            )}
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