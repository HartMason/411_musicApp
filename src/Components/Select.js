import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect(props) {
  const {state, setState} = props

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label="Quality"
          onChange={handleChange}
        >
          <MenuItem value={1}>Low Quality</MenuItem>
          <MenuItem value={2}>Medium Quality</MenuItem>
          <MenuItem value={3}>High Quality</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}