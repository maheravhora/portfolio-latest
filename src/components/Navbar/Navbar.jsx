import { useState, useEffect } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.css';

const links = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Expertise',      href: '#expertise' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__logo" onClick={e => go(e, '#home')}>
          Mahera<span className="navbar__logo-dot">.</span>
        </a>

        <nav className="navbar__links">
          {links.map(l => (
            <a key={l.label} href={l.href} className="navbar__link" onClick={e => go(e, l.href)}>{l.label}</a>
          ))}
        </nav>

        <div className="navbar__right">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary btn-sm navbar__cta" onClick={e => go(e, '#contact')}>Hire Me</a>
          <button className={`navbar__hamburger ${open ? 'navbar__hamburger--open' : ''}`} onClick={() => setOpen(o => !o)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${open ? 'navbar__drawer--open' : ''}`}>
        {links.map(l => (
          <a key={l.label} href={l.href} className="navbar__drawer-link" onClick={e => go(e, l.href)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{marginTop:'16px'}} onClick={e => go(e,'#contact')}>Hire Me</a>
      </div>
      {open && <div className="navbar__overlay" onClick={() => setOpen(false)} />}
    </header>
  );
};
export default Navbar;
