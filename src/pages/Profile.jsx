import React from 'react';
import './Profile.css';

const Profile = ({ userData }) => {
  return (
    <div className="profile-page">
      <div className="profile-card-container">
        
        <div className="profile-header">
          <div className="profile-avatar-container">
            {userData.profileImgPreview ? (
              <img src={userData.profileImgPreview} alt="User Avatar" className="user-profile-img" />
            ) : (
              <i className="bi bi-person-circle default-avatar"></i>
            )}
          </div>
          <h2>{userData.firstName ? `${userData.firstName} ${userData.middleName || ''} ${userData.lastName}` : 'اسم الطالب المسجل'}</h2>
          <span className="track-badge">
            {userData.academicTrack === '2nd_bac' ? 'ثانية بكالوريا (علوم حاسب)' : userData.academicTrack === '2nd_sec' ? 'ثانية ثانوي' : 'أولى ثانوي'}
          </span>
        </div>

        <div className="profile-details-grid">
          
          <div className="detail-box">
            <i className="bi bi-telephone-fill"></i>
            <div>
              <label>رقم هاتف الطالب</label>
              <p>{userData.phone || 'لم يتم الإدخال'}</p>
            </div>
          </div>

          <div className="detail-box">
            <i className="bi bi-envelope-check-fill"></i>
            <div>
              <label>الوسيلة المربوطة للتفعيل (Gmail / Phone)</label>
              <p>{userData.authMethod === 'email' ? userData.userEmail : userData.userPhoneAuth || 'غير مسجل'}</p>
            </div>
          </div>

          <div className="detail-box">
            <i className="bi bi-person-fill-lock"></i>
            <div>
              <label>اسم ولي الأمر الرباعي</label>
              <p>{userData.parentFullName || 'لم يتم الإدخال'}</p>
            </div>
          </div>

          <div className="detail-box">
            <i className="bi bi-phone-vibrate"></i>
            <div>
              <label>رقم هاتف ولي الأمر</label>
              <p>{userData.parentPhone1 || 'لم يتم الإدخال'}</p>
            </div>
          </div>

          <div className="detail-box">
            <i className="bi bi-card-heading"></i>
            <div>
              <label>الرقم القومي للطالب</label>
              <p>{userData.nationalId || '••••••••••••••'}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;