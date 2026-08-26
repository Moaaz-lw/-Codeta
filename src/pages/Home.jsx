import React from 'react';
import './Home.css';

const Home = ({ onOpenAuth, lang }) => {
  const isEn = lang === 'en';

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-badge">🚀 {isEn ? "MENA's Premier Coding Platform" : 'منصة البرمجة الأولى في مصر'}</div>
        <h1 className="hero-title">
          {isEn ? 'Master Software with' : 'تعلم البرمجة مع'} <span className="highlight-text">CODETA</span>
        </h1>
        <p className="hero-subtitle">
          {isEn 
            ? 'Your path to becoming a Software Engineer starts here. Modern & European teaching standards for 1st & 2nd Baccalaureate.' 
            : 'رحلتك لتكون مهندس برمجة تبدأ من هنا. الشرح بطرق عالمية ومبسطة لأولى وثانية بكالوريا.'}
        </p>
      </section>

      <section className="pricing-section">
        <h2 className="section-title">{isEn ? 'Choose Your Subscription Plan' : 'اختر خطة الاشتراك والتعلم المناسبة لك'}</h2>
        
        <div className="pricing-grid">
          
          <div className="pricing-card">
            <div className="instructor-header">
              <div className="instructor-img-placeholder">
                <i className="bi bi-person-badge-fill"></i>
              </div>
              <span className="instructor-name">م. مريم رجب (Lead Instructor)</span>
            </div>
            
            <div className="card-badge">متاح الآن</div>
            <h3>اشتراك شهر</h3>
            <div className="price">210 <span>ج.م / شهرياً</span></div>
            
            <ul className="plan-features">
              <li><i className="bi bi-check-circle-fill"></i> فتح محاضرات الشهر الحالي</li>
              <li><i className="bi bi-check-circle-fill"></i> الوصول لـ "بنك أخطائي"</li>
              <li><i className="bi bi-check-circle-fill"></i> دعم الواتساب والتليجرام</li>
            </ul>
            <button className="plan-btn" onClick={onOpenAuth}>احجز الكورس الآن</button>
          </div>

          <div className="pricing-card featured">
            <div className="instructor-header">
              <div className="instructor-img-placeholder">
                <i className="bi bi-person-badge-fill"></i>
              </div>
              <span className="instructor-name">م. مريم رجب (Lead Instructor)</span>
            </div>

            <div className="card-badge popular">الأكثر إقبالاً 🔥</div>
            <h3>اشتراك الترم</h3>
            <div className="price">600 <span>ج.م / للترم</span></div>
            
            <ul className="plan-features">
              <li><i className="bi bi-check-circle-fill"></i> كل مميزات الاشتراك الشهري</li>
              <li><i className="bi bi-check-circle-fill"></i> الوصول لكافة امتحانات التيرم</li>
              <li><i className="bi bi-check-circle-fill"></i> جلسات مراجعة لايف أسبوعية</li>
            </ul>
            <button className="plan-btn featured-btn" onClick={onOpenAuth}>احجز التيرم ووفر 30%</button>
          </div>

          <div className="pricing-card">
            <div className="instructor-header">
              <div className="instructor-img-placeholder">
                <i className="bi bi-person-badge-fill"></i>
              </div>
              <span className="instructor-name">م.  مريم رجب  (Lead Instructor)</span>
            </div>

            <div className="card-badge VIP">VIP</div>
            <h3>اشتراك السنة الكاملة</h3>
            <div className="price">1100 <span>ج.م / سنوياً</span></div>
            
            <ul className="plan-features">
              <li><i className="bi bi-check-circle-fill"></i> الوصول الكامل للمنهج طول السنة</li>
              <li><i className="bi bi-check-circle-fill"></i> متابعة خاصة مع ولي الأمر</li>
              <li><i className="bi bi-check-circle-fill"></i> شهادة إتمام المنهج معتمدة</li>
            </ul>
            <button className="plan-btn" onClick={onOpenAuth}>احجز السنة بالكامل</button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;