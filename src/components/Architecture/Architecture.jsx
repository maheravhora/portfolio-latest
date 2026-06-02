import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { architectureData } from '../../data/resumeData';
import './Architecture.css';

const Architecture = () => (
  <section id="architecture" className="architecture">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">System Design</div>
        <h2 className="section-title">System <span>Architecture</span></h2>
        <p className="section-subtitle">AI solutions I've designed and built end-to-end.</p>
      </div>
      <div className="arch__grid">
        {architectureData.map((arch, i) => (
          <motion.div key={arch.title} className="arch__card"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}>
            <h3 className="arch__title">{arch.title}</h3>
            <p className="arch__subtitle">{arch.subtitle}</p>
            <div className="arch__flow">
              {arch.nodes.map((node, j) => (
                <div key={j} className="arch__node-wrap">
                  {j > 0 && <FaArrowRight className="arch__arrow" />}
                  <div className="arch__node">
                    <div className="arch__step">{node.step}</div>
                    <span className="arch__node-icon">{node.icon}</span>
                    <span className="arch__node-label">{node.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="arch__tags">
              {arch.tags.map(t => <span key={t} className="arch__tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Architecture;
