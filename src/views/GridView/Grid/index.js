import React, { useState, useEffect } from 'react';
import './Grid.css';
import Cell from './Cell';

const ROWS = 100;
const COLS = 150;

const Grid = ({ rules }) => {
  const [grid, setGrid] = useState([]);

  const createCell = (col, row, isAlive) => ({
    col,
    row,
    isAlive,
  });

  const getParents = (col, row, currCells) => {
    let parents = '';
    if ((col) >= 1 && col < grid[row].length - 1) {
      if (currCells[row - 1][col - 1].isAlive === true) {
        parents = parents.concat('1');
      } else {
        parents = parents.concat('0');
      }
      if (currCells[row - 1][col].isAlive === true) {
        parents = parents.concat('1');
      } else {
        parents = parents.concat('0');
      }
      if (currCells[row - 1][col + 1].isAlive === true) {
        parents = parents.concat('1');
      } else {
        parents = parents.concat('0');
      }
    }
    return parents;
  };

  const reproduce = (col, row, currCells) => {
    const parents = getParents(col, row, currCells);
    return rules[parents];
  };

  const initGrid = () => {
    const cells = [];
    for (let row = 0; row < ROWS; row++) {
      const currentRow = [];
      for (let col = 0; col < COLS; col++) {
        if (row === 0 && col === COLS / 2) {
          currentRow.push(createCell(col, row, true));
        } else {
          currentRow.push(createCell(col, row, false));
        }
      }
      cells.push(currentRow);
    }
    return cells;
  };

  const generateCells = () => {
    const cells = [];
    for (let row = 0; row < ROWS; row++) {
      const currentRow = [];
      for (let col = 0; col < COLS; col++) {
        if (row === 0 && col === COLS / 2) {
          currentRow.push(createCell(col, row, true));
        } else if (row !== 0 && reproduce(col, row, cells)) {
          currentRow.push(createCell(col, row, true));
        } else {
          currentRow.push(createCell(col, row, false));
        }
      }
      cells.push(currentRow);
    }
    return cells;
  };

  useEffect(() => {
    setGrid(initGrid());
  }, []);

  const handleGenereateClick = () => {
    setGrid(generateCells());
  };

  return (
    <>
      <button onClick={() => handleGenereateClick()} />
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
    </>
  );
};

export default Grid;
