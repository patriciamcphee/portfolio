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
        emailjs.sendForm('service_0ap10ki', 'contact_form', form.current, '9Jku87kluzzoQAmJv')
            .then((result) => {
                console.log(result.text);
                setStatus("sent");
                form.current.reset(); // Reset the form
                setTimeout(() => setStatus(null), 5000); // Clear the status message after 5 seconds
            }, (error) => {
                console.log(error.text);
                setStatus("error");
            });
    };

    return (
        <>
            <div className="container margin-top--lg">
                <div className="row">
                    <div className="col">
                        <div className="col-demo">
                            <h1>Let's talk content!</h1>
                            <p className="lead">Hello there! Looking for standout content, or perhaps in need of making complex ideas feel like a breeze for your audience? You're in the right place.</p>
                            <h2>Why reach out?</h2>
                            <ul>
                              <li><b>Free Consultation</b></li>
                              <li><b>Content & Writing Mastery</b></li>
                              <li><b>Simplifying the Complex</b></li>
                              <li><b>Tailored Collaboration</b></li>
                            </ul>
                            <br />
                            <h2>Worried about costs?</h2>
                            <p>I understand that budgeting is crucial. Rest assured, after our free consultation, you'll have a clear picture of service costs, ensuring no surprises down the road.</p>
                        </div>
                    </div>
                    <div className="col col--5 col--offset-1">
                        <div className="col-demo">
                            <h2>Ready to dive in?</h2>
                            <p>Fill out the form below, and let's embark on this content journey together. </p>
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
                            <div style={{ color: status === "sending" ? "blue" : status === "sent" ? "green" : status === "error" ? "red" : "" }}>
                                {status === "sending" && "sending..."}
                                {status === "sent" && "Message sent!"}
                                {status === "error" && "Message failed to send."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactUs;
