import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ModalContextProvider } from './context/ModalContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import ProdectedRoute from './components/ProdectedRoute';
import Home from './pages/Home';
import Contact from './pages/Contact';
import FavoritesList from './pages/FavoritesList';
import CartList from './pages/CartList';
import Chicken from './pages/Chicken';
import Account from './pages/auth/Account';
import Keto from './pages/Keto';
import Vegetables from './pages/Vegetables';
import Supplements from './pages/Supplements';
import Snacks from './pages/Snacks';
import Fruit from './pages/Fruit';
import Details from './pages/details';

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Navbar />
        <Modal />
      </ModalContextProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="chicken" element={<Chicken />} />
        <Route path="supplements" element={<Supplements />} />
        <Route path="snacks" element={<Snacks />} />
        <Route path="fruits" element={<Fruit />} />
        <Route path="keto" element={<Keto />} />
        <Route path="vegetables" element={<Vegetables />} />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="details" element={<Details />} >
          <Route path=":category" element={<Details />} >
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
        <Route
          path="favoritesList"
          element={
            <ProdectedRoute>
              <FavoritesList />
            </ProdectedRoute>
          }
        />
        <Route
          path="cartList"
          element={
            <ProdectedRoute>
              <CartList />
            </ProdectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
