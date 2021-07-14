import React from 'react';
import './Grid.css';

const Cell = ({ row, col, isAlive }) => {
  const extraClassName = isAlive ? 'Cell-alive' : '';

  const animation = {
    transition: 'background-color 0.5s ease',
    transitionDelay: `${(row / 50)}s`,
  };

  return (
    <div
      id={`Cell-${row}-${col}`}
      className={`Cell ${extraClassName}`}
      style={animation}
    />
  );
};

export default Cell;
