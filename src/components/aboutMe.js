import React from 'react';
import '../App.css';

function AboutMe() {
    return (
        <section className="about-me" id="about">
            <div className="about-me-content">
                <h2>About Me</h2>
                <p>
                    I'm a software engineer with 2+ years of professional experience shipping production features in health-tech and field-service SaaS.
                    Most recently I worked on a C#/.NET platform at ServiceMinder, owning features across invoicing, online scheduling, payments,
                    third-party integrations and security.
                </p>
                <p>
                    I started out in QA and still have that mindset: I like turning a vague bug report into a tested fix.
                    I work across C#, JavaScript, Java and Python, and I've been building AI-assisted developer tooling to help teams move faster.
                </p>
            </div>
        </section>
    );
}

export default AboutMe;
