import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData, projectCategories } from '../../data/resumeData';
import './Projects.css';

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projectsData : projectsData.filter(p => p.category === active);
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Portfolio</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-subtitle">Production-ready AI solutions solving real-world problems.</p>
        </div>
        <div className="projects__filters">
          {projectCategories.map(c => (
            <button key={c} className={`projects__filter ${active===c?'projects__filter--active':''}`} onClick={()=>setActive(c)}>{c}</button>
          ))}
        </div>
        <div className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.id} className="projects__card" layout
                initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:.95}}
                transition={{delay:i*.06,duration:.4}} whileHover={{y:-8,transition:{duration:.2}}}>
                <div className="projects__card-image">
                  <img src={p.image} alt={p.title} />
                  <div className="projects__card-top">
                    <span className="projects__category">{p.category}</span>
                    {p.featured && <span className="projects__featured">⭐ Featured</span>}
                  </div>
                </div>
                <div className="projects__card-body">
                  <h3 className="projects__title">{p.title}</h3>
                  <p className="projects__desc">{p.description}</p>
                  <div className="projects__tags">
                    {p.tags.map(t => <span key={t} className="projects__tag">{t}</span>)}
                  </div>
                </div>
                <div className="projects__links">
                  <a href="#contact" className="btn btn-primary btn-sm" onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    const textarea = document.querySelector('.contact__textarea');
                    if (textarea) {
                      textarea.value = `I would like to view a live demo of the ${p.title} project. Please contact me.`;
                      textarea.focus();
                    }
                  }}><FaExternalLinkAlt size={11}/> Live Demo</a>
                  <a href={p.github} className="btn btn-outline btn-sm" target="_blank" rel="noopener noreferrer"><FaGithub size={11}/> GitHub</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Projects;
