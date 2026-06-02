import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCalendarAlt } from 'react-icons/fa';
import { personalInfo } from '../../data/resumeData';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const submit = e => {
    e.preventDefault();
    setStatus('Message sent successfully! I will get back to you soon.');
    e.target.reset();
    setTimeout(() => setStatus(''), 5000);
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Let's Build <span>Something</span></h2>
          <p className="section-subtitle">Open to AI projects, freelance work, and full-time opportunities.</p>
        </div>
        <div className="contact__grid">
          <motion.div className="contact__left" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}}>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-outline contact__action-btn">
              <FaEnvelope/> Email Me
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline contact__action-btn">
              <FaLinkedin/> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline contact__action-btn">
              <FaGithub/> GitHub
            </a>
            <a href={personalInfo.calendly} target="_blank" rel="noopener noreferrer" className="btn btn-primary contact__action-btn">
              <FaCalendarAlt/> Book a Meeting (30 mins)
            </a>
          </motion.div>
          
          <motion.div className="contact__right" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6,delay:.1}}>
            <form className="contact__form" onSubmit={submit}>
              <div className="contact__form-row">
                <input type="text" className="contact__input" placeholder="Your Name" required />
                <input type="email" className="contact__input" placeholder="Your Email" required />
              </div>
              <input type="text" className="contact__input" placeholder="Subject" required />
              <textarea className="contact__textarea" placeholder="Your Message..." rows="4" required></textarea>
              <button type="submit" className="contact__submit"><FaPaperPlane/> Send Message</button>
              {status && <div className="contact__success">{status}</div>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
