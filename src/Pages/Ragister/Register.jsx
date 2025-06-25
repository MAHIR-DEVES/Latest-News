import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  //
  const navigate = useNavigate();
  const { createUser, setUser, updateUser } = use(AuthContext);
  const [nameError, setNameError] = useState();
  const handelRegister = e => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    if (name.length < 5) {
      setNameError('Name Should be more then 5 character');
      return;
    } else {
      setNameError('');
    }

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log({ name, photo, email, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;

        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            alert('Register Successful ');
            navigate('/');
          })
          .catch(error => {
            console.log(error);
            setUser(user);
          });
        // console.log(user);
      })
      .catch(error => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full  md:w-4/12 shrink-0 shadow-2xl">
        <form onSubmit={handelRegister} className="card-body ">
          <h2 className="font-semibold">Register Your Account</h2>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input w-full"
              placeholder="Your Name"
              required
            />
            {nameError && <p className="text-red-500">{nameError}</p>}
            {/* photo url */}
            <label className="label">Photo Url</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Photo Url"
              required
            />
            {/* email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            Already have an account ? please
            <Link to={'/auth/login'} className="text-blue-700 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
