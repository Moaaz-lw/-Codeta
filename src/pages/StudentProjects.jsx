import React from 'react';
import './StudentProjects.css';

const StudentProjects = () => {
  const projects = [
    {
      id: 1,
      studentName: 'أحمد محمود',
      track: 'Front-End Development',
      title: 'E-Commerce Cyberpunk Store',
      description: 'متجر إلكتروني متكامل باستخدام React و Bootstrap CSS مع سلة مشتريات وتصميم سيبراني.',
      mediaType: 'image', // 'video'
      mediaUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800',
      githubUrl: 'https://github.com/example/cyber-store',
      rating: 5
    },
    {
      id: 2,
      studentName: 'سارة خالد',
      track: 'Python & Data Science',
      title: 'AI Face Recognition System',
      description: 'نظام للتعرف على الوجوه وإدارتها باستخدام لغة Python ومكتبة OpenCV.',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800',
      githubUrl: 'https://github.com/example/ai-face-rec',
      rating: 5
    }
  ];

  return (
    <div className="projects-page">
      <div className="page-header text-center">
        <h2 className="gradient-header"><i className="bi bi-code-square"></i> مشاريع طلابنا المبدعين</h2>
        <p>استعرض أعمال وطبيعة إنجازات طلابنا في مسارات الفرونت اند والباك اند والبايثون.</p>
      </div>

      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            
            <div className="project-media">
              {proj.mediaType === 'video' ? (
                <video src={proj.mediaUrl} controls className="media-content" />
              ) : (
                <img src={proj.mediaUrl} alt={proj.title} className="media-content" />
              )}
              <span className="track-tag">{proj.track}</span>
            </div>

            <div className="project-details">
              <h3>{proj.title}</h3>
              <p className="student-by">بواسطة الطالب: <span>{proj.studentName}</span></p>
              <p className="proj-desc">{proj.description}</p>

              <div className="rating-box">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className={`bi bi-star-fill ${i < proj.rating ? 'active' : ''}`}></i>
                ))}
                <span className="rating-num">({proj.rating}.0)</span>
              </div>

              <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="github-btn">
                <i className="bi bi-github"></i> عرض الكود على GitHub
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProjects;