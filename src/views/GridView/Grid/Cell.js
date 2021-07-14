import React from 'react';
import './Grid.css';

const Cell = ({ row, col, isAlive }) => (
  <div
    id={`Cell-${row}-${col}`}
    className="Cell"
    style={isAlive ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}
  />
);

export default Cell;
