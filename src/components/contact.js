import React from 'react';
import '../App.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-content">
                <h2>Contact Me</h2>
                <p>
                    Want to collaborate on a project or just say hello? Feel free to get in
                    touch with me through the following channels.
                </p>
                <ul className="contact-list">
                    <li>Email: <a href="mailto:BrandonLewis94@protonmail.com">BrandonLewis94@protonmail.com</a></li>
                    <li>GitHub: <a href="https://github.com/Ziggycuff" target="_blank" rel="noopener noreferrer">github.com/Ziggycuff</a></li>
                </ul>
            </div>
        </section>
    );
}

export default Contact;
