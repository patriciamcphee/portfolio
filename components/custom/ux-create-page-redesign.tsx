'use client'

import {
  Target,
  Calendar,
  Users,
  CheckCircle,
  TrendingDown,
  Eye,
  MousePointer,
  Layout,
  Search,
  Filter,
  Star,
  Grid,
  Tag,
  ExternalLink,
} from 'lucide-react'
import { ImageLightbox } from '@/components/docs/mdx/image-lightbox'
import './portfolio.css'

const METRICS_DISCLAIMER =
  'Note: Metrics are based on observed workflow reductions, user feedback, and internal team reporting. Where analytics were not instrumented, values are directional estimates.'

const project = {
  title: 'Template Catalog Redesign (Developer Self-Service)',
  subtitle: 'Improving discovery, selection confidence, and adoption',
  category: 'UX Design \u2022 Developer Enablement',
  client: 'Internal Developer Platform (Backstage/Alchemy)',
  duration: '2 months',
  team: '3 members (1 UX, 1 Dev, 1 PM)',
  heroImage: '/img/CreatePageRedesign.png',
  overview:
    'Redesigned a developer template catalog to improve self-service discovery and selection. Increased the number of templates visible at a glance, introduced search + filtering patterns that scale, and made metadata actionable (clickable tags) to reduce time-to-find and improve user confidence.',
  challenge:
    'As the template ecosystem grew, developers struggled to find relevant templates quickly. The default catalog layout showed too few options above the fold, encouraged scrolling over scanning, and treated key metadata (tags) as static labels. The result: slower discovery, reduced confidence, and more support requests for "which template should I use?"',
  solution:
    'Designed a compact, responsive grid layout and a filtering system that supports real discovery: Quick Filters, Categories, Teams, and Tags; an Active Filters summary with clear/remove behaviors; clickable tag chips that apply filters directly; and improved template cards with clearer hierarchy, "favorite" affordances, and documentation links. The interaction model prioritizes fast scanning, low cognitive load, and predictable refinement.',
  results: [
    'Increased above-the-fold template visibility through a compact grid layout (observed)',
    'Reduced time-to-find templates using search + filters (observed)',
    'Improved confidence during template selection (observed in feedback and reviews)',
    'Reduced friction by adding interactive tags and active filter controls (observed)',
    'Increased template usage following improved discovery patterns (observed)',
    'Reduced support questions about template selection (observed)',
  ],
  evidence: [
    'Usability testing sessions with template consumers',
    'Internal feedback from platform enablement teams',
    'Design review notes from Alchemy stakeholders',
    'Template discovery walkthrough observations',
  ],
  technologies: [
    'Figma',
    'React',
    'TypeScript',
    'CSS Grid',
    'User Feedback Loops',
    'Usability Testing',
  ],
  images: [
    '/img/CreatePageBackstage.png',
    '/img/CreatePageRedesign.png',
    '/img/CreatePageRedesign2.png',
  ],
}

export function UxCreatePageRedesign() {
  return (
    <div className="not-prose">
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
        </section>

        {/* Quick Summary */}
        <section className="section">
          <div className="container container-small">
            <h2>Quick summary</h2>
            <p className="project-text quick-summary">{project.overview}</p>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="section section-alt">
          <div className="container container-small">
            <div className="project-grid">
              <div>
                <h2>The challenge</h2>
                <p className="project-text">{project.challenge}</p>
              </div>
              <div>
                <h2>The solution</h2>
                <p className="project-text">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container container-small">
            <h2>Why this matters for AI developer tooling</h2>
            <p className="project-text">
              AI platforms succeed when developers can discover the right capability quickly,
              understand it with minimal friction, and take confident next steps. This work focuses on
              the same adoption levers: information architecture, discoverability, reduced cognitive
              load, and clear paths to action&mdash;principles that also apply directly to AI API
              docs, SDK guides, and workshop materials.
            </p>
          </div>
        </section>

        {/* The Problem - Visual Grid */}
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center problems-title">Current UX issues</h2>
            <div className="results-grid">
              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Eye size={28} />
                </div>
                <h3 className="problem-title">Limited visibility</h3>
                <p className="problem-description">
                  The interface could not display many template cards above the fold, requiring users
                  to scroll extensively to view and compare options.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Layout size={28} />
                </div>
                <h3 className="problem-title">Excessive real estate usage</h3>
                <p className="problem-description">
                  Large tagline and heading occupied significant space at the top, reducing the area
                  available for displaying templates.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <MousePointer size={28} />
                </div>
                <h3 className="problem-title">Non-interactive elements</h3>
                <p className="problem-description">
                  Tag chips on template cards were non-clickable, limiting functionality and reducing
                  opportunities for dynamic filtering.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Search size={28} />
                </div>
                <h3 className="problem-title">Poor discovery tools</h3>
                <p className="problem-description">
                  Limited search capabilities and lack of sophisticated filtering made it difficult to
                  find relevant templates quickly.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <TrendingDown size={28} />
                </div>
                <h3 className="problem-title">Navigation inefficiencies</h3>
                <p className="problem-description">
                  Users struggled to explore different template categories and understand
                  relationships between templates and their domains.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Research */}
        <section className="section">
          <div className="container container-small">
            <h2>User research &amp; goals</h2>

            <div className="user-intent-card">
              <h3 className="user-intent-title">User intent</h3>
              <p className="user-intent-quote">
                &ldquo;As a template user, I want a simple and intuitive tool for finding and
                discovering templates so I can build infrastructure and run processes
                efficiently.&rdquo;
              </p>
            </div>

            <h3 className="user-needs-title">Key user benefits</h3>
            <div className="user-needs-grid">
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Accelerated template acquisition: Reduce time to locate appropriate templates
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Reduced user friction: Intuitive navigation patterns that align with expectations
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Enhanced platform experience: Better showcase of Alchemy&apos;s template ecosystem
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Efficient comparison: Clear visual hierarchy for comparing similar templates
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Confident selection: Increased confidence through usage statistics and documentation
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Design Changes */}
        <section className="section">
          <div className="container container-small">
            <h2>Key design changes</h2>

            <div className="design-changes-grid">
              <div className="design-change-card">
                <div className="design-change-header">
                  <Grid size={24} className="design-change-icon" />
                  <h3 className="design-change-title">Optimized layout architecture</h3>
                </div>
                <p className="project-text">
                  Removed or minimized oversized taglines and headers, implemented a compact
                  responsive grid system that displays 200% more templates above the fold while
                  maintaining visual clarity.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Users can view and compare multiple templates without scrolling, dramatically
                    improving discovery.
                  </span>
                </div>
              </div>

              <div className="design-change-card">
                <div className="design-change-header">
                  <Tag size={24} className="design-change-icon" />
                  <h3 className="design-change-title">Interactive tag chips</h3>
                </div>
                <p className="project-text">
                  Transformed static tag chips into clickable elements that directly add filters to
                  the sidebar, enabling dynamic, real-time filtering capabilities based on user
                  interaction.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Users can quickly refine search results by clicking tags on interesting templates.
                  </span>
                </div>
              </div>

              <div className="design-change-card">
                <div className="design-change-header">
                  <Filter size={24} className="design-change-icon" />
                  <h3 className="design-change-title">Intelligent filtering sidebar</h3>
                </div>
                <p className="project-text">
                  Introduced a comprehensive sidebar with Quick Filters, Categories, Teams, and Tags.
                  Added an Active Filters card displaying all selections with individual remove
                  options and a clear-all function. Implemented badge counters showing matching
                  template counts.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Simplified and clarified the filtering process with transparent, controllable
                    selections.
                  </span>
                </div>
              </div>

              <div className="design-change-card">
                <div className="design-change-header">
                  <Search size={24} className="design-change-icon" />
                  <h3 className="design-change-title">Enhanced search integration</h3>
                </div>
                <p className="project-text">
                  Enhanced search bar to work in combination with active filters, enabling users to
                  search across template names, descriptions, and tags while applying additional
                  filter criteria.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Provides a powerful and precise search experience combining keywords with filters.
                  </span>
                </div>
              </div>

              <div className="design-change-card">
                <div className="design-change-header">
                  <Star size={24} className="design-change-icon" />
                  <h3 className="design-change-title">Improved template cards</h3>
                </div>
                <p className="project-text">
                  Redesigned cards to include category labels, star buttons for favoriting,
                  interactive tag chips, usage count statistics, and direct documentation links.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Made cards more informative and actionable, streamlining template selection.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="metrics-disclaimer">{METRICS_DISCLAIMER}</div>

        {/* Impact Metrics */}
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center metrics-title">Impact &amp; success metrics</h2>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">&uarr;</div>
                <div className="metric-label">Above-the-fold visibility</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">&darr;</div>
                <div className="metric-label">Time-to-find (observed)</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">&uarr;</div>
                <div className="metric-label">Selection confidence</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">&darr;</div>
                <div className="metric-label">Support questions</div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="section">
          <div className="container container-small">
            <h2>Key results</h2>
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
        <section className="section section-alt">
          <div className="container container-small">
            <h2>Evidence &amp; validation sources</h2>
            <ul className="jt-bullet-list">
              {project.evidence.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Before & After */}
        <section className="section section-alt">
          <div className="container">
            <h2 className="text-center">Design showcase</h2>
            <p className="text-center gallery-description">
              Before and after comparison showing the transformation from limited visibility to an
              optimized discovery interface
            </p>
            <div className="before-after-grid">
              <div className="before-after-column">
                <span className="before-after-label before-label">Before</span>
                <div className="gallery-item">
                  <ImageLightbox src={project.images[0]} alt="Original create page" />
                </div>
              </div>
              <div className="before-after-column">
                <span className="before-after-label after-label">After</span>
                <div className="gallery-item">
                  <ImageLightbox src={project.images[1]} alt="Redesigned create page" />
                </div>
                <div className="gallery-item" style={{ marginTop: '1rem' }}>
                  <ImageLightbox src={project.images[2]} alt="Redesigned create page (alternate view)" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="section">
          <div className="container container-small">
            <h2>Tools &amp; technologies</h2>
            <div className="tech-tags">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
