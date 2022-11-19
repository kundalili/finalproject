import React from 'react'
import Registration from './Registration'

export default function InformationForMidwifes() {
  return (
    <div>
        <ul>
            <li>Enter your area and availabilities</li>
            <li>State the postal codes in which you are active and the number of women you can care for each month. You will only receive requests that are in your desired area and for which you have capacity based on the estimated due date.</li>
            <li>Accept or deny requests</li>
            <li>The searching woman can send a maximum of five requests at a time and fills out an online form with each request. This way, you will receive all the information you need, in order to decide whether you can offer her care or not.</li>
            <li>All requests at a glance</li>
            <li>Open and already processed requests are displayed with the appropriate status. This way you can keep track.</li>
        </ul>
        <Registration />
    </div>
  )
}
