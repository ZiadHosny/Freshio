import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';
import Contact from './pages/contact';
import FavoritesList from './pages/FavoritesList';
import CartList from './pages/CartList'; 
import Chicken from './pages/chicken';

function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowSignup, setisShowSignup] = useState(false);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    setisShowSignup(false);
  };

  const handleSignUp = () => {
    setisShowSignup((isShowSignup) => !isShowSignup);
    setIsShowLogin(false);
  };

  const switchSign = () => {
    setisShowSignup((isShowSignup) => !isShowSignup);
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  const close = () => {
    setIsShowLogin(false);
    setisShowSignup(false);
  };

  return (
    <AuthContextProvider>
      <Navbar
        handleLoginClick={handleLoginClick}
        handleSignUpClick={handleSignUp}
      />
      <Login close={close} switchSign={switchSign} isShowLogin={isShowLogin} />
      <Signup
        close={close}
        switchSign={switchSign}
        isShowSignup={isShowSignup}
      />
      <Routes>
        <Route path="/freshio" element={<Home />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="chicken" element={<Chicken />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="favoritesList" element={<FavoritesList />} />
        <Route path="cartList" element={<CartList />} />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
