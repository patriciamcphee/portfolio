import { useState, useRef, FormEvent } from 'react';
import { Mail, Phone, Linkedin, Globe, MapPin, Calendar, Briefcase, Award, Code, Send, LucideIcon, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Resume.css';

type SectionType = 'about' | 'timeline' | 'skills' | 'achievements' | 'contact';
type StatusType = 'sending' | 'sent' | 'error' | null;

interface Skill {
  name: string;
  level: number;
}

interface TimelineJob {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function Resume(): JSX.Element {
  const [activeSection, setActiveSection] = useState<SectionType>('about');
  const [status, setStatus] = useState<StatusType>(null);
  const [contactNumber, setContactNumber] = useState<string>('10');
  const form = useRef<HTMLFormElement>(null);

   // Your PDF link - replace this with your actual link
  const RESUME_PDF_LINK = 'https://www.dropbox.com/scl/fi/4xdfzow5pfwyv09t5u75k/resume-patricia-mcphee.pdf?rlkey=dib73df41fc88aat5dykec8j1&dl=0';

  const skills: Skill[] = [
    { name: 'AI API & SDK Documentation', level: 95 },
    { name: 'Docs-as-Code (Git/GitHub)', level: 90 },
    { name: 'Markdown / MDX', level: 90 },
    { name: 'Docusaurus / Static Site Docs', level: 95 },
    { name: 'Information Architecture & Taxonomy', level: 85 },
    { name: 'Developer Tutorials & Workshops', level: 85 },
    { name: 'Prompt Engineering', level: 80 },
    { name: 'LLM Concepts (Integration, RAG basics)', level: 70 },
    { name: 'TypeScript', level: 70 },
    { name: 'JavaScript', level: 80 },
    { name: 'NodeJS / React', level: 80 },
    { name: 'Code Example Validation', level: 75 },
    { name: 'OpenAPI / Swagger Literacy', level: 70 },
    { name: 'CI/CD & Versioned Releases (Docs)', level: 70 },
    { name: 'Confluence', level: 85 },
    { name: 'JIRA', level: 75 },
    { name: 'UX Writing / Microcopy', level: 80 },
    { name: 'Figma', level: 75 },
    { name: 'Accessibility Concepts', level: 70 },
  ];

  const timeline: TimelineJob[] = [
    {
      company: 'Cigna/Magnit Global',
      role: 'Technical Content Manager',
      period: '11/2023 – Present',
      location: 'Remote',
      highlights: [
        'Built and governed docs-as-code documentation workflows (Git/GitHub + Markdown + Docusaurus) for developer platform content',
        'Designed documentation structure, taxonomy, and style standards to improve discoverability and consistency',
        'Developed a GenAI writing toolkit that reduced feature-writing cycle time by 75% while improving quality and completeness',
        'Partnered with engineering and platform teams to validate technical accuracy and publish adoption-ready guides for complex internal tooling'
      ]
    },
    {
      company: 'Beyond Identity',
      role: 'Senior Technical Writer',
      period: '12/2022 – 08/2023',
      location: 'Remote',
      highlights: [
        'Authored developer-facing integration documentation for identity platform workflows (Okta, Azure AD B2C)',
        'Conducted content audits to identify gaps, restructure IA, and improve developer onboarding',
        'Built and maintained a Docusaurus documentation site with scalable, versioned docs-as-code practices'
      ]
    },
    {
      company: 'Expedia Group/Braintrust',
      role: 'Content Strategist, Contractor',
      period: '05/2022 – 11/2022',
      location: 'Remote',
      highlights: [
        'Audited design system documentation to improve clarity for both designers and developers',
        'Created UX microcopy and conversational content patterns for automated support experiences'
      ]
    },
    {
      company: 'Keyavi Data',
      role: 'Senior Technical Writer',
      period: '10/2021 – 03/2022',
      location: 'Remote',
      highlights: [
        'Created deployment and onboarding guides for complex data security/encryption software',
        'Built Docusaurus-based online help and improved information accessibility and navigation',
        'Wrote in-product microcopy to reduce user friction and increase task success'
      ]
    },
    {
      company: 'Microsoft/Kforce',
      role: 'Technical Writer, Contractor',
      period: '05/2020 – 10/2021',
      location: 'Remote',
      highlights: [
        'Authored Azure VMware Solution learning modules and technical guidance for enterprise cloud adoption',
        'Partnered with engineering and UX research to validate correctness and improve usability of content',
        'Used content audits to refine documentation structure and improve findability'
      ]
    },
    {
      company: 'PSCM Designs LLC',
      role: 'Freelance Technical Writer',
      period: '07/2019 – 06/2021',
      location: 'Remote',
      highlights: [
        'Automated API documentation publishing using scripts, reducing manual curation effort by ~40%',
        'Produced developer learning materials and how-to video walkthroughs to support product onboarding'
      ]
    },
    {
      company: 'LivePerson',
      role: 'Technical Writer II',
      period: '03/2019 – 06/2019',
      location: 'Seattle, WA',
      highlights: [
        'Wrote SDK and API documentation for chatbot and messaging platforms used by mobile engineers',
        'Collaborated with engineering teams to document workflows and improve developer integration success'
      ]
    },
    {
      company: 'Microsoft',
      role: 'Technical Writer II',
      period: '01/2018 – 01/2019',
      location: 'Redmond, WA',
      highlights: [
        'Developed technical learning modules with engineering teams (Windows networking / Edge)',
        'Created UX microcopy and UI strings informed by content audits and user needs'
      ]
    },
    {
      company: 'Oculus/Facebook',
      role: 'Technical Writer, Contractor',
      period: '07/2017 – 12/2017',
      location: 'Redmond, WA',
      highlights: [
        'Documented cross-functional workflows for fast-moving R&D teams',
        'Produced internal technical documentation supporting VR development initiatives'
      ]
    },
    {
      company: 'GE Healthcare',
      role: 'Software Technical Writer',
      period: '08/2016 – 05/2017',
      location: 'Seattle, WA',
      highlights: [
        'Updated installation and upgrade guides for regulated product environments (DITA/XML)',
        'Partnered with customer-facing teams to address documentation gaps and improve outcomes'
      ]
    },
    {
      company: 'Amazon',
      role: 'Technical Writer II',
      period: '09/2015 – 07/2016',
      location: 'Seattle, WA',
      highlights: [
        'Wrote operational and procedural documentation for internal teams',
        'Created task-oriented guides supporting training and consistent execution'
      ]
    },
    {
      company: 'Charter Communications',
      role: 'Technical Writer, Contractor',
      period: '03/2015 – 09/2015',
      location: 'Denver, CO',
      highlights: [
        'Collaborated with engineering teams to document standard operating procedures',
        'Built simple scripts to support systems tasks and improve operational efficiency'
      ]
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'GenAI Enablement Toolkit',
      description: 'Built a repeatable prompt toolkit that reduced feature-writing time by 75% while improving consistency and completeness.',
      icon: Award
    },
    {
      title: 'Docs-as-Code at Scale',
      description: 'Built and maintained multiple Docusaurus-based documentation platforms with versioned, Git-based workflows.',
      icon: Code
    },
    {
      title: 'Knowledge Architecture & Taxonomy',
      description: 'Designed documentation structure and taxonomy to improve discoverability and reduce time-to-answer for developers.',
      icon: Briefcase
    },
    {
      title: 'Automation for Publishing',
      description: 'Automated API documentation publishing pipelines, reducing manual curation effort by ~40%.',
      icon: Code
    }
  ];

  const generateNumber = (): void => {
    setContactNumber(prevNumber => (parseInt(prevNumber, 10) + 1).toString());
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStatus("sending");
    generateNumber();
    
    if (form.current) {
      emailjs.sendForm('service_0ap10ki', 'contact_form', form.current, '9Jku87kluzzoQAmJv')
        .then((result) => {
          console.log(result.text);
          setStatus("sent");
          form.current?.reset();
          setTimeout(() => setStatus(null), 5000);
        }, (error) => {
          console.log(error.text);
          setStatus("error");
          setTimeout(() => setStatus(null), 5000);
        });
    }
  };

  return (
    <>
      <div className="resumeContainer">
        {/* Header */}
        <header className="header">
          <div className="headerContent">
            <div className="contactInfo">
              <a href="mailto:contact@patriciamcphee.com" className="contactLink">
                <Mail size={16} />
                contact@patriciamcphee.com
              </a>
              <a href="tel:941-405-3188" className="contactLink">
                <Phone size={16} />
                941-405-3188
              </a>
              <a href="https://www.linkedin.com/in/patriciamcphee/" target="_blank" rel="noopener noreferrer" className="contactLink">
                <Linkedin size={16} />
                linkedin.com/in/patriciamcphee
              </a>
              <a href="https://www.patriciamcphee.com" target="_blank" rel="noopener noreferrer" className="contactLink">
                <Globe size={16} />
                patriciamcphee.com
              </a>
              <div className="contactLink">
                <MapPin size={16} />
                Lakewood Ranch, FL
              </div>
              <a href={RESUME_PDF_LINK}
                  target="_blank"
                  rel="noopener noreferrer" download="Patricia_McPhee_Resume.pdf&dl=1" className="contactLink">
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="navigation">
          <div className="navContent">
            {(['about', 'timeline', 'skills', 'achievements', 'contact'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`navButton ${activeSection === section ? 'navButtonActive' : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="mainContent">
          {/* About Section */}
          {activeSection === 'about' && (
            <div className="mainSection">
              <>
                <h2 className="sectionTitle">
                  <Briefcase className="sectionIcon" />
                  About Me
                </h2>
                <div className="about-content">
                  <p>
                    I’m a Technical Writer focused on AI systems and developer enablement. I document complex
                    developer products—APIs, SDKs, tooling, and integration workflows—so engineers can build with
                    them quickly and correctly.
                  </p>
                </div>

                <div className="about-content">
                  <h3 className="sectionTitle-h3">What I Do Best</h3>
                  <p>
                    I partner closely with engineering, product, and research teams to translate advanced technical
                    capabilities into clear, practical documentation. That includes API and SDK references,
                    conceptual guides for integration, and workshop-style materials (tutorials, labs, walkthroughs)
                    designed to accelerate adoption.
                  </p>
                </div>

                <div className="about-content">
                  <h2 className="sectionTitle-h3">How I Work</h2>
                  <p>
                    I’m docs-as-code native (Git/GitHub + Markdown/MDX + static site generators) and I’m comfortable
                    validating runnable examples. I care deeply about taxonomy, consistency, and correctness—because
                    developer trust is earned through precision.
                  </p>
                </div>

                {/* Experience */}
                <div className="about-content">
                <h2 className="sectionTitle-h3">Professional Journey</h2>
                <p style={{ marginBottom: '3rem' }}>
                  My career spans diverse industries from healthcare to cloud computing, giving me a unique 
                  perspective on technical communication. I've documented everything from medical devices 
                  requiring FDA compliance to cutting-edge APIs powering global platforms.
                </p>
                </div>

                <div className="education">
                  <h3 className="educationTitle">Education & Training</h3>
                  <div className="educationGrid">
                    <div className="educationItem">
                      <h4 className="educationSchool">Kaplan University</h4>
                      <p className="educationDegree">BS in Health/Environmental Science</p>
                    </div>
                    <div className="educationItem">
                      <h4 className="educationSchool">DeVry University</h4>
                      <p className="educationDegree">AS Computer Systems</p>
                    </div>
                    <div className="educationItemGreen">
                      <h4 className="educationSchool">CareerFoundary</h4>
                      <p className="educationDegree">Front-End Development</p>
                      <p className="educationDate">2022 – 2023</p>
                    </div>
                    <div className="educationItemGreen">
                      <h4 className="educationSchool">Blockchain Council</h4>
                      <p className="educationDegree">Certified Prompt Engineer</p>
                      <p className="educationDate">2024</p>
                    </div>
                  </div>
                </div>
              </>
            </div>
          )}

          {/* Timeline Section */}
          {activeSection === 'timeline' && (
            <div className="mainSection">
              <h2 className="sectionTitle">
                <Calendar className="sectionIcon" />
                Career Timeline
              </h2>
              <div className="timeline">
                {timeline.map((job, index) => (
                  <div key={index} className="timelineItem">
                    <div className="timelineDot"></div>
                    <div className="timelineCard">
                      <div className="timelineHeader">
                        <div>
                          <h3 className="timelineRole">{job.role}</h3>
                          <p className="timelineCompany">{job.company}</p>
                        </div>
                        <div className="timelineMeta">
                          <p className="timelinePeriod">{job.period}</p>
                          <p className="timelineLocation">{job.location}</p>
                        </div>
                      </div>
                      <ul className="timelineHighlights">
                        {job.highlights.map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <div className="mainSection">
              <h2 className="sectionTitle">
                <Code className="sectionIcon" />
                Technical Skills
              </h2>
              <div className="skillsGrid">
                {skills.map((skill, index) => (
                  <div key={index} className="skillItem">
                    <div className="skillHeader">
                      <span className="skillName">{skill.name}</span>
                      <span className="skillLevel">{skill.level}%</span>
                    </div>
                    <div className="skillBar">
                      <div
                        className="skillBarFill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <div className="mainSection">
              <h2 className="sectionTitle">
                <Award className="sectionIcon" />
                Key Achievements
              </h2>
              <div className="achievementsGrid">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="achievementCard"
                    >
                      <div className="achievementIcon">
                        <Icon size={24} />
                      </div>
                      <h3 className="achievementTitle">{achievement.title}</h3>
                      <p className="achievementDescription">{achievement.description}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className="additionalAchievements">
                <h3 className="additionalTitle">Additional Accomplishments</h3>
                <ul className="additionalList">
                  <li>
                    <span className="checkmark">✓</span>
                    <span>Produced developer-ready API and SDK documentation across SaaS platforms, validating workflows with engineering teams</span>
                  </li>
                  <li>
                    <span className="checkmark">✓</span>
                    <span>Created tutorials and learning-style content that bridges conceptual understanding and runnable implementation</span>
                  </li>
                  <li>
                    <span className="checkmark">✓</span>
                    <span>Improved documentation usability through UX writing, IA, and platform discoverability enhancements</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="mainSection">
            <h2 className="sectionTitle">
              <Send className="sectionIcon" />
              Get In Touch
            </h2>
            
            <p className="contactIntro">
              Want to collaborate on developer documentation, AI tooling enablement, or docs-as-code systems?
              Send a message and I’ll respond soon.
            </p>

            
            <form name="contact-form" id="contact-form" ref={form} onSubmit={sendEmail} className="contactForm">
              <div className="formGroup">
                <label className="formLabel">Your Name</label>
                <input 
                  type="text" 
                  required 
                  className="formInput"
                  placeholder="Name" 
                  name="user_name" 
                />
              </div>
              
              <div className="formGroup">
                <label className="formLabel">Your Email</label>
                <input 
                  type="email" 
                  required 
                  className="formInput"
                  placeholder="Email" 
                  name="user_email" 
                />
              </div>
              
              <div className="formGroup">
                <label className="formLabel">Phone (Optional)</label>
                <input 
                  type="tel" 
                  pattern="\d{3}[\-]\d{3}[\-]\d{4}" 
                  name="Phone" 
                  className="formInput"
                  placeholder="Phone # (xxx-xxx-xxxx)" 
                />
              </div>
              
              <div className="formGroup">
                <label className="formLabel">Message</label>
                <textarea 
                  required 
                  className="formTextarea"
                  placeholder="Tell me about your opportunity or project..." 
                  name="message" 
                  rows={6}
                ></textarea>
              </div>
              
              <input type="hidden" name="contact_number" value={contactNumber} />
              
              <button type="submit" className="submitButton" disabled={status === "sending"}>
                <Send size={20} />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
            
            {status && (
              <div className={`statusMessage ${
                status === "sending" ? 'statusSending' : 
                status === "sent" ? 'statusSent' : 
                'statusError'
              }`}>
                {status === "sending" && "Sending your message..."}
                {status === "sent" && "✓ Message sent successfully!"}
                {status === "error" && "✗ Message failed to send. Please try again."}
              </div>
            )}
            
            <div className="contactMethods">
              <h3 className="contactMethodsTitle">Other Ways to Connect</h3>
              <div className="contactMethodsGrid">
                <a href="mailto:contact@patriciamcphee.com" className="contactMethod">
                  <Mail className="contactMethodIcon" size={24} />
                  <div>
                    <p className="contactMethodLabel">Email</p>
                    <p className="contactMethodValue">contact@patriciamcphee.com</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/patriciamcphee/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contactMethod"
                >
                  <Linkedin className="contactMethodIcon" size={24} />
                  <div>
                    <p className="contactMethodLabel">LinkedIn</p>
                    <p className="contactMethodValue">Connect with me</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
    </>
  );
}