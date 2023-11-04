import React, { useEffect, useRef } from 'react';
import { select, selectAll } from 'd3-selection';
// import { transition } from 'd3-transition';

function Line(props) {
  const { xScale, yScale, data, lineGenerator } = props;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    const initialData = data.map(d => ({
      name: d.name,
      value: 0
    }));

    select(node)
      .append('path')
      .datum(initialData)
      .attr('id', 'line')
      .attr('stroke', 'green')
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('d', lineGenerator);

    updateChart();
  }, [xScale, yScale, data, lineGenerator]);

  useEffect(() => {
    updateChart();
  }, [data, lineGenerator, xScale, yScale]);

  const updateChart = () => {
    // const t = transition().duration(1000);
    const line = select('#line');
    const dot = selectAll('.circle');

    line
      .datum(data)
    //   .transition(t)
      .attr('d', lineGenerator);

    // You can uncomment this section if you want to handle dots as well.
    // dot
    //   .data(data)
    //   .transition(t)
    //   .attr('cx', (d, key) => xScale(key))
    //   .attr('cy', d => yScale(d.count));
  };

  return <g className="line-group" ref={ref} />;
}

export default Line;
