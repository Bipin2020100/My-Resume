import React from 'react';
import { Element, Link, animateScroll as scroll } from 'react-scroll';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
      </nav>
      <Element name="home" className="section">
        <h1 className="section-title">Welcome to My Personal Website</h1>
        <p className="section-content">
          Hi, I'm [Your Name]. I'm passionate about [Your Interests]. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum
          ante non erat pulvinar, a dapibus felis ullamcorper. Vestibulum
          tincidunt vehicula diam vitae vestibulum.
        </p>
      </Element>
      <Element name="about" className="section">
        <h2 className="section-title">About Me</h2>
        <p className="section-content">
          I have [Years of Experience] years of experience in [Your Field].
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
          dapibus mattis posuere. Vivamus blandit metus id semper lobortis.
        </p>
      </Element>
      <Element name="contact" className="section">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-content">
          You can reach me at [Your Email] or connect with me on [Your Social
          Media].
        </p>
      </Element>
      <footer className="footer">
        &copy; {new Date().getFullYear()} [Your Name]
      </footer>
    </div>
  );
}

export default App;
