import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './RegisterModal.css';

const egyptGovernorates = [
  "القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "الشرقية", "القليوبية",
  "كفر الشيخ", "المنوفية", "الغربية", "البحيرة", "الإسماعيلية", "بورسعيد",
  "السويس", "المنيا", "بني سويف", "الفيوم", "أسيوط", "سوهاج", "قنا",
  "الأقصر", "أسوان", "البحر الأحمر", "الوادي الجديد", "مطروح", "شمال سيناء",
  "جنوب سيناء", "دمياط"
];

const RegisterModal = ({ isOpen, onClose, onSaveUser }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [authMethod, setAuthMethod] = useState('gmail');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    phoneAuth: '',
    firstName: '',
    middleName: '',
    lastName: '',
    nationalId: '',
    gender: 'ذكر',
    studentPhone: '',
    parentPhone: '',
    governorate: 'القاهرة',
    grade: 'الصف الأول الثانوي',
    system: 'عربي / عام',
    photo: null
  });

  if (!isOpen) return null;

  const handleSendVerification = () => {
    setOtpSent(true);
    alert(authMethod === 'gmail' 
      ? `تم إرسال رابط التأكيد إلى: ${formData.email}` 
      : `تم إرسال كود الـ OTP إلى الرقم: ${formData.phoneAuth}`
    );
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, photo: photoUrl }));
    }
  };

  // دالة الانتقال للخطوة التالية
  const handleNextStep = (e) => {
    if (e) e.preventDefault();
    if (currentStep < 6) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  // دالة الإرسال النهائي المباشر
  const handleFinalSubmit = (e) => {
    if (e) e.preventDefault();
    // إرسال البيانات المكتملة إلى App.jsx
    onSaveUser(formData);
    // إغلاق النافذة المنبثقة
    onClose();
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button type="button" className="close-modal-btn" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>

        {/* Stepper Header */}
        <div className="stepper-container">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div 
              key={step} 
              className={`step-item ${currentStep === step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
            >
              <div className="step-number">
                {currentStep > step ? <i className="bi bi-check-lg"></i> : step}
              </div>
              <span className="step-label">
                {step === 1 && 'الربط'}
                {step === 2 && 'الهوية'}
                {step === 3 && 'التواصل'}
                {step === 4 && 'المحافظة'}
                {step === 5 && 'المرحلة'}
                {step === 6 && 'الصورة'}
              </span>
            </div>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={currentStep === 6 ? handleFinalSubmit : handleNextStep} className="modal-form">
          {currentStep === 1 && (
            <div className="step-content">
              <h4><i className="bi bi-shield-check"></i> تأكيد الهوية والربط</h4>
              <p>اختر طريقة توثيق حسابك بالمنصة</p>
              
              <div className="auth-toggle-buttons">
                <button 
                  type="button" 
                  className={`toggle-btn ${authMethod === 'gmail' ? 'active' : ''}`}
                  onClick={() => { setAuthMethod('gmail'); setOtpSent(false); }}
                >
                  <i className="bi bi-envelope-at"></i> ربط بـ Gmail
                </button>
                <button 
                  type="button" 
                  className={`toggle-btn ${authMethod === 'phone' ? 'active' : ''}`}
                  onClick={() => { setAuthMethod('phone'); setOtpSent(false); }}
                >
                  <i className="bi bi-phone"></i> ربط برقم الهاتف (OTP)
                </button>
              </div>

              <div className="inputs-stack margin-top-15">
                {authMethod === 'gmail' ? (
                  <input 
                    type="email" 
                    placeholder="أدخل بريدك الإلكتروني (Gmail)" 
                    value={formData.email}
                    required 
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                ) : (
                  <input 
                    type="tel" 
                    placeholder="أدخل رقم المحمول للتوثيق" 
                    value={formData.phoneAuth}
                    required 
                    onChange={(e) => setFormData({...formData, phoneAuth: e.target.value})}
                  />
                )}

                {!otpSent ? (
                  <button type="button" className="btn-verify" onClick={handleSendVerification}>
                    إرسال كود التأكيد <i className="bi bi-send"></i>
                  </button>
                ) : (
                  <div className="otp-box">
                    <input 
                      type="text" 
                      placeholder="أدخل كود الـ OTP" 
                      value={otpCode}
                      maxLength="4"
                      required 
                      onChange={(e) => setOtpCode(e.target.value)}
                    />
                    <span className="verify-success"><i className="bi bi-check-circle-fill"></i> تم الإرسال</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-content">
              <h4><i className="bi bi-person-vcard"></i> البيانات الشخصية الهامة</h4>
              <p>يرجى التأكد من كتابة الاسم والرقم القومي بدقة</p>
              
              <div className="inputs-stack">
                <div className="name-grid">
                  <input 
                    type="text" 
                    placeholder="الاسم الأول" 
                    value={formData.firstName}
                    required 
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="اسم الأب" 
                    value={formData.middleName}
                    required 
                    onChange={(e) => setFormData({...formData, middleName: e.target.value})}
                  />
                  <input 
                    type="text" 
                    placeholder="اللقب / العائلة" 
                    value={formData.lastName}
                    required 
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>

                <input 
                  type="text" 
                  placeholder="الرقم القومي (14 رقم)" 
                  maxLength="14"
                  minLength="14"
                  value={formData.nationalId}
                  required 
                  onChange={(e) => setFormData({...formData, nationalId: e.target.value})}
                />

                <div className="gender-select">
                  <label>الجنس:</label>
                  <div className="radio-group">
                    <label className={`radio-card ${formData.gender === 'ذكر' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="ذكر" 
                        checked={formData.gender === 'ذكر'} 
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                      />
                      <span>👨 ذكر</span>
                    </label>
                    <label className={`radio-card ${formData.gender === 'أنثى' ? 'selected' : ''}`}>
                      <input 
                        type="radio" 
                        name="gender" 
                        value="أنثى" 
                        checked={formData.gender === 'أنثى'} 
                        onChange={(e) => setFormData({...formData, gender: e.target.value})}
                      />
                      <span>👩 أنثى</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="step-content">
              <h4><i className="bi bi-telephone"></i> أرقام التواصل</h4>
              <p>لضمان استلام إشعارات المتابعة والدعم الفني</p>
              <div className="inputs-stack">
                <input 
                  type="tel" 
                  placeholder="رقم هاتف الطالب (واتساب)" 
                  value={formData.studentPhone}
                  required 
                  onChange={(e) => setFormData({...formData, studentPhone: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="رقم هاتف ولي الأمر" 
                  value={formData.parentPhone}
                  required 
                  onChange={(e) => setFormData({...formData, parentPhone: e.target.value})}
                />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="step-content">
              <h4><i className="bi bi-geo-alt"></i> المحافظة والإقامة</h4>
              <p>اختر المحافظة المقيم بها</p>
              <div className="inputs-stack">
                <div className="select-group">
                  <label>اختر المحافظة:</label>
                  <select 
                    value={formData.governorate} 
                    onChange={(e) => setFormData({...formData, governorate: e.target.value})}
                  >
                    {egyptGovernorates.map((gov, index) => (
                      <option key={index} value={gov}>{gov}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="step-content">
              <h4><i className="bi bi-journal-bookmark"></i> المرحلة والمسار التعليمي</h4>
              <p>حدد سنتك الدراسية ونظام التعلم</p>
              <div className="inputs-stack">
                <div className="select-group">
                  <label>المرحلة / السنة الدراسية:</label>
                  <select 
                    value={formData.grade} 
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  >
                    <option>الصف الأول الثانوي</option>
                    <option>الصف الثاني الثانوي</option>
                    <option>الصف الثالث الثانوي</option>
                  </select>
                </div>

                <div className="select-group">
                  <label>نوع التعليم / الشعبة:</label>
                  <select 
                    value={formData.system} 
                    onChange={(e) => setFormData({...formData, system: e.target.value})}
                  >
                    <option>عربي / عام</option>
                    <option>لغات (Languages)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="step-content text-center">
              <h4><i className="bi bi-camera"></i> الصورة الشخصية للبروفايل</h4>
              <p>اختر صورة ممتازة لتظهر في بروفايلك</p>
              <div className="photo-upload-zone">
                {formData.photo ? (
                  <img src={formData.photo} alt="معاينة" className="preview-image" />
                ) : (
                  <>
                    <i className="bi bi-cloud-arrow-up-fill upload-icon"></i>
                    <span>اضغط للرفع أو اسحب الصورة هنا</span>
                  </>
                )}
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="modal-actions">
            {currentStep > 1 && (
              <button type="button" className="btn-prev" onClick={handlePrev}>
                <i className="bi bi-arrow-right"></i> السابق
              </button>
            )}

            {currentStep < 6 ? (
              <button type="submit" className="btn-next">
                التالي <i className="bi bi-arrow-left"></i>
              </button>
            ) : (
              <button 
                type="button" 
                className="btn-next" 
                onClick={handleFinalSubmit}
              >
                إتمام التسجيل والبدء 🚀
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;