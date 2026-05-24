// src/components/common/Loader/ButtonLoader.tsx
import React from 'react';
import './ButtonLoader.css';

interface ButtonLoaderProps {
  text: string;
  loading: boolean;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ text, loading }) => {
  return (
    <div className="button-loader">
      {loading ? (
        <>
          <span className="spinner"></span>
          <span>Loading...</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
};

export default ButtonLoader;