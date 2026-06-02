import { techStack } from '../../data/resumeData';
import './TechStack.css';
const Row = ({ items, reverse }) => {
  const doubled = [...items, ...items];
  return (
    <div className={`ts__row ${reverse ? 'ts__row--reverse' : ''}`}>
      <div className={`ts__track ${reverse ? 'ts__track--reverse' : ''}`}>
        {doubled.map((item, i) => (
          <div key={i} className="ts__item">
            <span>{item.emoji}</span><span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
const TechStack = () => (
  <section id="techstack" className="techstack">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">Tech Stack</div>
        <h2 className="section-title">Technologies I <span>Work With</span></h2>
      </div>
    </div>
    <Row items={techStack.row1} reverse={false}/>
    <div style={{height:16}}/>
    <Row items={techStack.row2} reverse={true}/>
  </section>
);
export default TechStack;
