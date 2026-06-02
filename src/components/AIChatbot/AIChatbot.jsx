import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import { chatbotResponses } from '../../data/resumeData';
import './AIChatbot.css';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ type: 'bot', text: "Hi! I am Mahera's AI assistant. Ask me anything about her skills, experience, or projects." }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs, typing]);

  const findMatch = (text) => {
    const q = text.toLowerCase();
    for (const [key, val] of Object.entries(chatbotResponses)) {
      if (q.includes(key)) return val;
    }
    return chatbotResponses.default;
  };

  const send = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMsgs(p => [...p, { type: 'user', text: userMsg }]);
    setInput('');
    setTyping(true);
    
    setTimeout(() => {
      setTyping(false);
      setMsgs(p => [...p, { type: 'bot', text: findMatch(userMsg) }]);
    }, 1200);
  };

  return (
    <>
      <button className={`chatbot-trigger ${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
        <FaRobot size={22} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="chatbot-window"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar"><FaRobot /></div>
                <div>
                  <div className="chatbot-title">Mahera's AI</div>
                  <div className="chatbot-status"><span className="chatbot-dot"/> Online</div>
                </div>
              </div>
              <button className="chatbot-close" onClick={() => setIsOpen(false)}><FaTimes /></button>
            </div>

            <div className="chatbot-body">
              {msgs.map((m, i) => (
                <div key={i} className={`chatbot-msg ${m.type}`}>
                  {m.type === 'bot' && <div className="chatbot-msg-icon"><FaRobot /></div>}
                  {m.type === 'user' && <div className="chatbot-msg-icon chatbot-msg-icon--user"><FaUser /></div>}
                  <div className="chatbot-bubble">{m.text}</div>
                </div>
              ))}
              {typing && (
                <div className="chatbot-msg bot">
                  <div className="chatbot-msg-icon"><FaRobot /></div>
                  <div className="chatbot-typing">
                    <span/><span/><span/>
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            <form className="chatbot-footer" onSubmit={send}>
              <input type="text" placeholder="Ask something..." value={input} onChange={e => setInput(e.target.value)} />
              <button type="submit" disabled={!input.trim()}><FaPaperPlane /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default AIChatbot;
