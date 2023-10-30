import React from 'react';
import { useNavigate } from 'react-router-dom';
import Intl from './Intl';

type NavigationBarProps = {
  onLanguageChange: () => void;
  currentLocale: string;
};

export default function NavigationBar({ onLanguageChange, currentLocale }: NavigationBarProps) {
  const navigate = useNavigate();
  return (
    <nav className="bg-yellow-500">
      <div className="max-w-screen-xl mx-auto p-2 flex items-center justify-between">
        <div className="text-black font-bold text-2xl">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <button
              className="text-black hover:border hover:border-black hover:shadow-md hover:bg-yellow-300 px-3 py-1 rounded-full"
              onClick={() => navigate('/')}
            >
              <Intl name="home_nav_bar" />
            </button>
          </li>
          <li>
            <button
              className="text-black hover:border hover:border-black hover:shadow-md hover:bg-yellow-300 px-3 py-1 rounded-full"
              onClick={() => navigate('/about')}
            >
              <Intl name="about_nav_bar" />
            </button>
          </li>
          <li>
            <button
              className="text-black hover:border hover:border-black hover:shadow-md hover:bg-yellow-300 px-3 py-1 rounded-full"
              onClick={() => navigate('/contact')}
            >
              <Intl name="contact_nav_bar" />
            </button>
          </li>
          <li>
            <button
              className="text-black hover:border hover:border-black hover:shadow-md hover:bg-yellow-300 px-3 py-1 rounded-full"
              onClick={onLanguageChange}
            >
              {currentLocale === 'en' ? 'en' : 'hr'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
