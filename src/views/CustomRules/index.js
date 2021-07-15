import React from 'react';
import PropTypes from 'prop-types';
import './CustomRules.css';
import Rule from './Rule';

const CustomRules = ({ rules, setRules }) => {
  const updateRuleChange = (index, state) => {
    const updatedRules = [...rules];
    updatedRules[index] = state;
    setRules(updatedRules);
  };
  return (
    <div className="CustomRulesContainer">
      <div className="CustomRulesPanel">
        <div className="Heading">Customize your rules</div>
        <div className="RulesWrapper">
          {rules.map((rule, index) => (
            <Rule index={index} onRuleChange={updateRuleChange} />
          ))}
        </div>
      </div>
    </div>
  );
};

CustomRules.propTypes = {
  rules: PropTypes.array,
  setRules: PropTypes.func,
};

export default CustomRules;
