import React from 'react';

const Wallet = () => {
  return (
    <div style={{ padding: '100px 20px', color: '#fff', textAlign: 'center' }}>
      <h2><i className="bi bi-wallet2"></i> محفظتي الرقمية</h2>
      <div style={{ background: '#0f172a', padding: '30px', borderRadius: '16px', maxWidth: '400px', margin: '20px auto' }}>
        <h4>الرصيد الحالي: <span style={{ color: '#10b981' }}>0.00 ج.م</span></h4>
        <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>يمكنك الشحن عبر فودافون كاش أو انستا باي أو فوري.</p>
      </div>
    </div>
  );
};

export default Wallet;