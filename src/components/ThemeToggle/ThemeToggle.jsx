import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className={`theme-toggle ${theme === 'dark' ? 'theme-toggle--dark' : ''}`} onClick={toggleTheme} aria-label="Toggle theme" title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb">{theme === 'dark' ? <FaMoon size={10}/> : <FaSun size={10}/>}</span>
      </span>
    </button>
  );
};
export default ThemeToggle;
