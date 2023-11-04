import React from 'react';
import Axis from './axis';

const XYAxis = ({ xScale, yScale, height, ticks, t }) => {
  const xSettings = {
    scale: xScale,
    orient: 'bottom',
    transform: `translate(0, ${height})`,
    t
  };
  const ySettings = {
    scale: yScale,
    orient: 'left',
    transform: 'translate(0, 0)',
    ticks,
    t
  };

  // The Axis components have been converted to functional components using React Hooks.
//   useEffect(() => {
//     if (xSettings.orient === 'bottom') {
//       const axis = axisBottom(xSettings.scale);
//       select('.bottom.axis').call(axis);
//     }
//     if (ySettings.orient === 'left') {
//       const axis = axisLeft(ySettings.scale).ticks(ySettings.ticks);
//       select('.left.axis').transition(ySettings.t).call(axis);
//     }
//   }, [xSettings, ySettings]);

  return (
    <g className="axis-group">
      <Axis {...xSettings} />
      <Axis {...ySettings} />
    </g>
  );
};

export default XYAxis;
