import React, { useState } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from './xy.js';
// import Grid from './Grid.js';
import Bar from './Bar.js';
import Button from '@mui/material/Button';
// import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function BarGraph() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [data] = useState([
    { name: 'Sun', value: 100 },
    { name: 'Mon', value: 50 },
    { name: 'Tue', value: 500 },
    { name: 'Wed', value: 300 },
    { name: 'Thu', value: 200 },
    { name: 'Fri', value: 20 },
  ]);


  const parentWidth = 400;
  const margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 40,
  };
  const ticks = 6;
  // const t = transition().duration(1000);

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

<div>
      <Button onClick={handleOpen}  style={{color: "green", background: "slate"}}>New Sales Invoices</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Download Invoices
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Download the invoice
          </Typography> */}
        </Box>
      </Modal>
    </div>

  
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
              // t,
            }}
          />
        </g>
      </svg>
    </div>
  );
}

export default BarGraph;

// render(<BarGraph />, document.getElementById('root'));
