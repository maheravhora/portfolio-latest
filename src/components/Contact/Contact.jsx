import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCalendarAlt } from 'react-icons/fa';
import { personalInfo } from '../../data/resumeData';
import './Contact.css';

// ⚠️ PASTE YOUR WEB3FORMS ACCESS KEY HERE
const WEB3FORMS_KEY = "YOUR_ACCESS_KEY_HERE";

const Contact = () => {
  const [status, setStatus] = useState('');
  
  const [showModal, setShowModal] = useState(false);
  const [meetingName, setMeetingName] = useState("");
  const [meetingEmail, setMeetingEmail] = useState("");
  const [meetingText, setMeetingText] = useState("Hello Mahera,\n\nI would like to book a 30-minute meeting with you to discuss a potential project/opportunity.\n\nMy availability over the next few days is:\n- [Insert Date/Time 1]\n- [Insert Date/Time 2]\n\nLooking forward to connecting!\n\nBest regards,\n[Your Name]");
  const [modalStatus, setModalStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setStatus("Error: Web3Forms Access Key is missing! Please add it in Contact.jsx.");
      return;
    }
    
    setStatus('Sending message...');
    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Message sent successfully! I will get back to you soon.');
        e.target.reset();
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (err) {
      setStatus('Error sending message. Please check your connection.');
    }
    setTimeout(() => setStatus(''), 5000);
  };

  const handleMeetingSubmit = async (e) => {
    e.preventDefault();
    if (WEB3FORMS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setModalStatus("Error: Access Key is missing!");
      return;
    }

    setModalStatus('Sending request...');
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", "New Meeting Request");
    formData.append("name", meetingName);
    formData.append("email", meetingEmail);
    formData.append("message", meetingText);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setModalStatus('Meeting request sent successfully!');
        setTimeout(() => {
          setShowModal(false);
          setModalStatus('');
          setMeetingName("");
          setMeetingEmail("");
        }, 2000);
      } else {
        setModalStatus('Error sending request. Please try again.');
      }
    } catch (err) {
      setModalStatus('Error sending request.');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Let's Build <span>Something</span></h2>
          <p className="section-subtitle">Open to AI projects, freelance work, and full-time opportunities.</p>
        </div>
        <div className="contact__grid">
          <motion.div className="contact__left" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6}}>
            <a href={`mailto:${personalInfo.email}`} className="btn btn-outline contact__action-btn">
              <FaEnvelope/> Email Me
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline contact__action-btn">
              <FaLinkedin/> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline contact__action-btn">
              <FaGithub/> GitHub
            </a>
            <button onClick={() => setShowModal(true)} className="btn btn-primary contact__action-btn">
              <FaCalendarAlt/> Book a Meeting (30 mins)
            </button>
          </motion.div>
          
          <motion.div className="contact__right" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6, delay:.2}}>
            <form onSubmit={submit} className="contact__form">
              <div className="contact__form-row">
                <input type="text" name="name" placeholder="Your Name" required className="contact__input" />
                <input type="email" name="email" placeholder="Your Email" required className="contact__input" />
              </div>
              <input type="text" name="subject" placeholder="Subject" required className="contact__input" />
              <textarea name="message" placeholder="Your Message" rows="5" required className="contact__textarea"></textarea>
              <button type="submit" className="btn btn-primary"><FaPaperPlane/> Send Message</button>
              {status && <p className="contact__status">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <motion.div className="modal-content" onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}>
              <button className="modal-close" onClick={() => setShowModal(false)}>✕</button>
              <h3 className="modal-title">Book a 30-Minute Meeting</h3>
              <p className="modal-subtitle">Customize your meeting request below.</p>
              <form onSubmit={handleMeetingSubmit} className="modal-form">
                <div className="contact__form-row">
                  <input type="text" placeholder="Your Name" value={meetingName} onChange={e => setMeetingName(e.target.value)} required className="contact__input" />
                  <input type="email" placeholder="Your Email" value={meetingEmail} onChange={e => setMeetingEmail(e.target.value)} required className="contact__input" />
                </div>
                <textarea 
                  className="contact__textarea" 
                  rows="6" 
                  value={meetingText} 
                  onChange={(e) => setMeetingText(e.target.value)}
                  required
                ></textarea>
                <button type="submit" className="btn btn-primary w-100" style={{justifyContent: 'center'}}>
                  <FaPaperPlane /> Send Request
                </button>
                {modalStatus && <p className="contact__status" style={{marginTop: '10px'}}>{modalStatus}</p>}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Contact;
