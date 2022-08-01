import 'bootstrap/dist/css/bootstrap.css';

import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ModalContextProvider } from './context/ModalContext';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ScrollArrow from './components/scrollArrow/ScrollArrow';
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
import LowCarb from './pages/LowCarb';
import SubCategoryContext from './context/SubCategoryContext';
import Meals from './pages/Meals';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <FavoritesProvider>
          <CartContextProvider>
            <Navbar />
          </CartContextProvider>
        </FavoritesProvider>
        <Modal />
      </ModalContextProvider>
      <ScrollArrow />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="chicken" element={<Chicken />} />
        <Route path="supplements" element={<Supplements />} />
        <Route path="snacks" element={<Snacks />} />
        <Route path="fruits" element={<Fruit />} />
        <Route path="keto" element={<Keto />} />
        <Route path="vegetables" element={<Vegetables />} />
        <Route
          path="lowcarb"
          element={
            <SubCategoryContext>
              <LowCarb />
            </SubCategoryContext>
          }
        />
        <Route
          path="meals"
          element={
            <SubCategoryContext>
              <Meals />
            </SubCategoryContext>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route path="account" element={<Account />} />
        <Route path="details" element={<Details />}>
          <Route path=":category" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
        </Route>
        <Route
          path="favoritesList"
          element={
            <ProdectedRoute>
              <FavoritesProvider>
                <FavoritesList />
              </FavoritesProvider>
            </ProdectedRoute>
          }
        />
        <Route
          path="cartList"
          element={
            <ProdectedRoute>
              <CartContextProvider>
                <CartList />
              </CartContextProvider>
            </ProdectedRoute>
          }
        />
      </Routes>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
