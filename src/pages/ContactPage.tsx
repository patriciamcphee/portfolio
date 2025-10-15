import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container container-small">
          <h1 className="section-title">Get In Touch</h1>
          
          <div className="contact-intro" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-light)' }}>
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <div className="contact-content" style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth > 768 ? '3fr 2fr' : '1fr',
            gap: '2rem' 
          }}>
            {/* Contact Form */}
            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="technical-writing">Technical Writing Project</option>
                    <option value="ux-design">UX/UI Design Project</option>
                    <option value="web-development">Web Development</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card" style={{
                padding: '1rem',
                background: 'var(--background-alt)',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Contact Information</h3>
                
                <div className="info-item" style={{ marginBottom: '1rem' }}>
                  <MapPin size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--secondary)' }} />
                  <span>Bradenton, Florida, US</span>
                </div>
                
                <div className="info-item" style={{ marginBottom: '1rem' }}>
                  <Mail size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--secondary)' }} />
                  <a href="mailto:contact@patriciamcphee.com">contact@patriciamcphee.com</a>
                </div>
                
                <div className="info-item">
                  <Phone size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--secondary)' }} />
                  <span>Available on request</span>
                </div>
              </div>

              <div className="social-card" style={{
                padding: '2rem',
                background: 'var(--background-alt)',
                borderRadius: '12px'
              }}>
                <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Connect With Me</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="https://linkedin.com/in/patriciamcphee" className="social-link">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://github.com" className="social-link">
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};