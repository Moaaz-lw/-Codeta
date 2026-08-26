import React from 'react';
import './WrongAnswers.css';

const WrongAnswers = () => {
  const errorLogs = [
    { id: 1, course: 'C++ Basics', question: 'ما هو الفرق بين Pass by Value و Pass by Reference؟', myAnswer: 'لا يوجد فرق بينهما', correctAnswer: 'Pass by Reference يمرر عنوان الذاكرة الأصلي' },
    { id: 2, course: 'Algorithms 101', question: 'ما هو الوقت الزمني Time Complexity للـ Binary Search؟', myAnswer: 'O(n)', correctAnswer: 'O(log n)' }
  ];

  return (
    <div className="wrong-answers-page">
      <div className="page-header">
        <h2><i className="bi bi-bug-fill"></i> سجّل أخطائي التعليمية</h2>
        <p>يتم تجميع كل الإجابات الخاطئة من امتحاناتك السابقة هنا لإعادة التدرب عليها.</p>
        <button className="generate-exam-btn">
          <i className="bi bi-lightning-charge-fill"></i> إنشاء امتحان مخصص من الأخطاء
        </button>
      </div>

      <div className="errors-grid">
        {errorLogs.map((item) => (
          <div key={item.id} className="error-card">
            <span className="course-badge">{item.course}</span>
            <h4 className="question-text">{item.question}</h4>
            <div className="answers-comparison">
              <div className="answer-box wrong">
                <span className="label">إجابتك السابقة:</span>
                <p>{item.myAnswer}</p>
              </div>
              <div className="answer-box correct">
                <span className="label">الإجابة الصحيحة:</span>
                <p>{item.correctAnswer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WrongAnswers;