//
import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;