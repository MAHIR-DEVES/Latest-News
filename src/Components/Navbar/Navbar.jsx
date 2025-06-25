import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../../assets/user.png';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);

  const handelLogOut = () => {
    logOut()
      .then(() => {
        alert('log Out successful');
      })
      .catch(error => {
        console.log(error.message);
      });
    // console.log('log Out');
  };
  return (
    <div className="flex justify-between items-center py-5 ">
      <div className=" flex justify-center items-center gap-4">
        <span>
          <img
            className="w-12 rounded-full"
            src={`${user ? user.photoURL : userIcon}`}
            alt=""
          />
        </span>
        <span>
          <h2>{user && user.email}</h2>
          <h2>{user && user.displayName}</h2>
        </span>
      </div>
      <div className="nav flex gap-6 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex justify-center items-center gap-3">
        <img
          className="w-12 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
          alt=""
        />

        {user ? (
          <button onClick={handelLogOut} className="btn btn-primary px-10">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
