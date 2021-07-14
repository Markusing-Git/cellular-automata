import React, { useState } from 'react';
import './App.css';
import GridView from '../GridView';
import CustomRules from '../CustomRules';

const App = () => {
  const [rules, setRules] = useState(
    {
      111: false,
      110: false,
      101: false,
      100: false,
      '011': false,
      '010': false,
      '001': false,
      '000': false,
    },
  );
  return (
    <div className="App">
      <GridView rules={rules} />
      <CustomRules rules={rules} setRules={setRules} />
    </div>
  );
};

export default App;
