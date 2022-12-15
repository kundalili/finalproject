import React from 'react'
import Header from '../NavigationBar/Header'
import { useState, useContext } from 'react';
import { AppContext } from '../Context'
import CardPregnant from './CardPregnant';
import CitySelect from './../Selections/CitySelect'
import ButtonPregnant from '../Buttons/ButtonPregnant';
import PregnantProfile from './PregnantProfile'

export default function InformationForPregnant(props) {

  const {state, dispatch} = useContext(AppContext)
  const [data, setData] = useState({...state.user})

  const [editMode, setEditMode] = useState(false)

  console.log('user is', state.user)

  function handleSave(edited, data){
    console.log("data from profile", edited, data)
    setEditMode(false)
    
  }

  return (
          <div>
            <Header />
                <div className='flex flex-col justify-center items-center bg-softBlue'>
                      <div className='flex justify-center items-center p-[30px]'>
                            <img className='w-[150px] h-[150px] rounded-full object-cover' src={'https://res.cloudinary.com/dn2tg1qut/image/upload/v1670253170/' + state.user.photo} alt=''></img>
                            <h2 className='text-[2rem] p-[10px] text-center font-bold text-vividBlue'>Welcome {data.name}!</h2>
                      </div>
                      <div className='flex flex-col'>
                            {editMode
                                ?<PregnantProfile cb={handleSave}/>
                                :<div>                          
                                    <CardPregnant/>
                                    <CitySelect />
                                    <ButtonPregnant cb={(e)=>setEditMode(e)}/>
                                </div>
                            }
                        </div>


                  </div>
          </div>
      )
}
