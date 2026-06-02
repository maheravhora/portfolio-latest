import { motion } from 'framer-motion';
import { FaArrowRight, FaClock } from 'react-icons/fa';
import { blogData } from '../../data/resumeData';
import './Blog.css';

const Blog = () => (
  <section id="blog" className="blog">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">Insights</div>
        <h2 className="section-title">Latest <span>Insights</span></h2>
      </div>
      <div className="blog__grid">
        {blogData.map((post, i) => (
          <motion.a key={i} href={post.url} className="blog__card"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.45 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}>
            <span className="blog__cat">{post.category}</span>
            <h3 className="blog__title">{post.title}</h3>
            <p className="blog__excerpt">{post.excerpt}</p>
            <div className="blog__meta">
              <span>{post.date}</span>
              <span className="blog__read"><FaClock size={11} /> {post.readTime}</span>
            </div>
            <span className="blog__link">Read More <FaArrowRight size={11} /></span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
export default Blog;
