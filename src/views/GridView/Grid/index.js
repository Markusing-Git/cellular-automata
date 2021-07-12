import React, { useState, useEffect } from 'react';
import './Grid.css';
import Cell from './Cell';

const Grid = () => {
  const [grid, setGrid] = useState([]);

  const createCell = (col, row) => ({
    col,
    row,
    isAlive: false,
  });

  const initGrid = () => {
    const cells = [];
    for (let row = 0; row < 100; row++) {
      const currentRow = [];
      for (let col = 0; col < 150; col++) {
        currentRow.push(createCell(col, row));
      }
      cells.push(currentRow);
    }
    return cells;
  };

  useEffect(() => {
    setGrid(initGrid);
  }, []);

  return (
    <div className="GridContainer">
      {grid.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((cell, cellIdx) => (
            <Cell
              key={cellIdx}
              col={cell.col}
              isAlive={cell.isAlive}
              row={cell.row}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
