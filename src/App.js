import React from "react";
import SignUp from "./userComponents/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./userComponents/NavBar";
import SignIn from "./userComponents/SignIn";
import ForgotPassword from "./userComponents/ForgotPassword";
import ResetPassword from "./userComponents/ResetPassword";
import ActivatePage from "./userComponents/ActivatePage";
import ShortUrl from "./urlComponents/ShortUrl";
import DailyStats from "./urlComponents/ShortUrlDay";
import MonthlyStats from "./urlComponents/ShortUrlMonth";
import UrlList from "./urlComponents/CreatedUrl";
import Dashbaord from "./userComponents/Dashboard";


function App() {
  return <div>

    <Navbar/>
    <BrowserRouter>

<div id="wrapper">
     
    
     <Dashbaord/>
     
      <div className="main-div">
    <Routes>
    <Route path="/url/sign-up"  element={<SignUp/>}/>
    <Route path="/url/sign-in"  element={<SignIn/>}/>
    <Route path="/url/forget-password"  element={<ForgotPassword/>}/>
    <Route path="/url/reset-password"  element={<ResetPassword/>}/>
    <Route path="/url/account-activate"  element={<ActivatePage/>}/>
    <Route path="/url/short-url"  element={<ShortUrl/>}/>
    <Route path="/url/day"  element={<DailyStats/>}/>
    <Route path="/url/monthly"  element={<MonthlyStats/>}/>
    <Route path="/created-url-list"  element={<UrlList/>}/>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
    </div>
}

export default App;
