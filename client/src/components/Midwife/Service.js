import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { AppContext } from '../Context'
import { useState, useContext } from 'react';

export default function Service () {
  const [state, setState] = useState();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { january, february, march, april, may, june, july, august, september, october, november, december } = state;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Services</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={january} onChange={handleChange} name="january" />
            }
            label="January"
          />
          <FormControlLabel
            control={
              <Checkbox checked={february} onChange={handleChange} name="february" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={march} onChange={handleChange} name="" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}