import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ModalContextProvider } from './context/ModalContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';
import ProdectedRoute from './components/ProdectedRoute';
import Home from './pages/Home';
import Contact from './pages/contact';
import FavoritesList from './pages/FavoritesList';
import CartList from './pages/CartList'; 
import Chicken from './pages/chicken';

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <Navbar />
        <Modal />
      </ModalContextProvider>
      <Routes>
        <Route path="/freshio" element={<Home />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="chicken" element={<Chicken />} />
        <Route path="contact" element={<Contact />} />
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
