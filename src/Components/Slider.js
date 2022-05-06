import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSliderSteps(props) {
  const { state, setState } = props;

  function valuetext(state) {
    return `${state}`;
  }
  const handleChange = (e) => {
    setState(e.target.value);
  };

  console.log(state);
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        value={state}
        onChange={handleChange}
        getAriaValueText={valuetext}
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
