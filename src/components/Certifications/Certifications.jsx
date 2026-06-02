import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaGoogle, FaMicrosoft, FaAws } from 'react-icons/fa';
import { SiHp } from 'react-icons/si';
import { certificationsData } from '../../data/resumeData';
import './Certifications.css';

const issuerIcons = {
  'AWS': FaAws,
  'HP': SiHp,
  'Google': FaGoogle,
  'Microsoft': FaMicrosoft
};

const Certifications = () => (
  <section id="certifications" className="certs">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">Credentials</div>
        <h2 className="section-title">Certifications & <span>Credentials</span></h2>
      </div>
      <div className="certs__grid">
        {certificationsData.map((cert, i) => {
          const Icon = issuerIcons[cert.issuer];
          return (
          <motion.div key={cert.title} className="certs__card"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}>
            <div className="certs__issuer" style={{ color: cert.color, display: 'flex', alignItems: 'center', gap: '6px' }}>
              {cert.issuer} {Icon && <Icon size={16} />}
            </div>
            <h3 className="certs__title">{cert.title}</h3>
            <div className="certs__date">{cert.date}</div>
            <div className="certs__bottom">
              <span className="certs__badge"><FaAward size={11} /> Verified</span>
              <a href={cert.credentialUrl} className="certs__link" target="_blank" rel="noopener noreferrer">
                View <FaExternalLinkAlt size={9} />
              </a>
            </div>
          </motion.div>
        )})}
      </div>
    </div>
  </section>
);
export default Certifications;
