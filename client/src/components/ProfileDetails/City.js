import React, { useState } from 'react'
import { TextField, Select,MenuItem, InputLabel, Button, Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, alignProperty, TextareaAutosize }  from '@mui/material'

const city = [
  'Berlin',
  'Hamburg',
  'München',
  'Köln',
  'Frankfurt',
  'Essen',
  'Dortmund',
  'Stuttgart',
  'Düsseldorf',
  'Bremen',
  'Hannover',
  'Duisburg',
  'Nürnberg',
  'Leipzig',
  'Dresden'

];

export default function Language() {

  const [selectedCity, setSelectedCity] = useState()

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };


  return (
    <div>
      <div>
      <FormControl sx={{ m: 1, width: 200 }}>
      <InputLabel id="demo-multiple-name-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCity}
              label="City"
                    onChange={handleChange}>
                    <MenuItem value={'Berlin'}>Berlin</MenuItem>
                    <MenuItem value={'Hamburg'}>Hamburg</MenuItem>
                    <MenuItem value={'München'}>München</MenuItem>
                    <MenuItem value={'Köln'}>Köln</MenuItem>
                    <MenuItem value={'Frankfurt am Main'}>Frankfurt am Main</MenuItem>
                    <MenuItem value={'Stuttgart'}>Stuttgart</MenuItem>
                    <MenuItem value={'Düsseldorf'}>Düsseldorf</MenuItem>
                    <MenuItem value={'Leipzig'}>Leipzig</MenuItem>
                    <MenuItem value={'München'}>München</MenuItem>
                    <MenuItem value={'München'}>München</MenuItem>
                    <MenuItem value={'Bremen'}>Essen</MenuItem>
                    <MenuItem value={'Dresden'}>Dresden</MenuItem>
                    <MenuItem value={'Hannover'}>Hannover</MenuItem>
                    <MenuItem value={'Duisburg'}>Duisburg</MenuItem>
              </Select>
        </FormControl>
      </div>
    </div>
  )
}

