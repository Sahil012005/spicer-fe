import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <nav className="navbar">
        <div className="logo">S<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="hero-content">
            <p className="eyebrow">✨ WELCOME TO MY DIGITAL WORLD</p>

            <h1>
              Hey, I'm <span>Sahil</span>
            </h1>

            <h2>
              I build things that <span>feel alive.</span>
            </h2>

            <p className="description">
              A creative developer exploring the intersection of
              technology, design and imagination.
            </p>

            <div className="buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work →
              </a>

              <a href="#contact" className="secondary-btn">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="orbit-container">
            <div className="orbit orbit-1"></div>
            <div className="orbit orbit-2"></div>
            <div className="orbit orbit-3"></div>

            <div className="center-card">
              <div className="avatar">S</div>
              <span>CREATIVE</span>
              <strong>DEVELOPER</strong>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-label">01 — ABOUT</p>
          <h2>Turning ideas into experiences.</h2>

          <div className="cards">
            <div className="card">
              <div className="card-icon">💡</div>
              <h3>Ideas</h3>
              <p>
                I love taking simple ideas and turning them into
                memorable digital experiences.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>Code</h3>
              <p>
                Clean, interactive and modern interfaces built
                with passion and curiosity.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Design</h3>
              <p>
                Beautiful visuals combined with thoughtful user
                experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="section projects" id="projects">
          <p className="section-label">02 — PROJECTS</p>
          <h2>Things I've imagined.</h2>

          <div className="project-grid">
            <div className="project project-one">
              <span>01</span>
              <h3>Neon Future</h3>
              <p>Futuristic web experience</p>
            </div>

            <div className="project project-two">
              <span>02</span>
              <h3>Digital Dreams</h3>
              <p>Creative interactive interface</p>
            </div>

            <div className="project project-three">
              <span>03</span>
              <h3>Beyond Code</h3>
              <p>Experimental digital project</p>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="section-label">03 — CONTACT</p>
          <h2>Have an idea?</h2>
          <p>Let's turn it into something extraordinary.</p>

          <a
            className="primary-btn"
            href="mailto:hello@example.com"
          >
            Say Hello ✉
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 Sahil — Made with curiosity & React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;
