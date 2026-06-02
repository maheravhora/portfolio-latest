import { useState } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Architecture from './components/Architecture/Architecture';
import Certifications from './components/Certifications/Certifications';
import Achievements from './components/Achievements/Achievements';
import Testimonials from './components/Testimonials/Testimonials';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import AIChatbot from './components/AIChatbot/AIChatbot';

function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <div className="app" style={{ visibility: loaded ? 'visible' : 'hidden', opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Expertise />
          <TechStack />
          <Projects />
          <Experience />
          <Architecture />
          <Certifications />
          <Achievements />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">Mahera<span>.</span></div>
              <p className="footer-text">© {new Date().getFullYear()} Mahera Vhora · Built with passion & AI.</p>
              <div className="footer-links">
                <a href="https://linkedin.com/in/maheravhora-043172268" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/maheravhora" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:voramahera24@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </footer>
        <AIChatbot />
      </div>
    </>
  );
}
export default App;
