import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import Home from './pages/Home';

import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Account from './pages/auth/Account';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/signup" element={<Signup />} />
        <Route path="auth/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
