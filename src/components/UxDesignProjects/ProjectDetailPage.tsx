import * as React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github,
  Calendar, 
  Users, 
  Target,
  CheckCircle,
  TrendingDown,
  Eye,
  MousePointer,
  Layout,
  Menu,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Star,
  Grid,
  Tag
} from 'lucide-react';
import './ProjectDetail.css';
import SidebarBackstage from '../../assets/SidebarBackstage.png';
import SidebarBackstage2 from '../../assets/SidebarBackstage2.png';
import SidebarOriginal from '../../assets/SidebarOriginal.png';
// Add these imports for the Create Page project
import CreatePageRedesign from '../../assets/CreatePageRedesign.png';
import CreatePageBackstage from '../../assets/CreatePageBackstage.png';
import CreatePageRedesign2 from '../../assets/CreatePageRedesign2.png';

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

  // Project data
  const projectsData: Record<string, ProjectDetails> = {
    'backstage-sidebar-redesign': {
      id: 'backstage-sidebar-redesign',
      title: 'Backstage Sidebar Redesign',
      subtitle: 'Streamlining Navigation and Control Access',
      category: 'UX Design',
      client: 'Backstage Platform',
      duration: '3 months',
      team: '4 members (1 UX, 2 Dev, 1 PM)',
      heroImage: SidebarBackstage,
      overview: 'Led a comprehensive sidebar redesign that reduced navigation complexity by 66% and improved accessibility of frequently used controls, transforming a cluttered flyout-based system into an intuitive inline navigation experience.',
      challenge: 'The Backstage sidebar had critical UX issues: catalog navigation opened in right-side flyouts creating additional layers, Light/Dark mode toggles and sidebar controls were buried 3 clicks deep in Settings, and the interface didn\'t efficiently use vertical space. Support tickets were increasing due to hidden functionality.',
      solution: 'Completely restructured the sidebar architecture: converted catalog flyouts to inline accordion-style expandable menus directly beneath labels, relocated theme toggle and collapse controls to prominent sidebar positions (bottom and top respectively), and implemented smooth animations with proper accessibility standards including ARIA labels and keyboard navigation.',
      results: [
        'Reduced clicks for theme toggle by 66% (from 3 to 1)',
        'Reduced clicks for sidebar collapse by 66% (from 3 to 1)',
        'Decreased catalog navigation time by 50%',
        'Cut support tickets by 35% within 3 months',
        'Improved satisfaction score from 2.8 to 4.6/5',
        'Increased engagement by 120%'
      ],
      technologies: ['Figma', 'React', 'TypeScript', 'CSS Animations', 'ARIA/WCAG 2.1', 'User Testing'],
      images: [
        SidebarOriginal,
        SidebarBackstage2
      ],
      nextProject: 'backstage-create-page-redesign'
    },
    'backstage-create-page-redesign': {
      id: 'backstage-create-page-redesign',
      title: 'Template Gallery Redesign',
      subtitle: 'Transforming Template Discovery & Selection',
      category: 'UX Design',
      client: 'Alchemy Platform',
      duration: '2 months',
      team: '3 members (1 UX, 1 Dev, 1 PM)',
      heroImage: CreatePageBackstage,
      overview: 'Redesigned the template gallery interface to dramatically improve template discoverability and user efficiency. Increased templates visible above the fold by 200%, introduced dynamic filtering capabilities, and transformed static elements into interactive discovery tools.',
      challenge: 'The default Backstage template gallery presented critical usability challenges: limited template visibility required excessive scrolling, oversized headers consumed valuable screen space, static tag chips provided no filtering functionality, and users struggled to discover relevant templates efficiently. The interface hadn\'t scaled with Alchemy\'s growing template ecosystem.',
      solution: 'Implemented a comprehensive redesign featuring: a compact, responsive grid layout maximizing template visibility, an intelligent sidebar with Quick Filters, Categories, Teams, and Tags filtering, interactive tag chips that dynamically add filters, an Active Filters card showing all selections with clear/remove options, enhanced search integration, and improved template cards with favoriting, usage statistics, and documentation links.',
      results: [
        'Increased templates visible above fold by 200%',
        'Reduced average time to find templates by 65%',
        'Improved user satisfaction score from 3.1 to 4.7/5',
        'Decreased template selection time by 58%',
        'Increased template usage by 145%',
        'Reduced support requests by 42%'
      ],
      technologies: ['Figma', 'React', 'TypeScript', 'CSS Grid', 'User Testing', 'A/B Testing'],
      images: [
        CreatePageBackstage,
        CreatePageRedesign2
      ],
      prevProject: 'backstage-sidebar-redesign'
    }
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

  // Special rendering for Create Page Redesign
if (projectId === 'backstage-create-page-redesign') {
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-hero project-hero-padded">
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
                <Target size={18} />
                <span>Lead UX Designer</span>
              </div>
              <div className="meta-item">
                <Calendar size={18} />
                <span>{project.duration}</span>
              </div>
              <div className="meta-item">
                <Users size={18} />
                <span>{project.team}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-hero-image">
          <img src={CreatePageRedesign} alt={project.title} />
        </div>
      </section>

      {/* Quick Summary */}
      <section className="section">
        <div className="container container-small">
          <h2>Quick Summary</h2>
          <p className="project-text quick-summary">
            {project.overview}
          </p>
        </div>
      </section>

      {/* The Problem - Visual Grid */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center problems-title">Current UX Issues</h2>
          <div className="results-grid">
            <div className="result-card problem-card">
              <div className="problem-icon">
                <Eye size={28} />
              </div>
              <h3 className="problem-title">Limited Visibility</h3>
              <p className="problem-description">
                The interface could not display many template cards above the fold, requiring users to scroll extensively to view and compare options.
              </p>
            </div>

            <div className="result-card problem-card">
              <div className="problem-icon">
                <Layout size={28} />
              </div>
              <h3 className="problem-title">Excessive Real Estate Usage</h3>
              <p className="problem-description">
                Large tagline and heading occupied significant space at the top, reducing the area available for displaying templates.
              </p>
            </div>

            <div className="result-card problem-card">
              <div className="problem-icon">
                <MousePointer size={28} />
              </div>
              <h3 className="problem-title">Non-Interactive Elements</h3>
              <p className="problem-description">
                Tag chips on template cards were non-clickable, limiting functionality and reducing opportunities for dynamic filtering.
              </p>
            </div>

            <div className="result-card problem-card">
              <div className="problem-icon">
                <Search size={28} />
              </div>
              <h3 className="problem-title">Poor Discovery Tools</h3>
              <p className="problem-description">
                Limited search capabilities and lack of sophisticated filtering made it difficult to find relevant templates quickly.
              </p>
            </div>

            <div className="result-card problem-card">
              <div className="problem-icon">
                <TrendingDown size={28} />
              </div>
              <h3 className="problem-title">Navigation Inefficiencies</h3>
              <p className="problem-description">
                Users struggled to explore different template categories and understand relationships between templates and their domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="section">
        <div className="container container-small">
          <h2>User Research &amp; Goals</h2>
          
          <div className="user-intent-card">
            <h3 className="user-intent-title">User Intent</h3>
            <p className="user-intent-quote">
              "As a template user, I want a simple and intuitive tool for finding and discovering templates so I can build infrastructure and run processes efficiently."
            </p>
          </div>

          <h3 className="user-needs-title">Key User Benefits</h3>
          <div className="user-needs-grid">
            <div className="user-need-item">
              <CheckCircle size={20} className="user-need-icon" />
              <span className="user-need-text">Accelerated Template Acquisition: Reduce time to locate appropriate templates</span>
            </div>
            <div className="user-need-item">
              <CheckCircle size={20} className="user-need-icon" />
              <span className="user-need-text">Reduced User Friction: Intuitive navigation patterns that align with expectations</span>
            </div>
            <div className="user-need-item">
              <CheckCircle size={20} className="user-need-icon" />
              <span className="user-need-text">Enhanced Platform Experience: Better showcase of Alchemy's template ecosystem</span>
            </div>
            <div className="user-need-item">
              <CheckCircle size={20} className="user-need-icon" />
              <span className="user-need-text">Efficient Comparison: Clear visual hierarchy for comparing similar templates</span>
            </div>
            <div className="user-need-item">
              <CheckCircle size={20} className="user-need-icon" />
              <span className="user-need-text">Confident Selection: Increased confidence through usage statistics and documentation</span>
            </div>
          </div>
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

      {/* Design Changes */}
      <section className="section">
        <div className="container container-small">
          <h2>Key Design Changes</h2>
          
          <div className="design-changes-grid">
            {/* Layout Optimization */}
            <div className="design-change-card">
              <div className="design-change-header">
                <Grid size={24} className="design-change-icon" />
                <h3 className="design-change-title">Optimized Layout Architecture</h3>
              </div>
              <p className="project-text">
                Removed or minimized oversized taglines and headers, implemented a compact responsive grid system that displays 200% more templates above the fold while maintaining visual clarity.
              </p>
              <div className="design-change-benefit">
                <strong>✓ Benefit:</strong>
                <span>Users can view and compare multiple templates without scrolling, dramatically improving discovery.</span>
              </div>
            </div>

            {/* Interactive Tags */}
            <div className="design-change-card">
              <div className="design-change-header">
                <Tag size={24} className="design-change-icon" />
                <h3 className="design-change-title">Interactive Tag Chips</h3>
              </div>
              <p className="project-text">
                Transformed static tag chips into clickable elements that directly add filters to the sidebar, enabling dynamic, real-time filtering capabilities based on user interaction.
              </p>
              <div className="design-change-benefit">
                <strong>✓ Benefit:</strong>
                <span>Users can quickly refine search results by clicking tags on interesting templates.</span>
              </div>
            </div>

            {/* Enhanced Filtering */}
            <div className="design-change-card">
              <div className="design-change-header">
                <Filter size={24} className="design-change-icon" />
                <h3 className="design-change-title">Intelligent Filtering Sidebar</h3>
              </div>
              <p className="project-text">
                Introduced a comprehensive sidebar with Quick Filters, Categories, Teams, and Tags. Added an Active Filters card displaying all selections with individual remove options and a clear-all function. Implemented badge counters showing matching template counts.
              </p>
              <div className="design-change-benefit">
                <strong>✓ Benefit:</strong>
                <span>Simplified and clarified the filtering process with transparent, controllable selections.</span>
              </div>
            </div>

            {/* Search Integration */}
            <div className="design-change-card">
              <div className="design-change-header">
                <Search size={24} className="design-change-icon" />
                <h3 className="design-change-title">Enhanced Search Integration</h3>
              </div>
              <p className="project-text">
                Enhanced search bar to work in combination with active filters, enabling users to search across template names, descriptions, and tags while applying additional filter criteria.
              </p>
              <div className="design-change-benefit">
                <strong>✓ Benefit:</strong>
                <span>Provides a powerful and precise search experience combining keywords with filters.</span>
              </div>
            </div>

            {/* Template Cards */}
            <div className="design-change-card">
              <div className="design-change-header">
                <Star size={24} className="design-change-icon" />
                <h3 className="design-change-title">Improved Template Cards</h3>
              </div>
              <p className="project-text">
                Redesigned cards to include category labels, star buttons for favoriting, interactive tag chips, usage count statistics, and direct documentation links.
              </p>
              <div className="design-change-benefit">
                <strong>✓ Benefit:</strong>
                <span>Made cards more informative and actionable, streamlining template selection.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center metrics-title">Impact &amp; Success Metrics</h2>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">+200%</div>
              <div className="metric-label">Templates Visible</div>
            </div>

            <div className="metric-card">
              <div className="metric-value">-65%</div>
              <div className="metric-label">Discovery Time</div>
            </div>

            <div className="metric-card">
              <div className="metric-value">-42%</div>
              <div className="metric-label">Support Requests</div>
            </div>

            <div className="metric-card">
              <div className="metric-value">4.7/5</div>
              <div className="metric-label">Satisfaction Score</div>
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
            <h2 className="text-center">Design Documentation</h2>
            <p className="text-center gallery-description">
              Before and after comparison showing the transformation from limited visibility to an optimized discovery interface
            </p>
            <div className="project-gallery">
              {project.images.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`${project.title} design ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="section">
        <div className="container container-small">
          <h2>Tools &amp; Technologies</h2>
          <div className="tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="tech-section">
        <div className="container container-small">
          <div className="project-links">
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
              >
                View Prototype <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="project-nav">
        <div className="container">
          <div className="project-nav-grid">
            {project.prevProject ? (
              <Link to={`/project/${project.prevProject}`} className="project-nav-link prev">
                <ArrowLeft size={20} />
                <span>Previous Project</span>
              </Link>
            ) : (
              <div></div>
            )}
            <Link to="/#portfolio" className="project-nav-link center">
              All Projects
            </Link>
            {project.nextProject ? (
              <Link to={`/project/${project.nextProject}`} className="project-nav-link next">
                <span>Next Project</span>
                <ArrowLeft size={20} className="arrow-right" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

  // Special rendering for Backstage Sidebar project
  if (projectId === 'backstage-sidebar-redesign') {
    return (
      <div className="project-detail-page">
        {/* Hero Section */}
        <section className="project-hero project-hero-padded">
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
                  <Target size={18} />
                  <span>Lead UX Designer</span>
                </div>
                <div className="meta-item">
                  <Calendar size={18} />
                  <span>{project.duration}</span>
                </div>
                <div className="meta-item">
                  <Users size={18} />
                  <span>{project.team}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="project-hero-image">
            <img src={SidebarBackstage} alt={project.title} />
          </div>
        </section>

        {/* Quick Summary */}
        <section className="section">
          <div className="container container-small">
            <h2>Quick Summary</h2>
            <p className="project-text quick-summary">
              {project.overview}
            </p>
          </div>
        </section>

        {/* The Problem - Visual Grid */}
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center problems-title">Current UX Issues</h2>
            <div className="results-grid">
              <div className="result-card problem-card">
                <div className="problem-icon">
                  <MousePointer size={28} />
                </div>
                <h3 className="problem-title">Inefficient Navigation Flow</h3>
                <p className="problem-description">
                  The catalog menu opening to the right creates an additional layer of navigation that increases cognitive load and requires more precise mouse movements.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <TrendingDown size={28} />
                </div>
                <h3 className="problem-title">Excessive Clicks</h3>
                <p className="problem-description">
                  Placing Light/Dark mode toggle and Sidebar expansion controls under Settings requires three clicks, violating usability principles.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Eye size={28} />
                </div>
                <h3 className="problem-title">Hidden Functionality</h3>
                <p className="problem-description">
                  Critical UI controls buried in submenus, making them less discoverable to new users.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Layout size={28} />
                </div>
                <h3 className="problem-title">Outdated Patterns</h3>
                <p className="problem-description">
                  Modern applications provide direct access to theme toggles and sidebar controls within the main interface.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Layout size={28} />
                </div>
                <h3 className="problem-title">Poor Space Utilization</h3>
                <p className="problem-description">
                  Sidebar doesn't efficiently use vertical space, which could be better leveraged with expandable sections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Research */}
        <section className="section">
          <div className="container container-small">
            <h2>User Research &amp; Goals</h2>
            
            <div className="user-intent-card">
              <h3 className="user-intent-title">User Intent</h3>
              <p className="user-intent-quote">
                "As an Backstage user, I want quick access to catalog menu items and UI controls so I can navigate the platform more efficiently and customize my viewing experience with fewer clicks."
              </p>
            </div>

            <h3 className="user-needs-title">Key User Needs</h3>
            <div className="user-needs-grid">
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">Speed: Reduce time spent on routine navigation and customization tasks</span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">Clarity: Make essential functions discoverable and accessible</span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">Context: Avoid being forced out of current workflow to adjust settings</span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">Efficiency: Minimize cognitive overhead when navigating complex catalogs</span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">Consistency: Align with modern application patterns users have learned elsewhere</span>
              </div>
            </div>
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

        {/* Design Changes */}
        <section className="section">
          <div className="container container-small">
            <h2>Key Design Changes</h2>
            
            <div className="design-changes-grid">
              {/* Catalog Change */}
              <div className="design-change-card">
                <div className="design-change-header">
                  <Menu size={24} className="design-change-icon" />
                  <h3 className="design-change-title">Inline Expandable Catalog</h3>
                </div>
                <p className="project-text">
                  Each catalog label now functions as an accordion header that reveals submenu items directly beneath it in the sidebar. A chevron icon provides clear affordance, rotating to indicate expansion state.
                </p>
                <div className="design-change-benefit">
                  <strong>✓ Benefit:</strong>
                  <span>Users maintain focus within a single visual area, making navigation more predictable and controllable.</span>
                </div>
              </div>

              {/* Theme Toggle Change */}
              <div className="design-change-card">
                <div className="design-change-header">
                  <div className="design-change-icon-group">
                    <Sun size={24} className="design-change-icon" />
                    <Moon size={24} className="design-change-icon" />
                  </div>
                  <h3 className="design-change-title">Accessible Theme Toggle</h3>
                </div>
                <p className="project-text">
                  The Light/Dark mode toggle now resides at the bottom of the sidebar with appropriate icon (sun/moon) indicating current state and action.
                </p>
                <div className="design-change-benefit">
                  <strong>✓ Benefit:</strong>
                  <span>Transformed a three-click journey into a one-click action, dramatically improving satisfaction scores.</span>
                </div>
              </div>

              {/* Sidebar Collapse Change */}
              <div className="design-change-card">
                <div className="design-change-header">
                  <div className="design-change-icon-group">
                    <ChevronLeft size={24} className="design-change-icon" />
                    <ChevronRight size={24} className="design-change-icon" />
                  </div>
                  <h3 className="design-change-title">Sidebar Collapse Control</h3>
                </div>
                <p className="project-text">
                  The expansion control moved to a prominent position near the top of the sidebar with directional chevron icon. Collapsed state shows only icons with tooltips.
                </p>
                <div className="design-change-benefit">
                  <strong>✓ Benefit:</strong>
                  <span>Preserves navigation functionality while maximizing screen real estate for data-dense views.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center metrics-title">Impact &amp; Success Metrics</h2>
            
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">66%</div>
                <div className="metric-label">Click Reduction</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">-50%</div>
                <div className="metric-label">Navigation Time</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">-35%</div>
                <div className="metric-label">Support Tickets</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">4.6/5</div>
                <div className="metric-label">Satisfaction Score</div>
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
              <h2 className="text-center">Design Documentation</h2>
              <p className="text-center gallery-description">
                Visual progression showing the transformation from flyout-based navigation to inline expandable sections
              </p>
              <div className="project-gallery">
                {project.images.map((image, index) => (
                  <div key={index} className="gallery-item">
                    <img src={image} alt={`${project.title} design ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="section">
          <div className="container container-small">
            <h2>Tools &amp; Technologies</h2>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="tech-section">
          <div className="container container-small">
            <div className="project-links">
              {project.liveLink && (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  View Prototype <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Project Navigation */}
        <section className="project-nav">
          <div className="container">
            <div className="project-nav-grid">
              {project.prevProject ? (
                <Link to={`/project/${project.prevProject}`} className="project-nav-link prev">
                  <ArrowLeft size={20} />
                  <span>Previous Project</span>
                </Link>
              ) : (
                <div></div>
              )}
              <Link to="/#portfolio" className="project-nav-link center">
                All Projects
              </Link>
              {project.nextProject ? (
                <Link to={`/project/${project.nextProject}`} className="project-nav-link next">
                  <span>Next Project</span>
                  <ArrowLeft size={20} className="arrow-right" />
                </Link>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Default rendering for other projects
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-hero project-hero-padded">
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
                <Target size={18} />
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
            {project.prevProject ? (
              <Link to={`/project/${project.prevProject}`} className="project-nav-link prev">
                <ArrowLeft size={20} />
                <span>Previous Project</span>
              </Link>
            ) : (
              <div></div>
            )}
            <Link to="/#portfolio" className="project-nav-link center">
              All Projects
            </Link>
            {project.nextProject ? (
              <Link to={`/project/${project.nextProject}`} className="project-nav-link next">
                <span>Next Project</span>
                <ArrowLeft size={20} className="arrow-right" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;