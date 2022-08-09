import React from 'react';
import './DealOfTheDay.css';
import { Link } from 'react-router-dom';

const DealOfTheDay = () => {
  return (
    <div className="position-relative">
      <img
        className="imgTop order-sm-last"
        src="https://freebw.com/templates/oragnive-v1/images/other-03.png"
        alt="/"
      />

      <div className="ContainerDeal p-5">
        <div className=" row align-items-center">
          <div className="col-md-6  order-md-first order-sm-last">
            <img
              className="w-100"
              src="https://freebw.com/templates/oragnive-v1/images/other-02.png"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <p className="best">Best Price For You</p>
            <h2>DEAL OF THE DAY</h2>
            <Link className="link" to={'/Freshio'}>
              Roasted corn
            </Link>
            <div className="sale">
              <span className="span1">20$ </span>
              <span> Now Only 15$</span>
            </div>
            <p className="Prag">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type.
            </p>
            <div className="time  justify-content-sm-center justify-content-md-start">
              <div>
                <span className="num">{13}</span>
                <span>days</span>
              </div>
              <div>
                <span className="num">{9}</span>
                <span>hours</span>
              </div>
              <div>
                <span className="num">{55}</span>
                <span>min</span>
              </div>
              <div>
                <span className="num">{5}</span>
                <span>sec</span>
              </div>
            </div>
            <Link
              className="shop-now d-md-inline-block  m-sm-auto w-50 d-sm-block"
              to="/"
            >
              SHOP NOW ..
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
