import React from 'react';
import './GridView.css';
import Grid from './Grid';

const GridView = ({ rules }) => (
  <div className="GridViewContainer"><Grid rules={rules} /></div>
);

export default GridView;
