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
import Profile from './components/Profile';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
            
            
            <BrowserRouter>
                    <Routes element={<App />}>
                        <Route>
                            <Route path='/' element={<App />} />
                        </Route>
                        <Route>
                            <Route element={<LoginLayout />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Registration />} />
                        </Route>
                        <Route element={<UserLayout />}>
                            <Route path='/user' element={< Profile/>} />
                        </Route>
                        <Route path='/midwifes' element={<InformationForMidwifes />} />
                        <Route>
                            <Route path='/mothers' element={<InformationForUsers />} />
                        </Route>
                        <Route>
                            <Route path='/user' element={<Profile />} />
                        </Route>
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
