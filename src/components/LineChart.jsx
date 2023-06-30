import React from 'react';
import LineChart from './components/LineChart';
import { data, options } from './LineChartData';

const App = () => {
  return (
    <div className="your-div-class">
      {/* Other content */}
      <LineChart data={data} options={options} />
    </div>
  );
};

export default App;
