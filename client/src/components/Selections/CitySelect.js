import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import axios from 'axios';
import magnifier from '../../assets/search.svg'
import CardMidwifeListed from './../Midwife/CardMidwifeListed';

const url = 'http://localhost:3000/user/list/'


export default function CitySelect(query) {
    const {state, dispatch} = useContext(AppContext)
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const [midwifeList, setMidwifeList] = useState([])
 


 const getUsersData = async () => {
  
    try {

      console.log('value is', value)
      const response = await axios.post('/user/list', {city:value, type:0})

    
      console.log('response=', response.data)

      if (response.data.success) setData(response.data.users)

    } catch(err) {
      console.log(err)
    }
 }

 const handleSearch = async (e) => {

 e.preventDefault();
 getUsersData()
}

  return (
    <div>
            <h3 className='text-vividBlue text-[1.5rem] font-bold pt-[50px] text-center'>Find your midwife easily in your city</h3>
            <form className='flex flex-row justify-center items-center pr-[35px] pb-[40px] mt-[50px]'
                  onSubmit = {handleSearch}>
                                    
                    <input type="text" 
                      className="w-[312px] h-[68px] outline-none placeholder-lightBlue text-center" 
                      placeholder="Type your city"
                      onChange={(e) => setValue(e.target.value)} 
                    />
                      <button type="submit" 
                      className='ml-[-40px] mb-[30px]'
                      >
                      <img className="cursor-pointer inline-block absolute object-cover" src={magnifier} alt='magnifier'/>
                      </button>
            </form>
            <div className='flex flex-col justify-center items-center'>
              <ul>
                {data.length === 0 ? (
                    <li className="text-xl text-vividBlue p-[30px] text-center">
                      No midwife in your city 😔 
                      <br/>
                      Call your insurance and tell them that you can’t find a midwife.
                      <br/>
                      <a href="https://www.unsere-hebammen.de/mitmachen/unterversorgung-melden/" target="_blank" className="text-center text-xl font-bold p-[30px]">Sign this Petition</a>
                    </li>) : 
                    (data.map((item, index) => (
                    <li className='m-[30px]' key={index}><CardMidwifeListed data={item} /></li>
                      )))}
              </ul>
            </div>
      </div>
  )
}
