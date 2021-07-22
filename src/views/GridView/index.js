import React from 'react';
import PropTypes from 'prop-types';
import './GridView.css';
import Grid from './Grid';
import CustomRules from './CustomRules';

const GridView = ({ rules, setRules }) => (
  <div className="GridViewContainer">
    <div className="GridViewWrapper">
      <Grid rules={rules} />
      <CustomRules rules={rules} setRules={setRules} />
    </div>
  </div>
);

GridView.propTypes = {
  rules: PropTypes.array,
  setRules: PropTypes.func,
};

export default GridView;
