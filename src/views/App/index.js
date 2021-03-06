/* eslint-disable quote-props */
import React, { useState } from 'react';
import './App.css';
import GridView from '../GridView';

const App = () => {
  const [rules, setRules] = useState(
    new Array(8).fill(false),
  );
  return (
    <>
      <div className="Background" />
      <div className="App">
        <GridView rules={rules} setRules={setRules} />
      </div>
    </>
  );
};

export default App;
