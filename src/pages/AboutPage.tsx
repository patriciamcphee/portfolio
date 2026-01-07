import React from 'react';
import { Award, BookOpen, Briefcase, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page" style={{ paddingTop: '100px' }}>
      <section className="section">
        <div className="container container-small">
          <h1 className="section-title">About Patricia McPhee</h1>
          
          <div className="about-intro" style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '3rem' }}>
            <p>
              I'm a Technical Content Manager with experience bridging the gap 
              between complex technology and human understanding. My passion lies in creating 
              documentation that doesn't just inform, but empowers users to achieve their goals.
            </p>
          </div>

          <div className="about-sections">
            {/* Philosophy */}
            <div className="about-section" style={{ marginBottom: '3rem' }}>
              <h2><Heart size={24} style={{ display: 'inline', marginRight: '0.5rem' }} />My Philosophy</h2>
              <p>
                I believe that great documentation is invisible – it answers questions before they're asked, 
                guides without patronizing, and transforms complex systems into intuitive experiences. 
                Every piece of content I create is crafted with empathy, precision, and a deep understanding 
                of user needs.
              </p>
            </div>

            {/* Experience */}
            <div className="about-section" style={{ marginBottom: '3rem' }}>
              <h2><Briefcase size={24} style={{ display: 'inline', marginRight: '0.5rem' }} />Professional Journey</h2>
              <p>
                My career spans diverse industries from healthcare to cloud computing, giving me a unique 
                perspective on technical communication. I've documented everything from medical devices 
                requiring FDA compliance to cutting-edge APIs powering global platforms.
              </p>
            </div>

            {/* Education */}
            <div className="about-section" style={{ marginBottom: '3rem' }}>
              <h2><BookOpen size={24} style={{ display: 'inline', marginRight: '0.5rem' }} />Education</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem' }}>
                  <strong>Bachelor's in Health Science</strong><br />
                  Environmental Health and Public Health<br />
                  Kaplan University - Remote, May 2012
                </li>
                <li>
                  <strong>Associate of Applied Science</strong><br />
                  Computer Science and Information Technology<br />
                  DeVry University - Denver, CO, April 2001
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="about-section">
              <h2><Award size={24} style={{ display: 'inline', marginRight: '0.5rem' }} />Certifications & Training</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>• Conversation Design for Chatbots - UX Content Collective</li>
                <li>• Conversation Design - Conversation Design Institute</li>
                <li>• Designing Conversations with Voiceflow</li>
                <li>• Front-end Web Development - CareerFoundry (March 2022)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};