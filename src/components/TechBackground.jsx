import React from 'react';
import './TechBackground.css';

const TechBackground = () => {
  return (
    <div className="tech-bg-container">
      <div className="grid-overlay"></div>
      <div className="glowing-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>
      <div className="code-stream">
        <span>{`const platform = "CODETA";`}</span>
        <span>{`let studentStatus = "LevelUp";`}</span>
        <span>{`function compileFuture() { return 2026; }`}</span>
      </div>
    </div>
  );
};

export default TechBackground;