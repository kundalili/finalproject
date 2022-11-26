import React from 'react'
import Header from '../Header'


export default function InformationForMidwifes() {
  return (
    <div>
      <Header />
      <div>
        <h2 className='text-[2rem] p-[10px] text-center'>How does INA work?</h2>
        <ol className='text-[1rem] p-[10px] bg-yellow-100'>
              <li>1. Enter your area and availabilities</li>
              <br></br>
              <li>2. State the postal codes in which you are active and the number of women you can care for each month. You will only receive requests that are in your desired area and for which you have capacity based on the estimated due date.</li>
              <br></br>
              <li>3. Accept or deny requests</li>
              <br></br>
              <li>4. The searching woman can send a maximum of five requests at a time and fills out an online form with each request. This way, you will receive all the information you need, in order to decide whether you can offer her care or not.</li>
              <br></br>
              <li>5. All requests at a glance</li>
              <br></br>
              <li>6. Open and already processed requests are displayed with the appropriate status. This way you can keep track.</li>
        </ol>
        </div>
    </div>
  )
}
