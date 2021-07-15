import React from 'react';
import PropTypes from 'prop-types';
import './GridView.css';
import Grid from './Grid';

const GridView = ({ rules }) => (
  <div className="GridViewContainer"><Grid rules={rules} /></div>
);

GridView.propTypes = {
  rules: PropTypes.array,
};

export default GridView;
