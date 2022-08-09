import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter, BsInstagram, BsTelephone } from 'react-icons/bs';
import logo from '../../assets/logo.svg';

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start footer-bg text-white pt-4">
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src={logo} className="w-50" alt="/" />
              </h6>
              <div className="phone_container">
                <div className="phone d-flex text-center ">
                  <div className="phoneIcon d-flex justify-content-center align-items-center">
                    <BsTelephone />
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 h4">+2 0100 0673 448</p>
                    <p>Got Questions? </p>
                  </div>
                </div>
              </div>
              <div className="adress mt-3">
                <p className="fw-bold">our adress</p>
                <p>570 8th Ave,Alexandria, Egypt</p>
              </div>
              <div className="social_container mt-3 ">
                <div className="social d-flex  ">
                  <div className="socialIcon d-flex m-1 justify-content-center align-items-center">
                    <FaFacebook />
                  </div>
                  <div className="socialIcon d-flex m-1 justify-content-center align-items-center">
                    <BsTwitter />
                  </div>
                  <div className="socialIcon d-flex m-1 justify-content-center align-items-center">
                    <BsInstagram />
                  </div>
                  <div className="socialIcon d-flex m-1 justify-content-center align-items-center">
                    <BsTelephone />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <p className="text-uppercase fw-bold mb-4 h4">links</p>
              <div className="row">
                <Link to="/Freshio'" className="col-6 text-reset">
                  Home
                </Link>
                <Link to="contact" className="col-6 text-reset">
                  Contact
                </Link>
                <Link to="/chicken" className="col-6 text-reset">
                  Chicken
                </Link>
                <Link to="/snacks" className="col-6 text-reset">
                  Snacks
                </Link>
                <Link to="/fruit" className="col-6 text-reset">
                  Fruit
                </Link>
                <Link to="/keto" className="col-6 text-reset">
                  Keto
                </Link>
                <Link to="/vegetables" className="col-6 text-reset">
                  Vegetables
                </Link>
                <Link to="/meat" className="col-6 text-reset">
                  Meat
                </Link>
                <Link to="/bakery" className="col-6 text-reset">
                  Bakery
                </Link>
                <Link to="/lowcarb" className="col-6 text-reset">
                  Lowcarb
                </Link>
                <Link to="/meals" className="col-6 text-reset">
                  Meals
                </Link>
                <Link to="/vegan" className="col-6 text-reset">
                  Vegan
                </Link>
                <Link to="/supplements" className="col-6 text-reset">
                  Supplements
                </Link>
              </div>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <p className="text-uppercase fw-bold mb-4 h4">gallery</p>
              <div className="row">
                <figure className="col-md-6 col-3 galleryItem ">
                  <img
                    src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic3.jpg"
                    className="w-100 galleryItem"
                    alt="/"
                  />
                </figure>
                <figure className="col-md-6 col-3 galleryItem ">
                  <img
                    src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic5.jpg"
                    className="w-100 galleryItem"
                    alt="/src"
                  />
                </figure>
                <figure className="col-md-6 col-3 galleryItem ">
                  <img
                    src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic2.jpg"
                    className="w-100 galleryItem"
                    alt="/"
                  />
                </figure>
                <figure className="col-md-6 col-3 galleryItem ">
                  <img
                    src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic1.jpg"
                    className="w-100 galleryItem"
                    alt="/"
                  />
                </figure>
              </div>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <p className="text-uppercase fw-bold mb-4 h4">present post</p>
              <div className="post">
                <p className="fw-bold mb-2 ">
                  Our 6 of the Best Organic Chocolates to Buy.
                </p>
                <p>August 6, 2022</p>
              </div>
              <div className="post">
                <p className="fw-bold mb-2 mt-3 ">
                  Best guide to shopping for organic ingredients.
                </p>
                <p>March 17, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 cobyRight">
        © 2021 Copyright:
        <p className="text-reset fw-bold">ITI G2 2022</p>
      </div>
    </footer>
  );
};
export default Footer;
