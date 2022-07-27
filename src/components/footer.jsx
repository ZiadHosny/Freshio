import React from 'react'
import "./footeer.css"
import { Link } from 'react-router-dom'
import { FaFacebook, } from "react-icons/fa"
import { BsTwitter, BsInstagram, BsTelephone } from "react-icons/bs"

export const Footer = () => {

    return (
        <footer className="text-center text-lg-start footer-bg text-white pt-4">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <p class="h1">logo</p>
                            </h6>
                            <div className='phone d-flex'>
                                <div className='phoneIcon d-flex justify-content-center align-items-center'>
                                    <BsTelephone />
                                </div>
                                <div className='ms-3'>
                                    <p className='mb-0 h4'>+2 0100 0673 448</p>
                                    <p>Got Questions? </p>

                                </div>
                            </div>
                            <div className='adress '>
                                <p>our adress</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, harum.</p>
                            </div>
                            <div className='social d-flex '>
                                <div className='socialIcon d-flex m-1 justify-content-center align-items-center'>
                                    <FaFacebook />
                                </div>
                                <div className='socialIcon d-flex m-1 justify-content-center align-items-center'>
                                    <BsTwitter />
                                </div>
                                <div className='socialIcon d-flex m-1 justify-content-center align-items-center'>
                                    <BsInstagram />
                                </div>
                                <div className='socialIcon d-flex m-1 justify-content-center align-items-center'>
                                    <BsTelephone />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <p className="text-uppercase fw-bold mb-4 h4">
                                links
                            </p>
                            <p>
                                <Link to="/politics" className="text-reset">Politics</Link>
                            </p>
                            <p>
                                <Link to="/sports" className="text-reset">Sports</Link>
                            </p>
                            <p>
                                <Link to="/technology" className="text-reset">Technology</Link>
                            </p>
                            <p>
                                <Link to="/business" className="text-reset">Business</Link>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <p className="text-uppercase fw-bold mb-4 h4">gallery</p>
                            <div className='row'>
                                <figure className='col-md-6 galleryItem '>
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic3.jpg" className='w-100 galleryItem' alt="photo" />
                                </figure>
                                <figure className='col-md-6 galleryItem '>
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic5.jpg" className='w-100 galleryItem' alt="photo" />
                                </figure>
                                <figure className='col-md-6 galleryItem '>
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic2.jpg" className='w-100 galleryItem' alt="photo" />
                                </figure>
                                <figure className='col-md-6 galleryItem '>
                                    <img src="https://demo.casethemes.net/organio/wp-content/uploads/2021/03/organic1.jpg" className='w-100 galleryItem' alt="photo" />
                                </figure>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <p className="text-uppercase fw-bold mb-4 h4">
                                present post
                            </p>
                            <div className='post'>
                                <p className='fw-bold mb-4 h6'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                            <div className='post'>
                                <p className='fw-bold mb-4 h6'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4 cobyRight" >
                © 2021 Copyright:
                <a className="text-reset fw-bold">ITI G2 2022</a>
            </div>
        </footer>
    )
}
export default Footer
