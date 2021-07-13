import React from 'react';
import './CustomRules.css';
import Rule from './Rule';

const CustomRules = () => (
  <div className="CustomRulesContainer">
    <div className="CustomRulesPanel">
      <div className="Heading">Customize your own rules</div>
      <div className="RulesWrapper">
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
        <Rule />
      </div>
    </div>
  </div>
);

export default CustomRules;
