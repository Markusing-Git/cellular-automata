import React from 'react';
import PropTypes from 'prop-types';
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

Cell.propTypes = {
  row: PropTypes.number,
  col: PropTypes.number,
  isAlive: PropTypes.bool,
};

Cell.defaultProps = {
  isAlive: false,
};

export default Cell;
