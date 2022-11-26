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


const services = [
  'Prenatal examinations',
  'Postpartum care',
  'Breastfeeding- and nutrition-advicey',
  'Attending midwife',
  'Trauma processing',
  'Prenatal acupuncture',
  'Risk support',
  'Miscarriage',
  'Scream- and sleep-counseling'
];

export default function Services() {

  const [selectedservice, setSelectedservice] = useState([]);
  const [selected, setSelected] = useState()

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedservice(typeof value === 'string' ? value.split(',') : value,)
  }
  
  return (
    <div>
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Services</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={selectedservice}
        onChange={handleChange}
        input={<OutlinedInput label="Services" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {services.map((service) => (
          <MenuItem
            key={service}
            value={service}
          >
            <Checkbox checked={selectedservice.indexOf(service) > -1} />
              <ListItemText primary={service} />
          
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);
}
