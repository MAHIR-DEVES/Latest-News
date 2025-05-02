import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div
      className="flex justify-center items-center flex-col py-4 md:py-8 text-accent md:space-y-1 md:text-xl
    "
    >
      <img className="w-9/12  md:w-3/12" src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), 'EEEE , MMMM MM ,yyyy')}</p>
    </div>
  );
};

export default Header;
