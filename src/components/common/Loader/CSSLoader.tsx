// src/components/common/Loader/CSSLoader.tsx
import React from 'react';
import './CSSLoader.css';

const CSSLoader: React.FC = () => {
  return (
    <div className="css-loader-container">
      <div className="css-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loader-text-gradient">Loading Amazing Things...</p>
    </div>
  );
};

export default CSSLoader;