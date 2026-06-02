import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { experienceData } from '../../data/resumeData';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">Career Journey</div>
        <h2 className="section-title">Work <span>Experience</span></h2>
      </div>
      <div className="exp__timeline">
        <div className="exp__line" />
        {experienceData.map((exp, i) => (
          <motion.div key={exp.id} className="exp__item"
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.5 }}>
            <div className="exp__dot" />
            <div className="exp__card">
              <h3 className="exp__role">{exp.role}</h3>
              <a href={exp.companyUrl} className="exp__company" target="_blank" rel="noopener noreferrer">
                {exp.company} <FaExternalLinkAlt size={10} />
              </a>
              <div className="exp__meta">
                <span><FaCalendarAlt size={11} /> {exp.period}</span>
                <span><FaMapMarkerAlt size={11} /> {exp.location}</span>
              </div>
              <p className="exp__desc">{exp.description}</p>
              <ul className="exp__highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}><FaCheckCircle className="exp__check" /> {h}</li>
                ))}
              </ul>
              <div className="exp__tags">
                {exp.tags.map(t => <span key={t} className="exp__tag">{t}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
