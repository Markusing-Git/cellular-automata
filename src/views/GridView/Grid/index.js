import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
import Cell from './Cell';

const ROWS = 90;
const COLS = 176;

const Grid = ({ rules }) => {
  const [grid, setGrid] = useState([]);
  const [tab, setTab] = useState(1);

  const createCell = (col, row, isAlive) => ({
    col,
    row,
    isAlive,
  });

  // based on the rules, think binary
  const getParents = (col, row, currCells) => {
    let parents = 7;
    if ((col) >= 1 && col < grid[row].length - 1) {
      if (currCells[row - 1][col - 1].isAlive === true) {
        parents -= 4;
      }
      if (currCells[row - 1][col].isAlive === true) {
        parents -= 2;
      }
      if (currCells[row - 1][col + 1].isAlive === true) {
        parents -= 1;
      }
    }
    return parents;
  };

  const reproduce = (col, row, currCells) => {
    const parents = getParents(col, row, currCells);
    return rules[parents];
  };

  // set isGenerate false if initatiing or clearing
  const generateCells = (isGenerate) => {
    const cells = [];
    for (let row = 0; row < ROWS; row++) {
      const currentRow = [];
      for (let col = 0; col < COLS; col++) {
        // create static grid with one starting point
        if (tab === 1 && row === 0 && col === COLS / 2) {
          currentRow.push(createCell(col, row, true));
        } else if (tab === 2 && row === 0) {
          // create wolfram classes with random starting points.
          currentRow.push(createCell(col, row, Math.random() < 0.5));
        } else if (isGenerate && row !== 0 && reproduce(col, row, cells)) {
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
    setGrid(generateCells(false));
  }, [tab]);

  const handleGenereateClick = () => {
    setGrid(generateCells(true));
  };

  const handleClearClick = () => {
    setGrid(generateCells(false));
  };

  const handleTabClick = (tabIdx) => {
    setTab(tabIdx);
  };

  return (
    <>
      <div
        className="Tab"
        onClick={() => handleTabClick(1)}
        style={tab !== 1 ? { zIndex: '0' } : { zIndex: '1' }}
      >
        Static automaton
      </div>
      <div
        className="Tab"
        onClick={() => handleTabClick(2)}
        style={tab !== 2 ? { zIndex: '0' } : { zIndex: '1' }}
      >
        Wolfram classes
      </div>
      <div className="GridWrapper">
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
      <div className="ButtonContainer">
        <button
          type="button"
          className="GridButton ClearButton"
          onClick={() => handleClearClick()}
        >
          Clear
        </button>
        <button
          type="button"
          className="GridButton GenerateButton"
          onClick={() => handleGenereateClick()}
        >
          Generate!
        </button>
      </div>
    </>
  );
};

Grid.propTypes = {
  rules: PropTypes.array,
};

export default Grid;
