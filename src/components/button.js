import React from 'react';

function CustomButton({ text, onClick, link }) {
  return (
    <a href={link} className="custom-button" onClick={onClick}>
      {text}
    </a>
  );
}

export default CustomButton;
