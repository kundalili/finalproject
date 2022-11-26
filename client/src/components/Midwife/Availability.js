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
    setMyavailability(      typeof value === 'string' ? value.split(',') : value,
    )
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
        {availabilities.map((availability) => (
          <MenuItem
            key={availability}
            value={availability}
          >
            <Checkbox checked={myavailability.indexOf(availability) > -1} />
              <ListItemText primary={availability} />
          
          </MenuItem>
        ))}
      </Select>
    </FormControl>
      {/* <FormControl sx={{ m: 1, width: 200 }}>

      <InputLabel id="demo-multiple-name-label">City</InputLabel>

            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
                    onChange={handleChange}>
                    <MenuItem value={'January/2023'}>January/2023</MenuItem>
                    <MenuItem value={'February/2023'}>February/2023</MenuItem>
                    <MenuItem value={'March/2023'}>March/2023</MenuItem>
                    <MenuItem value={'April/2023'}>April/2023</MenuItem>
                    <MenuItem value={'May/2023'}>May/2023</MenuItem>
                    <MenuItem value={'June/2023'}>June/2023</MenuItem>
                    <MenuItem value={'July/202'}>July/202</MenuItem>
                    <MenuItem value={'August/2023'}>August/2023</MenuItem>
                    <MenuItem value={'September/2023'}>September/2023</MenuItem>
                    <MenuItem value={'October/2023'}>October/2023</MenuItem>
                    <MenuItem value={'November/2022'}>November/2022</MenuItem>
                    <MenuItem value={'December/2022'}>December/2022</MenuItem>
              
              </Select>
        </FormControl> */}

      </div>

    </div>
  )
}
