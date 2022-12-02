import React from 'react'
import mother1 from '../assets/header.png'

export default function Body() {
  return (
    <div  >
        {/* <div style={{ backgroundImage:`url(${mother1})`,backgroundRepeat:"no-repeat", backgroundSize:"cover",
    height: '50vh', width: '100vw'}}></div> */}
          <img className='w-full' alt='mother'src={mother1}/>
        
        <h1 className="text-3xl font-bold italic w-[164px] h-[148px] text-white pt-[10px] absolute text-left top-[270px]"> Finding a midwife was never easier.</h1>
    </div>
  )
}
