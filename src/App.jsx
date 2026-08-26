//import { useState } from 'react'
//import './App.css'; 
//import Navbar from './components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
//import React from 'react';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechBackground from './components/TechBackground';
import RegisterModal from './components/RegisterModal';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WrongAnswers from './pages/WrongAnswers';
import MyCourses from './pages/MyCourses';
import Wallet from './pages/Wallet';
import Dashboard from './pages/Dashboard';
import StudentProjects from './pages/StudentProjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [lang, setLang] = useState('ar');
  const [currentPage, setCurrentPage] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // قراءة بيانات المستخدم المجهزة سابقاً من localStorage عند التحميل
  const [userData, setUserData] = useState(() => {
    const savedUser = localStorage.getItem('codeta_user');
    return savedUser ? JSON.parse(savedUser) : {};
  });

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLang = () => setLang(lang === 'ar' ? 'en' : 'ar');

  // دالة استقبال البيانات بعد إتمام التسجيل بنجاح في الخطوة الأخيرة
  const handleSaveUser = (data) => {
    setUserData(data);
    localStorage.setItem('codeta_user', JSON.stringify(data)); // حفظ دائم يمنع مسح البيانات بعد Refresh
    setCurrentPage('profile');
    setIsAuthOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onOpenAuth={() => setIsAuthOpen(true)} lang={lang} />;
      case 'profile':
        return <Profile user={userData} onOpenRegister={() => setIsAuthOpen(true)} />;
      case 'errors':
        return <WrongAnswers />;
      case 'my-courses':
        return <MyCourses />;
      case 'wallet':
        return <Wallet />;
      case 'dashboard':
        return <Dashboard />;
      case 'projects':
        return <StudentProjects />;
      default:
        return <Home onOpenAuth={() => setIsAuthOpen(true)} lang={lang} />;
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
        onSaveUser={handleSaveUser}
      />
    </div>
  );
}

export default App;