import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import axios from 'axios';
import magnifier from '../../assets/search.svg'


const url = 'http://localhost:3000/user/list/'


export default function CitySelect(query) {
    const {state, dispatch} = useContext(AppContext)
    const [data, setData] = useState([])
    const [value, setValue] = useState("")
    const [midwifeList, setMidwifeList] = useState([])
 


 const getUsersData = async () => {
  return await axios
  .post('http://localhost:3000/user/list/')
  // .post('/user/list', {city:query})
  .then((response) => setData(response.data))
  .catch((err) => console.log(err))
 }
console.log('data is',data)

useEffect(() => {
  getUsersData()
 }, [])
 const handleSearch = async (e) => {

 e.preventDefault();
  return await axios
 .post('/user/list', {city:query})
 .then((response) => {
  setMidwifeList(response.data)
  setData("")
})
  .catch((error) => console.log(error))
   console.log("event is", e)
}

  return (
    <div>
        <form className='flex flex-row justify-center items-center pr-[35px] pb-[40px] mt-[50px]'
                        onSubmit = {handleSearch}>
                                 
                                      <input type="text" 
                                      className="w-[312px] h-[68px] outline-none placeholder-lightBlue text-center" 
                                      placeholder="Find your midwife"
                                      onChange={(e) => setValue(e.target.value)} 

                                      />
                                        <button type="submit" 
                                        className='ml-[-40px] mb-[30px]'
                                        >
                                        <img className="cursor-pointer inline-block absolute object-cover" src={magnifier} alt='magnifier'/>
                                        </button>
        </form>
        {/* <ul>
                                            {data.lenght === 0 ? (
                                              <li>
                                                No Data Found
                                              </li>
                                            )
                                            :
                                            if data.type===0 => (data.filter((item, index) => (
                                              <li><CardMidwife /></li>
                                            )))}
                                          </ul> */}
    </div>
  )
}
