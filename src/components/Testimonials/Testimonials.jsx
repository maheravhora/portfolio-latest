import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { testimonialsData } from '../../data/resumeData';
import './Testimonials.css';

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">Reviews</div>
        <h2 className="section-title">What People <span>Say</span></h2>
      </div>
      <div className="test__grid">
        {testimonialsData.map((t, i) => (
          <motion.div key={i} className="test__card"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.45 }}>
            <div className="test__stars">
              {Array.from({ length: t.stars }).map((_, j) => <FaStar key={j} className="test__star" />)}
            </div>
            <p className="test__quote">"{t.quote}"</p>
            <div className="test__author">
              <div className="test__avatar">{t.initials}</div>
              <div>
                <div className="test__name">{t.author}</div>
                <div className="test__role">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Testimonials;
