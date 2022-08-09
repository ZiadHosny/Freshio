import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import notFound from '../assets/232.jpg';

export const NotFound = () => {
  let navigate = useNavigate();
  const navigateHome = () => {
    navigate('/Freshio');
  };
  return (
    <div className="container erourContainer ">
      <button
        className="btn btn-outline-success addBtn px-2 my-3 "
        onClick={navigateHome}
      >
        <span className="px-2">
          <IoMdArrowRoundBack />
        </span>
        Back to home
      </button>
      <img src={notFound} className="w-100 " alt="/" />
    </div>
  );
};
export default NotFound;
