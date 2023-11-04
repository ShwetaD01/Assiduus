import React, { useState } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from './BarGraph/xy.js';
// import Grid from './Grid.js';
import Bar from './BarGraph/Bar.js';
// import { transition } from 'd3-transition';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


function HistroGraph() {
  const [data, setData] = useState([
    { name: 'Sun', value: 100 },
    { name: 'Mon', value: 50 },
    { name: 'Tue', value: 500 },
    { name: 'Wed', value: 300 },
    { name: 'Thu', value: 200 },
    { name: 'Fri', value: 20 },
  ]);

  const randomizeData = (e) => {
    e.preventDefault();
    const randomizedData = data.map(obj => ({
      name: obj.name,
      value: Math.floor(Math.random() * 500 + 1)
    }));
    setData(randomizedData);
  }

  const parentWidth = 500;
  const margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 40,
  };
  const ticks = 6;
//   const t = transition().duration(1000);

  const width = parentWidth - margin.left - margin.right;
  const height = parentWidth * 0.5 - margin.top - margin.bottom;

  const xScale = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, width])
    .padding(0.46);

  const yScale = scaleLinear()
    .domain([0, Math.max(...data.map(d => d.value))])
    .range([height, 0])
    .nice();

  return (
    <div>
    <div className='flex justify-end mr-3'>
    <button onClick={randomizeData} style={{color: "green",border: "green 1px solid", margin: "2px"}}>IN 🟢</button>
    <button onClick={randomizeData}  style={{color: "green",border: "green 1px solid", margin:"2px"}}>Out </button>

    

   
  
    </div>
     
      <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom} fill="green">
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <XYAxis {...{ xScale, yScale, height, ticks }} />
          {/* <Grid {...{ xScale, yScale, width, ticks, t }} /> */}
          <Bar
            {...{
              xScale,
              yScale,
              data,
              height,
            //   t,
            }}
          />
        </g>
      </svg>
    </div>
  );
}

export default HistroGraph;

// render(<BarGraph />, document.getElementById('root'));
