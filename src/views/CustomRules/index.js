import React from 'react';
import './CustomRules.css';
import Rule from './Rule';

const CustomRules = ({ rules, setRules }) => (
  <div className="CustomRulesContainer">
    <div className="CustomRulesPanel">
      <div className="Heading">Customize your own rules</div>
      <div className="RulesWrapper">
        {Object.keys(rules).map((key) => (
          <Rule pattern={key} setRules={setRules} />
        ))}
      </div>
    </div>
  </div>
);

export default CustomRules;
