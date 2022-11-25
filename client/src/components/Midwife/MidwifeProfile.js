import React from 'react'
import { AppContext } from '../Context'
import { useState, useContext } from 'react';
import axios from 'axios';
import { TextField, Button, Box, FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText, Checkbox, alignProperty, TextareaAutosize }  from '@mui/material'
import Language from '../Pregnant/Language';
import EditIcon from '@mui/icons-material/Edit'
import EditProfile from './EditProfile';
import Select from 'react-select'


export default function Profile() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const {state, dispatch} = useContext(AppContext)

  const [data, setData] = useState({...state.user})
  console.log(data)

  const handleSave = async () => {

  const formdata = new FormData()
    

    Object.entries(data).forEach(item => formdata.set(item[0], item[1]))

    formdata.set('_id', data._id)
    formdata.set('username', data.username)
    formdata.set('email', data.email)
    formdata.set('city', data.city)
    
    const config = {
        Headers: {'content-type': 'multipart/form-data'}
    } 
    
    const response = await axios.patch('/user/profile', formdata, config)
    console.log("🚀 response", response)

    if (response.data.success) {
        dispatch({
            type: 'login',
            payload: {...response.data.user}
        })
    } else {
        if (response.data.errorId === 1) {
            alert('email and username are mandatory')
        }
    }




  }   
  return (
      <>        
      <div className='text-[2rem]  text-center'>MIDWIFE PAGE</div>
     <div className="dropdown bg-red-300">
    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
    data-mdb-toggle="dropdown" aria-expanded="false">
    Checkbox dropdown
    </button>
    {/* <Multiselect
  options={1}
  displayValue="key"
  showCheckbox={true}
/> */}
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
        <a className="dropdown-item" href='./'>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="Checkme1" />
                    <label className="form-check-label" for="Checkme1">Check me</label>
                </div>
            </a>
        </li>
  
    </ul> 
</div>
      {/* //Tailwind downdrop checkpox MENU
      <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button'>Availability<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
    <div id="dropdownSearch" className="hidden z-10 w-60 bg-white rounded shadow dark:bg-gray-700">
    <div className="p-3">
      <label for="input-group-search" className="sr-only">Search</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="input-group-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user"/>
      </div>
    </div>
    <ul className="overflow-y-auto px-3 pb-3 h-48 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-11" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-11" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie Green</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <input checked id="checkbox-item-12" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="checkbox-item-12" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Jese Leos</label>
          </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-13" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-13" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael Gough</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-14" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-14" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Robert Wall</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-15" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-15" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Joseph Mcfall</label>
        </div>
      </li>
      <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-16" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-16" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Leslie Livingston</label>
        </div>
      </li>
            <li>
        <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
          <input id="checkbox-item-17" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
          <label for="checkbox-item-17" className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300">Roberta Casas</label>
        </div>
      </li>
    </ul>
    </div> */}
          <div className='flex w-full justify-center items-center gap-[20px] flex-col mt-[30px]'>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.username} 
                  onChange={e => setData({...data, username: e.target.value})} 
                  id="outlined-basic"  label="Username" variant="standard" />
                  <EditIcon className='mt-3'/>
              </div>
              <div className='flex justify-center items-center'>
                  <TextField lassName='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.email} 
                  onChange={e => setData({...data, email: e.target.value})}
                  id="outlined-basic" label="Email" variant="standard" />
                  <EditIcon className='mt-3'/>
              </div>
              <div className='flex justify-center items-center'>
                  <TextField className='border-2 border-slate-500 p-[5px] w-[200px] h-[40px]'
                  placeholder='' value={data.password} 
                  onChange={e => setData({...data, password: e.target.value})} 
                  id="outlined-basic" label="Password" variant="standard" />
                  <EditIcon className='mt-3'/>
              </div>
              <div className='flex justify-center items-center'>
                  <TextField id="outlined-basic" label="City" variant="outlined" value={data.city} 
                  onChange={e => setData({...data, city: e.target.value})}/>
                  <EditIcon className='mt-3'/>
              </div>
              <div className='flex justify-center items-center'>
                  <TextField id="outlined-basic" label="Midwife since" variant="outlined" />
                  <EditIcon className='mt-3'/>
              </div>
             
               <div className='flex justify-center items-center'>

                    <label className='cursor-pointer'>
                        <input type='file' className='hidden' placeholder='photo'/>
                    </label>
                    {/* <img className='w-[300px] h-[300px] rounded-full object-cover' 
                alt=''/> */}
                  <EditIcon className='mt-3'/>
                </div>
              <div>About me</div>
              <div className='flex justify-center items-center'>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={10}
                placeholder="Tell me more about you..."
                style={{ width: 350 }}
              />
              <EditIcon className='mt-3'/>
                </div>
              {/* <TextField id="outlined-basic" label="Password" variant="outlined" /> */}
              {/* <Language /> */}
              {/* <Box sx={{ display: 'flex' }}>
              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <FormLabel className='flex flex-wrap flex-row' component="legend">Availability</FormLabel>
              <FormGroup row sx={{ with: 3, display: 'flex', flexDirection:'column', flexWrap:'wrap'}}>
                <FormControlLabel
                  control={
                    <Checkbox  name="january" />
                  }
                  label="January"
                />
                <FormControlLabel
                  control={
                    <Checkbox name="february" />
                  }
                  label="February"
                />
                <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="March"
                />
                <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="April"
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
                  label="June"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="July"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="August"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="September"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="October"
                />
                  <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="November"
                />
                <FormControlLabel
                  control={
                    <Checkbox  name="" />
                  }
                  label="December"
                />
                </FormGroup>
              </FormControl>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                  <FormLabel className='flex flex-wrap flex-row' component="legend">Services</FormLabel>
                    <FormGroup row sx={{ with: 3, display: 'flex', flexDirection: 'column'}} >

                      <FormControlLabel
                        control={
                          <Checkbox name="Prenatal examinations" />
                        }
                        label="Prenatal examinations"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox  name="Postpartum care" />
                        }
                        label="Postpartum care"
                      />
                        <FormControlLabel
                        control={
                          <Checkbox  name="Breastfeeding- and nutrition-advice" />
                        }
                        label="Breastfeeding- and nutrition-advicey"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox  name="" />
                        }
                        label="Attending midwife"
                      />
                        <FormControlLabel
                        control={
                          <Checkbox  name="" />
                        }
                        label="Home birth"
                      />   
                  </FormGroup>
                </FormControl>
            </Box> */}
            <Button variant="outlined">Save</Button>
            {/* <EditProfile /> */}
          </div>
        </>
  )
}
