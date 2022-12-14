import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import UserLayout from './layouts/UserLayout'
import MidwifeProfile from './components/Midwife/MidwifeProfile'
import DashboardPregnant from './components/Pregnant/DashboardPregnant'
import DashboardMidwife from './components/Midwife/DashboardMidwife'
import App from './App';
import ContextProvider from './components/Context';
import Messages from './components/Message/Messages'
import Posts from './components/Post/Post'
import PregnantProfile from './components/Pregnant/PregnantProfile';
import RegistrationMidwife from './components/Registration/RegistrationMidwife';
import RegistrationPregnant from './components/Registration/RegistrationPregnant';
import LoginSingle from './components/Login/LoginSingle'
import EmailConfirm from './components/EmailConfirm'
import ForgotPass from './components/ForgotPass'
import ChangePass from './components/ChangePass'
import ProtectedRoutes from './components/ProtectedRoutes'
import Registration from './components/Registration/Registration';
import Logout from './components/Logout';

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
                                <Route path='/register' element={<Registration />} />
                                <Route path='/login' element={<LoginSingle />} />
                                <Route path='/loginmid' element={<LoginSingle />} />
                                <Route path='/loginpreg' element={<LoginSingle />} />

                                <Route path='/registermid' element={<RegistrationMidwife />} />
                                <Route path='/registerpreg' element={<RegistrationPregnant />} />
                                <Route path='/emailconfirm/:token' element={<EmailConfirm />} />
                                <Route path='/forgotpassword' element={<ForgotPass />} />
                                <Route path='/changepassword/:token' element={<ChangePass />} />
                            </Route>
                            <Route element={<ProtectedRoutes />}> 
                                <Route element={<UserLayout />}>
                                    <Route path='/logout' element={<Logout />} />
                                    <Route path='/profilemid' element={< MidwifeProfile/>} />
                                    <Route path='/profilepreg' element={< PregnantProfile/>} />
                                    <Route path='/message' element={<Messages />} />
                                    <Route path='/post' element={<Posts />} />
                                    <Route path='/infomid' element={<DashboardMidwife />} />
                                    <Route path='/infopreg' element={<DashboardPregnant />} />
                                </Route>
                            </Route>
                        </Routes>
                </BrowserRouter>
    </ContextProvider>   
)
