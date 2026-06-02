import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub, FaEnvelope, FaCalendar, FaDownload, FaBriefcase, FaCode, FaRocket, FaUser, FaShieldAlt } from 'react-icons/fa';
import { personalInfo, heroIntro, heroMetrics } from '../../data/resumeData';
import './Hero.css';

const Counter = ({ target, suffix, shouldAnimate }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!shouldAnimate) return;
    let start = null;
    const step = ts => { if (!start) start = ts; const p = Math.min((ts - start) / 1800, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [target, shouldAnimate]);
  return <>{count}{suffix}</>;
};

const useNetworkCanvas = canvasRef => {
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const N = 42, MAX_DIST = 110;
    const P = Array.from({ length: N }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, r: Math.random() * 1.8 + .8 }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      P.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x < -2) p.x = canvas.width + 2; if (p.x > canvas.width + 2) p.x = -2; if (p.y < -2) p.y = canvas.height + 2; if (p.y > canvas.height + 2) p.y = -2; });
      const dark = document.documentElement.getAttribute('data-theme') === 'dark';
      for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
        const dx = P[i].x - P[j].x, dy = P[i].y - P[j].y, d = Math.sqrt(dx*dx+dy*dy);
        if (d < MAX_DIST) { const a = (1 - d / MAX_DIST) * .5; ctx.strokeStyle = dark ? `rgba(232,83,106,${a})` : `rgba(207,169,173,${a + .15})`; ctx.lineWidth = .8; ctx.beginPath(); ctx.moveTo(P[i].x, P[i].y); ctx.lineTo(P[j].x, P[j].y); ctx.stroke(); }
      }
      P.forEach(p => { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = dark ? 'rgba(232,83,106,.8)' : 'rgba(207,169,173,.9)'; ctx.fill(); });
      animId = requestAnimationFrame(draw);
    };
    draw(); window.addEventListener('resize', resize, { passive: true });
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, [canvasRef]);
};

const metricIcons = [FaBriefcase, FaCode, FaRocket, FaRocket, FaShieldAlt];

const Hero = () => {
  const [metricsVisible, setMetricsVisible] = useState(false);
  const metricsRef = useRef(null), canvasRef = useRef(null);
  useNetworkCanvas(canvasRef);
  useEffect(() => {
    const node = metricsRef.current; if (!node) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setMetricsVisible(true); obs.disconnect(); } }, { threshold: .3 });
    obs.observe(node); return () => obs.disconnect();
  }, []);
  const fade = { hidden: { opacity: 0, y: 28 }, visible: i => ({ opacity: 1, y: 0, transition: { delay: i * .1, duration: .6, ease: [.25,.46,.45,.94] } }) };

  return (
    <section id="home" className="hero">
      <div className="hero__blob hero__blob--1"/><div className="hero__blob hero__blob--2"/><div className="hero__dots"/>
      <div className="hero__container container">
        <div className="hero__grid">
          <div className="hero__content">
            <motion.div className="hero__badge" custom={0} variants={fade} initial="hidden" animate="visible"><span className="hero__badge-dot"/> AI/ML Engineer</motion.div>
            <motion.h1 className="hero__name" custom={1} variants={fade} initial="hidden" animate="visible">Mahera <span className="hero__name-accent">Vhora</span></motion.h1>
            <motion.div className="hero__title" custom={2} variants={fade} initial="hidden" animate="visible">
              <TypeAnimation sequence={['Generative AI Specialist',2000,'Python Developer',1800,'LLM Engineer',1800,'Voice AI Builder',1800,'RAG Systems Expert',1800]} speed={50} deletionSpeed={42} repeat={Infinity} wrapper="span" cursor={true}/>
            </motion.div>
            <motion.p className="hero__intro" custom={3} variants={fade} initial="hidden" animate="visible">{heroIntro}</motion.p>
            <motion.div className="hero__buttons" custom={4} variants={fade} initial="hidden" animate="visible">
              <a href="#projects" className="btn btn-primary" onClick={e=>{e.preventDefault();document.querySelector('#projects')?.scrollIntoView({behavior:'smooth'})}}><FaRocket size={13}/> View Projects</a>
              <a href={personalInfo.resumeUrl} className="btn btn-navy" target="_blank" rel="noopener noreferrer"><FaDownload size={13}/> Download Resume</a>
              <a href="#contact" className="btn btn-outline" onClick={e=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}}>Contact Me</a>
            </motion.div>
            <motion.div className="hero__socials" custom={5} variants={fade} initial="hidden" animate="visible">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero__social"><FaLinkedin/></a>
              <a href={personalInfo.github}   target="_blank" rel="noopener noreferrer" className="hero__social"><FaGithub/></a>
              <a href={`mailto:${personalInfo.email}`}                                  className="hero__social"><FaEnvelope/></a>
              <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer" className="hero__social"><FaCalendar/></a>
            </motion.div>
          </div>

          <motion.div className="hero__arena-col" initial={{opacity:0,x:60}} animate={{opacity:1,x:0}} transition={{duration:.9,ease:[.25,.46,.45,.94],delay:.2}}>
            <div className="hero__arena">
              <canvas ref={canvasRef} className="hero__canvas"/>
              <div className="hero__arena-glow"/>
              <svg className="hero__ring-svg" viewBox="0 0 340 340" fill="none">
                <circle cx="170" cy="170" r="155" stroke="rgba(232,83,106,0.15)" strokeWidth="1"/>
                <circle cx="170" cy="170" r="155" stroke="rgba(232,83,106,0.7)" strokeWidth="1.5" strokeDasharray="18 10" strokeLinecap="round" className="hero__ring-dash" style={{filter:'drop-shadow(0 0 6px rgba(232,83,106,0.6))'}}/>
              </svg>
              <div className="hero__arena-photo"><img src="/photo.jpeg" alt="Mahera Vhora" className="hero__arena-img" loading="eager"/></div>

              <motion.div className="hero__arena-card hero__arena-card--ibm" animate={{y:[0,-7,0]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}>
                <div className="hero__arena-card__ibm-logo">IBM</div>
                <div className="hero__arena-card__text"><span>IBM Certified</span><span>GenAI Specialist <span className="hero__arena-dot hero__arena-dot--green"/></span></div>
              </motion.div>
              <motion.div className="hero__arena-card hero__arena-card--exp" animate={{y:[0,6,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut',delay:1}}>
                <div className="hero__arena-card__icon"><FaUser/></div>
                <div className="hero__arena-card__text"><span className="hero__arena-card__num">1+</span><span>Years<br/>Experience</span></div>
              </motion.div>
              <motion.div className="hero__arena-card hero__arena-card--proj" animate={{y:[0,-5,0]}} transition={{duration:4.5,repeat:Infinity,ease:'easeInOut',delay:.5}}>
                <div className="hero__arena-card__icon"><FaCode/></div>
                <div className="hero__arena-card__text"><span className="hero__arena-card__num">5+</span><span>AI Projects<br/>Delivered</span></div>
              </motion.div>
              <motion.div className="hero__arena-card hero__arena-card--open" animate={{y:[0,7,0]}} transition={{duration:4.2,repeat:Infinity,ease:'easeInOut',delay:1.5}}>
                <div className="hero__arena-card__icon"><FaRocket/></div>
                <div className="hero__arena-card__text"><span>Open to<br/>Opportunities <span className="hero__arena-dot hero__arena-dot--green"/></span></div>
              </motion.div>
              <motion.div className="hero__arena-card hero__arena-card--satisfy" animate={{y:[0,-6,0]}} transition={{duration:3.8,repeat:Infinity,ease:'easeInOut',delay:.8}}>
                <div className="hero__arena-card__icon"><FaShieldAlt/></div>
                <div className="hero__arena-card__text"><span className="hero__arena-card__num">100%</span><span>Client<br/>Satisfaction</span></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="hero__metrics" ref={metricsRef}>
          {heroMetrics.map((m, i) => { const Icon = metricIcons[i] || FaBriefcase; return (
            <motion.div key={m.label} className="hero__metric" initial={{opacity:0,y:20}} animate={metricsVisible?{opacity:1,y:0}:{}} transition={{delay:i*.1,duration:.5}}>
              <div className="hero__metric-icon"><Icon/></div>
              <span className="hero__metric-value"><Counter target={m.value} suffix={m.suffix} shouldAnimate={metricsVisible}/></span>
              <span className="hero__metric-label">{m.label}</span>
            </motion.div>
          ); })}
        </div>
      </div>
      <motion.div className="hero__scroll" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2.5}}>
        <div className="hero__scroll-line"/><span className="hero__scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
};
export default Hero;
