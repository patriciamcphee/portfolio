import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, ArrowRight, 
  FileText, PenTool, Monitor, Code, Mail, Linkedin, Github,
  Globe} from 'lucide-react';
import type { Project, Category, Service } from '../types';
import Resume from '../components/Resume/Resume';
import ContactForm from '../components/ContactForm/ContactForm';
import HeroImage from '../components/HeroImage';


const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const location = useLocation();

    // Scroll to section based on hash in URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

    const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getCategoryColor = (category: string): string => {
    const colorMap: { [key: string]: string } = {
      'technical-writing': 'portfolio-card-blue-light',
      'ux-writing': 'portfolio-card-red',
      'ux-design': 'portfolio-card-yellow',
      'prompt-engineering': 'portfolio-card-purple',
      'web-design': 'portfolio-card-blue-dark',
      'coding': 'portfolio-card-orange',
      'blog-writing': 'portfolio-card-gold',
    };
    return colorMap[category] || 'portfolio-card-blue-light';
  };

  const getCategoryLabel = (category: string): string => {
    const labelMap: { [key: string]: string } = {
      'technical-writing': 'Technical Writing',
      'ux-writing': 'UX Writing',
      'blog-writing': 'Blog Writing',
      'ux-design': 'UX/UI Design',
      'web-design': 'Web Design',
      'coding': 'Coding',
      'prompt-engineering': 'Prompt Engineering',   
    };
    return labelMap[category] || category;
  };

  const projects: Project[] = [
    {
      id: 3,
      title: "JIRA Feature Toolkit",
      category: "prompt-engineering",
      description: "Pre-made AI prompts to turn technical notes into clear, user-friendly JIRA feature descriptions with validation tools.",
      tags: ["AI", "Prompt Engineering", "JIRA"],
      link: "/jira-toolkit"
    },
    {
      id: 4,
      title: "Landscaping Website",
      category: "web-design",
      description: "Branding, website design, logo, mobile responsiveness, and lead-generating contact system for a landscaping business.",
      tags: ["Branding", "Web Development", "Logo Design", "React", "Mobile-First"],
      link: "https://www.leaflinegarden.design/",
      githubLink: "https://github.com/patriciamcphee/leafline"
    },
    {
      id: 6,
      title: "Lightbox Image Plugin",
      category: "coding",
      description: "Lightweight, dependency-free Docusaurus 3.x plugin for smooth, click-to-zoom images.",
      tags: ["Coding", "NPM Package", "Docusaurus v3", "Image Zoom"],
      link: "https://www.npmjs.com/package/lightbox-image-plugin"
    },
    {
      id: 5,
      title: "Smart Search Plugin",
      category: "coding",
      description: "Fuzzy search plugin for Docusaurus 3.x with real-time, section-level results.",
      tags: ["Coding", "NPM Package", "Docusaurus v3", "Local Search"],
      link: "https://www.npmjs.com/package/smart-search-plugin"
    },
    {
      id: 1,
      title: "Style Guide",
      category: "technical-writing",
      description: "A style guide for a Developer Doc Site is a roadmap for those interested in contributing to a project's documentation.",
      tags: ["Technical Writing", "Technical Documents"],
      link: "https://demos.pixlngrid.com/welcome/",
      githubLink: "https://github.com/patriciamcphee/smart-search-plugin-demo"
    },
    {
      id: 2,
      title: "Enhancing Content Search",
      category: "blog-writing",
      description: "The Smart Search Plugin makes it easier for users to find content quickly and boosts engagement.",
      tags: ["Technical Writing", "Blog", "Writing"],
      link: "https://demos.pixlngrid.com/blog/2024/11/08/enhancing-search-functionality/"
    },
    {
      id: 7,
      title: "Movie App API",
      category: "technical-writing",
      description: "This API provides access to information about various B-movies, including details about directors, actors, genres, and release years.",
      tags: ["Technical Writing", "API", "Documentation"],
      link: "https://demos.pixlngrid.com/api/",
      githubLink: "https://github.com/patriciamcphee/bflix-api"
    },
    {
      id: 8,
      title: "Error Messages",
      category: "ux-writing",
      description: "Effective error message UX design explains why it occurred and then provides the next steps for users to fix the problem.",
      tags: ["UX Writing", "Error Messages", "User Experience"],
      link: "https://demos.pixlngrid.com/style-guide/writing-effective-error-messages/"
    },
        {
      id: 9,
      title: "Backstage Sidebar Redesign",
      category: "ux-design",
      description: "A comprehensive sidebar redesign that reduced navigation complexity by 66% and improved accessibility of frequently used controls.",
      tags: ["UX Design", "Navigation"],
      link: "/project/backstage-sidebar-redesign"
    },
    {
      id: 10,
      title: "Backstage Create Page Redesign",
      category: "ux-design",
      description: "Template catalog redesign that increases visibility of the templates by 200%, adding dynamic filters, and making static elements interactive.",
      tags: ["UX Design", "Navigation"],
      link: "/project/backstage-create-page-redesign",
      githubLink: "https://github.com/patriciamcphee/template-catalog",
      viteLink: "https://patriciamcphee.github.io/template-catalog/"
    },
    {
      id: 11,
      title: "Writing Release Notes",
      category: "technical-writing",
      description: "When created thoughtfully, release notes are powerful user engagement and retention tools. They can significantly impact user satisfaction and product adoption.",
      tags: ["Technical Writing"],
      link: "https://demos.pixlngrid.com/style-guide/writing-release-notes/"
    }
  ];

  const filteredProjects: Project[] = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const categories: Category[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'technical-writing', label: 'Technical Writing' },
    { id: 'ux-writing', label: 'UX Writing' },
    { id: 'prompt-engineering', label: 'Prompt Engineering' },
    { id: 'ux-design', label: 'UX/UI Design' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'coding', label: 'Coding' },
    { id: 'blog-writing', label: 'Blog Writing' }

  ];

  const services: Service[] = [
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Clear, comprehensive documentation that makes complex systems accessible"
    },
    {
      icon: PenTool,
      title: "UX Writing",
      description: "Microcopy and content design that guides users seamlessly"
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "Intuitive interfaces that delight users and drive engagement"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites built with React and cutting-edge tech"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-img">
            <HeroImage />
          </div>
          <div className="hero-content">
            <p className="hero-description">
              Empowering users through well-crafted content and intuitive design. 
              Bridging the gap between complex technology and human understanding.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('portfolio')} className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-outline">
                Get In Touch
              </button>
            </div>
            <div className="hero-social">
              <a href="https://linkedin.com/in/patriciamcphee" className="social-link">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" className="social-link">
                <Github size={24} />
              </a>
              <a href="mailto:contact@patriciamcphee.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
        <div className="hero-scroll">
            <ChevronDown size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-content">
              <p>
                Hello, I'm Patricia McPhee—a Technical Content Manager who lives at 
                the intersection of documentation and developer relations.
              </p>
              <p>
                For over 20 years, I've been doing what I love: helping developers and engineers 
                understand complex technology through clear, accessible content. I've 
                written API guides that actually make sense, built docs-as-code platforms 
                that scale, and created SDK tutorials that get developers from zero to shipped.
              </p>
              <p>
                I've worked across the spectrum—from startups building their first developer 
                experience to industry leaders like Microsoft, Facebook, and Cigna.
              </p>
              <p>
                But documentation is just one part of the story. I approach every project 
                as a strategist and developer advocate—someone who understands that great 
                content doesn't just explain <em>how</em> something works, but shows developers&nbsp; 
                <em>why</em> &nbsp;it matters and how it solves their problems.
              </p>
            </div>

            <div className="about-content">

              <p>
                Whether I'm collaborating with full-stack developers or cloud infrastructure engineers, 
                my focus remains the same: creating content that resonates with both seasoned 
                architects and developers just getting started.
              </p>
              <p>
                In a world where developer experience can make or break adoption, I bring 
                technical depth, a developer-first mindset, and over two decades of experience 
                turning complex platforms into accessible, compelling stories.
              </p>
              <p>
                Currently, I am diving deeper into AI, prompt engineering, and TypeScript to better support the developer community—because in this field, 
                learning never stops.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="section section-alt">
        <div className="container">
          <h2 className="section-title">How I Can Help</h2>
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className={`service-card service-${index}`}>
                  <Icon size={48} className="service-icon" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="portfolio-container">
          <h2 className="section-title">Portfolio</h2>
          
          {/* Category Filter */}
          <div className="portfolio-filter">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="row portfolio-container-2">
            {filteredProjects.map((project) => (
              <div key={project.id} className="column portfolio-content">
                <div className={`portfolio-card ${getCategoryColor(project.category)}`}>
                  <div className="block-head">{getCategoryLabel(project.category)}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="portfolio-card-footer">
                  <Link to={project.link} className="portfolio-button" target='_blank' rel='noopener noreferrer'>
                    <span className="button-white-text">View Project &#x2192;</span>
                  </Link>
                  <div className="portfolio-card-links">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        className="portfolio-icon-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="View GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.viteLink && (
                      <a 
                        href={project.viteLink} 
                        className="portfolio-icon-link vite-link"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="View Live Prototype"
                      >
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <Resume />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div>
            <ContactForm />

          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;