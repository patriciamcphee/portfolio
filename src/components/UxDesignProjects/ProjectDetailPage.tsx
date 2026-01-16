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
  evidence?: string[];

}

const METRICS_DISCLAIMER =
  "Note: Metrics are based on observed workflow reductions, user feedback, and internal team reporting. Where analytics were not instrumented, values are directional estimates.";


const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  // Project data
  const projectsData: Record<string, ProjectDetails> = {
    'backstage-sidebar-redesign': {
    id: 'backstage-sidebar-redesign',
    title: 'Developer Portal Navigation Redesign (Backstage Sidebar)',
    subtitle: 'Reducing friction in high-frequency developer workflows',
    category: 'UX Design • Developer Enablement',
    client: 'Backstage-based Developer Platform',
    duration: '3 months',
    team: '4 members (1 UX, 2 Dev, 1 PM)',
    heroImage: SidebarBackstage,
    overview:
      'Led a navigation redesign for a Backstage-based developer portal focused on reducing friction in high-frequency workflows. Replaced nested flyouts with inline navigation and surfaced core controls (theme + collapse) to reduce time-to-task and improve discoverability for developers.',
    challenge:
      'Developers struggled with hidden controls and multi-step navigation. Key actions like theme toggle and sidebar collapse were buried under Settings, and catalog navigation relied on right-side flyouts that added visual layers, increased cognitive load, and slowed routine tasks. Support questions increased as critical functionality became harder to find.',
    solution:
      'Re-architected the sidebar information model: converted flyouts into inline accordion navigation, moved high-frequency controls into persistent sidebar locations, and applied accessibility-first interaction design (keyboard navigation, ARIA labeling, clear affordances). Partnered with engineering to validate interaction states and implement animations that support comprehension without adding complexity.',
    results: [
      'Reduced steps to access theme toggle (3 → 1)',
      'Reduced steps to collapse/expand sidebar (3 → 1)',
      'Improved navigation efficiency by removing flyout layering (observed in workflow reviews)',
      'Reduced support questions related to hidden controls (observed in feedback loops)',
      'Improved satisfaction in internal feedback and usability reviews (observed)',
      'Increased engagement with core navigation and controls (observed)'
    ],
    evidence: [
      'Internal usability testing sessions with platform engineers',
      'Product owner and stakeholder review notes',
      'Support feedback trends reviewed during sprint retros',
      'Navigation workflow walk-throughs during design critiques'
    ],
    technologies: ['Figma', 'React', 'TypeScript', 'CSS Animations', 'ARIA/WCAG 2.1', 'User Feedback Loops'],
    images: [SidebarOriginal, SidebarBackstage2],
    nextProject: 'backstage-create-page-redesign'
  },
    'backstage-create-page-redesign': {
    id: 'backstage-create-page-redesign',
    title: 'Template Catalog Redesign (Developer Self-Service)',
    subtitle: 'Improving discovery, selection confidence, and adoption',
    category: 'UX Design • Developer Enablement',
    client: 'Internal Developer Platform (Backstage/Alchemy)',
    duration: '2 months',
    team: '3 members (1 UX, 1 Dev, 1 PM)',
    heroImage: CreatePageBackstage,
    overview:
      'Redesigned a developer template catalog to improve self-service discovery and selection. Increased the number of templates visible at a glance, introduced search + filtering patterns that scale, and made metadata actionable (clickable tags) to reduce time-to-find and improve user confidence.',
    challenge:
      'As the template ecosystem grew, developers struggled to find relevant templates quickly. The default catalog layout showed too few options above the fold, encouraged scrolling over scanning, and treated key metadata (tags) as static labels. The result: slower discovery, reduced confidence, and more support requests for “which template should I use?”',
    solution:
      'Designed a compact, responsive grid layout and a filtering system that supports real discovery: Quick Filters, Categories, Teams, and Tags; an Active Filters summary with clear/remove behaviors; clickable tag chips that apply filters directly; and improved template cards with clearer hierarchy, “favorite” affordances, and documentation links. The interaction model prioritizes fast scanning, low cognitive load, and predictable refinement.',
    results: [
      'Increased above-the-fold template visibility through a compact grid layout (observed)',
      'Reduced time-to-find templates using search + filters (observed)',
      'Improved confidence during template selection (observed in feedback and reviews)',
      'Reduced friction by adding interactive tags and active filter controls (observed)',
      'Increased template usage following improved discovery patterns (observed)',
      'Reduced support questions about template selection (observed)'
    ],
    evidence: [
      'Usability testing sessions with template consumers',
      'Internal feedback from platform enablement teams',
      'Design review notes from Alchemy stakeholders',
      'Template discovery walkthrough observations'
    ],
    technologies: ['Figma', 'React', 'TypeScript', 'CSS Grid', 'User Feedback Loops', 'Usability Testing'],
    images: [CreatePageBackstage, CreatePageRedesign, CreatePageRedesign2],
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

      <section className="section">
        <div className="container container-small">
          <h2>Why this matters for AI developer tooling</h2>
          <p className="project-text">
            AI platforms succeed when developers can discover the right capability quickly, understand it with minimal friction,
            and take confident next steps. This work focuses on the same adoption levers: information architecture, discoverability,
            reduced cognitive load, and clear paths to action—principles that also apply directly to AI API docs, SDK guides,
            and workshop materials.
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

      <div className="metrics-disclaimer">
        {METRICS_DISCLAIMER}
      </div>


      {/* Impact Metrics */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="text-center metrics-title">Impact &amp; Success Metrics</h2>
          
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-value">↑</div>
              <div className="metric-label">Above-the-Fold Visibility</div>
            </div>

            <div className="metric-card">
              <div className="metric-value">↓</div>
              <div className="metric-label">Time-to-Find (Observed)</div>
            </div>

            <div className="metric-card">
              <div className="metric-value">↑</div>
              <div className="metric-label">Selection Confidence</div>
            </div>

            <div className="metric-card">
              <div className="metric-value">↓</div>
              <div className="metric-label">Support Questions</div>
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

      {/* Evidence Section */}
      {project.evidence && (
        <section className="section section-alt">
          <div className="container container-small">
            <h2>Evidence & Validation Sources</h2>
            <ul className="jt-bullet-list">
              {project.evidence.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Images Catalog */}
      {project.images.length > 0 && (
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center">Design Showcase</h2>
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

        <section className="section">
          <div className="container container-small">
            <h2>Why this matters for AI developer tooling</h2>
            <p className="project-text">
              AI platforms succeed when developers can discover the right capability quickly, understand it with minimal friction,
              and take confident next steps. This work focuses on the same adoption levers: information architecture, discoverability,
              reduced cognitive load, and clear paths to action—principles that also apply directly to AI API docs, SDK guides,
              and workshop materials.
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

        <div className="metrics-disclaimer">
          {METRICS_DISCLAIMER}
        </div>


        {/* Impact Metrics */}
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center metrics-title">Impact &amp; Success Metrics</h2>
            
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">3 → 1</div>
                <div className="metric-label">Steps for Core Controls</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">↓</div>
                <div className="metric-label">Time-to-Action (Observed)</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">↓</div>
                <div className="metric-label">“How do I…?” Questions</div>
              </div>

              <div className="metric-card">
                <div className="metric-value">↑</div>
                <div className="metric-label">Discoverability</div>
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

        {/* Evidence Section */}
        {project.evidence && (
          <section className="section section-alt">
            <div className="container container-small">
              <h2>Evidence & Validation Sources</h2>
              <ul className="jt-bullet-list">
                {project.evidence.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

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

      {/* Evidence Section */}
      {project.evidence && (
        <section className="section section-alt">
          <div className="container container-small">
            <h2>Evidence & Validation Sources</h2>
            <ul className="jt-bullet-list">
              {project.evidence.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}


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
    </div>
  );
};

export default ProjectDetailPage;