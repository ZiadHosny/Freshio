import 'bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ModalContextProvider } from './context/ModalContext';
import SubCategoryContext from './context/SubCategoryContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { CartContextProvider } from './context/CartContext';
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
import LowCarb from './pages/LowCarb';
import Meals from './pages/Meals';
import Vegan from './pages/Vegan';
import Chat from './components/Chat/Chat';
import Search from './pages/Search';
import Meat from './pages/Meat';
import Bakery from './pages/Bakery';
import NotFound from './pages/NotFound';
import { AccountProvider } from './context/AccountContext';
function App() {
  return (
    <AuthContextProvider>
      <ModalContextProvider>
        <CartContextProvider>
          <FavoritesProvider>
            <Navbar />
            <Modal />
            <Chat />
            <ScrollArrow />
            <Routes>
              <Route path="/Freshio" element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="chicken" element={<Chicken />} />
              <Route path="supplements" element={<Supplements />} />
              <Route path="snacks" element={<Snacks />} />
              <Route path="fruit" element={<Fruit />} />
              <Route path="keto" element={<Keto />} />
              <Route path="vegetables" element={<Vegetables />} />
              <Route path="search/:id" element={<Search />} />

              <Route
                path="account"
                element={
                  <AccountProvider>
                    <Account />
                  </AccountProvider>
                }
              />
              <Route
                path="meat"
                element={
                  <SubCategoryContext>
                    <Meat />
                  </SubCategoryContext>
                }
              />
              <Route
                path="bakery"
                element={
                  <SubCategoryContext>
                    <Bakery />
                  </SubCategoryContext>
                }
              />
              <Route
                path="lowcarb"
                element={
                  <SubCategoryContext>
                    <LowCarb />
                  </SubCategoryContext>
                }
              />
              <Route
                path="vegan"
                element={
                  <SubCategoryContext>
                    <Vegan />
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
              <Route
                path="favoritesList"
                element={
                  <ProdectedRoute>
                    <AccountProvider>
                      <FavoritesList />
                    </AccountProvider>
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
              <Route path="*" exact={true} element={<NotFound />} />
            </Routes>
            <Footer />
          </FavoritesProvider>
        </CartContextProvider>
      </ModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
