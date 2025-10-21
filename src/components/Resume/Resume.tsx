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
    { name: 'Technical Writing', level: 100 },
    { name: 'Docusaurus', level: 95 },
    { name: 'Markdown', level: 90 },
    { name: 'Git/GitHub', level: 90 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Confluence', level: 90 },
    { name: 'Visual Studio', level: 90 },
    { name: 'Docs-as-Code/JAMstack', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'Content Strategy', level: 80 },
    { name: 'Information Architecture', level: 80 },
    { name: 'NodeJS/React', level: 80 },
    { name: 'Figma', level: 80 },
    { name: 'Postman', level: 70 },
    { name: 'Instructional Design', level: 70 },
    { name: 'Backstage', level: 60 },
  ];

  const timeline: TimelineJob[] = [
    {
      company: 'Cigna/Magnit Global',
      role: 'Technical Content Manager',
      period: '11/2023 – Present',
      location: 'Remote',
      highlights: [
        'Developed GenAI toolkit reducing JIRA Feature writing time by 75% (from 2 hours to 30 minutes)',
        'Redesigned Backstage developer portal navigation, reducing clicks by 66%',
        'Led creation of ContentOps Playbook and style guide for Enterprise DevOps teams',
        'Built Docusaurus markdown-based doc site for a Backstage internal developer platform documentation'
      ]
    },
    {
      company: 'Beyond Identity',
      role: 'Senior Technical Writer',
      period: '12/2022 – 08/2023',
      location: 'Remote',
      highlights: [
        'Conducted content audit and analysis leading to user-centric developer documentation',
        'Built Docusaurus markdown-based doc site, adopting a user-centric approach enhancing content management and increasing content accessibility by 30%'
      ]
    },
    {
      company: 'Expedia Group/Braintrust',
      role: 'Content Strategist, Contractor',
      period: '05/2022 – 11/2022',
      location: 'Remote',
      highlights: [
        'Conducted content audit and analysis of design system documentation for designers and developers',
        'Crafted UI text and conversation copy for chatbots'
      ]
    },
    {
      company: 'Keyavi Data',
      role: 'Senior Technical Writer',
      period: '10/2021 – 03/2022',
      location: 'Remote',
      highlights: [
        'Collaborated with product engineering to create user-centric deployment guides',
        'Built Docusaurus markdown-based online help, improving content accessibility by 30%',
        'Developed in-platform UI microcopy helping users navigate complex data encryption software'
      ]
    },
    {
      company: 'Microsoft/Kforce',
      role: 'Technical Writer, Contractor',
      period: '05/2020 – 10/2021',
      location: 'Remote',
      highlights: [
        'Developed Azure VMware Solution learning modules, reducing implementation time by 60%',
        'Collaborated with Azure engineering and UX Research teams on goal-oriented content',
        'Conducted content audits and developed in-platform UI microcopy'
      ]
    },
    {
      company: 'PSCM Designs LLC',
      role: 'Freelance Technical Writer',
      period: '07/2019 – 06/2021',
      location: 'Remote',
      highlights: [
        'Extreme Networks: Automated API content publishing using shell scripts, reducing curation time by 40%',
        'ZPE Systems: Wrote marketing eBook and learning materials for data center automation; produced how-to videos with voiceover'
      ]
    },
    {
      company: 'LivePerson',
      role: 'Technical Writer II',
      period: '03/2019 – 06/2019',
      location: 'Seattle, WA',
      highlights: [
        'Wrote markdown-based SDK and API guides for mobile chatbot and live agent messaging',
        'Contributed to chatbot and virtual assistant development with mobile app team'
      ]
    },
    {
      company: 'Microsoft',
      role: 'Technical Writer II',
      period: '01/2018 – 01/2019',
      location: 'Redmond, WA',
      highlights: [
        'Collaborated with Microsoft Edge and Windows networking teams on markdown-based learning modules',
        'Wrote and edited UX microcopy and UI strings based on data-driven content audit insights'
      ]
    },
    {
      company: 'Oculus/Facebook',
      role: 'Technical Writer, Contractor',
      period: '07/2017 – 12/2017',
      location: 'Redmond, WA',
      highlights: [
        'Developed internal cross-functional workflows and process documentation for VR R&D teams',
        'Created technical documentation supporting virtual reality development initiatives'
      ]
    },
    {
      company: 'GE Healthcare',
      role: 'Software Technical Writer',
      period: '08/2016 – 05/2017',
      location: 'Seattle, WA',
      highlights: [
        'Updated outdated installation and upgrade guides using MadCap Flare and DITA/XML',
        'Improved customer experience through collaboration with customers and support teams'
      ]
    },
    {
      company: 'Amazon',
      role: 'Technical Writer II',
      period: '09/2015 – 07/2016',
      location: 'Seattle, WA',
      highlights: [
        'Wrote internal feature announcements and task-oriented procedure guides',
        'Created documentation for warehouse operations and employee training materials'
      ]
    },
    {
      company: 'Charter Communications',
      role: 'Technical Writer, Contractor',
      period: '03/2015 – 09/2015',
      location: 'Denver, CO',
      highlights: [
        'Collaborated with video-on-demand and networking engineers on standard procedures',
        'Developed Python scripts for system administration and automation tasks, demonstrating versatility beyond writing'
      ]
    },
    {
      company: 'SolidFire',
      role: 'Technical Writer, Contractor',
      period: '01/2014 – 10/2014',
      location: 'Boulder, CO',
      highlights: [
        'Created release notes, configuration guides, troubleshooting documentation, and white papers',
        'Wrote technical marketing content including solution briefs for cloud storage platform'
      ]
    }
  ];

  const achievements: Achievement[] = [
    {
      title: 'GenAI Toolkit Innovation',
      description: 'Reduced JIRA Feature writing time by 75% (from 2 hours to 30 minutes)',
      icon: Award
    },
    {
      title: 'Developer Portal UX',
      description: 'Redesigned Backstage navigation reducing clicks by 66% and improved Create page discoverability',
      icon: Briefcase
    },
    {
      title: 'API Automation',
      description: 'Reduced API/SDK documentation curation time by 40% through shell script automation',
      icon: Code
    },
    {
      title: 'Documentation Optimization',
      description: 'Reduced Azure VMware Solution implementation time by 60%',
      icon: Award
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
                  rel="noopener noreferrer" download="Patricia_McPhee_Resume.pdf" className="contactLink">
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="navigation">
          <div className="navContent">
            {(['about', 'timeline', 'skills', 'achievements'] as const).map((section) => (
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
                    I'm a Technical Content Manager with over 20 years of experience bridging the gap 
                    between complex technology and human understanding. My passion lies in creating 
                    documentation that doesn't just inform, but empowers users to achieve their goals.
                  </p>
                </div>
                <div className="about-content">
                  {/* Philosophy */}
                  <h3 className="sectionTitle-h3">My Philosophy</h3>
                  <p>
                    I believe that great documentation is invisible – it answers questions before they're asked, 
                    guides without patronizing, and transforms complex systems into intuitive experiences. 
                    Every piece of content I create is crafted with empathy, precision, and a deep understanding 
                    of user needs.
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
                      <p className="educationDate">2010 – 2012</p>
                    </div>
                    <div className="educationItem">
                      <h4 className="educationSchool">DeVry University</h4>
                      <p className="educationDegree">AS Computer Systems</p>
                      <p className="educationDate">1999 – 2001</p>
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
                    <span>Redesigned Backstage Create page with dynamic filters and clickable tags, improving template discoverability and creating a more intuitive developer experience</span>
                  </li>
                  <li>
                    <span className="checkmark">✓</span>
                    <span>Successfully built and deployed multiple Docusaurus-based documentation platforms, implementing modern docs-as-code workflows</span>
                  </li>
                  <li>
                    <span className="checkmark">✓</span>
                    <span>Improved developer experience and content maintainability across multiple organizations</span>
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
              Ready to dive in? Fill out the form below, and let's embark on this content journey together.
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