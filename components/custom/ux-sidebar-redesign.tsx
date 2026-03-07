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
  Menu,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'
import { ImageLightbox } from '@/components/docs/mdx/image-lightbox'
import './portfolio.css'

const METRICS_DISCLAIMER =
  'Note: Metrics are based on observed workflow reductions, user feedback, and internal team reporting. Where analytics were not instrumented, values are directional estimates.'

const project = {
  title: 'Developer Portal Navigation Redesign (Backstage Sidebar)',
  subtitle: 'Reducing friction in high-frequency developer workflows',
  category: 'UX Design \u2022 Developer Enablement',
  client: 'Backstage-based Developer Platform',
  duration: '3 months',
  team: '4 members (1 UX, 2 Dev, 1 PM)',
  heroImage: '/img/SidebarBackstage.png',
  overview:
    'Led a navigation redesign for a Backstage-based developer portal focused on reducing friction in high-frequency workflows. Replaced nested flyouts with inline navigation and surfaced core controls (theme + collapse) to reduce time-to-task and improve discoverability for developers.',
  challenge:
    'Developers struggled with hidden controls and multi-step navigation. Key actions like theme toggle and sidebar collapse were buried under Settings, and catalog navigation relied on right-side flyouts that added visual layers, increased cognitive load, and slowed routine tasks. Support questions increased as critical functionality became harder to find.',
  solution:
    'Re-architected the sidebar information model: converted flyouts into inline accordion navigation, moved high-frequency controls into persistent sidebar locations, and applied accessibility-first interaction design (keyboard navigation, ARIA labeling, clear affordances). Partnered with engineering to validate interaction states and implement animations that support comprehension without adding complexity.',
  results: [
    'Reduced steps to access theme toggle (3 \u2192 1)',
    'Reduced steps to collapse/expand sidebar (3 \u2192 1)',
    'Improved navigation efficiency by removing flyout layering (observed in workflow reviews)',
    'Reduced support questions related to hidden controls (observed in feedback loops)',
    'Improved satisfaction in internal feedback and usability reviews (observed)',
    'Increased engagement with core navigation and controls (observed)',
  ],
  evidence: [
    'Internal usability testing sessions with platform engineers',
    'Product owner and stakeholder review notes',
    'Support feedback trends reviewed during sprint retros',
    'Navigation workflow walk-throughs during design critiques',
  ],
  technologies: [
    'Figma',
    'React',
    'TypeScript',
    'CSS Animations',
    'ARIA/WCAG 2.1',
    'User Feedback Loops',
  ],
  images: ['/img/SidebarOriginal.png', '/img/SidebarBackstage2.png'],
}

export function UxSidebarRedesign() {
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
                  <MousePointer size={28} />
                </div>
                <h3 className="problem-title">Inefficient navigation flow</h3>
                <p className="problem-description">
                  The catalog menu opening to the right creates an additional layer of navigation that
                  increases cognitive load and requires more precise mouse movements.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <TrendingDown size={28} />
                </div>
                <h3 className="problem-title">Excessive clicks</h3>
                <p className="problem-description">
                  Placing Light/Dark mode toggle and Sidebar expansion controls under Settings
                  requires three clicks, violating usability principles.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Eye size={28} />
                </div>
                <h3 className="problem-title">Hidden functionality</h3>
                <p className="problem-description">
                  Critical UI controls buried in submenus, making them less discoverable to new users.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Layout size={28} />
                </div>
                <h3 className="problem-title">Outdated patterns</h3>
                <p className="problem-description">
                  Modern applications provide direct access to theme toggles and sidebar controls
                  within the main interface.
                </p>
              </div>

              <div className="result-card problem-card">
                <div className="problem-icon">
                  <Layout size={28} />
                </div>
                <h3 className="problem-title">Poor space utilization</h3>
                <p className="problem-description">
                  Sidebar doesn&apos;t efficiently use vertical space, which could be better leveraged
                  with expandable sections.
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
                &ldquo;As a Backstage user, I want quick access to catalog menu items and UI controls
                so I can navigate the platform more efficiently and customize my viewing experience
                with fewer clicks.&rdquo;
              </p>
            </div>

            <h3 className="user-needs-title">Key user needs</h3>
            <div className="user-needs-grid">
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Speed: Reduce time spent on routine navigation and customization tasks
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Clarity: Make essential functions discoverable and accessible
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Context: Avoid being forced out of current workflow to adjust settings
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Efficiency: Minimize cognitive overhead when navigating complex catalogs
                </span>
              </div>
              <div className="user-need-item">
                <CheckCircle size={20} className="user-need-icon" />
                <span className="user-need-text">
                  Consistency: Align with modern application patterns users have learned elsewhere
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
                  <Menu size={24} className="design-change-icon" />
                  <h3 className="design-change-title">Inline expandable catalog</h3>
                </div>
                <p className="project-text">
                  Each catalog label now functions as an accordion header that reveals submenu items
                  directly beneath it in the sidebar. A chevron icon provides clear affordance,
                  rotating to indicate expansion state.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Users maintain focus within a single visual area, making navigation more
                    predictable and controllable.
                  </span>
                </div>
              </div>

              <div className="design-change-card">
                <div className="design-change-header">
                  <div className="design-change-icon-group">
                    <Sun size={24} className="design-change-icon" />
                    <Moon size={24} className="design-change-icon" />
                  </div>
                  <h3 className="design-change-title">Accessible theme toggle</h3>
                </div>
                <p className="project-text">
                  The Light/Dark mode toggle now resides at the bottom of the sidebar with appropriate
                  icon (sun/moon) indicating current state and action.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Transformed a three-click journey into a one-click action, dramatically improving
                    satisfaction scores.
                  </span>
                </div>
              </div>

              <div className="design-change-card">
                <div className="design-change-header">
                  <div className="design-change-icon-group">
                    <ChevronLeft size={24} className="design-change-icon" />
                    <ChevronRight size={24} className="design-change-icon" />
                  </div>
                  <h3 className="design-change-title">Sidebar collapse control</h3>
                </div>
                <p className="project-text">
                  The expansion control moved to a prominent position near the top of the sidebar with
                  directional chevron icon. Collapsed state shows only icons with tooltips.
                </p>
                <div className="design-change-benefit">
                  <strong>&#10003; Benefit:</strong>
                  <span>
                    Preserves navigation functionality while maximizing screen real estate for
                    data-dense views.
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
                <div className="metric-value">3 &rarr; 1</div>
                <div className="metric-label">Steps for core controls</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">&darr;</div>
                <div className="metric-label">Time-to-action (observed)</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">&darr;</div>
                <div className="metric-label">&ldquo;How do I&hellip;?&rdquo; questions</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">&uarr;</div>
                <div className="metric-label">Discoverability</div>
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
            <h2 className="text-center">Design documentation</h2>
            <p className="text-center gallery-description">
              Before and after comparison showing the transformation from flyout-based navigation to
              inline expandable sections
            </p>
            <div className="before-after-grid">
              <div className="before-after-column">
                <span className="before-after-label before-label">Before</span>
                <div className="gallery-item">
                  <ImageLightbox src={project.images[0]} alt="Original sidebar design" />
                </div>
              </div>
              <div className="before-after-column">
                <span className="before-after-label after-label">After</span>
                <div className="gallery-item">
                  <ImageLightbox src={project.images[1]} alt="Redesigned sidebar" />
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
