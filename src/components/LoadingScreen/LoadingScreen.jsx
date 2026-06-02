import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LINES = [
  { t: 'cmd',     text: "$ Initializing Mahera's AI Portfolio..." },
  { t: 'blank' },
  { t: 'comment', text: '# Loading Agent Framework' },
  { t: 'import',  text: 'from mahera_ai import PortfolioAgent' },
  { t: 'import',  text: 'from langchain import LLMChain, ChatOpenAI' },
  { t: 'import',  text: 'from rag_engine import RAGPipeline, VectorDB' },
  { t: 'import',  text: 'from voice_ai  import WhisperSTT, TTSSynth' },
  { t: 'import',  text: 'import portfolio_data as data' },
  { t: 'blank' },
  { t: 'comment', text: '# Instantiate the AI Portfolio Agent' },
  { t: 'code',    text: 'agent = PortfolioAgent(' },
  { t: 'code',    text: "    name   = 'Mahera Vhora Portfolio'," },
  { t: 'code',    text: "    model  = 'gpt-4-turbo'," },
  { t: 'code',    text: "    domain = 'Generative AI & LLMs'" },
  { t: 'code',    text: ')' },
  { t: 'blank' },
  { t: 'comment', text: '# Loading portfolio data...' },
  { t: 'code',    text: 'agent.load_skills(data.expertise)' },
  { t: 'success', text: '  ✓  6 expertise areas loaded' },
  { t: 'code',    text: 'agent.load_projects(data.projects)' },
  { t: 'success', text: '  ✓  5 AI projects deployed' },
  { t: 'code',    text: 'agent.load_certifications(data.certs)' },
  { t: 'success', text: '  ✓  10+ certifications verified' },
  { t: 'code',    text: 'agent.load_experience(data.timeline)' },
  { t: 'success', text: '  ✓  2+ years experience mapped' },
  { t: 'blank' },
  { t: 'comment', text: '# Building portfolio sections...' },
  { t: 'code',    text: 'agent.build_hero()' },
  { t: 'success', text: '  ✓  Hero section ready' },
  { t: 'code',    text: 'agent.build_rag_pipeline()' },
  { t: 'success', text: '  ✓  RAG pipeline initialized' },
  { t: 'code',    text: 'agent.deploy_portfolio()' },
  { t: 'blank' },
  { t: 'divider', text: '════════════════════════════════════' },
  { t: 'success', text: "  ✓  Portfolio ready for launch!" },
  { t: 'success', text: "  ✓  Welcome to Mahera's World ✨" },
  { t: 'divider', text: '════════════════════════════════════' },
];

const LINE_MS = l => l.t === 'blank' ? 45 : l.t === 'divider' ? 70 : 80;
const SLAT_COUNT = 14;

const LoadingScreen = ({ onDone }) => {
  const [phase,   setPhase]   = useState('error');
  const [lines,   setLines]   = useState([]);
  const [cursor,  setCursor]  = useState(true);
  const [shutter, setShutter] = useState('hidden');
  const [signOn,  setSignOn]  = useState(false);
  const termRef  = useRef(null);
  const timers   = useRef([]);
  const later = (ms, fn) => { const id = setTimeout(fn, ms); timers.current.push(id); };

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  useEffect(() => { later(2000, () => setPhase('terminal')); }, []);

  useEffect(() => {
    if (phase !== 'terminal') return;
    let offset = 0;
    LINES.forEach(line => { offset += LINE_MS(line); later(offset, () => setLines(p => [...p, line])); });
    const T = offset;
    later(T + 350, () => { setCursor(false); setShutter('down'); });
    later(T + 1300, () => setSignOn(true));
    later(T + 2100, () => setSignOn(false));
    later(T + 2350, () => setShutter('up'));
    later(T + 3350, () => { setPhase('done'); onDone?.(); });
  }, [phase]);

  useEffect(() => { if (termRef.current) termRef.current.scrollTop = termRef.current.scrollHeight; }, [lines]);

  if (phase === 'done') return null;

  const shutterAnimate = shutter === 'up' ? { y: '-105%' } : shutter === 'down' ? { y: '0%' } : { y: '-100%' };
  const shutterTransition = shutter === 'up' ? { duration: 0.85, ease: [0.76,0,0.24,1] } : { duration: 0.85, ease: [0.16,1,0.3,1] };

  return (
    <>
      <div className="ls-root">
        <AnimatePresence mode="wait">
          {phase === 'error' && (
            <motion.div key="err" className="ls-error" initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} exit={{opacity:0,filter:'blur(12px)',scale:1.04,transition:{duration:0.35}}} transition={{duration:0.4}}>
              <div className="ls-error__label">◉ System Error</div>
              <div className="ls-error__404">404</div>
              <div className="ls-error__title">Oops — Page Not Found</div>
              <div className="ls-error__sub">Don't worry... Our AI Agent is already on it.</div>
              <div className="ls-error__bar-track"><div className="ls-error__bar-fill" /></div>
            </motion.div>
          )}
          {phase === 'terminal' && (
            <motion.div key="term" className="ls-terminal-wrap" initial={{opacity:0,y:28,scale:0.97}} animate={{opacity:1,y:0,scale:1}} transition={{duration:0.5,ease:[0.25,0.46,0.45,0.94]}}>
              <div className="ls-terminal">
                <div className="ls-terminal__bar">
                  <div className="ls-terminal__dots">
                    <span className="ls-terminal__dot ls-terminal__dot--r"/>
                    <span className="ls-terminal__dot ls-terminal__dot--y"/>
                    <span className="ls-terminal__dot ls-terminal__dot--g"/>
                  </div>
                  <div className="ls-terminal__title">portfolio_agent.py — python3</div>
                </div>
                <div className="ls-terminal__body" ref={termRef}>
                  {lines.map((l, i) => l.t === 'blank' ? <div key={i} className="ls-line ls-line--blank"/> : (
                    <div key={i} className={`ls-line ls-line--${l.t}`}>
                      {l.t === 'code' && <span className="ls-prompt">›</span>}
                      <span>{l.text}</span>
                    </div>
                  ))}
                  {cursor && <span className="ls-cursor"/>}
                </div>
              </div>
              <div className="ls-terminal__status"><span className="ls-terminal__status-dot"/>Agent running · portfolio_agent.py · Python 3.11</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {shutter !== 'hidden' && (
        <motion.div className="ls-shutter" initial={{y:'-100%'}} animate={shutterAnimate} transition={shutterTransition}>
          {Array.from({length:SLAT_COUNT}).map((_,i) => <div key={i} className="ls-shutter__slat"/>)}
        </motion.div>
      )}

      <AnimatePresence>
        {signOn && (
          <motion.div key="sign" className="ls-closed-sign" initial={{opacity:0,scale:0.6,rotate:-12}} animate={{opacity:1,scale:1,rotate:-5,transition:{type:'spring',stiffness:300,damping:20}}} exit={{opacity:0,scale:0.5,transition:{duration:0.2}}}>
            <div className="ls-closed-sign__text"><span className="ls-closed-sign__dot"/>CLOSED<span className="ls-closed-sign__dot"/></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default LoadingScreen;
