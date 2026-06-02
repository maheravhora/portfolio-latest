import { motion } from 'framer-motion';
import { achievementsData } from '../../data/resumeData';
import './Achievements.css';

const Achievements = () => (
  <section id="achievements" className="achievements">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">Recognition</div>
        <h2 className="section-title">Achievements & <span>Recognition</span></h2>
      </div>
      <div className="ach__grid">
        {achievementsData.map((a, i) => (
          <motion.div key={a.title} className="ach__card"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}>
            <span className="ach__icon">{a.icon}</span>
            <h3 className="ach__title">{a.title}</h3>
            <p className="ach__desc">{a.desc}</p>
            <span className="ach__badge">{a.badge}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Achievements;
