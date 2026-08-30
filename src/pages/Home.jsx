import React, { useState } from 'react';
import './Home.css';

const Home = ({ onOpenAuth, lang }) => {
  const isEn = lang === 'en';
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "هل الكورس مناسب للمبتدئين تماماً؟",
      a: "نعم، نبدأ معك من الصفر مطلقاً حتى احتراف المفاهيم وبناء المشاريع دون الحاجة لخبرة سابقة."
    },
    {
      q: "كيف تتم المتابعة والإجابة على الأسئلة؟",
      a: "يوجد دعم فني ومجموعات تليجرام وواتساب مخصصة للإجابة عن استفساراتك وتصحيح التأسيس أولاً بأول في أقل من ساعة."
    },
    {
      q: "ما هو بنك أخطائي وكيف أستفيد منه؟",
      a: "خاصية ذكية داخل المنصة تجمع لك الأسئلة والأكواد التي أخطأت بها سابقاً لتقوم بمراجعتها وإعادة حلها لتثبيت المعلومة."
    }
  ];

  const pipelineSteps = [
    {
      num: "01",
      title: "شرح وواجبات و Tasks",
      desc: "محاضرات مفصلة مع تطبيق عملي وفروض منزلية بعد كل درس.",
      icon: "bi bi-code-square"
    },
    {
      num: "02",
      title: "امتحانات مستمرة",
      desc: "تقييمات أسبوعية وشهرية تحاكي النظام الحقيقي.",
      icon: "bi bi-journal-check"
    },
    {
      num: "03",
      title: "رد سريع أقل من ساعة",
      desc: "تيم علمي متخصص يجيب على استفساراتك وأكوادك فوراً.",
      icon: "bi bi-lightning-charge"
    },
    {
      num: "04",
      title: "سيستم يمنع المراكمة",
      desc: "منظومة ذكية تجبرك على المتابعة وتمنع التسويف.",
      icon: "bi bi-cpu"
    },
    {
      num: "05",
      title: "تحليل نقاط الضعف",
      desc: "اكتشاف أخطائك وتدريبك عليها مكثفاً لحلها.",
      icon: "bi bi-bullseye"
    },
    {
      num: "06",
      title: "نخبة من حاسبات",
      desc: "المدرسون والتيم المساعد خريجو كليات الحاسبات.",
      icon: "bi bi-award"
    }
  ];

  return (
    <div className="home-page cyber-style">
      <section className="hero-section">
        <div className="hero-badge">
          <span className="pulse-dot"></span>
          {isEn ? "MENA'S Premier Coding Platform" : "منصة البرمجة الأولى في مصر"}
        </div>
        <h1 className="hero-title">
          {isEn ? "Master Software with" : "تعلم البرمجة مع"}{" "}
          <span className="highlight-text">CODETA</span>
        </h1>
        <p className="hero-subtitle">
          {isEn
            ? "Your path to becoming a Software Engineer starts here."
            : "رحلتك لتكون مهندس برمجة تبدأ من هنا. معاك خطوة بخطوة لأعلى الدرجات."}
        </p>
      </section>

      <section className="pipeline-section">
        <div className="pipeline-wrapper">
          <div className="pipeline-line"></div>

          <div className="pipeline-nodes">
            {pipelineSteps.map((step, idx) => (
              <div className="pipeline-node" key={idx}>
                <div className="node-marker">
                  <span className="node-number">{step.num}</span>
                  <i className={step.icon}></i>
                </div>
                <div className="node-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hologram-challenge-card">
          <div className="holo-glow"></div>
          <div className="holo-inner">
            <div className="holo-header">
              <span className="holo-badge">⚡ CODETA</span>
            </div>
            <h2 className="holo-title">
              أبشر.. <br />أنت كدا ضامن مادة البرمجة 
            </h2>
            <div className="holo-footer-line"></div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <h2 className="section-title">
          {isEn ? "Choose Your Subscription Plan" : "اختر خطة الاشتراك والتعلم المناسبة لك"}
        </h2>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="card-badge">متاح الآن</div>
            <div className="instructor-profile">
              <img src="The_teacher's_pic.jpeg" alt="م. مريم رجب" className="instructor-avatar" />
              <div className="instructor-details">
                <h4>م. مريم رجب</h4>
                <span>Lead Instructor</span>
              </div>
            </div>
            <h3 className="plan-name">اشتراك شهر</h3>
            <div className="price-tag">
              <span className="amount">210</span>
              <span className="currency">ج.م / شهرياً</span>
            </div>
            <ul className="plan-features">
              <li><i className="bi bi-check2-circle"></i> فتح محاضرات الشهر الحالي</li>
              <li><i className="bi bi-check2-circle"></i> الوصول لـ "بنك أخطائي"</li>
              <li><i className="bi bi-check2-circle"></i> دعم الواتساب والتليجرام</li>
            </ul>
            <button className="plan-btn" onClick={onOpenAuth}>احجز الكورس الآن</button>
          </div>

          <div className="pricing-card featured">
            <div className="popular-badge">الأكثر إقبالاً 🔥</div>
            <div className="card-badge primary">المسار الموصى به</div>
            <div className="instructor-profile">
              <img src="The_teacher's_pic.jpeg" alt="م. مريم رجب" className="instructor-avatar" />
              <div className="instructor-details">
                <h4>م. مريم رجب</h4>
                <span>Lead Instructor</span>
              </div>
            </div>
            <h3 className="plan-name">اشتراك الترم</h3>
            <div className="price-tag">
              <span className="amount">600</span>
              <span className="currency">ج.م / للترم</span>
            </div>
            <ul className="plan-features">
              <li><i className="bi bi-check2-circle"></i> كل مميزات الاشتراك الشهري</li>
              <li><i className="bi bi-check2-circle"></i> الوصول لكافة امتحانات الترم</li>
              <li><i className="bi bi-check2-circle"></i> جلسات مراجعة لايف أسبوعية</li>
            </ul>
            <button className="plan-btn featured-btn" onClick={onOpenAuth}>احجز الترم ووفر 30%</button>
          </div>

          {/* Card 3 */}
          <div className="pricing-card">
            <div className="card-badge vip">VIP Plan</div>
            <div className="instructor-profile">
              <img src="The_teacher's_pic.jpeg" alt="م. مريم رجب" className="instructor-avatar" />
              <div className="instructor-details">
                <h4>م. مريم رجب</h4>
                <span>Lead Instructor</span>
              </div>
            </div>
            <h3 className="plan-name">اشتراك السنة الكاملة</h3>
            <div className="price-tag">
              <span className="amount">1100</span>
              <span className="currency">ج.م / سنوياً</span>
            </div>
            <ul className="plan-features">
              <li><i className="bi bi-check2-circle"></i> الوصول الكامل للمنهج طول السنة</li>
              <li><i className="bi bi-check2-circle"></i> متابعة خاصة مع ولي الأمر</li>
              <li><i className="bi bi-check2-circle"></i> شهادة إتمام المنهج معتمدة</li>
            </ul>
            <button className="plan-btn" onClick={onOpenAuth}>احجز السنة بالكامل</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className="section-title">الأسئلة الشائعة 💬</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <i className={`bi bi-chevron-${activeFaq === index ? 'up' : 'down'}`}></i>
              </div>
              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;