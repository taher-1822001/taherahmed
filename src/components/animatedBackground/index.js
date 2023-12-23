import React from 'react';
import '../../../src/index.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      {[...Array(50)].map((_, index) => (
        <div key={index} className="particle"></div>
      ))}
    </div>
  );
}

export default AnimatedBackground;
