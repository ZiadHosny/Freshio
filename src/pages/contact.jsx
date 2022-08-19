import React, { useState } from 'react';
import { FaRegAddressCard } from 'react-icons/fa';
import { RiPhoneFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import Map from '../components/Map';

const Contact = () => {
  const [data, setdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const getData = (e) => {
    let myData = { ...data };
    myData[e.target.name] = e.target.value;
    setdata(myData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-5 container-lg">
      <div className="text-center">
        <h3 className="text-success">How Can We Help You?</h3>
      </div>
      <div className="row d-flex">
        <div className="bg-white col-12 col-md-6 align-items-center ">
          <form onSubmit={handleSubmit} className="p-4 rounded shadow-md">
            <h1 className="my-4 fw-bolder text-center text-md-start">
              Contact Us
            </h1>
            <div>
              <label htmlFor="name" className="form-label">
                Your Name
              </label>
              <input
                onChange={getData}
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                onChange={getData}
                type="text"
                name="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mt-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                onChange={getData}
                type="text"
                name="subject"
                className="form-control"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mt-3 mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                onChange={getData}
                name="message"
                cols="20"
                rows="6"
                className="form-control"
                placeholder="message"
              ></textarea>
            </div>
            <button className="btn btn-success">Submit Form</button>
          </form>
        </div>
        <div className="p-4 col-12 col-md-6 text-md-start text-center">
          <h1 className="my-4 fw-bolder ">Get Office Info</h1>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
            quaerat autem corrupti asperiores accusantium et fuga! Facere
            excepturi, quo eos, nobis doloremque dolor labore expedita illum
            iusto, aut repellat fuga!
          </p>
          <div className=" d-flex m-1 justify-content-start align-items-center border-top py-4 px-2">
            <FaRegAddressCard className="text-success" />
            <p className="my-0 mx-3">
              Address : 666 5th Ave New York, NY, United
            </p>
          </div>
          <div className="d-flex m-1 justify-content-start align-items-center border-top py-4 px-2">
            <RiPhoneFill className="text-success" />
            <p className="my-0 mx-3">Phone Number : 716-298-1822</p>
          </div>
          <div className="d-flex m-1 justify-content-start align-items-center border-top py-4 px-2">
            <MdEmail className="text-success" />
            <p className="my-0 mx-3">Email Address : info@example.com</p>
          </div>
        </div>
      </div>
      <div className="my-3">
        <Map />
      </div>
    </div>
  );
};
export default Contact;
