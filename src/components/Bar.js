import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
// import { transition } from 'd3-transition';

function Bar(props) {
  const { xScale, yScale, data, height, t } = props;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    
    const barTransition = () => {
      select(node)
        .selectAll('.bar')
        .data(data, d => d.name)
        // .transition(t)
        .attr('y', d => yScale(d.value))
        .attr('height', d => height - yScale(d.value));
    };

    const initialData = data.map(obj => ({
      name: obj.name,
      value: 0
    }));

    const bar = select(node)
      .selectAll('.bar')
      .data(initialData, d => d.name);

    bar
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.name))
      .attr('y', height)
      .attr('width', xScale.bandwidth());

    barTransition();
  }, [xScale, yScale, data, height, t]);

  return (
    <g className="bar-group" ref={ref} />
  );
}

export default Bar;
