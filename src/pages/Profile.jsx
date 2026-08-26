import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Profile.css';

const Profile = ({ user, onOpenRegister }) => {
  // فحص هل يوجد مستخدم وهل يمتلك الاسم الأول
  const isDataFilled = user && typeof user === 'object' && user.firstName;

  if (!isDataFilled) {
    return (
      <div className="profile-container empty-profile" style={{ textAlign: 'center', padding: '50px 20px' }}>
        <i className="bi bi-exclamation-circle icon-empty" style={{ fontSize: '4rem', color: '#ffc107' }}></i>
        <h3 style={{ marginTop: '20px', fontWeight: 'bold' }}>لم يتم تسجيل البيانات بعد</h3>
        <p style={{ color: '#6c757d', marginBottom: '25px' }}>
          يرجى تسجيل بياناتك أولاً لإنشاء حسابك واستعراض ملفك الشخصي.
        </p>
        <button 
          type="button" 
          onClick={onOpenRegister}
          style={{
            backgroundColor: '#0d6efd',
            color: '#fff',
            border: 'none',
            padding: '12px 30px',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(13, 110, 253, 0.3)'
          }}
        >
          <i className="bi bi-person-plus-fill me-2"></i> سجل بياناتك الآن
        </button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header-card">
        <div className="avatar-wrapper">
          {user.photo ? (
            <img src={user.photo} alt="صورة الطالب" className="user-avatar-img" />
          ) : (
            <div className="user-avatar-placeholder">
              <i className="bi bi-person-fill"></i>
            </div>
          )}
        </div>
        <h2 className="user-full-name">
          {user.firstName} {user.middleName} {user.lastName}
        </h2>
        <span className="badge-grade">
          <i className="bi bi-mortarboard-fill"></i> {user.grade} ({user.system})
        </span>
      </div>

      <div className="profile-details-grid">
        <div className="detail-item">
          <i className="bi bi-shield-check icon-detail"></i>
          <div>
            <label>طريقة التوثيق والربط</label>
            <p>{user.email || user.phoneAuth || 'غير محدد'}</p>
          </div>
        </div>

        <div className="detail-item">
          <i className="bi bi-card-heading icon-detail"></i>
          <div>
            <label>الرقم القومي</label>
            <p>{user.nationalId || 'غير مدخل'}</p>
          </div>
        </div>

        <div className="detail-item">
          <i className="bi bi-gender-ambiguous icon-detail"></i>
          <div>
            <label>الجنس</label>
            <p>{user.gender || 'غير مدخل'}</p>
          </div>
        </div>

        <div className="detail-item">
          <i className="bi bi-geo-alt-fill icon-detail"></i>
          <div>
            <label>المحافظة</label>
            <p>{user.governorate || 'غير مدخل'}</p>
          </div>
        </div>

        <div className="detail-item">
          <i className="bi bi-whatsapp icon-detail"></i>
          <div>
            <label>هاتف الطالب (واتساب)</label>
            <p>{user.studentPhone || 'غير مدخل'}</p>
          </div>
        </div>

        <div className="detail-item">
          <i className="bi bi-telephone-fill icon-detail"></i>
          <div>
            <label>هاتف ولي الأمر</label>
            <p>{user.parentPhone || 'غير مدخل'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;