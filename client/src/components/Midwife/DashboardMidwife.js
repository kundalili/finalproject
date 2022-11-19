import React from 'react'
import RequestM from './RequestMidwife'
import MidwifeProfile from './MidwifeProfile'
import Logout from '../Logout'
import RequestMidwife from './RequestMidwife'


export default function DashboardMidwife() {
  return (
    <div>
        <RequestMidwife />
        <MidwifeProfile />
        <Logout />
    </div>
  )
}
