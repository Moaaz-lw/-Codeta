//import { useState } from 'react'
//import './App.css'; 
//import Navbar from './components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TechBackground from './components/TechBackground';
import RegisterModal from './components/RegisterModal';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WrongAnswers from './pages/WrongAnswers';
import MyCourses from './pages/MyCourses';
import Wallet from './pages/Wallet';
import Dashboard from './pages/Dashboard';
import StudentProjects from './pages/StudentProjects';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('ar');
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [userData, setUserData] = useState({});

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onOpenAuth={() => setIsAuthOpen(true)} lang={lang} />;
      case 'profile': return <Profile userData={userData} />;
      case 'errors': return <WrongAnswers />;
      case 'my-courses': return <MyCourses />;
      case 'wallet': return <Wallet />;
      case 'dashboard': return <Dashboard />;
      case 'projects': return <StudentProjects />;
      default: return <Home onOpenAuth={() => setIsAuthOpen(true)} lang={lang} />;
    }
  };

  return (
    <div className={`app-container ${theme} ${lang}`}>
      <TechBackground />
      
      <Navbar 
        onOpenAuth={() => setIsAuthOpen(true)}
        onNavigate={(page) => setCurrentPage(page)}
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
      />

      <main className="main-content">
        {renderPage()}
      </main>

      <Footer />

      <RegisterModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)}
        onSaveUser={(data) => {
          setUserData(data);
          setCurrentPage('profile');
        }} 
      />
    </div>
  );
}

export default App;