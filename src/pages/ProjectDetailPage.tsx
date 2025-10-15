import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Award } from 'lucide-react';
import './ProjectDetail.css';

interface ProjectDetails {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  duration: string;
  team: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  images: string[];
  liveLink?: string;
  githubLink?: string;
  nextProject?: string;
  prevProject?: string;
}

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // This would typically come from a data file or API
  const projectsData: Record<string, ProjectDetails> = {
    'beyond-identity': {
      id: 'beyond-identity',
      title: 'Beyond Identity Documentation',
      subtitle: 'Comprehensive API documentation and user guides',
      category: 'Technical Writing',
      client: 'Beyond Identity',
      duration: '2023 - Present',
      team: '5 members',
      heroImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=1600&h=900&fit=crop',
      overview: 'Led the complete documentation overhaul for Beyond Identity\'s enterprise identity management platform, creating a comprehensive resource hub that serves over 10,000 enterprise users worldwide.',
      challenge: 'The existing documentation was fragmented across multiple platforms, lacked consistency in tone and structure, and had no clear information architecture. Support tickets were increasing by 20% monthly due to unclear documentation.',
      solution: 'Implemented a docs-as-code workflow using Docusaurus, established a comprehensive style guide, and created an intuitive information architecture. Developed interactive API explorers, code examples in multiple languages, and video tutorials.',
      results: [
        'Reduced support tickets by 35% within 3 months',
        'Improved documentation satisfaction score from 2.8 to 4.6/5',
        'Decreased average time to first API call from 3 days to 4 hours',
        'Increased developer portal engagement by 120%'
      ],
      technologies: ['Docusaurus', 'React', 'MDX', 'GitHub Actions', 'Swagger/OpenAPI', 'Postman'],
      images: [
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop'
      ],
      liveLink: 'https://docs.beyondidentity.com',
      githubLink: 'https://github.com/beyondidentity/docs',
      nextProject: 'developer-portal',
      prevProject: 'azure-guides'
    },
    'developer-portal': {
      id: 'developer-portal',
      title: 'Developer Portal Design',
      subtitle: 'Modern API documentation platform',
      category: 'Web Design',
      client: 'Tech Startup',
      duration: '6 months',
      team: '3 members',
      heroImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1600&h=900&fit=crop',
      overview: 'Designed and developed a modern developer portal with interactive API explorer, comprehensive documentation, and seamless onboarding experience.',
      challenge: 'The client needed a developer portal that could compete with industry leaders like Stripe and Twilio, providing an exceptional developer experience while maintaining brand consistency.',
      solution: 'Created a React-based portal with real-time API testing, interactive code examples, SDKs in multiple languages, and a comprehensive getting-started guide. Implemented dark mode, syntax highlighting, and responsive design.',
      results: [
        'Increased API adoption by 200% in first quarter',
        'Reduced integration time from 2 weeks to 3 days',
        'Achieved 95% developer satisfaction rating',
        'Won "Best Developer Experience" award at API Conference 2023'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Swagger UI', 'Monaco Editor'],
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
      ],
      liveLink: 'https://developers.example.com',
      nextProject: 'saas-dashboard',
      prevProject: 'beyond-identity'
    }
    // Add more projects as needed
  };

  const project = projectsData[projectId || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="section">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-hero" style={{ paddingTop: '100px' }}>
        <div className="container">
          <Link to="/#portfolio" className="back-link">
            <ArrowLeft size={20} /> Back to Portfolio
          </Link>
          <div className="project-hero-content">
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
            <div className="project-meta">
              <div className="meta-item">
                <Calendar size={18} />
                <span>{project.duration}</span>
              </div>
              <div className="meta-item">
                <Users size={18} />
                <span>{project.team}</span>
              </div>
              <div className="meta-item">
                <Award size={18} />
                <span>{project.client}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-hero-image">
          <img src={project.heroImage} alt={project.title} />
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container container-small">
          <h2>Overview</h2>
          <p className="project-text">{project.overview}</p>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section section-alt">
        <div className="container container-small">
          <div className="project-grid">
            <div>
              <h2>The Challenge</h2>
              <p className="project-text">{project.challenge}</p>
            </div>
            <div>
              <h2>The Solution</h2>
              <p className="project-text">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section">
        <div className="container container-small">
          <h2>Key Results</h2>
          <div className="results-grid">
            {project.results.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-number">{index + 1}</div>
                <p>{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      {project.images.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center">Project Showcase</h2>
            <div className="project-gallery">
              {project.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="section">
        <div className="container container-small">
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="section">
        <div className="container container-small">
          <div className="project-links">
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Live Site <ExternalLink size={20} />
              </a>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View on GitHub <Github size={20} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="project-nav">
        <div className="container">
          <div className="project-nav-grid">
            {project.prevProject && (
              <Link to={`/project/${project.prevProject}`} className="project-nav-link prev">
                <ArrowLeft size={20} />
                <span>Previous Project</span>
              </Link>
            )}
            <Link to="/#portfolio" className="project-nav-link center">
              All Projects
            </Link>
            {project.nextProject && (
              <Link to={`/project/${project.nextProject}`} className="project-nav-link next">
                <span>Next Project</span>
                <ArrowLeft size={20} style={{ transform: 'rotate(180deg)' }} />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;