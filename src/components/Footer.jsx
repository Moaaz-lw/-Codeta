import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-glow glow-1"></div>
      <div className="footer-glow glow-2"></div>

      <div className="container footer-content">
        <div className="encouragement-box">
          <div className="sparkle-badge">
            <i className="bi bi-stars"></i> كلمة لطلابنا
          </div>
          <h3 className="encouragement-title">
            "كل سطر كود بتتعلمه النهاردة.. هو خطوة أقرب لمستقبلك كمهندس برمجة عالمي 🚀"
          </h3>
          <p className="encouragement-sub">
            استمر، الجهد اللي بتبذله دلوقتي هو اللي هيصنع فارق بكره. إحنا هنا دايماً علشان ندعمك!
          </p>
        </div>

        {/* روابط السوشيال ميديا للمنصة */}
        <div className="social-section">
          <h5>تابعنا على منصات التواصل الاجتماعي</h5>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-card facebook">
              <i className="bi bi-facebook"></i>
              <span>فيسبوك</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card instagram">
              <i className="bi bi-instagram"></i>
              <span>انستجرام</span>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="social-card whatsapp">
              <i className="bi bi-whatsapp"></i>
              <span>واتساب</span>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="social-card tiktok">
              <i className="bi bi-tiktok"></i>
              <span>تيك توك</span>
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="bottom-bar">
          <div className="rights-text">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - منصة <span>CODETA</span>
          </div>

          <div className="branding-badges">
            <span className="mzed-badge">
              <i className="bi bi-lightning-charge-fill"></i> إحدى منصات <strong>MZED Series</strong>
            </span>

            <div className="developer-signature">
              Powered by{' '}
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="dev-link"
                title="صفحة المطور على الفيسبوك"
              >
                Moaaz Emad
              </a>
              <span className="dev-role">(Front-End Developer)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;