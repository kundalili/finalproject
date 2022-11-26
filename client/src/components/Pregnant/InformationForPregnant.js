import React from 'react'
import Header from '../Header'



export default function InformationForPregnant() {
  return (
    <div>
    <Header />
    <div>
      <h1 className='text-[2rem] p-[10px] text-center'>How does INA work?</h1>
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
      </div>
    </div>
      )
}