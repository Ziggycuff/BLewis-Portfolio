import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Brandon Lewis</h1>
        <p className="header-subtitle">Software Engineer</p>
        <nav className="header-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/Ziggycuff" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
