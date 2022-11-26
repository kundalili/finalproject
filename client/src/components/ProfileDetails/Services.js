import React, { useState } from 'react'
import { Select, MenuItem, OutlinedInput,FormControl, InputLabel, Checkbox, ListItemText }  from '@mui/material'


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function Services(props) {
 


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    props.setSelectedservice(typeof value === 'string' ? value.split(',') : value,)
  }
  
  return (
    <div>
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Services</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={props.selectedservices}
        onChange={handleChange}
        input={<OutlinedInput label="Services" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {props.services.map((service) => (
          <MenuItem
            key={service}
            value={service}
          >
            <Checkbox checked={props.selectedservice.indexOf(service) > -1} />
              <ListItemText primary={service} />
          
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);
}
