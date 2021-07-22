/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Rule.css';

const Rule = ({ index, onRuleChange }) => {
  const [selected, setSelected] = useState(false);

  const handleToggleSelected = () => {
    setSelected(!selected);
  };

  const getPattern = () => {
    switch (index) {
      case 0: return ['black', 'black', 'black'];
      case 1: return ['black', 'black', 'white'];
      case 2: return ['black', 'white', 'black'];
      case 3: return ['black', 'white', 'white'];
      case 4: return ['white', 'black', 'black'];
      case 5: return ['white', 'black', 'white'];
      case 6: return ['white', 'white', 'black'];
      case 7: return ['white', 'white', 'white'];
      default: throw Error(`indexing error ${index}`);
    }
  };

  useEffect(() => {
    onRuleChange(index, selected);
  }, [selected]);

  return (
    <div className="Rule">
      <div className="Block" style={{ backgroundColor: getPattern()[0] }} />
      <div className="Block" style={{ backgroundColor: getPattern()[1] }} />
      <div className="Block" style={{ backgroundColor: getPattern()[2] }} />
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

Rule.propTypes = {
  index: PropTypes.number,
  onRuleChange: PropTypes.func,
};

export default Rule;
