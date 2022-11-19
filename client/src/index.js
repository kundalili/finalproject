import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Registration from './components/Registration';
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import Login from './components/Login'
import MidwifeProfile from './components/Midwife/MidwifeProfile'
import App from './App';
import InformationForMidwifes from './components/Midwife/InformationForMidwifes'
import InformationForUsers from './components/User/InformationForUsers'
import DashboardMidwife from './components/Midwife/DashboardMidwife';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            
            
            <BrowserRouter>
                <Routes element={<App />}>
                    <Route path='/' element={<App />} />
                </Routes>
                <Routes>
                    <Route element={<LoginLayout />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Registration />} />
                    <Route element={<UserLayout />}>
                    <Route path='/posts' element={< DashboardMidwife/>} />
                </Route>
                </Routes>
                <Routes>
                    <Route path='/midwifes' element={<InformationForMidwifes />} />
                </Routes>
                <Routes>
                    <Route path='/mothers' element={<InformationForUsers />} />
                </Routes>

            </BrowserRouter>

    
       
//         <BrowserRouter>
//             <Routes>
//                <Route>
//             </Routes>
//         </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
