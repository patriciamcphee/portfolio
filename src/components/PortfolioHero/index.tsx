import React from 'react';
import { Code2, Palette, FileText } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

const PortfolioHero: React.FC = () => {
  const skills: Skill[] = [
    {
      icon: <Code2 size={24} />,
      title: "Coding",
      description: "Building with React JavaScript and TypeScript",
      details: "Specialized in Docusaurus and Backstage development"
    },
    {
      icon: <Palette size={24} />,
      title: "Design",
      description: "Creating intuitive user interfaces",
      details: "Sidebar navigation, information cards with headers and footers"
    },
    {
      icon: <FileText size={24} />,
      title: "Writing",
      description: "Technical documentation and UX writing",
      details: "UI text, success/warning/error messages, and helper text"
    }
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0rem',
      alignItems: 'center',
      width: '100%',
      maxWidth: '100%',
      margin: '0px'
    }}>
      <style>{`
        @media (min-width: 1200px) {
          .hero-grid {
            grid-template-columns: 1fr 2.5fr !important;
          }
          .hero-text-content {
            order: 2 !important;
          }
          .hero-image-content {
            order: 1 !important;
          }
        }
        
        .skill-card {
          padding: 1.5rem;
          align-items: center;
          border: 1px solid #cccccc;
        }
        
        .skill-card-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .skill-icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          background: #1e293b;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .skill-text h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0 0 0.5rem 0;
        }
        
        .skill-text p {
          color: #334155;
          margin: 0 0 0.5rem 0;
        }
        
        .skill-text .details {
          font-size: 0.875rem;
          color: #64748b;
          margin: 0;
        }
        
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0;
        }
        
        .hero-image-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(251, 146, 60, 0.2), rgba(147, 197, 253, 0.2));
          border-radius: 9999px;
          filter: blur(60px);
          opacity: 0.5;
        }
        
        .hero-image {
          position: relative;
          width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
        }
      `}</style>
      
      <div className="hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem',
        alignItems: 'center'
      }}>
        {/* Left side - Content */}
        <div className="hero-text-content" style={{ order: 2 }}>
          <div style={{ marginBottom: '2rem' }}>
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: '#1e293b',
              marginBottom: '1.5rem',
              lineHeight: '1.2'
            }}>
              Hi, I'm a Developer, Designer & Writer
            </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              color: '#64748b',
              lineHeight: '1.6'
            }}>
              Crafting beautiful, functional experiences through code, design, and words.
            </p>
          </div>

          {/* Skills Cards */}
          <div>
            {skills.map((skill: Skill, index: number) => (
              <div key={index} className="skill-card">
                <div className="skill-card-content">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <div className="skill-text">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                    <p className="details">{skill.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hero-image-content" style={{ 
          order: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img
              src="/landing-page-image-1.png"
              alt="Portfolio character"
              className="hero-image"
              onError={(e) => {
                // Fallback if image doesn't load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHero;