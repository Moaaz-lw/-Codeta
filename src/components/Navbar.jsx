import React, { useState } from 'react';
// 🟢 هذا السطر هو الذي يظهر الأيقونات التي كانت مخفية
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

const Navbar = ({ onOpenAuth, onNavigate, theme, toggleTheme, lang, toggleLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* زر الفتح والإغلاق الرئيسي */}
      <button className={`menu-btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
      </button>

      {/* القائمة المنسدلة للأجهزة والأيقونات */}
      <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
        <li>
          <a href="#home" onClick={() => { onNavigate && onNavigate('home'); setIsOpen(false); }}>
            <i className="bi bi-house-door icon"></i>
            <span>الرئيسية</span>
          </a>
        </li>
        <li>
          <a href="#my-courses" onClick={() => { onNavigate && onNavigate('my-courses'); setIsOpen(false); }}>
            <i className="bi bi-journal-code icon"></i>
            <span>كورساتي</span>
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => { onNavigate && onNavigate('projects'); setIsOpen(false); }}>
            <i className="bi bi-rocket-takeoff icon"></i>
            <span>مشاريع طلابنا</span>
          </a>
        </li>
        <li>
          <a href="#explore" onClick={() => { onNavigate && onNavigate('home'); setIsOpen(false); }}>
            <i className="bi bi-compass icon"></i>
            <span>الكورسات المقترحة</span>
          </a>
        </li>
        <li>
          <a href="#questions" onClick={() => { onNavigate && onNavigate('dashboard'); setIsOpen(false); }}>
            <i className="bi bi-patch-question icon"></i>
            <span>أسئلتي</span>
          </a>
        </li>
        <li>
          <a href="#errors" onClick={() => { onNavigate && onNavigate('errors'); setIsOpen(false); }}>
            <i className="bi bi-bug icon"></i>
            <span>أخطائي</span>
          </a>
        </li>
        <li>
          <a href="#wallet" onClick={() => { onNavigate && onNavigate('wallet'); setIsOpen(false); }}>
            <i className="bi bi-wallet2 icon"></i>
            <span>المحفظة</span>
          </a>
        </li>
        <li>
          <a href="#profile" onClick={() => { onNavigate && onNavigate('profile'); setIsOpen(false); }}>
            <i className="bi bi-person-badge icon"></i>
            <span>الملف الشخصي</span>
          </a>
        </li>

        <li className="dropdown-li">
          <a href="#social" onClick={(e) => { e.preventDefault(); setSocialOpen(!socialOpen); }}>
            <i className="bi bi-share icon"></i>
            <span>روابطنا الرسمية</span>
            <i className={`bi bi-chevron-${socialOpen ? 'up' : 'down'} arrow-icon`}></i>
          </a>
          {socialOpen && (
            <div className="social-sub-menu">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i> فيسبوك</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i> انستجرام</a>
              <a href="https://wa.me/" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i> واتساب</a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer"><i className="bi bi-tiktok"></i> تيك توك</a>
            </div>
          )}
        </li>

        {/* 🟢 زر دخول / تسجيل الأخضر */}
        <li className="auth-btn-wrapper">
          <button className="login-green-btn" onClick={() => { onOpenAuth && onOpenAuth(); setIsOpen(false); }}>
            <i className="bi bi-shield-lock-fill"></i>
            <span>دخول / تسجيل</span>
          </button>
        </li>
      </ul>

      {/* شريط التحكم باللغة والمظهر */}
      <div className="top-quick-bar">
        <button className="quick-icon-btn" onClick={toggleTheme}>
          <i className={`bi ${theme === 'dark' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
        </button>
        <button className="quick-icon-btn" onClick={toggleLang}>
          {lang ? lang.toUpperCase() : 'AR'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;