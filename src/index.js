import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBuyerlogin, { AppLogin, AppRegister } from './components/buyerslogin';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppSellerlogin from './components/sellersLogin';
import AppSellersDashboard from './components/sellersDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="778370164384-ovs4sr8mfp7agubsqttc6cogu74l8ikv.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/buyerlogin' element={<AppBuyerlogin/>}/>
        <Route path='/buyerlogin/signin' element={<AppLogin/>}/>
        <Route path='/buyerlogin/register' element={<AppRegister/>}/>
        <Route path='/sellerlogin' element={<AppSellerlogin/>}/>
        <Route path='/sellerdashboard' element={<AppSellersDashboard/>}/>
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
