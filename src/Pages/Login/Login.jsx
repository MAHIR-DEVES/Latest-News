import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { logIn } = use(AuthContext);
  const location = useLocation();
  // console.log(location);

  const navigate = useNavigate();
  const handelLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);

        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch(error => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full  md:w-4/12 shrink-0 shadow-2xl">
        <form onSubmit={handelLogin} className="card-body ">
          <h2 className="font-semibold">Login Your Account</h2>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
              required
            />
            {error && <p className="text-red-500">{error}</p>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p>
            Don't have an account ? please{' '}
            <Link to={'/auth/register'} className="text-blue-700 underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
