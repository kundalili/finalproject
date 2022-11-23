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
import InformationForPregnant from './components/Pregnant/InformationForPregnant';
import DashboardMidwife from './components/Midwife/DashboardMidwife';
import Profile from './components/Profile';
import ContextProvider from './components/Context';
import PregnantProfile from './components/Pregnant/PregnantProfile';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
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
                            <Route path='/user' element={< MidwifeProfile/>} />
                        </Route>
                        <Route path='/midwifes' element={<InformationForMidwifes />} />
                        <Route>
                            <Route path='/mothers' element={<InformationForPregnant />} />
                        </Route>
                        <Route>
                            <Route path='/pregnant' element={<PregnantProfile />} />
                        </Route>
                    </Routes>
            </BrowserRouter>
            </ContextProvider>   
)
