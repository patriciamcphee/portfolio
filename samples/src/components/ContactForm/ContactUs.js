import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles.module.css';

function ContactUs() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [contactNumber, setContactNumber] = useState('10');

  const generateNumber = () => {
    setContactNumber(prevNumber => (parseInt(prevNumber, 10) + 1).toString());
  };

  const sendEmail = (e) => {
    e.preventDefault();
    generateNumber(); // Generate a contact number right before sending
    emailjs.sendForm('service_jhb22tn', 'template_ir1ddxf', form.current, 'rm4FS8yjBRKcxbYQX')
      .then((result) => {
        console.log(result.text);
        setStatus('sent');
        form.current.reset(); // Reset the form
        setTimeout(() => setStatus(null), 5000); // Clear the status message after 5 seconds
      }, (error) => {
        console.log(error.text);
        setStatus('error');
      });
  };

  return (
    <>
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col">
            <div className="col-demo">
              <h1>Let's Talk Technical Documentation!</h1>
              <p className="lead">Hello there! Are you looking to create outstanding technical documentation, or do you need help making complex concepts easy to understand for your users? You've come to the right place.
              </p>
              <p>Whether you're a developer, a technical writer, or a product manager, I can help you create user-friendly technical documentation that meets your users' needs. Let's work together to create content that is clear, concise, and engaging.</p>
            </div>
          </div>
          <div className="col col--5 col--offset-1">
            <div className="col-demo">
              <h2>Ready to Learn More?</h2>
              <p>Fill out the form below, and let’s talk about writing better technical documentation together!</p>
              <form name="contact-form" id="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                  <label className="input-field-icon icon-user" htmlFor="user_name"></label>
                  <input type="text" required className="form-control" placeholder="Name" name="user_name" />
                </div>
                <div className="form-group">
                  <label className="input-field-icon icon-email" htmlFor="user_email"></label>
                  <input type="email" required className="form-control" placeholder="Email" name="user_email" />
                </div>
                <div className="form-group">
                  <label className="input-field-icon icon-phone" htmlFor="form-phone"></label>
                  <input id="form-phone" type="tel" pattern="\d{3}[\-]\d{3}[\-]\d{4}" name="Phone" className="form-control" placeholder="Phone #" />
                </div>
                <div className="form-group">
                  <label className="input-field-icon icon-message" htmlFor="contact-message"></label>
                  <textarea required className="form-control" placeholder="Message" id="contact-message" name="message" rows="5"></textarea>
                </div>
                <div className="form-group margin-bottom--lg">
                  <input type="hidden" name="contact_number" value={contactNumber} />
                  <input type="submit" className="btn-primary" value="Send" />
                </div>
              </form>
              <div style={{ color: status === 'sending' ? 'blue' : status === 'sent' ? 'green' : status === 'error' ? 'red' : '' }}>
                {status === 'sending' && 'sending...'}
                {status === 'sent' && 'Message sent!'}
                {status === 'error' && 'Message failed to send.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
