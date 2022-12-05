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
  const [myService, setMyService] = useState([]);
  // console.log("🚀 myService", myService)



  const handleChangeService = (event) => {
    const {
      target: { value },
    } = event;
   setMyService(typeof value === 'string' ? value.split(',') : value,)
  }
  console.log("🚀 selected Service", setMyService)

  return (
    <div>
    <FormControl variant="standard" sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Services</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={myService}
        onChange={handleChangeService}
       label="Services"
        renderValue={(selectedservice) => selectedservice.join(', ')}
        MenuProps={MenuProps}
      >
        {services.map((services, idx) => (
          <MenuItem
            key={idx}
            value={services}
             name={idx}
          >
            <Checkbox checked={myService.indexOf(services) > -1} />
              <ListItemText primary={services} />
          
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);
}
