import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CustomRules.css';
import Rule from './Rule';

const CustomRules = ({ rules, setRules }) => {
  const [count, setCount] = useState(0);
  const binTab = [128, 64, 32, 16, 8, 4, 2, 1];

  const updateRuleChange = (index, state) => {
    rules[index] = state;
    setRules(rules);
    setCount(getCount());
  };

  const getCount = () => {
    let cnt = 0;
    for (let i = 0; i < rules.length; i++) {
      if (rules[i] === true) {
        cnt += binTab[i];
      }
    }
    return cnt;
  };

  return (
    <div className="CustomRulesContainer">
      <div className="HeadingContainer">
        <div className="Heading">Customize your rule</div>
        <div className="Heading">
          Rule:
          {' '}
          {count}
        </div>
      </div>
      <div className="CustomRulesPanel">
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
