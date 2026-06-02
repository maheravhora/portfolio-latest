import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/resumeData';
import './About.css';

const stats = [{ num: '1+', label: 'Years Experience' }, { num: '5+', label: 'Projects Built' }, { num: '10+', label: 'Certifications' }];
const pills = ['IBM Certified', 'Open to Work', 'Remote-First', 'AI Enthusiast', 'Python Expert'];

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <div className="about__grid">
        <motion.div className="about__image-side" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7}}>
          <div className="about__image-wrap">
            <div className="about__image-placeholder">
              <img src="/photo.jpeg" alt="Mahera Vhora" className="about__photo" onError={e=>{e.target.style.display='none';e.target.nextSibling.style.display='flex'}}/>
              <div className="about__initials" style={{display:'none'}}>MV</div>
            </div>
            <div className="about__badge-float">
              <div className="about__badge-ibm">IBM</div>
              <div className="about__badge-text">Certified<br/>GenAI Specialist</div>
            </div>
          </div>
        </motion.div>

        <motion.div className="about__content" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.7,delay:.15}}>
          <div className="section-tag">About Me</div>
          <h2 className="about__heading">Hi, I'm Mahera 👋</h2>
          <p className="about__para">I am an AI/ML Engineer passionate about building intelligent systems that bridge the gap between cutting-edge research and practical business solutions. With IBM certification in Generative AI and hands-on experience building RAG pipelines, voice assistants, and LLM applications, I specialize in turning complex AI concepts into production-ready solutions.</p>
          <p className="about__para">My journey spans from developing multilingual voice AI systems to deploying enterprise-grade SQL chatbots, always focusing on real-world impact. I believe AI should be accessible, reliable, and transformative.</p>

          <div className="about__pills">
            {pills.map(p => <span key={p} className="about__pill">{p}</span>)}
          </div>

          <div className="about__stats">
            {stats.map(s => (
              <div key={s.label} className="about__stat">
                <div className="about__stat-num">{s.num}</div>
                <div className="about__stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about__actions">
            <a href={personalInfo.resumeUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><FaDownload size={13}/> Download Resume</a>
            <a href="#contact" className="btn btn-outline" onClick={e=>{e.preventDefault();document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'})}}><FaEnvelope size={13}/> Let's Talk</a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
export default About;
