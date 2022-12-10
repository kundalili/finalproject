import React, { useEffect } from 'react'
import Header from '../NavigationBar/Header'
import { Link } from 'react-router-dom'
import magnifier from '../../assets/search.svg'
import { useState, useContext } from 'react';
import mobile from '../../assets/mobile.png'
import { AppContext } from '../Context'
import CardPregnant from './CardPregnant';
import axios from 'axios';
import CardMidwife from '../Midwife/CardMidwife'
import CitySelect from '../Selections/CitySelect';

export default function InformationForPregnant(props) {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})
  console.log('user is', state.user)
  const [midwifeList, setMidwifeList] = useState([])
  
//   useEffect(() => {
//     getUsersData()
//   }, [])

//  const getUsersData = async () => {
//   return await axios
//   .post('/user/list')
//   .then((response) => setData(response.data))
//   .catch((err) => console.log(err))
//  }
// console.log('data is',data)

//  const handleSearch = async (e) => {

//   e.preventDefault();
//   return await axios
//   .post(`/user/list/?q=${value}`)
//   .then((response) => {
//   setMidwifeList(response.data)
//   setData("")
// })
//   .catch((err) => console.log(err))
//    console.log("event is", e)
// }


  return (
    <div className='h-full'>
        <div className='flex flex-col justify-center items-center bg-softBlue h-screen'>
              <div>
              <div className='flex justify-center items-center p-[30px]'>
                    <img className='w-[150px] h-[150px] rounded-full object-cover' src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + state.user.photo} alt=''></img>
                    <h2 className='text-[2rem] p-[10px] text-center font-bold text-vividBlue'>Welcome {data.name}!</h2>
              </div>
            {/* <div>
              <h1 className='text-[2rem] p-[10px] text-center text-vividBlue font-semibold '>How does INA work?</h1>
              <ol className='text-[1rem] p-[10px] bg-yellow-100'>
                    <li>1. Find an available midwife in your area</li>
                    <br></br>
                    <li>2. Contact a midwife who will care for you during pregnancy, labor, and even after childbirth</li>
                    <br></br>
                    <li>3. Send non-binding requests to up to five available midwives of your choice</li>
                    <br></br>
                    <li>4. Receive definite responses and feel well cared for</li>
                    <br></br>
                    <li>5. All requests at a glance</li>
                    <br></br>
                    <li>6. Open and already processed requests are displayed with the appropriate status. This way you can keep track.</li>
              </ol>
              </div> */}
              <div >
                  <div className='flex flex-row'>
                  <CardPregnant/>
                      <div className='flex flex-col justify-center items-center p-[60px]'>
                                  {/* <form className='flex flex-row justify-center items-center pr-[35px] pb-[40px]'>
                                  onSubmit = {handleSearch}
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
                                  </form> */}

                                          {/* <ul>
                                            {data.lenght === 0 ? (
                                              <li>
                                                No Data Found
                                              </li>
                                            )
                                            :
                                            (data.map((item, index) => (
                                              <li><CardMidwife /></li>
                                            )))}
                                          </ul> */}

                        <div className='editprofileBtn flex flex-col'>
                      
                            <Link to='/profilepreg' className='cursor-pointer font-bold'>
                              <button  type="submit"
                                      className='cursor-pointer 
                                      border-2 border-vividBlue 
                                      text-vividBlue 
                                      font-semibold 
                                      hover:border-2
                                      text-center w-[312px] 
                                      h-[68px] 
                                      outline-none 
                                      rounded-full 
                                      hover:text-white
                                      hover:bg-vividBlue 
                                      hover:border-vividBlue'>
                                        Edit Profile
                                  </button>
                                  </Link>
                          </div>
                          <br></br>
                          <div className='messagesBtn'>
                            <Link to='/message' className='cursor-pointer font-bold'>
                              <button  type="submit"
                                        className='cursor-pointer 
                                        border-2 border-vividBlue 
                                        text-vividBlue 
                                        font-semibold 
                                        hover:border-2
                                        text-center w-[312px] 
                                        h-[68px] 
                                        outline-none 
                                        rounded-full 
                                        hover:text-white
                                        hover:bg-vividBlue 
                                        hover:border-vividBlue'>
                                          Messages                
                                </button>
                              </Link>
                          </div>
                          <br></br>
                          <div className='pb-[40px] logoutBtn'>
                            <Link to='/logout' className='cursor-pointer font-bold'>
                                  <button  type="submit"
                                        className='cursor-pointer 
                                        border-2 border-vividBlue 
                                        text-vividBlue 
                                        font-semibold 
                                        hover:border-2
                                        text-center w-[312px] 
                                        h-[68px] 
                                        outline-none 
                                        rounded-full 
                                        hover:text-white
                                        hover:bg-vividBlue 
                                        hover:border-vividBlue'>
                                        Logout                
                                  </button>            
                            </Link>
                          </div>
                          <div className=' blogBtn pb-[40px]'>
                            <Link to='/blog' className='cursor-pointer  font-bold'>
                                  <button  type="submit"
                                        className='cursor-pointer 
                                        border-2 border-vividBlue 
                                        text-vividBlue 
                                        font-semibold 
                                        hover:border-2
                                        text-center w-[312px] 
                                        h-[68px] 
                                        outline-none 
                                        rounded-full 
                                        hover:text-white
                                        hover:bg-vividBlue 
                                        hover:border-vividBlue'>
                                        Blog             
                                  </button>            
                            </Link>
                          </div>
                      </div>
                </div>
                <CitySelect />

              </div>
            </div>
        </div>
    </div>
      )
}