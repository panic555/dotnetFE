import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import IntlProvider from './providers/IntlProvider';
import translations from './constants/translations';

function App() {
  const [locale, setLocale] = useState<string>('en');

  const languageChange = () => {
    setLocale((prevLocale) => (prevLocale === 'en' ? 'hr' : 'en'));
  };

  return (
    <IntlProvider translations={translations} locale={locale}>
      <Router>
        <div>
          <NavigationBar currentLocale={locale} onLanguageChange={languageChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </IntlProvider>
  );
}

export default App;
