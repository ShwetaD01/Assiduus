import React, { useEffect, useRef } from 'react';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

const gridlines = ({ yScale, width, ticks }) => axisLeft(yScale)
  .ticks(ticks)
  .tickSize(-width)
  .tickFormat('');

function Grid(props) {
  const { t } = props;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    select(node).call(gridlines(props));
  }, [props]);

  useEffect(() => {
    const node = ref.current;
    select('.grid-group').transition(t).call(gridlines(props));
  }, [props, t]);

  return (
    <g ref={ref} className="grid-group" />
  );
}

export default Grid;
