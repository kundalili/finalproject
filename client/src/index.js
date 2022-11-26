import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import MidwifeProfile from './components/Midwife/MidwifeProfile'
import App from './App';
import InformationForMidwifes from './components/Midwife/InformationForMidwifes'
import InformationForPregnant from './components/Pregnant/InformationForPregnant';
import DashboardMidwife from './components/Midwife/DashboardMidwife';
import ContextProvider from './components/Context';

import PregnantProfile from './components/Pregnant/PregnantProfile';
import RegistrationMidwife from './components/Registration/RegistrationMidwife';
import RegistrationPregnant from './components/Registration/RegistrationPregnant';
import LoginMidwife from './components/Login/LoginMidwife'
import LoginPregnant from './components/Login/LoginPregnant'



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
                            <Route path='/loginmid' element={<LoginMidwife />} />
                            <Route path='/loginpreg' element={<LoginPregnant />} />
                            <Route path='/registermid' element={<RegistrationMidwife />} />
                            <Route path='/registerpreg' element={<RegistrationPregnant />} />
                        </Route>
                        <Route element={<UserLayout />}>
                            <Route path='/profilemid' element={< MidwifeProfile/>} />
                            <Route path='/profilepreg' element={< PregnantProfile/>} />
                        </Route>
                        <Route path='/infomid' element={<InformationForMidwifes />} />
                        <Route>
                            <Route path='/infopreg' element={<InformationForPregnant />} />
                        </Route>
                        <Route>
                            <Route path='/message' element={<Messages />} />
                        </Route>

                    </Routes>
            </BrowserRouter>
            </ContextProvider>   
)
