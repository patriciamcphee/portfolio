import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext'; // Import the hook

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme(); // Use the context instead of local state
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

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