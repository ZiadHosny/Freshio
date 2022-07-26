import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Account from './pages/auth/Account';
import { useState } from 'react';

function App() {
  const[isShowLogin , setIsShowLogin]=useState(false);
  const[isShowSignup , setisShowSignup]=useState(false);
  const handleLoginClick=()=>{
    setIsShowLogin((isShowLogin)=>!isShowLogin)
  };

  const switchSign =()=> {
    setisShowSignup((isShowSignup)=>!isShowSignup)
    setIsShowLogin((isShowLogin)=>!isShowLogin)

  }
  const close =()=>{
    setIsShowLogin(false)
    setisShowSignup(false)
    
  }

  return (
    <>
      <Navbar handleLoginClick={handleLoginClick} />
      <Login close={close} switchSign={switchSign} isShowLogin={isShowLogin}/>
      <Signup close={close} switchSign={switchSign} isShowSignup={isShowSignup}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
