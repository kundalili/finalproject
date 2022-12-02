import React, { useState } from 'react'
import { Select, MenuItem, OutlinedInput,FormControl, InputLabel, Checkbox, ListItemText }  from '@mui/material'

const ITEM_HEIGHT = 148;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const availabilities = [

    'January/2023',
    'February/2023',
    'March/2023',
    'April/2023',
    'May/2023',
    'June/2023',
    'July/2023',
    'August/2023',
    'September/2023',
    'October/2023',
    'November/2022',
    'December/2022'
];

export default function Availability() {

  const [myavailability, setMyavailability] = useState([]);
  const [selected, setSelected] = useState()

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMyavailability(typeof value === 'string' ? value.split(',') : value,
    )
    // console.log("🚀 ~ file: Availability.js:42 ~ handleChange ~ value", value)
  }

  return (
    <div>
      <div>
      <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Availability</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={myavailability}
        onChange={handleChange}
        input={<OutlinedInput label="Language" />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {availabilities.map((availability, idx) => (
          <MenuItem
            key={idx}
            value={availability}
            name={idx}
          >
            <Checkbox checked={myavailability.indexOf(availability) > -1} />
              <ListItemText primary={availability} />
          
          </MenuItem>
        ))}
      </Select>
    </FormControl>

      </div>

    </div>
  )
}
