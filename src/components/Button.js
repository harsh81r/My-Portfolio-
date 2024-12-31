import React, { useState } from 'react';

const Button = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = () => {
    const newColor = backgroundColor === 'yellow' ? 'black' : 'white';
    setBackgroundColor(newColor);
  };

  return (
    <button onClick={handleButtonClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
      Change Background Color
    </button>
  );
};

export default Button;