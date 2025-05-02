import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <div className="space-y-3">
      <h2 className="font-bold">Login With</h2>
      <button className="btn w-full btn-secondary btn-outline">
        <FcGoogle size={20} /> Login With Google
      </button>
      <button className="btn w-full btn-primary btn-outline">
        <FaGithub size={20} /> Login With GitHub
      </button>
    </div>
  );
};

export default SocialLogin;
