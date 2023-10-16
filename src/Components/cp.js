import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  return (
    <div className="color-picker">
      <div className="selected-color-container">
        {selectedColor && (
          <div className="selected-color" style={{ backgroundColor: selectedColor }}>
          </div>
        )}
      </div>
      <div className="button-and-color-list-container">
      {isOpen && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div key={index} className="color-box" onClick={() => handleColorClick(color)} style={{ backgroundColor: color }}></div>
            ))}
          </div>
        )}
        <br />
        <button id="b1" onClick={toggleColorList}>Pick a color</button>
      </div>
    </div>
  );
};

export default ColorPicker;
