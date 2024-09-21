import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const isRTL = language === 'he';

  return (
    <nav className="bg-teal-800 text-white shadow-md fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto flex items-center py-4 px-6">
        <div className={`flex-grow flex items-center justify-between ${isRTL ? 'flex-end' : 'flex-row'}`}>
          <ul className={`flex items-center ${isRTL ? 'space-x-8 space-x-reverse ' : 'space-x-8'}`}>
            <li>
              <Link to="/" className="hover:text-teal-300 transition-colors duration-300">
                {t.navbar.home}
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-teal-300 transition-colors duration-300">
                {t.navbar.projects}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-teal-300 transition-colors duration-300">
                {t.navbar.contact}
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleLanguage}
            className={`bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors duration-300 ${isRTL ? 'mr-8' : 'ml-8'}`}
          >
            {t.navbar.languageToggle}
          </button>
        </div>
      </div>
    </nav>
  );
}