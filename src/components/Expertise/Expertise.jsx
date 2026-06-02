import { motion } from 'framer-motion';
import { expertiseData } from '../../data/resumeData';
import './Expertise.css';

const Expertise = () => (
  <section id="expertise" className="expertise">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">What I Do</div>
        <h2 className="section-title">Core <span>Expertise</span></h2>
        <p className="section-subtitle">Building production-ready AI solutions across the full spectrum of modern AI engineering.</p>
      </div>
      <div className="expertise__grid">
        {expertiseData.map((item, i) => (
          <motion.div key={item.title} className="expertise__card"
            initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
            transition={{delay:i*.08,duration:.5}} whileHover={{y:-8,transition:{duration:.2}}}>
            <div className="expertise__icon">{item.icon}</div>
            <h3 className="expertise__title">{item.title}</h3>
            <p className="expertise__desc">{item.desc}</p>
            <div className="expertise__tags">
              {item.tags.map(t => <span key={t} className="expertise__tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
export default Expertise;
