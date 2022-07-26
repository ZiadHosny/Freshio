import React from 'react';
import "./account.css"


const Account = (props) => {
  return (props.trigger) ?  (
    <div className='popup'>
      <div className=''>
        <button className='close-btn'>Close</button>
        {props.children}
      </div>
    </div>
  ) : "";
};

export default Account;
