import React, { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import { Mail, Phone, Linkedin, Globe, Download, MapPin, Calendar, Briefcase, Award, Code, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './resume.module.css';

export default function Resume() {
  const [activeSection, setActiveSection] = useState('about');
  const [status, setStatus] = useState(null);
  const [contactNumber, setContactNumber] = useState('10');
  const form = useRef();

  // Your Dropbox PDF link - replace this with your actual link
  const RESUME_PDF_LINK = 'https://drive.google.com/file/d/18aVT2suZCcdOBzXgEMPaFrlPsND51le9/view?usp=drive_link';

  const skills = [
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

  const timeline = [
    {
      company: 'Cigna/Magnit Global',
      role: 'Technical Content Manager',
      period: '11/2023 – Present',
      location: 'Remote',
      highlights: [
        'Developed GenAI toolkit reducing JIRA Feature writing time by 75%',
        'Redesigned Backstage developer portal navigation, reducing clicks by 66%',
        'Created ContentOps Playbook and style guide',
        'Led technical documentation for internal development teams'
      ]
    },
    {
      company: 'Beyond Identity',
      role: 'Senior Technical Writer',
      period: '12/2022 – 08/2023',
      location: 'Remote',
      highlights: [
        'Built Docusaurus markdown-based doc site',
        'Increased content accessibility by 30%',
        'Developed user-centric developer documentation'
      ]
    },
    {
      company: 'Expedia Group/Braintrust',
      role: 'Content Strategist',
      period: '05/2022 – 11/2022',
      location: 'Remote',
      highlights: [
        'Conducted content audit and analysis',
        'Crafted UI text and conversation copy for chatbots'
      ]
    },
    {
      company: 'Keyavi Data',
      role: 'Senior Technical Writer',
      period: '10/2021 – 03/2022',
      location: 'Remote',
      highlights: [
        'Improved content accessibility by 30%',
        'Built Docusaurus markdown-based online help'
      ]
    },
    {
      company: 'Microsoft/Kforce',
      role: 'Technical Writer',
      period: '05/2020 – 10/2021',
      location: 'Remote',
      highlights: [
        'Reduced Azure VMware implementation time by 60%',
        'Developed markdown-based learning modules'
      ]
    }
  ];

  const achievements = [
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

  const generateNumber = () => {
    setContactNumber(prevNumber => (parseInt(prevNumber, 10) + 1).toString());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");
    generateNumber();
    
    emailjs.sendForm('service_0ap10ki', 'contact_form', form.current, '9Jku87kluzzoQAmJv')
      .then((result) => {
        console.log(result.text);
        setStatus("sent");
        form.current.reset();
        setTimeout(() => setStatus(null), 5000);
      }, (error) => {
        console.log(error.text);
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <Layout
      title="Resume - Patricia McPhee"
      description="Interactive resume for Patricia McPhee - Technical Content Manager with 20+ years of experience in developer documentation and API guides">
      
      <div className={styles.resumeContainer}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.contactInfo}>
              <a href="mailto:contact@patriciamcphee.com" className={styles.contactLink}>
                <Mail size={16} />
                contact@patriciamcphee.com
              </a>
              <a href="tel:941-405-3188" className={styles.contactLink}>
                <Phone size={16} />
                941-405-3188
              </a>
              <a href="https://www.linkedin.com/in/patriciamcphee/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Linkedin size={16} />
                linkedin.com/in/patriciamcphee
              </a>
              <a href="https://www.patriciamcphee.com" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <Globe size={16} />
                patriciamcphee.com
              </a>
              <div className={styles.contactLink}>
                <MapPin size={16} />
                Lakewood Ranch, FL
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className={styles.navigation}>
          <div className={styles.navContent}>
            {['about', 'timeline', 'skills', 'achievements'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`${styles.navButton} ${activeSection === section ? styles.navButtonActive : ''}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* About Section */}
          {activeSection === 'about' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Briefcase className={styles.sectionIcon} />
                About Me
              </h2>
              <p className={styles.aboutText}>
                Technical Content Manager with over 20 years of experience creating developer-focused documentation, 
                API guides, and SDK tutorials. Expert in translating complex technical concepts into accessible content 
                that drives developer engagement and adoption. Proven track record in building docs-as-code platforms, 
                collaborating with engineering teams, and creating comprehensive educational resources for diverse 
                technical audiences.
              </p>
              
              <div className={styles.education}>
                <h3 className={styles.educationTitle}>Education & Training</h3>
                <div className={styles.educationGrid}>
                  <div className={styles.educationItem}>
                    <h4 className={styles.educationSchool}>Kaplan University</h4>
                    <p className={styles.educationDegree}>BS in Health/Environmental Science</p>
                    <p className={styles.educationDate}>2010 – 2012</p>
                  </div>
                  <div className={styles.educationItem}>
                    <h4 className={styles.educationSchool}>DeVry University</h4>
                    <p className={styles.educationDegree}>AS Computer Systems</p>
                    <p className={styles.educationDate}>1999 – 2001</p>
                  </div>
                  <div className={styles.educationItemGreen}>
                    <h4 className={styles.educationSchool}>Front-End Development</h4>
                    <p className={styles.educationDegree}>CareerFoundary</p>
                    <p className={styles.educationDate}>2022 – 2023</p>
                  </div>
                  <div className={styles.educationItemGreen}>
                    <h4 className={styles.educationSchool}>Conversation Designer</h4>
                    <p className={styles.educationDegree}>Conversation Design Institute</p>
                    <p className={styles.educationDate}>2023 – 2024</p>
                  </div>
                </div>
              </div>

              <div className={styles.downloadButtonContainer}>
                <a
                  href={RESUME_PDF_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.downloadButton}
                >
                  <Download size={20} />
                  Download Full Resume (PDF)
                </a>
              </div>
            </div>
          )}

          {/* Timeline Section */}
          {activeSection === 'timeline' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Calendar className={styles.sectionIcon} />
                Career Timeline
              </h2>
              <div className={styles.timeline}>
                {timeline.map((job, index) => (
                  <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineDot}></div>
                    <div className={styles.timelineCard}>
                      <div className={styles.timelineHeader}>
                        <div>
                          <h3 className={styles.timelineRole}>{job.role}</h3>
                          <p className={styles.timelineCompany}>{job.company}</p>
                        </div>
                        <div className={styles.timelineMeta}>
                          <p className={styles.timelinePeriod}>{job.period}</p>
                          <p className={styles.timelineLocation}>{job.location}</p>
                        </div>
                      </div>
                      <ul className={styles.timelineHighlights}>
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
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Code className={styles.sectionIcon} />
                Technical Skills
              </h2>
              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillBarFill}
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
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Award className={styles.sectionIcon} />
                Key Achievements
              </h2>
              <div className={styles.achievementsGrid}>
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className={styles.achievementCard}
                    >
                      <div className={styles.achievementIcon}>
                        <Icon size={24} />
                      </div>
                      <h3 className={styles.achievementTitle}>{achievement.title}</h3>
                      <p className={styles.achievementDescription}>{achievement.description}</p>
                    </div>
                  );
                })}
              </div>
              
              <div className={styles.additionalAchievements}>
                <h3 className={styles.additionalTitle}>Additional Accomplishments</h3>
                <ul className={styles.additionalList}>
                  <li>
                    <span className={styles.checkmark}>✓</span>
                    <span>Redesigned Backstage Create page with dynamic filters and clickable tags, improving template discoverability and creating a more intuitive developer experience</span>
                  </li>
                  <li>
                    <span className={styles.checkmark}>✓</span>
                    <span>Successfully built and deployed multiple Docusaurus-based documentation platforms, implementing modern docs-as-code workflows</span>
                  </li>
                  <li>
                    <span className={styles.checkmark}>✓</span>
                    <span>Adopted by 10-member team and multiple external DevOps teams across Enterprise organization</span>
                  </li>
                  <li>
                    <span className={styles.checkmark}>✓</span>
                    <span>Improved developer experience and content maintainability across multiple organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                <Send className={styles.sectionIcon} />
                Get In Touch
              </h2>
              
              <p className={styles.contactIntro}>
                Ready to dive in? Fill out the form below, and let's embark on this content journey together.
              </p>
              
              <form name="contact-form" id="contact-form" ref={form} onSubmit={sendEmail} className={styles.contactForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Your Name</label>
                  <input 
                    type="text" 
                    required 
                    className={styles.formInput}
                    placeholder="Name" 
                    name="user_name" 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Your Email</label>
                  <input 
                    type="email" 
                    required 
                    className={styles.formInput}
                    placeholder="Email" 
                    name="user_email" 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone (Optional)</label>
                  <input 
                    type="tel" 
                    pattern="\d{3}[\-]\d{3}[\-]\d{4}" 
                    name="Phone" 
                    className={styles.formInput}
                    placeholder="Phone # (xxx-xxx-xxxx)" 
                  />
                </div>
                
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Message</label>
                  <textarea 
                    required 
                    className={styles.formTextarea}
                    placeholder="Tell me about your opportunity or project..." 
                    name="message" 
                    rows="6"
                  ></textarea>
                </div>
                
                <input type="hidden" name="contact_number" value={contactNumber} />
                
                <button type="submit" className={styles.submitButton} disabled={status === "sending"}>
                  <Send size={20} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
              
              {status && (
                <div className={`${styles.statusMessage} ${
                  status === "sending" ? styles.statusSending : 
                  status === "sent" ? styles.statusSent : 
                  styles.statusError
                }`}>
                  {status === "sending" && "Sending your message..."}
                  {status === "sent" && "✓ Message sent successfully!"}
                  {status === "error" && "✗ Message failed to send. Please try again."}
                </div>
              )}
              
              <div className={styles.contactMethods}>
                <h3 className={styles.contactMethodsTitle}>Other Ways to Connect</h3>
                <div className={styles.contactMethodsGrid}>
                  <a href="mailto:contact@patriciamcphee.com" className={styles.contactMethod}>
                    <Mail className={styles.contactMethodIcon} size={24} />
                    <div>
                      <p className={styles.contactMethodLabel}>Email</p>
                      <p className={styles.contactMethodValue}>contact@patriciamcphee.com</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/patriciamcphee/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactMethod}
                  >
                    <Linkedin className={styles.contactMethodIcon} size={24} />
                    <div>
                      <p className={styles.contactMethodLabel}>LinkedIn</p>
                      <p className={styles.contactMethodValue}>Connect with me</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </main>

      </div>
    </Layout>
  );
}