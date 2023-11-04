import React, { useEffect, useRef } from "react";
import { select, selectAll } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";
// import { transition } from 'd3-transition';

function Axis(props) {
  const { scale, orient, ticks, transform } = props;
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    let axis;

    if (orient === "bottom") {
      axis = axisBottom(scale);
    }
    if (orient === "left") {
      axis = axisLeft(scale).ticks(ticks);
    }
    
    select(node).call(axis);
  }, [orient, scale, ticks]);

  useEffect(() => {
    // const node = ref.current;
    // const t = transition().duration(1000);

    if (orient === "left") {
      const axis = axisLeft(scale).ticks(ticks); 
      selectAll(`.${orient}`).call(axis);
    }
  }, [orient, scale, ticks]);

  return (
    <g
      ref={ref}
      transform={transform}
      className={`${orient} axis`}
    />
  );
}

export default Axis;
