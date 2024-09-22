import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div id="contact" className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.contactIn.title}</h2>
      <ul className="space-y-4">
        <li>
          <p className="text-sm font-medium text-gray-700 mb-1">{t.contactIn.phone}</p>
          <a href="tel:+972501234567" className="text-blue-500 hover:underline">054-232-3527</a>
        </li>
        <li>
          <p className="text-sm font-medium text-gray-700 mb-1">{t.contactIn.email}</p>
          <a href="mailto:example@example.com" className="text-blue-500 hover:underline">hadassyeminiy@gmail.com</a>
        </li>
        <li>
          <p className="text-sm font-medium text-gray-700 mb-1">{t.contactIn.address}</p>
          <p className="text-gray-700">{t.contactIn.theAddress}</p>
        </li>
        <li>
          <p className="text-sm font-medium text-gray-700 mb-1">{t.contactIn.linkedIn}</p>
          <div className="flex space-x-4">
          <Link to="https://linkedin.com/in/hadas-yemini" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://linkedin.com/in/hadas-yemini</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
