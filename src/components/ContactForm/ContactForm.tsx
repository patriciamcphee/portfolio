import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Linkedin, Github } from 'lucide-react';
import './ContactForm.css';

type StatusType = 'sending' | 'sent' | 'error' | null;

function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<StatusType>(null);
  const [contactNumber, setContactNumber] = useState<string>('10');

  const generateNumber = (): void => {
    setContactNumber(prevNumber => (parseInt(prevNumber, 10) + 1).toString());
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setStatus('sending');
    generateNumber();
    
    if (form.current) {
      emailjs.sendForm(
        'service_0ap10ki', 
        'contact_form', 
        form.current, 
        '9Jku87kluzzoQAmJv'
      )
        .then((result) => {
          console.log(result.text);
          setStatus('sent');
          form.current?.reset();
          setTimeout(() => setStatus(null), 5000);
        })
        .catch((error) => {
          console.log(error.text);
          setStatus('error');
        });
    }
  };

  return (
    <section>
      <div>
        <div className="contact-grid">
          {/* Left Column */}
          <div>
            <p className="contact-description">
              I'm always excited to work on new projects and collaborate with innovative teams. 
              Let's create something amazing together!
            </p>
            
            <div className="contact-links">
              <a href="mailto:contact@patriciamcphee.com" className="contact-link">
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a href="https://linkedin.com/in/patriciamcphee" className="contact-link">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/patriciamcphee" className="contact-link">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <p className='contact-description'>
              Fill out the form below, and let's embark on this content journey together.
            </p>
            
            <form name="contact-form" id="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <input type="text" required className="form-control" placeholder="Name" name="user_name" />
                </div>
                <div className="form-group">
                    <input type="email" required className="form-control" placeholder="Email" name="user_email" />
                </div>
                <div className="form-group">
                    <input id="form-phone" type="tel" pattern="\d{3}[\-]\d{3}[\-]\d{4}" name="Phone" className="form-control" placeholder="Phone #" />
                </div>
                <div className="form-group">
                    <textarea required className="form-control" placeholder="Message" id="contact-message" name="message" rows={5}></textarea>
                </div>
                <div className="form-group">
                    <input type="hidden" name="contact_number" value={contactNumber} />
                </div>

            <div className="hero-buttons">
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send'}
              </button>
            </div>
            {status && status !== 'sending' && (
              <div className={`status-message ${status}`}>
                {status === 'sent' && 'Message sent! I\'ll get back to you soon.'}
                {status === 'error' && 'Message failed to send. Please try again.'}
              </div>
            )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;