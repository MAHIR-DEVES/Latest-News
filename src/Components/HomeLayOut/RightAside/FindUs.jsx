import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div className="space-y-10">
      <h2 className="font-bold">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook size={20}></FaFacebook> Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagram size={20}></FaInstagram> Instagram
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaX size={20}></FaX> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
