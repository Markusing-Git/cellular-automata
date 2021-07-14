/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import './Rule.css';

const Rule = ({ pattern, setRules }) => {
  const [selected, setSelected] = useState(false);

  const handleToggleSelected = () => {
    setSelected(!selected);
  };

  const getPattern = (pos) => {
    if (pattern.charAt(pos) == 1) {
      return 'black';
    }
    return null;
  };

  useEffect(() => {
    setRules((prevState) => ({
      ...prevState,
      [pattern]: selected,
    }));
  }, [selected]);

  return (
    <div className="Rule">
      <div className="Block" style={{ backgroundColor: getPattern(0) }} />
      <div className="Block" style={{ backgroundColor: getPattern(1) }} />
      <div className="Block" style={{ backgroundColor: getPattern(2) }} />
      <div
        className="Block Block-select"
        style={selected ? { backgroundColor: 'black' } : {
          backgroundColor: 'white',
        }}
        onClick={() => handleToggleSelected()}
      />
    </div>
  );
};

export default Rule;
