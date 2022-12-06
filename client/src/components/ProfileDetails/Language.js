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


const languages = [
  'German',
  'English',
  'Turkish',
  'Spanish',
  'Dutch',
  'French',
  'Greek',
  'Arabic',
  'Finnish',
  'Italian',
  'Polish',
  'Chinese'
];

export default function Language({spokenLanguage, setSpokenLanguage}) {



  const handleChangeLanguage = (event) => {
    const {
      target: { value },
    } = event;
    setSpokenLanguage( typeof value === 'string' ? value.split(',') : value,
    )
  }

  
  return (
    <div>
    <FormControl variant="standard" sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Languages</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        multiple
        value={spokenLanguage}
        onChange={handleChangeLanguage}
        label="Language"
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {languages.map((language) => (
          <MenuItem
            key={language}
            value={language}
          >
            <Checkbox checked={spokenLanguage.indexOf(language) > -1} />
              <ListItemText primary={language} />
          
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);
}
