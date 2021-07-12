import React from 'react';
import './Grid.css';

const Cell = ({ row, col, isAlive }) => (
  <div id={`Cell-${row}-${col}`} className="Cell" />
);

export default Cell;
