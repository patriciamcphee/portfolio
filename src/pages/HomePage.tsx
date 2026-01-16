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
      'ai-adoption': 'portfolio-card-purple',

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
//      'ai-adoption': 'AI Adoption',
    };
    return labelMap[category] || category;
  };

  const projects: Project[] = [
    {
      id: 3,
      title: "JIRA Feature Toolkit",
      category: "prompt-engineering",
      description: "GenAI enablement toolkit that converts raw technical notes into consistent, adoption-ready JIRA feature narratives—reducing writing time and improving requirements quality.",
      tags: ["Prompt Engineering", "Enablement", "Workflow Automation"],
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
      description: "AI-ready discovery layer for Docusaurus: fuzzy search with section-level results to reduce knowledge friction and improve time-to-answer.",
      tags: ["Knowledge Systems", "Search", "Docusaurus v3", "Developer Experience"],
      link: "https://www.npmjs.com/package/smart-search-plugin"
    },
    {
      id: 1,
      title: "Style Guide",
      category: "technical-writing",
      description: "A style guide for a Developer Doc Site is a roadmap for those interested in contributing to a project's documentation.",
      tags: ["Technical Writing", "Technical Documents"],
      link: "/samples/welcome/",
      githubLink: "https://github.com/patriciamcphee/portfolio"
    },
    {
      id: 2,
      title: "Enhancing Content Search",
      category: "blog-writing",
      description: "The Smart Search Plugin makes it easier for users to find content quickly and boosts engagement.",
      tags: ["Technical Writing", "Blog", "Writing"],
      link: "/samples/blog/2024/11/08/enhancing-search-functionality/"
    },
    {
      id: 7,
      title: "Movie App API",
      category: "technical-writing",
      description: "This API provides access to information about various B-movies, including details about directors, actors, genres, and release years.",
      tags: ["Technical Writing", "API", "Documentation"],
      link: "/samples/api/",
      githubLink: "https://github.com/patriciamcphee/bflix-api"
    },
    {
      id: 8,
      title: "Error Messages",
      category: "ux-writing",
      description: "Effective error message UX design explains why it occurred and then provides the next steps for users to fix the problem.",
      tags: ["UX Writing", "Error Messages", "User Experience"],
      link: "/samples/style-guide/writing-effective-error-messages/"
    },
        {
      id: 9,
      title: "Backstage Sidebar Redesign",
      category: "ux-design",
      description: "Navigation redesign that reduced cognitive load and improved access to frequent actions—supporting faster task completion and smoother platform adoption.",
      tags: ["UX for Adoption", "Information Architecture", "Navigation", "Accessibility"],
      link: "/project/backstage-sidebar-redesign"
    },
    {
      id: 10,
      title: "Backstage Create Page Redesign",
      category: "ux-design",
      description: "Platform adoption UX redesign: improved template discoverability with dynamic filters and interactive elements to reduce friction and increase self-service.",
      tags: ["Platform Enablement", "UX for Adoption", "Developer Experience", "Backstage"],
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
      link: "/samples/style-guide/writing-release-notes/"
    },
    {
      id: 12,
      title: "Backstage Template Editor",
      category: "technical-writing",
      description: "The Template Editor is a browser-based sandbox for experimenting with templates. It offers a live preview and an interactive environment to prototype ideas.",
      tags: ["Technical Writing", "Backstage"],
      link: "https://www.patriciamcphee.com/samples/template-editor/using-template-editor/"
    },
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
    { id: 'blog-writing', label: 'Blog Writing' },
//    { id: 'ai-adoption', label: 'AI Adoption' }
  ];

  const services: Service[] = [
    {
      icon: FileText,
      title: "AI Adoption Enablement",
      description: "Adoption-ready knowledge systems that reduce onboarding time and support AI usage at scale."
    },
    {
      icon: PenTool,
      title: "Governance & ContentOps",
      description: "Standards, templates, and workflows that keep technical knowledge consistent, accurate, and scalable."
    },
    {
      icon: Monitor,
      title: "Platform & UX Enablement",
      description: "Developer-first content + UX improvements that reduce friction and improve discoverability."
    },
    {
      icon: Code,
      title: "Automation for Knowledge",
      description: "Docs-as-code, pipelines, and tooling that reduce manual effort and speed up publishing."
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
              I help organizations adopt AI and complex platforms by turning them into clear, governed,
              adoption-ready experiences—through knowledge systems, enablement content, and developer-first UX.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('portfolio')} className="btn btn-primary">
                View Adoption Work <ArrowRight size={20} />
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
                Hi, I’m Patricia McPhee—an AI Adoption & Platform Enablement leader.
                I operationalize transformation by removing knowledge friction so teams can
                implement and use AI and complex platforms correctly, faster, and with confidence.
              </p>
              <p>
                I treat documentation as an adoption system: structured for discoverability,
                governed for consistency, and designed for AI-readiness (search, assistants, and reuse).
                This approach helps reduce onboarding time, support burden, and “tribal knowledge” risk.
              </p>
              <p>
                My work spans enterprise and startup environments—supporting developer platforms,
                cloud infrastructure, SDKs/APIs, and conversational experiences for teams at
                Microsoft, Cigna, Beyond Identity, Expedia, and more.
              </p>
            </div>

            <div className="about-content">
              <p>
                What I’m known for: translating complex technical systems into clear,
                scalable enablement—then building the governance and content operations
                needed to keep it accurate over time.
              </p>
              <p>
                Recently, I’ve been deepening my focus on AI enablement and prompt engineering:
                designing repeatable workflows and toolkits that improve speed, quality, and consistency
                across product and engineering teams.
              </p>
              <p>
                If you’re investing in AI or platform transformation, I help ensure the adoption side
                scales with the technology.
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
          <p className="portfolio-intro">
            This portfolio highlights developer-focused documentation, tooling, and UX work designed to
            improve adoption of complex AI, API, and platform systems.
          </p>
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