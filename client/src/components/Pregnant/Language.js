import React from 'react'
import { TextField, Button, Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, alignProperty, TextareaAutosize }  from '@mui/material'

export default function Language() {
  return (
    <div>
        <Box sx={{ display: 'flex' }}>
              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel className='flex flex-wrap flex-row' component="legend">Language</FormLabel>
              <FormGroup row sx={{ with: 3, display: 'flex', flexDirection:'column', flexWrap:'wrap'}}>
                <FormControlLabel
                  control={
                    <Checkbox  name="january" />
                  }
                  label="German"
                />
                <FormControlLabel
                  control={
                    <Checkbox name="february" />
                  }
                  label="English"
                />
                <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Turkish"
                />
                <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Spanish"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="May"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="French"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Greek"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Arabic"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Finnish"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Italian"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Polish"
                />
                <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="Chinese"
                />
                </FormGroup>
              </FormControl>
              </Box>
    </div>
  )
}
